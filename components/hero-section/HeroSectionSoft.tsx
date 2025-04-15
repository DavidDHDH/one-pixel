"use client";

import { cn } from "@/lib/utils";
import logo from "@/public/images/logo.webp";
import profile from "@/public/images/profil-2.webp";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";
import AnimatedShinyText from "../ui/animated-shiny-text";

const navigation = [
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Services", href: "#services" },
  { name: "A propos de moi", href: "#aboutme" },
];

export default function HeroSectionSoft() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setRootElement(document.getElementById("calendly"));
  }, []);
  return (
    <div id="calendly" className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl">
          <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
            <nav
              aria-label="Global"
              className="flex items-center justify-between lg:justify-start"
            >
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">One Pixel - David Heimfert</span>
                <Image
                  src={logo}
                  alt="One Pixel - David Heimfert"
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
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">One Pixel - David Heimfert</span>
                ⬛️
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-2xl">
                <div className="hidden z-10 mb-10 sm:flex  items-center justify-start">
                  <div
                    className={cn(
                      "group rounded-full border border-black/5 text-sm/6 text-white transition-all ease-in "
                    )}
                  >
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                      <span> One Pixel - Web & Dev Studio</span>
                    </AnimatedShinyText>
                  </div>
                </div>
                <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                  Développement Web & Applications SaaS
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-600 sm:text-lg/8">
                  Je m&apos;appelle David. Vous avez une idée digitale ? Je la
                  transforme en outil métier performant, pensé pour simplifier,
                  automatiser et vous faire gagner du temps.
                </p>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-600 sm:text-lg/8">
                  🎯 Basé à Saint-Barthélemy. Disponible partout.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  {!rootElement && (
                    <div className="rounded-md bg-sand-700 px-3.5 py-2.5 transition-all text-sm font-semibold text-white shadow-sm hover:bg-sand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400">
                      Planifier un appel{" "}
                    </div>
                  )}
                  {rootElement && (
                    <PopupButton
                      url="https://calendly.com/david-heimfert/30min"
                      rootElement={rootElement}
                      text="Planifier un appel"
                      className="rounded-md bg-sand-700 px-3.5 py-2.5 transition-all text-sm font-semibold text-white shadow-sm hover:bg-sand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            src={profile}
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            alt="David Heimfert"
          />
        </div>
      </div>
    </div>
  );
}
