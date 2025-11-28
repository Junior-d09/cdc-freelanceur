"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {LayoutDashboard,FolderKanban,FileText,Settings,CreditCard,PlusCircle,LogOut,} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { signOut } from "next-auth/react";
import Image from "next/image";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Projets",
    href: "/dashboard/projects",
    icon: FolderKanban,
  },
  {
    name: "Templates",
    href: "/dashboard/templates",
    icon: FileText,
    badge: "V2",
  },
  {
    name: "Facturation",
    href: "/dashboard/billing",
    icon: CreditCard,
  },
  {
    name: "Paramètres",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 bg-white border-r border-slate-200">
      {/* Logo */}
      <div className="flex items-center h-16 px-6 border-b border-slate-200 justify-start">
        <Link href="/dashboard">
          <Image src="/images/logo-.png" alt="Logo" width={110} height={110} />
        </Link>
      </div>

      {/* Quick Action */}
      <div className="p-4">
        <Link href="/dashboard/projects/new">
          <Button className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            <PlusCircle className="mr-2 h-4 w-4" />
            Nouveau Projet
          </Button>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              <div className="flex items-center">
                <item.icon
                  className={cn(
                    "mr-3 h-5 w-5",
                    isActive ? "text-blue-700" : "text-slate-400"
                  )}
                />
                {item.name}
              </div>
              {item.badge && (
                <span className="px-2 py-0.5 text-xs font-semibold bg-slate-200 text-slate-700 rounded">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <Separator />

      {/* User Section */}
      <div className="p-4">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center w-full px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <LogOut className="mr-3 h-5 w-5 text-slate-400" />
          Déconnexion
        </button>
      </div>
    </div>
  );
}
