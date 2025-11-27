'use client'

import { useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'

const filters = [
  {
    name: 'Statut',
    options: [
      {
        name: 'Validé',
        value: 'validated',
      },
      {
        name: 'En cours',
        value: 'in_progress',
      },
      {
        name: 'En attente',
        value: 'pending',
      },
      {
        name: 'En pause',
        value: 'paused',
      },
    ],
  },
  {
    name: 'Type',
    options: [
      {
        name: 'E-commerce',
        value: 'e-commerce',
      },
      {
        name: 'Site Vitrine',
        value: 'site_vitrine',
      },
      {
        name: 'Identité Visuelle',
        value: 'identity_visuelle',
      },
      {
        name: 'Application Web',
        value: 'application_web',
      },
      {
        name: 'App Mobile',
        value: 'app_mobile',
      },
    ], 
  },
]

export function ProjectFilters() {
  const [open, setOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <h3 className="text-lg font-semibold text-slate-900">Filtres</h3>
        <Button
          variant="ghost"
          size="icon"
          className="shrink-0"
          onClick={() => setOpen(!open)}
        >
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuContent align="end">
          {filters.map((filter) => (
            <DropdownMenuItem key={filter.name}>          
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-slate-900">{filter.name}</h4>
                <Check
                  className="h-4 w-4"
                  onClick={() => {
                    if (selectedFilters.includes(filter.name)) {
                      setSelectedFilters(selectedFilters.filter((f) => f !== filter.name))
                    } else {
                      setSelectedFilters([...selectedFilters, filter.name])
                    }
                  }}
                />
              </div>
              <div className="mt-1 space-y-1">
                {filter.options.map((option) => (
                  <Button
                    key={option.name}
                    variant="ghost"
                    size="icon"
                    className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
                  >
                    <option.value className="h-4 w-4" />
                    {option.name}
                  </Button>
                ))}
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}