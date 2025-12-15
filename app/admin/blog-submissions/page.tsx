"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowLeft, 
  FileText, 
  User, 
  Mail, 
  Tag, 
  Calendar,
  Filter,
  RefreshCw,
  Eye,
  Trash2,
  CheckCircle,
  Clock,
  XCircle,
  TrendingUp
} from "lucide-react"

interface BlogSubmission {
  _id: string
  title: string
  excerpt: string
  content: string
  category: string
  authorName: string
  authorEmail: string
  tags: string[]
  readTime: string
  slug: string
  status: 'approved' | 'pending' | 'rejected'
  submittedAt: string
  approvedAt?: string
  reviewedAt?: string
  reviewedBy?: string
  adminNotes?: string
  views: number
  likes: number
}

export default function BlogSubmissionsPage() {
  const [submissions, setSubmissions] = useState<BlogSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [selectedSubmission, setSelectedSubmission] = useState<BlogSubmission | null>(null)
  const [actionLoading, setActionLoading] = useState<string | null>(null)

  const fetchSubmissions = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/admin/blog-submissions?status=${filter}`)
      const data = await response.json()
      
      if (data.success) {
        setSubmissions(data.submissions)
      }
    } catch (error) {
      console.error('Error fetching submissions:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSubmissions()
  }, [filter])

  const handleAction = async (submissionId: string, action: 'approved' | 'rejected', adminNotes?: string) => {
    try {
      setActionLoading(submissionId)
      const response = await fetch('/api/admin/blog-submissions', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          submissionId,
          action,
          adminNotes
        }),
      })

      const data = await response.json()
      
      if (data.success) {
        await fetchSubmissions()
        setSelectedSubmission(null)
      }
    } catch (error) {
      console.error('Error updating submission:', error)
    } finally {
      setActionLoading(null)
    }
  }

  const deleteSubmission = async (submissionId: string) => {
    if (!confirm('Are you sure you want to delete this blog submission?')) return
    
    try {
      const response = await fetch('/api/admin/blog-submissions', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ submissionId }),
      })

      if (response.ok) {
        await fetchSubmissions()
        setSelectedSubmission(null)
      }
    } catch (error) {
      console.error('Error deleting submission:', error)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700'
      case 'approved': return 'bg-green-100 text-green-700'
      case 'rejected': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />
      case 'approved': return <CheckCircle className="w-4 h-4" />
      case 'rejected': return <XCircle className="w-4 h-4" />
      default: return <FileText className="w-4 h-4" />
    }
  }

  const stats = {
    total: submissions.length,
    pending: submissions.filter(s => s.status === 'pending').length,
    approved: submissions.filter(s => s.status === 'approved').length,
    rejected: submissions.filter(s => s.status === 'rejected').length
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
                <FileText className="w-8 h-8 text-blue-600" />
                Blog Submissions Management
              </h1>
              <p className="text-gray-600">Review and manage user-submitted blog posts</p>
            </div>
          </div>
          <Button onClick={fetchSubmissions} disabled={loading} variant="outline">
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total', value: stats.total, color: 'blue', icon: FileText },
            { label: 'Pending', value: stats.pending, color: 'yellow', icon: Clock },
            { label: 'Approved', value: stats.approved, color: 'green', icon: CheckCircle },
            { label: 'Rejected', value: stats.rejected, color: 'red', icon: XCircle }
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
          {['all', 'pending', 'approved', 'rejected'].map((status) => (
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

        {/* Submissions List */}
        <div className="grid gap-6">
          {loading ? (
            <div className="text-center py-12">
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading submissions...</p>
            </div>
          ) : submissions.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Submissions Found</h3>
                <p className="text-gray-600">No blog submissions match your current filter.</p>
              </CardContent>
            </Card>
          ) : (
            submissions.map((submission) => (
              <Card key={submission._id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl text-gray-900">{submission.title}</CardTitle>
                        <Badge className={`${getStatusColor(submission.status)} flex items-center gap-1`}>
                          {getStatusIcon(submission.status)}
                          {submission.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-600 mb-3">
                        {submission.excerpt}
                      </CardDescription>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {submission.authorName}
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          {submission.authorEmail}
                        </div>
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          {submission.category}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(submission.submittedAt).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {submission.readTime}
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          {submission.views} views, {submission.likes} likes
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {submission.tags && submission.tags.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {submission.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                        {submission.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{submission.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        onClick={() => setSelectedSubmission(submission)}
                        variant="outline"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      {submission.status === 'pending' && (
                        <>
                          <Button
                            size="sm"
                            onClick={() => handleAction(submission._id, 'approved')}
                            disabled={actionLoading === submission._id}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            {actionLoading === submission._id ? (
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                              <CheckCircle className="w-4 h-4 mr-2" />
                            )}
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleAction(submission._id, 'rejected')}
                            disabled={actionLoading === submission._id}
                          >
                            {actionLoading === submission._id ? (
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                              <XCircle className="w-4 h-4 mr-2" />
                            )}
                            Reject
                          </Button>
                        </>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => deleteSubmission(submission._id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Detailed View Modal */}
        {selectedSubmission && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{selectedSubmission.title}</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedSubmission(null)}
                  >
                    Close
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Author Information</h3>
                      <div className="space-y-1 text-sm">
                        <p><span className="font-medium">Name:</span> {selectedSubmission.authorName}</p>
                        <p><span className="font-medium">Email:</span> {selectedSubmission.authorEmail}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Post Details</h3>
                      <div className="space-y-1 text-sm">
                        <p><span className="font-medium">Category:</span> {selectedSubmission.category}</p>
                        <p><span className="font-medium">Read Time:</span> {selectedSubmission.readTime}</p>
                        <p><span className="font-medium">Status:</span> 
                          <Badge className={`ml-2 ${getStatusColor(selectedSubmission.status)}`}>
                            {selectedSubmission.status}
                          </Badge>
                        </p>
                        <p><span className="font-medium">Submitted:</span> {new Date(selectedSubmission.submittedAt).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Excerpt</h3>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-600">{selectedSubmission.excerpt}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Content</h3>
                    <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
                      <div className="text-gray-600 whitespace-pre-wrap">{selectedSubmission.content}</div>
                    </div>
                  </div>
                  
                  {selectedSubmission.tags && selectedSubmission.tags.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedSubmission.tags.map((tag, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
              {selectedSubmission.status === 'pending' && (
                <div className="p-6 border-t bg-gray-50">
                  <div className="flex justify-end gap-3">
                    <Button
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => handleAction(selectedSubmission._id, 'approved')}
                      disabled={actionLoading === selectedSubmission._id}
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Approve Post
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => handleAction(selectedSubmission._id, 'rejected')}
                      disabled={actionLoading === selectedSubmission._id}
                    >
                      <XCircle className="w-4 h-4 mr-2" />
                      Reject Post
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}