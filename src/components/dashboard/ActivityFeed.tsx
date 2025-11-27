'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { 
  FileText, 
  CheckCircle, 
  MessageSquare, 
  UserPlus,
  Edit,
  Trash2
} from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'

interface ActivityFeedProps {
  expanded?: boolean
}

const activities = [
  {
    id: '1',
    type: 'project_created',
    title: 'Nouveau projet créé',
    description: 'Site E-commerce Mode',
    icon: FileText,
    color: 'bg-blue-500',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2h ago
  },
  {
    id: '2',
    type: 'project_validated',
    title: 'Projet validé',
    description: 'Application Fitness par FitLife Inc.',
    icon: CheckCircle,
    color: 'bg-green-500',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5h ago
  },
  {
    id: '3',
    type: 'comment_received',
    title: 'Commentaire reçu',
    description: 'Le Gourmet a commenté votre CDC',
    icon: MessageSquare,
    color: 'bg-purple-500',
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
  },
  {
    id: '4',
    type: 'project_updated',
    title: 'Projet modifié',
    description: 'Site Vitrine Architecte',
    icon: Edit,
    color: 'bg-orange-500',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
  },
  {
    id: '5',
    type: 'client_invited',
    title: 'Client invité',
    description: 'Invitation envoyée à john@example.com',
    icon: UserPlus,
    color: 'bg-indigo-500',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
  },
  {
    id: '6',
    type: 'project_deleted',
    title: 'Projet supprimé',
    description: 'Ancien projet test',
    icon: Trash2,
    color: 'bg-red-500',
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
  },
]

export function ActivityFeed({ expanded = false }: ActivityFeedProps) {
  const displayActivities = expanded ? activities : activities.slice(0, 5)

  return (
    <div className="space-y-4">
      {displayActivities.map((activity) => {
        const Icon = activity.icon
        
        return (
          <div key={activity.id} className="flex items-start gap-4">
            {/* Icon */}
            <Avatar className="h-10 w-10">
              <AvatarFallback className={`${activity.color} text-white`}>
                <Icon className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>

            {/* Content */}
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                {activity.title}
              </p>
              <p className="text-sm text-muted-foreground">
                {activity.description}
              </p>
              <p className="text-xs text-muted-foreground">
                {formatDistanceToNow(activity.timestamp, {
                  addSuffix: true,
                  locale: fr,
                })}
              </p>
            </div>
          </div>
        )
      })}

      {!expanded && activities.length > 5 && (
        <div className="text-center pt-2">
          <button className="text-sm text-muted-foreground hover:text-foreground">
            Voir toutes les activités →
          </button>
        </div>
      )}
    </div>
  )
}