'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  FolderKanban, 
  CheckCircle, 
  Clock, 
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'

const stats = [
  {
    title: 'Total Projets',
    value: '12',
    change: '+2',
    changeType: 'increase' as const,
    icon: FolderKanban,
    color: 'blue',
  },
  {
    title: 'En Cours',
    value: '5',
    change: '+1',
    changeType: 'increase' as const,
    icon: Clock,
    color: 'orange',
  },
  {
    title: 'Validés',
    value: '7',
    change: '+3',
    changeType: 'increase' as const,
    icon: CheckCircle,
    color: 'green',
  },
  {
    title: 'Taux de Validation',
    value: '85%',
    change: '+5%',
    changeType: 'increase' as const,
    icon: TrendingUp,
    color: 'purple',
  },
]

const colorClasses = {
  blue: 'bg-blue-100 text-blue-600',
  orange: 'bg-orange-100 text-orange-600',
  green: 'bg-green-100 text-green-600',
  purple: 'bg-purple-100 text-purple-600',
}

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${colorClasses[stat.color]}`}>
              <stat.icon className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">
              {stat.value}
            </div>
            <div className="flex items-center mt-2">
              {stat.changeType === 'increase' ? (
                <ArrowUpRight className="h-4 w-4 text-green-600 mr-1" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-red-600 mr-1" />
              )}
              <span
                className={`text-sm font-medium ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.change}
              </span>
              <span className="text-sm text-slate-500 ml-1">ce mois</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}