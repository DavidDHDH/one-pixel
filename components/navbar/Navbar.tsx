'use client'

import logo from '@/public/images/logo.webp'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      // Déclencher la navbar flottante après 300px de scroll
      setIsScrolled(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fonction pour générer le lien "A propos" dynamique
  const getAboutLink = () => {
    if (pathname === '/') {
      return '/#aboutme'
    }
    return '#aboutme'
  }

  const navigation = [
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Sites internet', href: '/creation-site-internet' },
    { name: 'Applications métier', href: '/applications-metiers' },
    { name: 'Expertise IA', href: '/expertise-ia' },
    { name: 'A propos', href: getAboutLink() },
  ]

  return (
    <>
      {/* Navbar originale */}
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl">
          <div className="px-6 pt-6 lg:max-w-4xl lg:pl-8 lg:pr-0">
            <nav
              aria-label="Global"
              className="flex items-center justify-between lg:justify-start"
            >
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">
                  Logo One Pixel, studio de développement web
                </span>
                <Image
                  src={logo}
                  alt="Logo One Pixel, studio de développement web"
                  className="w-6 h-6"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
              <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm/6 font-semibold text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Navbar flottante avec effet glassy */}
      <div
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-[99] transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'translate-y-0 opacity-100'
            : '-translate-y-16 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="bg-white/40 backdrop-blur-lg border border-white/20 shadow-lg rounded-full px-6 py-3 hover:bg-white/80 transition-all duration-300">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <Image src={logo} alt="Logo One Pixel" className="w-5 h-5" />
            </a>

            {/* Navigation links - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-800 hover:text-sand-700 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-1.5 text-gray-700"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-x-0 top-0 z-[100] w-full bg-white px-6 py-6 shadow-xl transform transition-all duration-300 ease-out data-[closed]:-translate-y-full data-[closed]:opacity-0">
          <div className="flex items-center justify-between">
            <span className="sr-only">
              Logo One Pixel, studio de développement web
            </span>
            <Image
              src={logo}
              alt="Logo One Pixel, studio de développement web"
              className="w-6 h-6"
            />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="space-y-3">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-lg font-semibold text-gray-900 hover:bg-sand-50 hover:text-sand-700 transition-all duration-200 transform hover:scale-105"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: mobileMenuOpen
                      ? 'slideInFromTop 0.3s ease-out forwards'
                      : 'none',
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  )
}
