export const WorkspacesCard = () => {
  return (
    <div className="h-full w-full flex flex-col gap-6 p-2">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4">
          <span className="text-2xl text-white font-bold">4</span>
        </div>
        <h3 className="text-xl font-bold mb-2">Espaces personnalisés</h3>
        <p className="text-sm text-gray-600">
          Chaque utilisateur accède uniquement aux informations pertinentes selon son rôle
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <h4 className="font-semibold text-blue-900">Manager</h4>
          </div>
          <p className="text-xs text-blue-700 leading-relaxed">
            Dashboard complet, gestion des équipes, des travaux, de
            l&apos;inventaire, des contrats, rapports avancés...
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <h4 className="font-semibold text-purple-900">Agence</h4>
          </div>
          <p className="text-xs text-purple-700 leading-relaxed">
            Demande d&apos;options, suivi des réservations, centralisation des
            informations, plannings temps réel...
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200 opacity-75">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <h4 className="font-semibold text-green-900">Propriétaire</h4>
            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
              À venir
            </span>
          </div>
          <p className="text-xs text-green-700 leading-relaxed">
            Vue de ses biens, calendrier simplifié, revenus, demandes de
            travaux...
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <h4 className="font-semibold text-orange-900">Employé</h4>
          </div>
          <p className="text-xs text-orange-700 leading-relaxed">
            Lecture seule des biens, certaines informations clients /
            propriétaire masquées, gestion de l&apos;inventaire.
          </p>
        </div>
      </div>
    </div>
  )
}
