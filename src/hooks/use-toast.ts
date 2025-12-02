import { useState, useCallback } from 'react'

export type ToastProps = {
  id?: string
  title: string
  description?: string
  variant?: 'default' | 'destructive'
  duration?: number
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = useCallback(({ title, description, variant = 'default', duration = 3000 }: ToastProps) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { id, title, description, variant, duration }

    setToasts((prev) => [...prev, newToast])

    // Auto dismiss
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, duration)

    return id
  }, [])

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return {
    toast,
    dismiss,
    toasts,
  }
}