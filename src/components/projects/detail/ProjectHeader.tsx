import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, Clock, AlertCircle, Pause } from 'lucide-react'

interface ProjectHeaderProps {
  project: {
    title: string
    status: 'pending' | 'in_progress' | 'paused' | 'validated'
    template: string
    progress: number
  }
}

const statusConfig = {
  validated: {
    label: 'Validé',
    icon: CheckCircle,
    color: 'bg-green-100 text-green-700 border-green-200',
  },
  in_progress: {
    label: 'En cours',
    icon: Clock,
    color: 'bg-blue-100 text-blue-700 border-blue-200',
  },
  pending: {
    label: 'En attente',
    icon: AlertCircle,
    color: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  },
  paused: {
    label: 'En pause',
    icon: Pause,
    color: 'bg-slate-100 text-slate-700 border-slate-200',
  },
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  const status = statusConfig[project.status]
  const StatusIcon = status.icon

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-slate-900">{project.title}</h1>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{project.template}</Badge>
            <Badge className={`${status.color} border`}>
              <StatusIcon className="mr-1 h-3 w-3" />
              {status.label}
            </Badge>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-slate-700">Progression du projet</span>
          <span className="font-semibold text-blue-600">{project.progress}%</span>
        </div>
        <Progress value={project.progress} className="h-2" />
      </div>
    </div>
  )
}