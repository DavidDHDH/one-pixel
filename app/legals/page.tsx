import { CONTACT_EMAIL } from '@/lib/const'

export default function Legals() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="prose prose-lg prose-gray mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-12">
          ⚙️ Mentions légales
        </h1>
        <section className="-mt-12">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Éditeur du site
            </h2>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Nom de l&apos;entreprise :</span>{' '}
                One Pixel
              </p>
              <p>
                <span className="font-medium">Forme juridique :</span>{' '}
                Auto-entrepreneur
              </p>
              <p>
                <span className="font-medium">SIRET :</span> 920411824 00013
              </p>
              <p>
                <span className="font-medium">
                  Responsable de la publication :
                </span>{' '}
                David Heimfert
              </p>
              <p>
                <span className="font-medium">Adresse :</span> Logement Eden
                Rock, Baie de Saint Jean, 97133 Saint-Barthélemy
              </p>
              <p>
                <span className="font-medium">Email :</span>{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Hébergeur
            </h2>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Nom de l&apos;hébergeur :</span>{' '}
                Vercel Inc.
              </p>
              <p>
                <span className="font-medium">Adresse :</span> 650 California
                St, San Francisco, CA 94108, US
              </p>
              <p>
                <span className="font-medium">Site :</span>{' '}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  https://vercel.com
                </a>
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Propriété intellectuelle
            </h2>
            <p className="text-gray-600">
              Le contenu de ce site (textes, images, graphismes, logo, etc.) est
              protégé par le droit d&apos;auteur. Toute reproduction ou
              utilisation non autorisée est interdite sans accord préalable.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Données personnelles
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Ce site ne collecte aucune donnée personnelle directement. Un
                outil de mesure de fréquentation respectueux de la vie privée
                est utilisé <span className="font-semibold">sans cookie</span>{' '}
                et <span className="font-semibold">sans suivi individuel</span>.
              </p>
              <p className="text-gray-600">
                Aucune donnée personnelle n&apos;est stockée ou partagée avec
                des tiers.
              </p>
              <p className="text-gray-600">
                Pour toute question sur la confidentialité ou l&apos;usage du
                site :{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Cookies
            </h2>
            <p className="text-gray-600">
              Ce site n&apos;utilise{' '}
              <span className="font-semibold">
                aucun cookie nécessitant le consentement
              </span>
              . Aucune technologie de tracking ou de publicité n&apos;est
              installée.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
