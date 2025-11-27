import Link from "next/link";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className=" flex items-center justify-center p-4 h-screen">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-xl shadow-lg p-5 border border-slate-200">

          {/* Logo */}
          <div className="flex justify-center mb-2 mt-2">
            <Image
              src="/images/logo-.png"
              alt="Logo"
              width={70}
              height={70}
              className="rounded-xl"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-2">
            <h1 className="text-xl font-bold text-slate-900">Créez votre compte</h1>
            <p className="text-slate-600 text-sm">
              Commencez en quelques minutes
            </p>
          </div>

          {/* Register Form */}
          <RegisterForm />

          {/* Divider */}
          <div className="relative my-3">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-white text-slate-500">
                Vous avez déjà un compte ?
              </span>
            </div>
          </div>

          {/* Login button */}
          <Link href="/login">
            <Button variant="outline" className="w-full text-sm h-9">
              Se connecter
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}

