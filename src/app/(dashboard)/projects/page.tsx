import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import { ProjectList } from '@/components/projects/ProjectList'
import { ProjectFilters } from '@/components/projects/ProjectFilters'

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Mes Projets</h1>
          <p className="text-slate-600 mt-2">
            Gérez tous vos cahiers des charges en un seul endroit
          </p>
        </div>
        <Link href="/dashboard/projects/new">
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            <PlusCircle className="mr-2 h-4 w-4" />
            Nouveau Projet
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <ProjectFilters />

      {/* Projects List */}
      <ProjectList />
    </div>
  )
}