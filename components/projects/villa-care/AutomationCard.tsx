export const AutomationCard = () => {
  return (
    <div className="h-full w-full flex flex-col gap-6 p-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl mb-4 relative">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-xs">⚡</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">
          Automatisations intelligentes
        </h3>
        <p className="text-sm text-gray-600">
          80% des tâches répétitives automatisées
        </p>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">Envois automatiques</p>
            <p className="text-xs text-gray-600">Plannings, confirmations, relances</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM12 17h.01M7 17h.01M3 17h.01M12 7h.01M7 7h.01M3 7h.01" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">Notifications temps réel</p>
            <p className="text-xs text-gray-600">Nouvelles demandes, changements</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">Suivi automatisé</p>
            <p className="text-xs text-gray-600">Rappels, escalades, workflows</p>
          </div>
        </div>
      </div>
      
      <div className="text-center bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-3 border border-violet-200">
        <p className="text-xs font-medium text-violet-700">
          ⏱️ Gain de temps : <span className="font-bold">4h/jour</span>
        </p>
      </div>
    </div>
  )
}