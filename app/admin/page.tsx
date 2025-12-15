"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  FileText, 
  Mail, 
  Calendar, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  RefreshCw,
  Eye,
  Trash2
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

interface BlogSubmission {
  _id: string
  title: string
  excerpt: string
  category: string
  authorName: string
  authorEmail: string
  status: 'approved' | 'pending' | 'rejected'
  submittedAt: string
  views: number
  likes: number
}

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [blogs, setBlogs] = useState<BlogSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  const fetchData = async () => {
    try {
      setRefreshing(true)
      
      // Fetch contacts
      const contactsResponse = await fetch('/api/admin/contacts')
      if (contactsResponse.ok) {
        const contactsData = await contactsResponse.json()
        setContacts(contactsData.contacts || [])
      }

      // Fetch blog submissions
      const blogsResponse = await fetch('/api/admin/blog-submissions')
      if (blogsResponse.ok) {
        const blogsData = await blogsResponse.json()
        setBlogs(blogsData.submissions || [])
      }

    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const stats = {
    totalContacts: contacts.length,
    newContacts: contacts.filter(c => c.status === 'new').length,
    totalBlogs: blogs.length,
    pendingBlogs: blogs.filter(b => b.status === 'pending').length,
    approvedBlogs: blogs.filter(b => b.status === 'approved').length,
    todayContacts: contacts.filter(c => {
      const today = new Date().toDateString()
      return new Date(c.createdAt).toDateString() === today
    }).length
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-700'
      case 'contacted': return 'bg-yellow-100 text-yellow-700'
      case 'closed': return 'bg-green-100 text-green-700'
      case 'pending': return 'bg-orange-100 text-orange-700'
      case 'approved': return 'bg-green-100 text-green-700'
      case 'rejected': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Manage contacts and blog submissions</p>
          </div>
          <Button 
            onClick={fetchData} 
            disabled={refreshing}
            variant="outline"
            className="flex items-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Contacts</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalContacts}</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">New Contacts</p>
                  <p className="text-3xl font-bold text-orange-600">{stats.newContacts}</p>
                </div>
                <AlertCircle className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Blog Posts</p>
                  <p className="text-3xl font-bold text-green-600">{stats.approvedBlogs}</p>
                </div>
                <FileText className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Today's Contacts</p>
                  <p className="text-3xl font-bold text-purple-600">{stats.todayContacts}</p>
                </div>
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Contact Management
              </CardTitle>
              <CardDescription>
                Manage contact form submissions and inquiries
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild className="w-full justify-start">
                <Link href="/admin/contacts">
                  <Eye className="w-4 h-4 mr-2" />
                  View All Contacts ({stats.totalContacts})
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href="/admin/contacts?status=new">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  New Contacts ({stats.newContacts})
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Blog Management
              </CardTitle>
              <CardDescription>
                Manage blog submissions and published posts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild className="w-full justify-start">
                <Link href="/admin/blog-submissions">
                  <Eye className="w-4 h-4 mr-2" />
                  View All Blogs ({stats.totalBlogs})
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href="/blog/submit">
                  <FileText className="w-4 h-4 mr-2" />
                  Create New Blog Post
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Contacts</CardTitle>
              <CardDescription>Latest contact form submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contacts.slice(0, 5).map((contact) => (
                  <div key={contact._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{contact.name}</p>
                      <p className="text-sm text-gray-600">{contact.email}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge className={getStatusColor(contact.status)}>
                      {contact.status}
                    </Badge>
                  </div>
                ))}
                {contacts.length === 0 && (
                  <p className="text-gray-500 text-center py-4">No contacts yet</p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Blog Posts</CardTitle>
              <CardDescription>Latest blog submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {blogs.slice(0, 5).map((blog) => (
                  <div key={blog._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{blog.title}</p>
                      <p className="text-sm text-gray-600">by {blog.authorName}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(blog.submittedAt).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge className={getStatusColor(blog.status)}>
                      {blog.status}
                    </Badge>
                  </div>
                ))}
                {blogs.length === 0 && (
                  <p className="text-gray-500 text-center py-4">No blog posts yet</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}