export const ShippingLabelCard = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-2 p-4">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl">
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
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      </div>
      <div className="text-center">
        <h4 className="text-sm font-bold mb-1">Colissimo</h4>
        <div className="flex items-center justify-center gap-1">
          <span className="text-xs text-gray-600">📄</span>
          <span className="text-xs text-gray-600">Bordereau auto</span>
        </div>
      </div>
      <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg px-3 py-1.5 border border-red-300">
        <p className="text-xs font-bold text-red-700">📦 Direct</p>
      </div>
    </div>
  )
}
