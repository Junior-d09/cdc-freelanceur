import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  CheckCircle,
  Clock,
  AlertCircle,
  Pause,
  MoreVertical,
  Eye,
  Edit,
  Copy,
  Trash2,
} from 'lucide-react'

interface ProjectCardProps {
  project: {
    id: string
    title: string
    client: string
    status: 'validated' | 'in_progress' | 'pending' | 'paused'
    template: string
    description: string
    createdAt: string
    updatedAt: string
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

export function ProjectCard({ project }: ProjectCardProps) {
  const status = statusConfig[project.status]
  const StatusIcon = status.icon

  return (
    <Card className="group hover:shadow-lg transition-all hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <Link
              href={`/dashboard/projects/${project.id}`}
              className="font-semibold text-lg text-slate-900 hover:text-blue-600 transition-colors line-clamp-2"
            >
              {project.title}
            </Link>
            <p className="text-sm text-slate-600 mt-1">
              Client: {project.client}
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="shrink-0">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={`/dashboard/projects/${project.id}`}>
                  <Eye className="mr-2 h-4 w-4" />
                  Voir le projet
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`/dashboard/projects/${project.id}/edit`}>
                  <Edit className="mr-2 h-4 w-4" />
                  Modifier
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Copy className="mr-2 h-4 w-4" />
                Dupliquer
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600 focus:text-red-600">
                <Trash2 className="mr-2 h-4 w-4" />
                Supprimer
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <Badge variant="outline" className="text-xs">
            {project.template}
          </Badge>
          <Badge className={`${status.color} border`}>
            <StatusIcon className="mr-1 h-3 w-3" />
            {status.label}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-slate-600 line-clamp-2 mb-4">
          {project.description}
        </p>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
            <span>Progression</span>
            <span className="font-semibold">{project.progress}%</span>
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-blue-600 to-indigo-600 transition-all"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
          <span>
            Créé le {new Date(project.createdAt).toLocaleDateString('fr-FR')}
          </span>
          <span>
            Modifié {new Date(project.updatedAt).toLocaleDateString('fr-FR')}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-4">
          <Link href={`/dashboard/projects/${project.id}`} className="flex-1">
            <Button variant="outline" className="w-full" size="sm">
              <Eye className="mr-2 h-4 w-4" />
              Voir
            </Button>
          </Link>
          <Link href={`/dashboard/projects/${project.id}/edit`} className="flex-1">
            <Button className="w-full bg-linear-to-r from-blue-600 to-indigo-600" size="sm">
              <Edit className="mr-2 h-4 w-4" />
              Éditer
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}