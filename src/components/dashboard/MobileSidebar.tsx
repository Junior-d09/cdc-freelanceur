'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  LayoutDashboard,
  FolderKanban,
  FileText,
  Settings,
  CreditCard,
  PlusCircle,
  LogOut,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { signOut } from 'next-auth/react'

const navigation = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Projets',
    href: '/dashboard/projects',
    icon: FolderKanban,
  },
  {
    name: 'Templates',
    href: '/dashboard/templates',
    icon: FileText,
    badge: 'V2',
  },
  {
    name: 'Facturation',
    href: '/dashboard/billing',
    icon: CreditCard,
  },
  {
    name: 'Paramètres',
    href: '/dashboard/settings',
    icon: Settings,
  },
]

export function MobileSidebar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="left" className="w-64 p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold">CDC Pro</span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {/* Quick Action */}
          <div className="p-4">
            <Link href="/dashboard/projects/new" onClick={() => setOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">
                <PlusCircle className="mr-2 h-4 w-4" />
                Nouveau Projet
              </Button>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-700 hover:bg-slate-100'
                  )}
                >
                  <div className="flex items-center">
                    <item.icon className={cn('mr-3 h-5 w-5', isActive ? 'text-blue-700' : 'text-slate-400')} />
                    {item.name}
                  </div>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-xs font-semibold bg-slate-200 text-slate-700 rounded">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )
            })}
          </nav>

          <Separator />

          {/* Logout */}
          <div className="p-4">
            <button
              onClick={() => {
                setOpen(false)
                signOut({ callbackUrl: '/' })
              }}
              className="flex items-center w-full px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              <LogOut className="mr-3 h-5 w-5 text-slate-400" />
              Déconnexion
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}