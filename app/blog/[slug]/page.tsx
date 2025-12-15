"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Users, 
  User,
  Mail,
  Tag,
  BookOpen,
  FileText,
  Lightbulb
} from "lucide-react"

interface BlogPost {
  title: string
  excerpt: string
  content: string
  category: string
  authorName?: string
  authorEmail?: string
  tags: string[]
  readTime: string
  submittedAt: string
  approvedAt?: string
  views: number
  likes: number
}

export default function DynamicBlogPage({ params }: { params: { slug: string } }) {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        // First try to fetch from user submissions
        const response = await fetch(`/api/blog/post/${params.slug}`)
        
        if (response.ok) {
          const data = await response.json()
          if (data.success) {
            setBlogPost(data.post)
          } else {
            setNotFound(true)
          }
        } else {
          setNotFound(true)
        }
      } catch (error) {
        console.error('Error fetching blog post:', error)
        setNotFound(true)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPost()
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog post...</p>
        </div>
      </div>
    )
  }

  if (notFound || !blogPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist or hasn't been published yet.</p>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              {blogPost.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {blogPost.title}
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {blogPost.excerpt}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <Clock className="w-4 h-4" />
                {blogPost.readTime}
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4" />
                {new Date(blogPost.approvedAt || blogPost.submittedAt).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <Users className="w-4 h-4" />
                {blogPost.views} views
              </div>
              {blogPost.authorName && (
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                  <User className="w-4 h-4" />
                  {blogPost.authorName}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-4 px-4 bg-white border-b">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Author Info (for user submissions) */}
          {blogPost.authorName && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Written by {blogPost.authorName}</h3>
                      <p className="text-gray-600 text-sm">Community Contributor</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none mb-12"
          >
            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {blogPost.content}
            </div>
          </motion.div>

          {/* Tags */}
          {blogPost.tags && blogPost.tags.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5 text-blue-600" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.section>
          )}

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-2xl">
              <CardContent className="p-8">
                <Lightbulb className="w-16 h-16 mx-auto mb-6 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">Enjoyed This Article?</h3>
                <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                  Share your own insights with our community. Write about your expertise and help others learn and grow.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg">
                    <Link href="/blog/submit">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Submit Your Blog
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <Link href="/blog">
                      <FileText className="w-4 h-4 mr-2" />
                      Read More Articles
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </article>
    </div>
  )
}