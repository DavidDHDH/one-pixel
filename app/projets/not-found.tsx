import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sand-100 px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-sand-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-sand-700 mb-2">
            Projet introuvable
          </h2>
          <p className="text-sand-600 leading-relaxed">
            Le projet que vous recherchez n&apos;existe pas ou a été supprimé.
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/projets">
            <Button className="bg-sand-600 hover:bg-sand-700 text-white px-6 py-2 rounded-lg transition-colors">
              Voir tous les projets
            </Button>
          </Link>

          <div>
            <Link
              href="/"
              className="text-sand-600 hover:text-sand-800 underline underline-offset-4 transition-colors"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
