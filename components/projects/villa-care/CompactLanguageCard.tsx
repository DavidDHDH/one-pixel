export const CompactLanguageCard = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-2">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      </div>
      <div className="text-center">
        <h4 className="text-sm font-bold mb-1">Multilingue</h4>
        <div className="text-lg">🇫🇷 🇬🇧</div>
      </div>
    </div>
  )
}