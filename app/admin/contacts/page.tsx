"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MessageCircle, Calendar, Building, DollarSign, Trash2, Users, TrendingUp, Clock, CheckCircle2, ArrowLeft } from "lucide-react"

interface Contact {
  _id: string
  name: string
  email: string
  company?: string
  service?: string
  budget?: string
  preferred: 'email' | 'whatsapp'
  whatsapp?: string
  message: string
  status: 'new' | 'contacted' | 'closed'
  createdAt: string
}

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>('all')
  const [deleting, setDeleting] = useState<string | null>(null)
  const [selectedContacts, setSelectedContacts] = useState<string[]>([])
  const [bulkDeleting, setBulkDeleting] = useState(false)
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    contacted: 0,
    closed: 0
  })

  useEffect(() => {
    fetchContacts()
  }, [filter])

  const fetchContacts = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (filter !== 'all') params.append('status', filter)
      
      const response = await fetch(`/api/admin/contacts?${params}`)
      const data = await response.json()
      
      if (response.ok) {
        setContacts(data.contacts)
        // Calculate stats
        const allContacts = data.contacts
        setStats({
          total: allContacts.length,
          new: allContacts.filter((c: Contact) => c.status === 'new').length,
          contacted: allContacts.filter((c: Contact) => c.status === 'contacted').length,
          closed: allContacts.filter((c: Contact) => c.status === 'closed').length
        })
      } else if (response.status === 401) {
        alert('Session expired. Please login again.')
        window.location.href = '/admin/login'
      } else {
        console.error('Failed to fetch contacts:', response.status)
      }
    } catch (error) {
      console.error('Failed to fetch contacts:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: string, status: string) => {
    try {
      const response = await fetch('/api/admin/contacts', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status })
      })

      if (response.ok) {
        fetchContacts() // Refresh the list
      }
    } catch (error) {
      console.error('Failed to update status:', error)
    }
  }

  const deleteContact = async (id: string) => {
    if (!confirm('Are you sure you want to delete this contact? This action cannot be undone.')) {
      return
    }

    try {
      setDeleting(id)
      console.log('Deleting contact with ID:', id)
      
      const response = await fetch('/api/admin/contacts', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      })
      
      console.log('Delete response status:', response.status)

      if (response.ok) {
        fetchContacts() // Refresh the list
        // Remove from selected if it was selected
        setSelectedContacts(prev => prev.filter(contactId => contactId !== id))
        alert('Contact deleted successfully')
      } else {
        const errorData = await response.json().catch(() => ({}))
        if (response.status === 401) {
          alert('Session expired. Please login again.')
          window.location.href = '/admin/login'
        } else {
          alert(errorData.error || 'Failed to delete contact')
        }
      }
    } catch (error) {
      console.error('Failed to delete contact:', error)
      alert('Network error. Failed to delete contact.')
    } finally {
      setDeleting(null)
    }
  }

  const bulkDeleteContacts = async () => {
    if (selectedContacts.length === 0) return
    
    if (!confirm(`Are you sure you want to delete ${selectedContacts.length} contacts? This action cannot be undone.`)) {
      return
    }

    try {
      setBulkDeleting(true)
      
      const response = await fetch('/api/admin/contacts', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedContacts })
      })

      if (response.ok) {
        const data = await response.json()
        setSelectedContacts([])
        fetchContacts() // Refresh the list
        alert(`Successfully deleted ${data.deletedCount} contacts`)
      } else {
        const errorData = await response.json().catch(() => ({}))
        if (response.status === 401) {
          alert('Session expired. Please login again.')
          window.location.href = '/admin/login'
        } else {
          alert(errorData.error || 'Failed to delete contacts')
        }
      }
    } catch (error) {
      console.error('Failed to bulk delete contacts:', error)
      alert('Network error. Failed to delete contacts.')
    } finally {
      setBulkDeleting(false)
    }
  }

  const toggleContactSelection = (id: string) => {
    setSelectedContacts(prev => 
      prev.includes(id) 
        ? prev.filter(contactId => contactId !== id)
        : [...prev, id]
    )
  }

  const selectAllContacts = () => {
    if (selectedContacts.length === contacts.length) {
      setSelectedContacts([])
    } else {
      setSelectedContacts(contacts.map(c => c._id))
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'contacted': return 'bg-yellow-100 text-yellow-800'
      case 'closed': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatService = (service?: string) => {
    if (!service) return 'Not specified'
    return service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  }

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">Loading contacts...</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <a href="/admin" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </a>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Contact Management</h1>
            <p className="text-gray-600 mt-1">Manage contact submissions and inquiries</p>
          </div>
        </div>
        <div className="flex gap-2">
          {selectedContacts.length > 0 && (
            <Button 
              variant="destructive" 
              onClick={bulkDeleteContacts}
              disabled={bulkDeleting}
              className="flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              {bulkDeleting ? 'Deleting...' : `Delete ${selectedContacts.length}`}
            </Button>
          )}
          <Button onClick={fetchContacts} variant="outline" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Refresh Data
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Total Contacts</p>
                <p className="text-3xl font-bold">{stats.total}</p>
              </div>
              <Users className="w-8 h-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100 text-sm font-medium">New Inquiries</p>
                <p className="text-3xl font-bold">{stats.new}</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Contacted</p>
                <p className="text-3xl font-bold">{stats.contacted}</p>
              </div>
              <MessageCircle className="w-8 h-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">Closed</p>
                <p className="text-3xl font-bold">{stats.closed}</p>
              </div>
              <CheckCircle2 className="w-8 h-8 text-green-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Bulk Actions */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Filter by status:</label>
                <Select value={filter} onValueChange={setFilter}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Contacts ({stats.total})</SelectItem>
                    <SelectItem value="new">New ({stats.new})</SelectItem>
                    <SelectItem value="contacted">Contacted ({stats.contacted})</SelectItem>
                    <SelectItem value="closed">Closed ({stats.closed})</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {contacts.length > 0 && (
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={selectAllContacts}
                  className="text-xs"
                >
                  {selectedContacts.length === contacts.length ? 'Deselect All' : 'Select All'}
                </Button>
                {selectedContacts.length > 0 && (
                  <span className="text-sm text-muted-foreground">
                    {selectedContacts.length} selected
                  </span>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6">
        {contacts.length === 0 ? (
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              No contacts found.
            </CardContent>
          </Card>
        ) : (
          contacts.map((contact) => (
            <Card key={contact._id} className={`w-full ${selectedContacts.includes(contact._id) ? 'ring-2 ring-blue-500' : ''}`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={selectedContacts.includes(contact._id)}
                      onChange={() => toggleContactSelection(contact._id)}
                      className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <div>
                      <CardTitle className="text-xl">{contact.name}</CardTitle>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          {contact.email}
                        </div>
                        {contact.company && (
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            {contact.company}
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(contact.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge className={getStatusColor(contact.status)}>
                    {contact.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold mb-2">Contact Details</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        {contact.preferred === 'email' ? (
                          <Mail className="w-4 h-4" />
                        ) : (
                          <MessageCircle className="w-4 h-4" />
                        )}
                        Prefers: {contact.preferred}
                        {contact.whatsapp && ` (${contact.whatsapp})`}
                      </div>
                      {contact.service && (
                        <div>Service: {formatService(contact.service)}</div>
                      )}
                      {contact.budget && (
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          Budget: {contact.budget}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Actions</h4>
                    <div className="flex flex-wrap gap-2">
                      <Select
                        value={contact.status}
                        onValueChange={(status) => updateStatus(contact._id, status)}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="contacted">Contacted</SelectItem>
                          <SelectItem value="closed">Closed</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(`mailto:${contact.email}`)}
                        className="flex items-center gap-1"
                      >
                        <Mail className="w-4 h-4" />
                        Email
                      </Button>
                      
                      {contact.whatsapp && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(`https://wa.me/${contact.whatsapp}`)}
                          className="flex items-center gap-1"
                        >
                          <MessageCircle className="w-4 h-4" />
                          WhatsApp
                        </Button>
                      )}

                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteContact(contact._id)}
                        disabled={deleting === contact._id}
                        className="flex items-center gap-1"
                      >
                        <Trash2 className="w-4 h-4" />
                        {deleting === contact._id ? 'Deleting...' : 'Delete'}
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Message</h4>
                  <p className="text-sm text-muted-foreground bg-muted p-3 rounded-md">
                    {contact.message}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}