import mongoose from 'mongoose'

export interface IContact {
  name: string
  email: string
  company?: string
  service?: string
  budget?: string
  preferred: 'email' | 'whatsapp'
  whatsapp?: string
  message: string
  createdAt: Date
  status: 'new' | 'contacted' | 'closed'
}

const ContactSchema = new mongoose.Schema<IContact>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  company: {
    type: String,
    trim: true,
    maxlength: [100, 'Company name cannot exceed 100 characters']
  },
  service: {
    type: String,
    trim: true,
    enum: [
      'langchain',
      'openai-agent-sdk', 
      'customized-websites',
      'ai-ml',
      'application-development',
      'video-editing',
      'graphic-designing',
      'content-creation',
      'shopify-store-designing',
      'n-and-n'
    ]
  },
  budget: {
    type: String,
    trim: true
  },
  preferred: {
    type: String,
    required: [true, 'Preferred contact method is required'],
    enum: ['email', 'whatsapp'],
    default: 'email'
  },
  whatsapp: {
    type: String,
    trim: true,
    validate: {
      validator: function(v: string) {
        // Only validate WhatsApp if preferred method is whatsapp
        const doc = this as any
        if (doc.preferred === 'whatsapp') {
          return !!(v && v.length > 0)
        }
        return true
      },
      message: 'WhatsApp number is required when WhatsApp is the preferred contact method'
    }
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [2000, 'Message cannot exceed 2000 characters']
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'closed'],
    default: 'new'
  }
}, {
  timestamps: true
})

// Create indexes for better query performance
ContactSchema.index({ email: 1 })
ContactSchema.index({ createdAt: -1 })
ContactSchema.index({ status: 1 })

export default mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema)