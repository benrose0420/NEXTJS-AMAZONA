"use client"

import { toast as sonnerToast } from "sonner"
import type { ReactNode } from "react"

interface ToastOptions {
  title?: ReactNode
  description?: ReactNode
  action?: ReactNode // Sonner supports custom actions
  duration?: number
}

function toast({ title, description, action, duration = 4000 }: ToastOptions) {
  return sonnerToast(title, {
    description,
    action,
    duration,
  })
}

function useToast() {
  return {
    toast,
    dismiss: sonnerToast.dismiss,
  }
}

export { useToast, toast }
