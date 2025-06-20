export const CompactDarkModeCard = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-2">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-slate-600 to-gray-700 rounded-xl">
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
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      </div>
      <div className="text-center">
        <h4 className="text-sm font-bold mb-1">Dark Mode</h4>
        <div className="flex items-center justify-center gap-1">
          <div className="w-4 h-2 bg-slate-300 rounded-full relative">
            <div className="w-2 h-2 bg-slate-600 rounded-full absolute right-0"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
