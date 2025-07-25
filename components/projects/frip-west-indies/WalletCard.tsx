export const WalletCard = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4 p-5">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl mb-3 relative">
          <svg
            className="w-9 h-9 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
          <div className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
            <span className="text-sm">💰</span>
          </div>
        </div>
        <h3 className="text-lg font-bold mb-1">Porte-monnaie en ligne</h3>
        <p className="text-sm text-gray-600">
          Gérez vos revenus et dépenses facilement
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl p-3.5 border border-blue-300">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs text-blue-600 mb-0.5">Solde disponible</p>
            <p className="text-xl font-bold text-blue-900">€125,80</p>
          </div>
          <div className="bg-white rounded-md px-2 py-1 border border-blue-300">
            <p className="text-xs font-medium text-blue-700">Vérifié ✓</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white rounded-md p-2 border border-blue-200">
            <p className="text-xs text-gray-600">Ce mois</p>
            <p className="text-sm font-bold text-green-600">+€320</p>
          </div>
          <div className="bg-white rounded-md p-2 border border-blue-200">
            <p className="text-xs text-gray-600">En attente</p>
            <p className="text-sm font-bold text-orange-600">€45</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-gray-800">Fonctionnalités</h4>

        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-1.5 bg-blue-50 rounded-md p-2.5 border border-blue-200">
            <svg
              className="w-4 h-4 text-blue-600 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <p className="text-xs font-medium text-blue-800">
              Retrait simplifié
            </p>
          </div>

          <div className="flex items-center gap-1.5 bg-green-50 rounded-md p-2.5 border border-green-200">
            <svg
              className="w-4 h-4 text-green-600 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-xs font-medium text-green-800">
              Sans frais cachés
            </p>
          </div>

          <div className="flex items-center gap-1.5 bg-amber-50 rounded-md p-2.5 border border-amber-200 col-span-2 justify-center">
            <svg
              className="w-4 h-4 text-amber-600 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <p className="text-xs font-medium text-amber-800">
              Historique détaillé
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
