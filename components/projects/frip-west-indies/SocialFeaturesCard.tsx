export const SocialFeaturesCard = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4 p-5">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl mb-3 relative">
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
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center">
            <span className="text-sm">✨</span>
          </div>
        </div>
        <h3 className="text-lg font-bold mb-1">Fonctionnalités sociales</h3>
        <p className="text-xs text-gray-600">
          Créez votre communauté de mode seconde main
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3 border border-purple-200">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 bg-purple-500 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
            <h4 className="text-sm font-semibold text-purple-900">
              Abonnements
            </h4>
          </div>
          <p className="text-xs text-purple-700">
            Suivez vos vendeurs préférés
          </p>
          <div className="mt-2 bg-purple-200 rounded-md px-2 py-0.5 inline-block">
            <span className="text-xs text-purple-800 font-bold">
              850+ créateurs
            </span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-lg p-3 border border-violet-200">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 bg-violet-500 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h4 className="text-sm font-semibold text-violet-900">Likes</h4>
          </div>
          <p className="text-xs text-violet-700">
            Sauvegardez vos articles favoris
          </p>
          <div className="mt-2 flex items-center gap-1.5">
            <div className="flex -space-x-1">
              <div className="w-4 h-4 bg-violet-300 rounded-full border border-white"></div>
              <div className="w-4 h-4 bg-violet-400 rounded-full border border-white"></div>
              <div className="w-4 h-4 bg-violet-500 rounded-full border border-white"></div>
            </div>
            <span className="text-xs text-violet-600 font-medium">
              +1.2k aujourd&apos;hui
            </span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-3 border border-pink-200 col-span-2">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 bg-pink-500 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <h4 className="text-sm font-semibold text-pink-900">
              Notifications
            </h4>
          </div>
          <p className="text-xs text-pink-700">
            Alertes nouveaux articles, prix, likes, follow...
          </p>
          <div className="mt-2 flex items-center gap-1.5">
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-pink-600">En temps réel</span>
          </div>
        </div>
      </div>

      <div className="text-center bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-3 border border-pink-200">
        <p className="text-xs font-medium text-purple-700">
          👥 <span className="font-bold">750+ membres actifs</span> dans la
          communauté
        </p>
      </div>
    </div>
  )
}
