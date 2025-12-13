"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function DatabaseManagementPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string>("")

  const clearDatabase = async () => {
    if (!confirm('⚠️ Are you sure you want to delete ALL contacts from the database?')) {
      return
    }
    
    if (!confirm('🚨 FINAL WARNING: This will permanently delete all contact data. This cannot be undone!')) {
      return
    }

    setLoading(true)
    setResult("")
    
    try {
      console.log('Clearing database...')
      const response = await fetch('/api/admin/contacts/clear-all', {
        method: 'DELETE'
      })
      
      const data = await response.json()
      console.log('Clear database response:', data)
      
      if (response.ok) {
        setResult(`✅ Successfully deleted ${data.deletedCount} contacts`)
      } else {
        setResult(`❌ Error: ${data.error}`)
      }
    } catch (error) {
      console.error('Error clearing database:', error)
      setResult(`❌ Network error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }

  const addTestData = async () => {
    setLoading(true)
    setResult("")
    
    try {
      console.log('Adding test data...')
      const response = await fetch('/api/admin/test-system', {
        method: 'POST'
      })
      
      const data = await response.json()
      console.log('Test data response:', data)
      
      if (response.ok) {
        setResult(`✅ Test contact created: ${data.testContact?.name} (${data.testContact?.email})`)
      } else {
        setResult(`❌ Error: ${data.error}`)
      }
    } catch (error) {
      console.error('Error adding test data:', error)
      setResult(`❌ Network error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }

  const testSystem = async () => {
    setLoading(true)
    setResult("")
    
    try {
      console.log('Testing system...')
      const response = await fetch('/api/admin/test-system')
      
      const data = await response.json()
      console.log('System test response:', data)
      
      if (response.ok) {
        const { database, contacts, email, environment } = data.results
        let message = '📊 System Test Results:\n\n'
        message += `Database: ${database.status} - ${database.details}\n`
        message += `Contacts: ${contacts.count} found (Status: ${contacts.status})\n`
        message += `Email: ${email.status} - ${email.details}\n`
        message += `Environment Variables:\n`
        message += `  EMAIL_USER: ${environment.EMAIL_USER ? '✅' : '❌'}\n`
        message += `  EMAIL_PASSWORD: ${environment.EMAIL_PASSWORD ? '✅' : '❌'}\n`
        message += `  ADMIN_EMAIL: ${environment.ADMIN_EMAIL ? '✅' : '❌'}\n`
        message += `  MONGODB_URI: ${environment.MONGODB_URI ? '✅' : '❌'}`
        
        setResult(message)
      } else {
        setResult(`❌ Error: ${data.error}`)
      }
    } catch (error) {
      console.error('Error testing system:', error)
      setResult(`❌ Network error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🗄️ Database Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">
              Manage your contact database and test system functionality.
            </p>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🔍 System Test</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">
                Test database connection, contact count, and email configuration.
              </p>
              <Button 
                onClick={testSystem}
                disabled={loading}
                className="w-full"
                variant="outline"
              >
                {loading ? 'Testing...' : 'Run System Test'}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🧪 Add Test Data</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">
                Create a test contact to verify the system is working.
              </p>
              <Button 
                onClick={addTestData}
                disabled={loading}
                className="w-full"
                variant="outline"
              >
                {loading ? 'Creating...' : 'Create Test Contact'}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-red-600">🗑️ Clear Database</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">
                Delete ALL contacts from the database. This cannot be undone!
              </p>
              <Button 
                onClick={clearDatabase}
                disabled={loading}
                className="w-full"
                variant="destructive"
              >
                {loading ? 'Clearing...' : 'Clear All Data'}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        {result && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">📋 Results</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="whitespace-pre-wrap text-sm bg-slate-100 p-4 rounded-lg overflow-auto">
                {result}
              </pre>
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <Card>
          <CardContent className="p-4">
            <div className="flex gap-4">
              <Button asChild variant="outline">
                <a href="/admin">← Back to Dashboard</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/admin/contacts">View Contacts</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}