import { CheckCircle, Circle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Step {
  id: string
  label: string
  completed: boolean
}

interface StepIndicatorProps {
  steps: Step[]
  currentStep: number
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center flex-1">
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  'flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors',
                  index < currentStep
                    ? 'bg-green-500 border-green-500'
                    : index === currentStep
                    ? 'bg-blue-600 border-blue-600'
                    : 'bg-white border-slate-300'
                )}
              >
                {index < currentStep ? (
                  <CheckCircle className="h-6 w-6 text-white" />
                ) : (
                  <span
                    className={cn(
                      'font-semibold',
                      index === currentStep ? 'text-white' : 'text-slate-400'
                    )}
                  >
                    {index + 1}
                  </span>
                )}
              </div>
              <span
                className={cn(
                  'mt-2 text-sm font-medium',
                  index <= currentStep ? 'text-slate-900' : 'text-slate-400'
                )}
              >
                {step.label}
              </span>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  'flex-1 h-0.5 mx-4 transition-colors',
                  index < currentStep ? 'bg-green-500' : 'bg-slate-300'
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}