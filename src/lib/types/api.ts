/**
 * Types pour les réponses API
 */

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: ApiError
  message?: string
}

export interface ApiError {
  code: string
  message: string
  details?: Record<string, any>
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    pageSize: number
    total: number
    totalPages: number
  }
}

export interface AuthResponse {
  user: {
    id: string
    email: string
    name: string
    image?: string
  }
  accessToken: string
  refreshToken?: string
}

export interface ValidationResponse {
  valid: boolean
  errors?: Array<{
    field: string
    message: string
  }>
}