"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowLeft, 
  Users, 
  Mail, 
  Phone, 
  Building, 
  DollarSign, 
  MessageSquare,
  Calendar,
  Filter,
  RefreshCw,
  Eye,
  Trash2,
  CheckCircle,
  Clock,
  XCircle
} from "lucide-react"

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

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [updating, setUpdating] = useState<string | null>(null)
  const [deleting, setDeleting] = useState<string | null>(null)

  const fetchContacts = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (filter !== 'all') params.append('status', filter)
      
      console.log('Fetching contacts with filter:', filter)
      const response = await fetch(`/api/admin/contacts?${params}`, {
        credentials: 'include'
      })
      
      console.log('Fetch contacts response status:', response.status)
      const data = await response.json()
      console.log('Fetch contacts data:', data)
      
      if (data.success) {
        setContacts(data.contacts || [])
        console.log('Updated contacts state with', data.contacts?.length || 0, 'contacts')
      } else {
        console.error('Failed to fetch contacts:', data.error)
      }
    } catch (error) {
      console.error('Error fetching contacts:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchContacts()
  }, [filter])

  const updateStatus = async (id: string, status: string) => {
    try {
      setUpdating(id)
      const response = await fetch('/api/admin/contacts', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contactId: id, status })
      })

      if (response.ok) {
        await fetchContacts()
      }
    } catch (error) {
      console.error('Error updating contact:', error)
    } finally {
      setUpdating(null)
    }
  }

  const deleteContact = async (id: string) => {
    if (!confirm('Are you sure you want to delete this contact?')) return
    
    try {
      setDeleting(id)
      console.log('Deleting contact with ID:', id)
      
      const response = await fetch('/api/admin/contacts', {
        method: 'DELETE',
        headers: { 
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ contactId: id })
      })

      console.log('Delete response status:', response.status)
      
      if (response.ok) {
        const result = await response.json()
        console.log('Delete result:', result)
        
        // Update UI immediately
        setContacts(prev => prev.filter(contact => contact._id !== id))
        setSelectedContact(null)
        
        alert('Contact deleted successfully!')
      } else {
        const errorData = await response.json().catch(() => ({}))
        console.error('Delete failed:', errorData)
        alert(`Failed to delete contact: ${errorData.error || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Error deleting contact:', error)
      alert('Network error while deleting contact')
    } finally {
      setDeleting(null)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-700'
      case 'contacted': return 'bg-yellow-100 text-yellow-700'
      case 'closed': return 'bg-green-100 text-green-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new': return <Clock className="w-4 h-4" />
      case 'contacted': return <Mail className="w-4 h-4" />
      case 'closed': return <CheckCircle className="w-4 h-4" />
      default: return <XCircle className="w-4 h-4" />
    }
  }

  const stats = {
    total: contacts.length,
    new: contacts.filter(c => c.status === 'new').length,
    contacted: contacts.filter(c => c.status === 'contacted').length,
    closed: contacts.filter(c => c.status === 'closed').length
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/admin" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Dashboard
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-600" />
                Contact Management
              </h1>
              <p className="text-gray-600">Manage contact form submissions and inquiries</p>
            </div>
          </div>
          <Button onClick={fetchContacts} disabled={loading} variant="outline">
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total', value: stats.total, color: 'blue', icon: Users },
            { label: 'New', value: stats.new, color: 'orange', icon: Clock },
            { label: 'Contacted', value: stats.contacted, color: 'yellow', icon: Mail },
            { label: 'Closed', value: stats.closed, color: 'green', icon: CheckCircle }
          ].map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Filter:</span>
          </div>
          {['all', 'new', 'contacted', 'closed'].map((status) => (
            <Button
              key={status}
              variant={filter === status ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(status)}
              className="capitalize"
            >
              {status}
            </Button>
          ))}
        </div>

        {/* Contacts List */}
        <div className="grid gap-6">
          {loading ? (
            <div className="text-center py-12">
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading contacts...</p>
            </div>
          ) : contacts.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Contacts Found</h3>
                <p className="text-gray-600">No contacts match your current filter.</p>
              </CardContent>
            </Card>
          ) : (
            contacts.map((contact) => (
              <Card key={contact._id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl text-gray-900">{contact.name}</CardTitle>
                        <Badge className={`${getStatusColor(contact.status)} flex items-center gap-1`}>
                          {getStatusIcon(contact.status)}
                          {contact.status}
                        </Badge>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          {contact.email}
                        </div>
                        {contact.company && (
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4" />
                            {contact.company}
                          </div>
                        )}
                        {contact.service && (
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            {contact.service}
                          </div>
                        )}
                        {contact.budget && (
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4" />
                            {contact.budget}
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(contact.createdAt).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          {contact.preferred} {contact.whatsapp && `(${contact.whatsapp})`}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="w-4 h-4 text-gray-500" />
                      <span className="font-medium text-gray-700">Message:</span>
                    </div>
                    <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">{contact.message}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        onClick={() => setSelectedContact(contact)}
                        variant="outline"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      {contact.status === 'new' && (
                        <Button
                          size="sm"
                          onClick={() => updateStatus(contact._id, 'contacted')}
                          disabled={updating === contact._id}
                          className="bg-yellow-600 hover:bg-yellow-700"
                        >
                          Mark Contacted
                        </Button>
                      )}
                      {contact.status === 'contacted' && (
                        <Button
                          size="sm"
                          onClick={() => updateStatus(contact._id, 'closed')}
                          disabled={updating === contact._id}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          Mark Closed
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deleteContact(contact._id)}
                        disabled={deleting === contact._id}
                      >
                        {deleting === contact._id ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <Trash2 className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Contact Details Modal */}
        {selectedContact && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{selectedContact.name}</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedContact(null)}
                  >
                    Close
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Email:</span> {selectedContact.email}</p>
                      <p><span className="font-medium">Company:</span> {selectedContact.company || 'Not provided'}</p>
                      <p><span className="font-medium">Preferred Contact:</span> {selectedContact.preferred}</p>
                      {selectedContact.whatsapp && (
                        <p><span className="font-medium">WhatsApp:</span> {selectedContact.whatsapp}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Project Details</h3>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Service:</span> {selectedContact.service || 'Not specified'}</p>
                      <p><span className="font-medium">Budget:</span> {selectedContact.budget || 'Not specified'}</p>
                      <p><span className="font-medium">Status:</span> 
                        <Badge className={`ml-2 ${getStatusColor(selectedContact.status)}`}>
                          {selectedContact.status}
                        </Badge>
                      </p>
                      <p><span className="font-medium">Submitted:</span> {new Date(selectedContact.createdAt).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Message</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 whitespace-pre-wrap">{selectedContact.message}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}