import Link from 'next/link'
import { RegisterForm } from '@/components/auth/RegisterForm'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-2 py-2">
      {/* Back to Home */}
      <Link 
        href="/" 
        className="absolute top-8 left-8 flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Retour</span>
      </Link>

      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">C</span>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Créez votre compte
            </h1>
            <p className="text-slate-600">
              Commencez à créer vos cahiers des charges en quelques minutes
            </p>
          </div>

          {/* Register Form */}
          <RegisterForm />

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-slate-500">
                Vous avez déjà un compte ?
              </span>
            </div>
          </div>

          {/* Login Link */}
          <Link href="/login">
            <Button variant="outline" className="w-full">
              Se connecter
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-slate-600 mt-8">
          En créant un compte, vous acceptez nos{' '}
          <Link href="/terms" className="text-blue-600 hover:underline">
            Conditions d&apos;utilisation
          </Link>{' '}
          et notre{' '}
          <Link href="/privacy" className="text-blue-600 hover:underline">
            Politique de confidentialité
          </Link>
        </p>
      </div>
    </div>
  )
}