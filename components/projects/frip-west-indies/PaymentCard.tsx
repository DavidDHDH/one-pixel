export const PaymentCard = () => {
  return (
    <div className="h-full w-full flex flex-col gap-3 p-5">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl mb-3 relative">
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
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
            <svg
              className="w-3 h-3 text-yellow-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
        </div>
        <h3 className="text-lg font-bold mb-1">Paiement sécurisé</h3>
        <p className="text-sm text-gray-600">
          Transactions 100% sécurisées avec Stripe et protection acheteur
        </p>
      </div>

      <div className="grid grid-cols-4 gap-1.5">
        <div className="bg-blue-50 rounded-md p-1.5 border border-blue-200 flex items-center justify-center">
          <svg className="w-6 h-4" viewBox="0 0 48 32" fill="none">
            <rect width="48" height="32" rx="4" fill="#1A1F71" />
            <path d="M20 10h8v12h-8V10z" fill="#EB001B" />
            <path
              d="M21.5 16a7.5 7.5 0 014.5-6.9 7.5 7.5 0 100 13.8 7.5 7.5 0 01-4.5-6.9z"
              fill="#F79E1B"
            />
            <path
              d="M35 16a7.5 7.5 0 01-7.5 7.5 7.5 7.5 0 01-4.5-1.6 7.5 7.5 0 000-11.8A7.5 7.5 0 0135 16z"
              fill="#EB001B"
            />
          </svg>
        </div>
        <div className="bg-indigo-50 rounded-md p-1.5 border border-indigo-200 flex items-center justify-center">
          <svg className="w-6 h-4" viewBox="0 0 48 32" fill="none">
            <rect width="48" height="32" rx="4" fill="#1A1F71" />
            <path
              d="M19 20.5l-3-8.5h2.2l1.8 5.5 1.8-5.5H24l-3 8.5h-2zm6 0V12h2v8.5h-2zm7.5.2c-1.8 0-3.2-1.2-3.2-3s1.4-3 3.2-3c1 0 1.8.4 2.3 1l-1 1c-.3-.4-.8-.6-1.3-.6-.9 0-1.6.7-1.6 1.6s.7 1.6 1.6 1.6c.5 0 1-.2 1.3-.6l1 1c-.5.6-1.3 1-2.3 1z"
              fill="white"
            />
          </svg>
        </div>
        <div className="bg-green-50 rounded-md p-1.5 border border-green-200 flex items-center justify-center">
          <svg className="w-6 h-4" viewBox="0 0 48 32" fill="none">
            <rect width="48" height="32" rx="4" fill="#00D632" />
            <path
              d="M24 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12.8c-2.6 0-4.8-2.2-4.8-4.8s2.2-4.8 4.8-4.8 4.8 2.2 4.8 4.8-2.2 4.8-4.8 4.8z"
              fill="white"
            />
            <path
              d="M24 13.2c-1.5 0-2.8 1.3-2.8 2.8s1.3 2.8 2.8 2.8 2.8-1.3 2.8-2.8-1.3-2.8-2.8-2.8z"
              fill="white"
            />
          </svg>
        </div>
        <div className="bg-yellow-50 rounded-md p-1.5 border border-yellow-200 flex items-center justify-center">
          <svg className="w-6 h-4" viewBox="0 0 48 32" fill="none">
            <rect width="48" height="32" rx="4" fill="#FF5F00" />
            <path
              d="M20 10v12h-4V10h4zm4 0l2 8 2-8h4l-4 12h-4l-4-12h4zm12 8h-4v4h-4V10h8v4h-4v4z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div className="space-y-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg
              className="w-4 h-4 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">
              Protection acheteur
            </p>
            <p className="text-sm text-gray-600">
              Remboursement garanti si problème
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg
              className="w-4 h-4 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">
              Paiement instantané
            </p>
            <p className="text-sm text-gray-600">Validation en temps réel</p>
          </div>
        </div>
      </div>
    </div>
  )
}
