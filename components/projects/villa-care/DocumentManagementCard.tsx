export const DocumentManagementCard = () => {
  return (
    <div className="h-full w-full flex flex-col gap-6 p-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl mb-4 relative">
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
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v0"
            />
          </svg>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
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
        <h3 className="text-xl font-bold mb-2">Hub documentaire</h3>
        <p className="text-sm text-gray-600">
          Tous vos documents centralisés et sécurisés
        </p>
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-amber-50 rounded-lg p-2 md:p-1 xl:p-2 border border-amber-200 text-center">
            <div className="text-lg font-bold text-amber-600">📋</div>
            <p className="text-xs font-medium text-amber-800">Mandats</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-2 md:p-1 xl:p-2 border border-blue-200 text-center">
            <div className="text-lg font-bold text-blue-600">📄</div>
            <p className="text-xs font-medium text-blue-800">Contrats</p>
          </div>
          <div className="bg-green-50 rounded-lg p-2 md:p-1 xl:p-2 border border-green-200 text-center">
            <div className="text-lg font-bold text-green-600">📝</div>
            <p className="text-xs font-medium text-green-800">Inventaires</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-2 md:p-1 xl:p-2 border border-purple-200 text-center">
            <div className="text-lg font-bold text-purple-600">📸</div>
            <p className="text-xs font-medium text-purple-800">Photos</p>
          </div>
        </div>
      </div>
    </div>
  )
}
