'use client'

import { useState } from 'react'
import { StepIndicator } from './StepIndicator'
import { TemplateSelector } from './TemplateSelector'
import { QuestionnaireForm } from './QuestionnaireForm'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Loader2 } from 'lucide-react'

interface CreateProjectWizardProps {
  onComplete: (data: any) => void
  isLoading?: boolean
}

type Step = 'template' | 'questionnaire' | 'preview'

export function CreateProjectWizard({ onComplete, isLoading }: CreateProjectWizardProps) {
  const [currentStep, setCurrentStep] = useState<Step>('template')
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [formData, setFormData] = useState<any>(null)

  const steps = [
    { id: 'template', label: 'Template', completed: !!selectedTemplate },
    { id: 'questionnaire', label: 'Questionnaire', completed: !!formData },
    { id: 'preview', label: 'Aperçu', completed: false },
  ]

  const currentStepIndex = steps.findIndex(s => s.id === currentStep)

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId)
    setCurrentStep('questionnaire')
  }

  const handleQuestionnaireComplete = (data: any) => {
    setFormData(data)
    onComplete({
      templateType: selectedTemplate,
      ...data,
    })
  }

  const handleBack = () => {
    if (currentStep === 'questionnaire') {
      setCurrentStep('template')
    }
  }

  return (
    <div className="space-y-8">
      {/* Step Indicator */}
      <StepIndicator steps={steps} currentStep={currentStepIndex} />

      {/* Back Button */}
      {currentStep !== 'template' && !isLoading && (
        <Button variant="ghost" onClick={handleBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>
      )}

      {/* Step Content */}
      {currentStep === 'template' && (
        <TemplateSelector onSelect={handleTemplateSelect} />
      )}

      {currentStep === 'questionnaire' && selectedTemplate && (
        <QuestionnaireForm
          templateId={selectedTemplate}
          onSubmit={handleQuestionnaireComplete}
          isLoading={isLoading}
        />
      )}

      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
            <p className="text-slate-600">Création de votre projet en cours...</p>
          </div>
        </div>
      )}
    </div>
  )
}