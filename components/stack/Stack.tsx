export default function Stack() {
	return (
		<div className="bg-white pb-24 sm:pb-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<p className="text-lg font-semibold leading-7 mb-4">
					Mes technologies favorites
				</p>
				<div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
					<div className="bg-gray-400/5 p-8 sm:p-10">
						<img
							alt="NextJS"
							src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
							width={158}
							height={48}
							className="max-h-12 w-full object-contain"
						/>
					</div>
					<div className="bg-gray-400/5 p-6 sm:p-10">
						<img
							alt="TypeScript"
							src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
							width={158}
							height={48}
							className="max-h-12 w-full object-contain"
						/>
					</div>
					<div className="bg-gray-400/5 p-6 sm:p-10">
						<img
							alt="Supabase"
							src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
							width={158}
							height={48}
							className="max-h-12 w-full object-contain"
						/>
					</div>
					<div className="bg-gray-400/5 p-6 sm:p-10">
						<img
							alt="Firebase"
							src="https://tailwindui.com/plus/img/logos/158x48/laravel-logo-gray-900.svg"
							width={158}
							height={48}
							className="max-h-12 w-full object-contain"
						/>
					</div>
					<div className="bg-gray-400/5 p-6 sm:p-10">
						<img
							alt="TailwindCSS"
							src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
							width={158}
							height={48}
							className="max-h-12 w-full object-contain"
						/>
					</div>
					<div className="bg-gray-400/5 p-6 sm:p-10">
						<img
							alt="CSS Vanilla"
							src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
							width={158}
							height={48}
							className="max-h-12 w-full object-contain"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
