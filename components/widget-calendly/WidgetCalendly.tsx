'use client'

import { useState } from 'react'

export default function WidgetCalendly() {
  const [isOpen, setIsOpen] = useState(false)

  const CalendlyInline = () => (
    <div className="fixed bottom-0 right-0 z-50 m-4">
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
        <div className="bg-sand-700 text-white p-3 flex justify-between items-center">
          <span className="font-medium">Planifier du temps avec moi</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200 text-xl font-bold"
          >
            ×
          </button>
        </div>
        <iframe
          src="https://calendly.com/david-heimfert/30min"
          width="400"
          height="500"
          title="Calendly - David Heimfert"
        />
      </div>
    </div>
  )

  // Bouton flottant (remplace le badge Calendly)
  const FloatingButton = () => (
    <button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-sand-700 to-sand-600 text-white shadow-lg hover:bg-sand-700 transition-all duration-300 transform hover:scale-105 font-medium rounded-full flex items-center gap-3 px-4 py-2"
    >
      {/* Icône calendrier sur toute la hauteur */}
      <div className="text-xl flex items-center justify-center">📅</div>

      {/* Texte sur deux lignes */}
      <div className="text-xs text-center leading-tight">
        <div className="font-semibold">Bloque ton créneau</div>
        <div className="opacity-90">dans mon agenda</div>
      </div>
    </button>
  )

  return (
    <>
      {/* Bouton flottant qui remplace le badge */}
      <FloatingButton />

      {/* Widget inline qui s'ouvre quand on clique */}
      {isOpen && <CalendlyInline />}
    </>
  )
}
