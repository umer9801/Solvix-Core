"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MessageCircle, Calendar, Building, DollarSign } from "lucide-react"

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
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4">Contact Submissions</h1>
        
        <div className="flex gap-4 items-center">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Contacts</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
          
          <Button onClick={fetchContacts} variant="outline">
            Refresh
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        {contacts.length === 0 ? (
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              No contacts found.
            </CardContent>
          </Card>
        ) : (
          contacts.map((contact) => (
            <Card key={contact._id} className="w-full">
              <CardHeader>
                <div className="flex justify-between items-start">
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
                    <div className="flex gap-2">
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
                      >
                        Email
                      </Button>
                      
                      {contact.whatsapp && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(`https://wa.me/${contact.whatsapp}`)}
                        >
                          WhatsApp
                        </Button>
                      )}
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