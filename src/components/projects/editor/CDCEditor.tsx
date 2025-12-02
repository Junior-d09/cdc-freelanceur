'use client'

import { EditorContent } from '@tiptap/react'
import { useCDCEditor } from '@/lib/tiptap/config'
import { Toolbar } from './Toolbar'
import { Card } from '@/components/ui/card'

interface CDCEditorProps {
  initialContent: string
  onUpdate?: (content: string) => void
  onSave?: () => void
}

export function CDCEditor({ initialContent, onUpdate, onSave }: CDCEditorProps) {
  const editor = useCDCEditor(initialContent, onUpdate)

  if (!editor) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4" />
          <p className="text-muted-foreground">Chargement de l&apos;éditeur...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Card className="overflow-hidden">
        {/* Toolbar */}
        <Toolbar editor={editor} />

        {/* Editor Content */}
        <div className="bg-white">
          <EditorContent editor={editor} />
        </div>
      </Card>

      {/* Keyboard Shortcuts Info */}
      <div className="mt-4 text-xs text-muted-foreground text-center">
        <span className="inline-flex items-center gap-2">
          <kbd className="px-2 py-1 bg-slate-100 rounded">Ctrl</kbd> + 
          <kbd className="px-2 py-1 bg-slate-100 rounded">S</kbd> pour sauvegarder
        </span>
      </div>
    </div>
  )
}