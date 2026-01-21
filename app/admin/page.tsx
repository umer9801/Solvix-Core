"use client"

import { useState, useEffect } from "react"

interface Contact {
  _id: string
  name: string
  email: string
  company?: string
  service?: string
  budget?: string
  preferred: string
  whatsapp?: string
  message: string
  status: 'new' | 'contacted' | 'closed'
  createdAt: string
}

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  
  // Dashboard data
  const [contacts, setContacts] = useState<Contact[]>([])
  const [dashboardLoading, setDashboardLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<'dashboard' | 'contacts'>('dashboard')
  const [actionLoading, setActionLoading] = useState<string | null>(null)

  // Check if already logged in
  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch('/api/admin/contacts', { credentials: 'include' })
        if (res.ok) {
          setIsLoggedIn(true)
          fetchDashboardData()
        }
      } catch (error) {
        // Not logged in
      }
    }
    checkSession()
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setIsLoggedIn(true)
        fetchDashboardData()
      } else {
        setError(data.message || "Login failed")
      }
    } catch (err) {
      setError("Network error occurred")
    } finally {
      setLoading(false)
    }
  }

  const fetchDashboardData = async () => {
    setDashboardLoading(true)
    try {
      const contactsRes = await fetch('/api/admin/contacts', { credentials: 'include' })

      if (contactsRes.ok) {
        const contactsData = await contactsRes.json()
        setContacts(contactsData.contacts || [])
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setDashboardLoading(false)
    }
  }

  const updateContactStatus = async (contactId: string, status: string) => {
    setActionLoading(`contact-${contactId}`)
    try {
      console.log('Updating contact status:', { contactId, status })
      const res = await fetch('/api/admin/contacts', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ contactId, status })
      })

      const data = await res.json()
      console.log('Update contact response:', data)

      if (res.ok) {
        await fetchDashboardData() // Refresh data
        console.log('✅ Contact status updated successfully!')
      } else {
        console.error(`❌ Error: ${data.message || 'Failed to update contact'}`)
      }
    } catch (error) {
      console.error('❌ Error updating contact:', error)
    } finally {
      setActionLoading(null)
    }
  }

  const deleteContact = async (contactId: string) => {
    if (!confirm('Are you sure you want to delete this contact?')) return

    setActionLoading(`delete-contact-${contactId}`)
    try {
      console.log('Deleting contact:', contactId)
      const res = await fetch(`/api/admin/contacts?id=${contactId}`, {
        method: 'DELETE',
        credentials: 'include'
      })

      const data = await res.json()
      console.log('Delete contact response:', data)

      if (res.ok) {
        await fetchDashboardData() // Refresh data
        console.log('✅ Contact deleted successfully!')
      } else {
        console.error(`❌ Error: ${data.message || 'Failed to delete contact'}`)
      }
    } catch (error) {
      console.error('❌ Error deleting contact:', error)
    } finally {
      setActionLoading(null)
    }
  }

  const logout = () => {
    document.cookie = "admin_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    setIsLoggedIn(false)
    setContacts([])
  }

  // Login Form
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter password"
              />
            </div>

            {error && (
              <div className="p-3 rounded bg-red-100 text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    )
  }

  // Dashboard
  const stats = {
    totalContacts: contacts.length,
    newContacts: contacts.filter(c => c.status === 'new').length,
    contactedContacts: contacts.filter(c => c.status === 'contacted').length,
    closedContacts: contacts.filter(c => c.status === 'closed').length,
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <button
              onClick={logout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { key: 'dashboard', label: 'Dashboard' },
              { key: 'contacts', label: `Contacts (${stats.totalContacts})` }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.key
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {dashboardLoading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Loading...</p>
          </div>
        ) : (
          <>
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-sm font-medium text-gray-500">Total Contacts</h3>
                    <p className="text-3xl font-bold text-blue-600">{stats.totalContacts}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-sm font-medium text-gray-500">New Contacts</h3>
                    <p className="text-3xl font-bold text-orange-600">{stats.newContacts}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-sm font-medium text-gray-500">Contacted</h3>
                    <p className="text-3xl font-bold text-yellow-600">{stats.contactedContacts}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-sm font-medium text-gray-500">Closed</h3>
                    <p className="text-3xl font-bold text-green-600">{stats.closedContacts}</p>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Contacts</h3>
                    <div className="space-y-3">
                      {contacts.slice(0, 10).map((contact) => (
                        <div key={contact._id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                          <div>
                            <p className="font-medium">{contact.name}</p>
                            <p className="text-sm text-gray-600">{contact.email}</p>
                            <p className="text-xs text-gray-500">
                              {contact.createdAt ? new Date(contact.createdAt).toLocaleDateString() : 'No date'}
                            </p>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded ${
                            contact.status === 'new' ? 'bg-blue-100 text-blue-700' :
                            contact.status === 'contacted' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {contact.status}
                          </span>
                        </div>
                      )) || []}
                      {(!contacts || contacts.length === 0) && (
                        <p className="text-gray-500 text-center py-4">No contacts yet</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contacts Tab */}
            {activeTab === 'contacts' && (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Contact Submissions</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {contacts.map((contact) => (
                        <tr key={contact._id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                              <div className="text-sm text-gray-500">{contact.email}</div>
                              {contact.company && <div className="text-sm text-gray-500">{contact.company}</div>}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {contact.service || 'Not specified'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {contact.budget || 'Not specified'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <select
                              value={contact.status}
                              onChange={(e) => updateContactStatus(contact._id, e.target.value)}
                              disabled={actionLoading === `contact-${contact._id}`}
                              className={`text-sm rounded px-2 py-1 ${
                                contact.status === 'new' ? 'bg-blue-100 text-blue-700' :
                                contact.status === 'contacted' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-green-100 text-green-700'
                              } ${actionLoading === `contact-${contact._id}` ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                              <option value="new">New</option>
                              <option value="contacted">Contacted</option>
                              <option value="closed">Closed</option>
                            </select>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(contact.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                              onClick={() => deleteContact(contact._id)}
                              disabled={actionLoading === `delete-contact-${contact._id}`}
                              className={`text-red-600 hover:text-red-900 ${
                                actionLoading === `delete-contact-${contact._id}` ? 'opacity-50 cursor-not-allowed' : ''
                              }`}
                            >
                              {actionLoading === `delete-contact-${contact._id}` ? 'Deleting...' : 'Delete'}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}