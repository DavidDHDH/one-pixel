export const PriceNegotiationCard = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-2 p-4">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="text-center">
        <h4 className="text-sm font-bold mb-1">Négociation</h4>
        <div className="flex items-center justify-center gap-1">
          <span className="text-xs text-gray-600">Prix flexible</span>
          <svg
            className="w-3 h-3 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </div>
      </div>
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg px-3 py-1.5 border border-yellow-300">
        <p className="text-xs font-bold text-orange-700">-15% moy.</p>
      </div>
    </div>
  )
}
