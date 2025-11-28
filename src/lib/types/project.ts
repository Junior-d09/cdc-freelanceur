export type ProjectStatus = 'pending' | 'in_progress' | 'paused' | 'validated' | 'completed'

export type TemplateType = 'site-vitrine' | 'ecommerce' | 'app-mobile' | 'identite-visuelle'

export interface Project {
  id: string
  title: string
  description: string
  clientName: string
  clientEmail: string
  status: ProjectStatus
  templateType: TemplateType
  progress: number
  content: string // HTML content from Tiptap
  pdfUrl?: string | null
  createdAt: string
  updatedAt: string
  userId: string
}

export interface ProjectFormData {
  title: string
  description: string
  clientName: string
  clientEmail: string
  templateType: TemplateType
  questionsAnswers: Record<string, any>
}

export interface ProjectTimeline {
  projectId: string
  steps: TimelineStep[]
}

export interface TimelineStep {
  id: string
  title: string
  description: string
  status: 'pending' | 'in_progress' | 'completed'
  dueDate?: string | null
  completedAt?: string | null
  order: number
}