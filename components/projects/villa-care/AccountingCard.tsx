export const AccountingCard = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4 p-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br  from-indigo-500 to-blue-600  rounded-2xl mb-3 relative">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <h3 className="text-lg font-bold mb-1">Comptabilité</h3>
        <p className="text-xs text-gray-600">
          Gestion complète de la facturation et des rapports
        </p>
      </div>

      <div className="space-y-2.5">
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 text-center hover:shadow-md transition-shadow">
            <div className="text-lg mb-1">💰</div>
            <p className="text-xs font-medium text-amber-800">
              Suivi
              <br />
              factures
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-3 border border-blue-200 text-center hover:shadow-md transition-shadow">
            <div className="text-lg mb-1">📊</div>
            <p className="text-xs font-medium text-blue-800">
              Rapports
              <br />
              mensuels
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-3 border border-green-200 text-center hover:shadow-md transition-shadow">
            <div className="text-lg mb-1">📈</div>
            <p className="text-xs font-medium text-green-800">
              Rapports
              <br />
              annuels
            </p>
          </div>
          <div className="bg-purple-50 rounded-lg p-3 border border-purple-200 text-center hover:shadow-md transition-shadow">
            <div className="text-lg mb-1">📥</div>
            <p className="text-xs font-medium text-purple-800">
              Export
              <br />
              Excel
            </p>
          </div>
        </div>

        <div className="border-t border-indigo-200 pt-2.5 mt-1">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
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
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              <p className="text-xs text-gray-700">
                <span className="font-semibold">
                  Catégories personnalisables :
                </span>{' '}
                jardin, piscine, entretien, électricité...
              </p>
            </div>
            <div className="flex items-center gap-2">
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
              <p className="text-xs text-gray-700">
                <span className="font-semibold">
                  Upload factures sur mobile{' '}
                </span>{' '}
                pour les employés avant validation par les managers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
