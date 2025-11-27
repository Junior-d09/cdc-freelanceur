import Link from "next/link";
import { LoginForm } from "@/components/auth/LoginForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={60}
              height={60}
              className="rounded-xl"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-slate-900">Bon retour !</h1>
            <p className="text-slate-600 text-sm">
              Connectez-vous pour accéder à votre dashboard
            </p>
          </div>

          {/* Login form */}
          <LoginForm />

          {/* Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white text-slate-500">
                Pas encore de compte ?
              </span>
            </div>
          </div>

          <Link href="/register">
            <Button variant="outline" className="w-full">
              Créer un compte
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
