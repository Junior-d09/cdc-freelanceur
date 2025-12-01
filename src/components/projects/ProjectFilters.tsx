'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Search, SlidersHorizontal, X } from 'lucide-react'

export function ProjectFilters() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<string>('all')
  const [template, setTemplate] = useState<string>('all')
  const [showFilters, setShowFilters] = useState(false)

  const activeFiltersCount = 
    (status !== 'all' ? 1 : 0) + 
    (template !== 'all' ? 1 : 0) + 
    (search ? 1 : 0)

  const handleReset = () => {
    setSearch('')
    setStatus('all')
    setTemplate('all')
  }

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher un projet..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="relative"
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filtres
          {activeFiltersCount > 0 && (
            <Badge className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-blue-600">
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="flex flex-wrap items-center gap-4 p-4 bg-slate-50 rounded-lg border">
          {/* Status Filter */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700">Statut:</span>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les statuts</SelectItem>
                <SelectItem value="pending">En attente</SelectItem>
                <SelectItem value="in_progress">En cours</SelectItem>
                <SelectItem value="validated">Validé</SelectItem>
                <SelectItem value="paused">En pause</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Template Filter */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700">Template:</span>
            <Select value={template} onValueChange={setTemplate}>
              <SelectTrigger className="w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les templates</SelectItem>
                <SelectItem value="site-vitrine">Site Vitrine</SelectItem>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="app-mobile">App Mobile</SelectItem>
                <SelectItem value="identite-visuelle">Identité Visuelle</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Reset Button */}
          {activeFiltersCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleReset}
              className="ml-auto"
            >
              <X className="mr-2 h-4 w-4" />
              Réinitialiser
            </Button>
          )}
        </div>
      )}

      {/* Active Filters Pills */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2">
          {search && (
            <Badge variant="secondary" className="gap-1">
              Recherche: {search}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => setSearch('')}
              />
            </Badge>
          )}
          {status !== 'all' && (
            <Badge variant="secondary" className="gap-1">
              Statut: {status}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => setStatus('all')}
              />
            </Badge>
          )}
          {template !== 'all' && (
            <Badge variant="secondary" className="gap-1">
              Template: {template}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => setTemplate('all')}
              />
            </Badge>
          )}
        </div>
      )}
    </div>
  )
}