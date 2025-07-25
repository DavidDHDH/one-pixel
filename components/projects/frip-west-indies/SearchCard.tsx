export const SearchCard = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4 p-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-3 relative">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center">
            <span className="text-xs">🔥</span>
          </div>
        </div>
        <h3 className="text-lg font-bold mb-1">Recherches avancées</h3>
        <p className="text-sm text-gray-600">
          Trouvez exactement ce que vous cherchez
        </p>
      </div>

      <div className="flex-1 space-y-3">
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-3 border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <svg
              className="w-4 h-4 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <h4 className="text-sm font-semibold text-orange-800">
              Filtres intelligents
            </h4>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white rounded px-2 py-1 text-xs text-gray-700 border border-orange-200">
              📏 Taille
            </div>
            <div className="bg-white rounded px-2 py-1 text-xs text-gray-700 border border-orange-200">
              🎨 Couleur
            </div>
            <div className="bg-white rounded px-2 py-1 text-xs text-gray-700 border border-orange-200">
              💰 Prix
            </div>
            <div className="bg-white rounded px-2 py-1 text-xs text-gray-700 border border-orange-200">
              🏷️ Marque
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <svg
              className="w-4 h-4 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <h4 className="text-sm font-semibold text-green-800">
              Recherche locale
            </h4>
          </div>
          <p className="text-xs text-green-700">
            Articles disponibles près de chez vous
          </p>
          <div className="mt-2 flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-600">
              Saint Barthélemy • Saint Martin ...
            </span>
          </div>
        </div>
      </div>
      <div className="text-center bg-gradient-to-r from-purple-100 to-purple-100 rounded-lg p-2 border border-purple-300">
        <p className="text-xs font-bold text-purple-800">
          🔥 Fonctionne meme avec des fautes d&apos;orthographe
        </p>
      </div>
    </div>
  )
}
