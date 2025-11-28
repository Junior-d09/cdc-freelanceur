export interface User {
  id: string
  name: string
  email: string
  image?: string | null
  company?: string | null
  subscriptionType: 'free' | 'premium' | 'agency'
  createdAt: string
  updatedAt: string
}

export interface UserProfile extends User {
  phone?: string | null
  bio?: string | null
  website?: string | null
  location?: string | null
}

export interface UserSettings {
  notifications: {
    email: boolean
    push: boolean
    projectUpdates: boolean
    clientComments: boolean
    marketing: boolean
  }
  preferences: {
    language: 'fr' | 'en'
    theme: 'light' | 'dark' | 'system'
    defaultTemplate?: string
  }
}