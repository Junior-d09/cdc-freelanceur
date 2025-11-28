import { DashboardStats } from '@/components/dashboard/DashboardStats'
import { RecentProjects } from '@/components/dashboard/RecentProjects'
import { QuickActions } from '@/components/dashboard/QuickActions'

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-600 mt-2">
          Bienvenue sur votre espace de gestion de projets
        </p>
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Stats Cards */}
      <DashboardStats />

      {/* Recent Projects */}
      <RecentProjects />
    </div>
  )
}