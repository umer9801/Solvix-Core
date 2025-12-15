"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, User, Eye, EyeOff, AlertTriangle } from "lucide-react"

export default function AdminLoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    
    try {
      console.log("Attempting login with:", { username: username.trim() })
      
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        credentials: "include", // Important for cookies
        body: JSON.stringify({
          username: username.trim(),
          password: password.trim()
        }),
      })
      
      console.log("Login response status:", res.status)
      
      if (res.ok) {
        const data = await res.json()
        console.log("Login response data:", data)
        
        if (data.success) {
          console.log("Login successful, redirecting to /admin")
          
          // Show success message briefly
          setError(null)
          
          // Try multiple redirect methods
          try {
            console.log("Attempting router.push...")
            router.push("/admin")
            console.log("Router.push completed")
          } catch (routerError) {
            console.error("Router.push failed:", routerError)
            console.log("Falling back to window.location...")
            window.location.href = "/admin"
          }
          
          // Additional fallback
          setTimeout(() => {
            console.log("Timeout fallback redirect...")
            if (window.location.pathname === "/admin/login") {
              window.location.replace("/admin")
            }
          }, 1000)
        } else {
          setError("Login failed. Please try again.")
        }
      } else {
        const data = await res.json().catch(() => ({}))
        console.log("Login failed with data:", data)
        
        if (res.status === 429) {
          setError("Too many failed attempts. Please wait 15 minutes before trying again.")
        } else {
          setError(data?.message || `Login failed (${res.status})`)
        }
      }
    } catch (error) {
      console.error("Login error:", error)
      setError("Network error. Please check your connection and try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl w-full max-w-md relative z-10">
        <CardHeader className="text-center pb-8 pt-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Shield className="w-10 h-10 text-white" />
          </div>
          
          <CardTitle className="text-2xl font-bold text-white mb-2">
            Admin Dashboard
          </CardTitle>
          <CardDescription className="text-slate-300">
            Secure access to manage contacts and blog posts
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 pb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-slate-200 font-medium block mb-2">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input 
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Enter your username" 
                  autoComplete="username"
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20"
                />
              </div>
            </div>

            <div>
              <label className="text-slate-200 font-medium block mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password" 
                  autoComplete="current-password"
                  className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            <Button 
              type="submit" 
              disabled={submitting}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 shadow-lg h-12 font-medium"
            >
              {submitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Signing in...
                </div>
              ) : (
                "Sign In to Dashboard"
              )}
            </Button>
          </form>

          <div className="text-center pt-4 border-t border-white/10">
            <p className="text-xs text-slate-400">
              Secured with enterprise-grade encryption
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}