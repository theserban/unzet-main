"use client";
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-scroll';

const navigation = [
  { name: 'Archive', href: 'projects' },
  { name: 'Process', href: 'how' },
  { name: 'Insights', href: 'testimonials' },
  { name: 'Pricing', href: 'pricing' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  
  return (
    <div className="bg-black">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Unzet</span>
              <img
                className="h-auto w-32 transform transition-transform duration-500 hover:scale-105"
                src="/photos/logo.svg"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                smooth={true}
                duration={500}
                className="cursor-pointer text-sm font-semibold leading-6 text-white hover:text-gray-200 transform transition-transform duration-500 hover:scale-105"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button 
              data-cal-namespace=""
              data-cal-link="weunzet/30min"
              data-cal-config='{"layout":"month_view"}'
            className="rounded-tr-lg rounded-bl-lg outline text-white px-4 py-2.5 text-xs font-semibold shadow-sm hover:bg-secondary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500 transform transition-transform duration-500 hover:scale-105 flex items-center">
              <span className='pr-2'>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-white opacity-100"></span>
                  <span className="relative inline-flex pb-1 h-2 w-2 bg-white"></span>
                </span>
              </span> Book Now
            </button>
          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Unzet</span>
                <img
                  className="h-auto w-32"
                  src="/photos/logo.svg"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      smooth={true}
                      duration={500}
                      className="-mx-3 block rounded-tr-lg rounded-bl-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-black hover:bg-primary-500 cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <button className="rounded-tr-lg rounded-bl-lg outline text-white px-4 py-2.5 text-xs font-semibold shadow-sm hover:bg-secondary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500 transform transition-transform duration-500 hover:scale-105 flex items-center">
                    <span className='pr-2'>
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-sm bg-white opacity-100"></span>
                        <span className="relative inline-flex rounded-sm h-2 w-2 bg-white"></span>
                      </span>
                    </span> Book Now
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
