import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "About us", href: "https://techethio.com/about" },
  { name: "Services", href: "https://techethio.com/services" },
  { name: "Portfolio", href: "https://techethio.com/portfolio" },
  { name: "Hosting", href: "https://techethio.com/hosting" },
  { name: "Careers", href: "https://techethio.com/careers" },
  { name: "Contact us", href: "https://techethio.com/contact-us" },
];

export default function Navbar() {
  return (
    <div className="py-3 px-3 fixed bg-white w-full z-50 mb-40">
      <div className="mx-auto max-w-7xl">
        <svg
          className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <Popover>
          <div className="relative">
            <div className="flex flex items-center justify-between">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <Link href="/" className="flex space-x-2 items-center">
                      <Image
                        alt="Your Company"
                        className="h-8 w-auto sm:h-10"
                        src="/logo.png"
                        width={50}
                        height={50}
                      />
                      <span className="text-2xl font-extrabold text-blue-600">
                        EtyopChat
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
              <div className="rounded-full shadow bg-gree-600">
                <Link
                  href="/chat"
                  className="flex hidden md:block w-full items-center justify-center rounded-full border border-transparent bg-blue-600 px-5 py-2 text-base font-medium text-white hover:bg-blue-700 md:py-2 md:px-10 md:text-lg"
                >
                 Get Started
                </Link>
              </div>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-blue-600 hover:bg-gray-100 hover:text-gray-500 focus:outline-none ">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <div className="flex items-center justify-between px-5 pt-4">
                  <Link href="/" className="flex space-x-2 items-center">
                    <Image
                      alt="Your Company"
                      className="h-8 w-auto sm:h-10"
                      src="/logo.png"
                      width={50}
                      height={50}
                    />
                    <span className="text-2xl font-extrabold text-blue-600">
                      TechEthio
                    </span>
                  </Link>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-red-600 focus:outline-none">
                      <span className="sr-only">Close main menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <Link
                  href="/chat"
                  className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-blue-600 hover:bg-gray-100"
                >
                  Try ChatGPT
                </Link>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
}
