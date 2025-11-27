import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { 
  PlusCircle, 
  FileText, 
  Upload, 
  Users 
} from 'lucide-react'

const actions = [
  {
    title: 'Nouveau Projet',
    description: 'Créer un cahier des charges',
    icon: PlusCircle,
    href: '/dashboard/projects/new',
    color: 'blue',
  },
  {
    title: 'Voir Templates',
    description: 'Parcourir les modèles',
    icon: FileText,
    href: '/dashboard/templates',
    color: 'purple',
  },
  {
    title: 'Import CDC',
    description: 'Importer un document',
    icon: Upload,
    href: '/dashboard/import',
    color: 'green',
    badge: 'Bientôt',
  },
  {
    title: 'Inviter Client',
    description: 'Partager un projet',
    icon: Users,
    href: '/dashboard/clients',
    color: 'orange',
    badge: 'Bientôt',
  },
]

const colorClasses = {
  blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
  purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
  green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
  orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
}

export function QuickActions() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {actions.map((action) => (
        <Link
          key={action.title}
          href={action.href}
          className={`group relative ${action.badge ? 'pointer-events-none opacity-60' : ''}`}
        >
          <Card className={`p-6 bg-gradient-to-br ${colorClasses[action.color]} text-white hover:shadow-xl transition-all hover:-translate-y-1`}>
            {action.badge && (
              <div className="absolute top-2 right-2">
                <span className="px-2 py-1 text-xs font-semibold bg-white/20 backdrop-blur-sm rounded-full">
                  {action.badge}
                </span>
              </div>
            )}
            <action.icon className="h-8 w-8 mb-3 opacity-90" />
            <h3 className="font-semibold text-lg mb-1">{action.title}</h3>
            <p className="text-sm opacity-90">{action.description}</p>
          </Card>
        </Link>
      ))}
    </div>
  )
}