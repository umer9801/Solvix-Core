"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ErrorBoundary from "@/components/error-boundary"

interface Contact {
  _id: string
  name: string
  email: string
  service?: string
  status: 'new' | 'contacted' | 'closed'
  createdAt: string
}

interface DashboardStats {
  totalContacts: number
  newContacts: number
  contactedContacts: number
  closedContacts: number
  todayContacts: number
  weekContacts: number
  monthContacts: number
  conversionRate: number
}

function AdminDashboardContent() {
  const [stats, setStats] = useState<DashboardStats>({
    totalContacts: 0,
    newContacts: 0,
    contactedContacts: 0,
    closedContacts: 0,
    todayContacts: 0,
    weekContacts: 0,
    monthContacts: 0,
    conversionRate: 0
  })
  const [recentContacts, setRecentContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    try {
      fetchDashboardData()
      const timer = setInterval(() => {
        try {
          setCurrentTime(new Date())
        } catch (error) {
          console.error('Error updating time:', error)
        }
      }, 1000)
      return () => clearInterval(timer)
    } catch (error) {
      console.error('Error in useEffect:', error)
    }
  }, [])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      console.log('Fetching dashboard data...')
      
      const response = await fetch('/api/admin/contacts?limit=100')
      console.log('Response status:', response.status)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      console.log('Response data:', data)
      
      if (data.contacts && Array.isArray(data.contacts)) {
        const contacts = data.contacts
        setRecentContacts(contacts)
        
        // Calculate comprehensive stats with error handling
        try {
          const now = new Date()
          const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
          const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
          const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000)

          const totalContacts = contacts.length || 0
          const newContacts = contacts.filter((c: Contact) => c?.status === 'new').length || 0
          const contactedContacts = contacts.filter((c: Contact) => c?.status === 'contacted').length || 0
          const closedContacts = contacts.filter((c: Contact) => c?.status === 'closed').length || 0
          const todayContacts = contacts.filter((c: Contact) => {
            try {
              return c?.createdAt && new Date(c.createdAt) >= today
            } catch {
              return false
            }
          }).length || 0
          const weekContacts = contacts.filter((c: Contact) => {
            try {
              return c?.createdAt && new Date(c.createdAt) >= weekAgo
            } catch {
              return false
            }
          }).length || 0
          const monthContacts = contacts.filter((c: Contact) => {
            try {
              return c?.createdAt && new Date(c.createdAt) >= monthAgo
            } catch {
              return false
            }
          }).length || 0
          const conversionRate = totalContacts > 0 ? Math.round((closedContacts / totalContacts) * 100) : 0

          setStats({
            totalContacts,
            newContacts,
            contactedContacts,
            closedContacts,
            todayContacts,
            weekContacts,
            monthContacts,
            conversionRate
          })
        } catch (statsError) {
          console.error('Error calculating stats:', statsError)
          // Set default stats on error
          setStats({
            totalContacts: 0,
            newContacts: 0,
            contactedContacts: 0,
            closedContacts: 0,
            todayContacts: 0,
            weekContacts: 0,
            monthContacts: 0,
            conversionRate: 0
          })
        }
      } else {
        console.warn('No contacts data received or invalid format')
        setRecentContacts([])
      }
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error)
      // Set default values on error
      setRecentContacts([])
      setStats({
        totalContacts: 0,
        newContacts: 0,
        contactedContacts: 0,
        closedContacts: 0,
        todayContacts: 0,
        weekContacts: 0,
        monthContacts: 0,
        conversionRate: 0
      })
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-slate-600 font-medium">Loading Dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🛡️</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">Solvix Core Admin</h1>
                  <p className="text-sm text-slate-500">
                    {(() => {
                      try {
                        return `${currentTime.toLocaleDateString('en-US', { 
                          weekday: 'short', 
                          month: 'short', 
                          day: 'numeric'
                        })} • ${currentTime.toLocaleTimeString('en-US', { 
                          hour: '2-digit', 
                          minute: '2-digit'
                        })}`
                      } catch {
                        return 'Dashboard'
                      }
                    })()}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="gap-2">
                🔔 Notifications
              </Button>
              <Button 
                onClick={() => {
                  console.log('Force refreshing dashboard data...')
                  fetchDashboardData()
                }} 
                variant="outline" 
                size="sm" 
                className="gap-2"
              >
                🔄 Refresh Data
              </Button>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                🟢 Online
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-0 shadow-sm bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Total Contacts</p>
                  <p className="text-3xl font-bold mt-1">{stats.totalContacts}</p>
                  <p className="text-blue-200 text-xs mt-1">All time</p>
                </div>
                <span className="text-4xl">👥</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-gradient-to-r from-amber-500 to-orange-500 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-amber-100 text-sm font-medium">New Inquiries</p>
                  <p className="text-3xl font-bold mt-1">{stats.newContacts}</p>
                  <p className="text-amber-200 text-xs mt-1">Pending review</p>
                </div>
                <span className="text-4xl">⏰</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">In Progress</p>
                  <p className="text-3xl font-bold mt-1">{stats.contactedContacts}</p>
                  <p className="text-purple-200 text-xs mt-1">Being handled</p>
                </div>
                <span className="text-4xl">💬</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-gradient-to-r from-emerald-500 to-green-500 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-sm font-medium">Completed</p>
                  <p className="text-3xl font-bold mt-1">{stats.closedContacts}</p>
                  <p className="text-emerald-200 text-xs mt-1">{stats.conversionRate}% success rate</p>
                </div>
                <span className="text-4xl">✅</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                📅 Today's Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-4">
                <div className="text-4xl font-bold text-slate-900 mb-2">{stats.todayContacts}</div>
                <p className="text-slate-600 text-sm">New contacts today</p>
                <div className="mt-4 bg-slate-100 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((stats.todayContacts / 10) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                📊 This Week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-4">
                <div className="text-4xl font-bold text-slate-900 mb-2">{stats.weekContacts}</div>
                <p className="text-slate-600 text-sm">Weekly inquiries</p>
                <div className="mt-4 bg-slate-100 rounded-full h-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((stats.weekContacts / 25) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                📈 This Month
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-4">
                <div className="text-4xl font-bold text-slate-900 mb-2">{stats.monthContacts}</div>
                <p className="text-slate-600 text-sm">Monthly growth</p>
                <div className="mt-4 bg-slate-100 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((stats.monthContacts / 50) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                ⚡ Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild className="w-full justify-between h-12 bg-blue-600 hover:bg-blue-700">
                <Link href="/admin/contacts?status=new">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">⏰</span>
                    <div className="text-left">
                      <div className="font-medium">Review New Contacts</div>
                      <div className="text-sm opacity-90">{stats.newContacts} pending</div>
                    </div>
                  </div>
                  <span className="text-xl">→</span>
                </Link>
              </Button>

              <Button asChild variant="outline" className="w-full justify-between h-12">
                <Link href="/admin/contacts">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">👥</span>
                    <div className="text-left">
                      <div className="font-medium">Manage All Contacts</div>
                      <div className="text-sm text-slate-600">{stats.totalContacts} total</div>
                    </div>
                  </div>
                  <span className="text-xl">→</span>
                </Link>
              </Button>

              <Button asChild variant="outline" className="w-full justify-between h-12">
                <Link href="mailto:solvixcore@yahoo.com">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📧</span>
                    <div className="text-left">
                      <div className="font-medium">Send Email</div>
                      <div className="text-sm text-slate-600">Quick compose</div>
                    </div>
                  </div>
                  <span className="text-xl">→</span>
                </Link>
              </Button>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <Button variant="outline" size="sm" className="gap-2">
                  📥 Export Data
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm" 
                  className="gap-2"
                  onClick={async () => {
                    if (confirm('⚠️ Are you sure you want to delete ALL contact data? This action cannot be undone!')) {
                      if (confirm('🚨 FINAL WARNING: This will permanently delete all contacts from the database. Type "DELETE" to confirm.')) {
                        try {
                          const response = await fetch('/api/admin/contacts/clear-all', {
                            method: 'DELETE'
                          })
                          const result = await response.json()
                          if (response.ok) {
                            alert(`✅ Successfully deleted ${result.deletedCount} contacts`)
                            fetchDashboardData() // Refresh the dashboard
                          } else {
                            alert('❌ Failed to delete contacts: ' + result.error)
                          }
                        } catch (error) {
                          console.error('Error deleting contacts:', error)
                          alert('❌ Error deleting contacts')
                        }
                      }
                    }
                  }}
                >
                  🗑️ Clear All Data
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                📊 Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              {recentContacts.length > 0 ? (
                <div className="space-y-4">
                  {recentContacts.slice(0, 4).map((contact) => (
                    <div key={contact._id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                          {contact.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">{contact.name}</p>
                          <p className="text-sm text-slate-600">{contact.email}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={contact.status === 'new' ? 'destructive' : contact.status === 'contacted' ? 'default' : 'secondary'}
                          className="mb-1"
                        >
                          {contact.status}
                        </Badge>
                        <p className="text-xs text-slate-500">
                          {(() => {
                            try {
                              return new Date(contact.createdAt).toLocaleDateString()
                            } catch {
                              return 'Unknown date'
                            }
                          })()}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  <Button asChild variant="outline" className="w-full mt-4">
                    <Link href="/admin/contacts">
                      View All Contacts
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <span className="text-6xl mb-4 block">📭</span>
                  <p className="text-slate-600 mb-4">No recent activity</p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/contact">Visit Contact Form</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* System Status */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              🛡️ System Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-green-800">Email System</span>
                </div>
                <Badge className="bg-green-100 text-green-700">Active</Badge>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="font-medium text-blue-800">Database</span>
                </div>
                <Badge className="bg-blue-100 text-blue-700">Connected</Badge>
              </div>

              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="font-medium text-purple-800">Contact Form</span>
                </div>
                <Badge className="bg-purple-100 text-purple-700">Online</Badge>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <div className="flex gap-2">
                <Button 
                  onClick={async () => {
                    try {
                      console.log('Running comprehensive system test...')
                      const response = await fetch('/api/admin/test-system')
                      console.log('System test response:', response.status)
                      
                      if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`)
                      }
                      
                      const result = await response.json()
                      console.log('System test result:', result)
                      
                      if (result.success) {
                        const { database, contacts, email, environment } = result.results
                        let message = '✅ System Test Results:\n\n'
                        message += `📊 Database: ${database.status} (${database.details})\n`
                        message += `👥 Contacts: ${contacts.count} found\n`
                        message += `📧 Email: ${email.status} (${email.details})\n`
                        message += `🔧 Environment: ${Object.entries(environment).map(([k,v]) => `${k}: ${v ? '✅' : '❌'}`).join(', ')}`
                        alert(message)
                      } else {
                        alert('⚠️ System test failed: ' + (result.error || 'Unknown error'))
                      }
                    } catch (error) {
                      console.error('System test error:', error)
                      alert('❌ System test error: ' + (error instanceof Error ? error.message : 'Unknown error'))
                    }
                  }}
                  variant="outline" 
                  size="sm"
                  className="gap-2"
                >
                  🔧 System Test
                </Button>
                
                <Button 
                  onClick={async () => {
                    try {
                      console.log('Creating test contact...')
                      const response = await fetch('/api/admin/test-system', { method: 'POST' })
                      
                      if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`)
                      }
                      
                      const result = await response.json()
                      console.log('Test contact result:', result)
                      
                      if (result.success) {
                        alert(`✅ Test contact created!\nID: ${result.testContact.id}\nEmail test: ${result.emailTest?.success ? 'Success' : 'Failed'}`)
                        fetchDashboardData() // Refresh dashboard
                      } else {
                        alert('⚠️ Test contact failed: ' + (result.error || 'Unknown error'))
                      }
                    } catch (error) {
                      console.error('Test contact error:', error)
                      alert('❌ Test contact error: ' + (error instanceof Error ? error.message : 'Unknown error'))
                    }
                  }}
                  variant="outline" 
                  size="sm"
                  className="gap-2"
                >
                  🧪 Test Contact
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function AdminDashboard() {
  return (
    <ErrorBoundary>
      <AdminDashboardContent />
    </ErrorBoundary>
  )
}