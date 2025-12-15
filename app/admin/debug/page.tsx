"use client"

import { useEffect, useState } from "react"

export default function AdminDebugPage() {
  const [debugInfo, setDebugInfo] = useState<any>({})

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check cookies
        const cookies = document.cookie
        
        // Test admin API access
        const response = await fetch('/api/admin/contacts')
        const isAuthorized = response.ok
        
        setDebugInfo({
          cookies,
          currentPath: window.location.pathname,
          isAuthorized,
          responseStatus: response.status,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString()
        })
      } catch (error) {
        setDebugInfo({
          error: error instanceof Error ? error.message : String(error),
          currentPath: window.location.pathname,
          timestamp: new Date().toISOString()
        })
      }
    }

    checkAuth()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Admin Debug Information</h1>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Debug Info</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
            {JSON.stringify(debugInfo, null, 2)}
          </pre>
        </div>

        <div className="mt-6 space-y-4">
          <button 
            onClick={() => window.location.href = '/admin/login'}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Go to Login
          </button>
          
          <button 
            onClick={() => window.location.href = '/admin'}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 ml-4"
          >
            Go to Admin Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}