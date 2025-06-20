export const StatisticsCard = () => {
  return (
    <div className="h-full w-full flex flex-col gap-6 p-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl mb-4 relative">
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
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center">
            <span className="text-xs">📊</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">Analytics & KPI</h3>
        <p className="text-sm text-gray-600">
          Tableaux de bord pour optimiser vos revenus
        </p>
      </div>

      <div className="space-y-3">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-4 border border-indigo-200">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-indigo-800">
              Taux d&apos;occupation
            </span>
            <span className="text-lg font-bold text-indigo-600">87%</span>
          </div>
          <div className="w-full bg-indigo-200 rounded-full h-2">
            <div
              className="bg-indigo-500 h-2 rounded-full"
              style={{ width: '87%' }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200 text-center">
            <p className="text-xs text-emerald-600 font-medium">Revenus</p>
            <p className="text-lg font-bold text-emerald-700">+23%</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-3 border border-blue-200 text-center">
            <p className="text-xs text-blue-600 font-medium">Prévisions</p>
            <p className="text-lg font-bold text-blue-700">Q1-Q4</p>
          </div>
        </div>
      </div>

      <div className="text-center bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-3 border border-indigo-200">
        <p className="text-xs font-medium text-indigo-700">
          🎯 Décisions data-driven pour maximiser la rentabilité
        </p>
      </div>
    </div>
  )
}
