"use client"

import { useState } from "react"
import { Dialog, DialogPanel } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import beach2 from "@/public/images/Ai Generated Beach Pixel Art.png"
import Button from "../shared/Button"
// import { PopupButton } from "react-calendly"

const navigation = [
	{ name: "Portfolio", href: "#portfolio" },
	{ name: "Testimonials", href: "#testimonials" },
	{ name: "Services", href: "#services" },
	{ name: "A propos de moi", href: "#aboutme" },
]

export default function HeroSection() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<div className="bg-gray-900 min-h-sceen">
			<header className="absolute inset-x-0 top-0 z-50">
				<nav
					aria-label="Global"
					className="flex items-center justify-between p-6 lg:px-8">
					<div className="flex lg:flex-1">
						<a
							href="#"
							className="-m-1.5 p-1.5">
							<span className="sr-only">One Pixel - David Heimfert</span>
							<img
								alt=""
								src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
								className="h-8 w-auto"
							/>
						</a>
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							onClick={() => setMobileMenuOpen(true)}
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400">
							<span className="sr-only">Open main menu</span>
							<Bars3Icon
								aria-hidden="true"
								className="h-6 w-6"
							/>
						</button>
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-sm font-semibold leading-6 text-white">
								{item.name}
							</a>
						))}
					</div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<a
							href="#"
							className="text-sm font-semibold leading-6 text-white">
							Log in <span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</nav>
				<Dialog
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
					className="lg:hidden">
					<div className="fixed inset-0 z-50" />
					<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
						<div className="flex items-center justify-between">
							<a
								href="#"
								className="-m-1.5 p-1.5">
								<span className="sr-only">Your Company</span>
								<img
									alt=""
									src="https://tailwindui.com/plus/Image/logos/mark.svg?color=indigo&shade=500"
									className="h-8 w-auto"
								/>
							</a>
							<button
								type="button"
								onClick={() => setMobileMenuOpen(false)}
								className="-m-2.5 rounded-md p-2.5 text-gray-400">
								<span className="sr-only">Close menu</span>
								<XMarkIcon
									aria-hidden="true"
									className="h-6 w-6"
								/>
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/25">
								<div className="space-y-2 py-6">
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">
											{item.name}
										</a>
									))}
								</div>
								<div className="py-6">
									<a
										href="#"
										className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">
										Log in
									</a>
								</div>
							</div>
						</div>
					</DialogPanel>
				</Dialog>
			</header>

			<div className="relative isolate overflow-hidden -pt-14 h-full">
				<Image
					alt=""
					src={beach2}
					className="absolute inset-0 -z-10 h-full w-full object-cover"
				/>
				<div className="bg-black absolute inset-0 -z-10 h-full w-full opacity-50"></div>
				<div
					aria-hidden="true"
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
					<div
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					/>
				</div>
				<div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
					<div className="hidden sm:mb-8 sm:flex sm:justify-center">
						<div className="relative  px-3 py-1 text-sm leading-6 text-gray-100 ring-1 ring-white/10 hover:ring-white/20 rounded-full">
							One Pixel - Web & Dev Studio
						</div>
					</div>
					<div className="text-center">
						<h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">
							Transformez vos idées en succès grâce à des solutions numériques
							sur mesure.
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl mx-auto">
							Bienvenue. Ici, j&apos;aide les entreprises et les entrepreneurs à
							réduire leurs coûts et concrétiser leurs idées d&apos;innovations,
							en développant des applications métiers et logiciels SAAS sur
							mesure. Faisons connaissance.
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl mx-auto">
							Faisons connaissance.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Button
								label="Découvrir"
								href="#portfolio"
							/>
							<Button
								label="Planifier un appel"
								href="#portfolio"
							/>
							{/* <PopupButton
								url="https://calendly.com/david-heimfert/30min"
								rootElement={document.getElementById("root") as HTMLElement}
								text="Planifier un appel"
								className="rounded-md border px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
							/> */}
						</div>
					</div>
				</div>
				<div
					aria-hidden="true"
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
					<div
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					/>
				</div>
			</div>
		</div>
	)
}