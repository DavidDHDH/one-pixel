import { BellRing } from 'lucide-react'

export const PlanningCard = () => {
  return (
    <div className="h-full w-full flex flex-col gap-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-4">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="flex items-center justify-center gap-2 mb-3">
          <h3 className="text-xl font-bold">Planning temps réel</h3>

          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          </div>
          <BellRing className="w-4 h-4 text-emerald-500 " />
        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="text-sm text-gray-600">
            Fini les Excel partagés, place à la synchronisation et aux
            notifications instantanées.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3 p-3 bg-emerald-50 hover:bg-emerald-100 transition-colors duration-300 rounded-xl border border-emerald-200">
          <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
            <span className="text-emerald-600 font-bold text-xs">REQ</span>
          </div>
          <span className="text-sm font-medium text-emerald-800">
            Demandes d options
          </span>
        </div>

        <div className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 transition-colors duration-300 rounded-xl border border-blue-200">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-blue-600 font-bold text-xs">OPT</span>
          </div>
          <span className="text-sm font-medium text-blue-800">
            Options en cours
          </span>
        </div>

        <div className="flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 transition-colors duration-300 rounded-xl border border-purple-200">
          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
            <span className="text-purple-600 font-bold text-xs">✓</span>
          </div>
          <span className="text-sm font-medium text-purple-800">
            Réservations confirmées
          </span>
        </div>
      </div>

      <div className="text-center">
        <p className="text-xs text-gray-500 bg-gray-50 rounded-lg p-2">
          🔒 Accès sécurisé selon votre rôle
        </p>
      </div>
    </div>
  )
}
