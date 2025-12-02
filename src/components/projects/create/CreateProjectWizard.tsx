'use client'
import { useState } from 'react'
import { StepIndicator } from './StepIndicator'
import { TemplateSelector } from './TemplateSelector'
import { QuestionnaireForm } from './QuestionnaireForm'
import { Preview } from './Preview'
import { Success } from './Success'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

interface CreateProjectWizardProps {
  onComplete: (data: any) => void
  isLoading?: boolean
}

type Step = 'template' | 'questionnaire' | 'preview' | 'success'

export function CreateProjectWizard({ onComplete, isLoading }: CreateProjectWizardProps) {
  const [currentStep, setCurrentStep] = useState<Step>('template')
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [formData, setFormData] = useState<any>(null)

  const steps = [
    { id: 'template', label: 'Template', completed: !!selectedTemplate },
    { id: 'questionnaire', label: 'Questionnaire', completed: !!formData },
    { id: 'preview', label: 'Aperçu', completed: currentStep === 'success' || currentStep === 'preview' ? !!formData : false },
    { id: 'success', label: 'Succès', completed: currentStep === 'success' },
  ]

  const currentStepIndex = steps.findIndex(s => s.id === currentStep)

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId)
    setCurrentStep('questionnaire')
  }

  const handleQuestionnaireComplete = (data: any) => {
    const payload = {
      templateType: selectedTemplate,
      ...data,
    }
    setFormData(payload)
    setCurrentStep('preview')
  }

  const handleConfirm = async () => {
    if (!formData) return
    // Appelle parent pour création finale (API call côté parent)
    onComplete(formData)
    setCurrentStep('success')
  }

  const handleBack = () => {
    if (currentStep === 'questionnaire') {
      setCurrentStep('template')
    } else if (currentStep === 'preview') {
      setCurrentStep('questionnaire')
    } else if (currentStep === 'success') {
      setCurrentStep('preview')
    }
  }

  return (
    <div className="space-y-8">
      <StepIndicator steps={steps} currentStep={currentStepIndex} />

      {currentStep !== 'template' && !isLoading && (
        <Button variant="ghost" onClick={handleBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>
      )}

      {/* Steps */}
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

      {currentStep === 'preview' && formData && (
        <Preview
          data={formData}
          onEdit={() => setCurrentStep('questionnaire')}
          onConfirm={handleConfirm}
          isLoading={isLoading}
        />
      )}

      {currentStep === 'success' && (
        <Success data={formData} />
      )}
    </div>
  )
}
