import Link from "next/link";
import { LoginForm } from "@/components/auth/LoginForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center px-2 py-2">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">

          {/* Logo */}
          <div className="flex justify-center mb-8 mt-8">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={70}
              height={70}
            />
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Bon retour !</h1>
            <p className="text-slate-600">
              Connectez-vous pour accéder à votre dashboard
            </p>
          </div>

          {/* Login Form */}
          <LoginForm />

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-slate-500">
                Pas encore de compte ?
              </span>
            </div>
          </div>

          {/* Sign Up Link */}
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

