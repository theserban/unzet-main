"use client";

import React, { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ClipboardIcon,
  CreditCardIcon,
  ArrowPathRoundedSquareIcon,
  SwatchIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { getCalApi } from "@calcom/embed-react";

const navigation = [
  { name: "Archive", href: "projects", icon: ClipboardIcon },
  { name: "Insights", href: "testimonials", icon: UserIcon },
  { name: "Process", href: "how", icon: ArrowPathRoundedSquareIcon },
  { name: "Products", href: "products", icon: SwatchIcon },
  { name: "Rates", href: "pricing", icon: CreditCardIcon },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        theme: "dark",
        styles: {
          branding: {
            brandColor: "#EDFF00",
          },
        },
        hideEventTypeDetails: false,
        layout: "week_view",
      });
    })();
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const BookNowButton = () => (
    <button
      onClick={() => setMobileMenuOpen(false)}
      data-cal-namespace=""
      data-cal-link="weunzet/30min"
      data-cal-config='{"layout":"week_view"}'
      className="rounded-tr-lg rounded-bl-lg outline outline-1 text-white px-4 py-2.5 text-xs font-semibold shadow-sm hover:bg-secondary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500 transform transition-transform duration-500 hover:scale-105 flex items-center"
    >
      <span className="pr-2">
        <span className="relative flex w-2 h-2">
          <span className="absolute inline-flex w-full h-full bg-white opacity-100 animate-ping"></span>
          <span className="relative inline-flex w-2 h-2 pb-1 bg-white"></span>
        </span>
      </span>{" "}
      Book Now
    </button>
  );

  return (
    <div className="bg-black">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Unzet</span>
              <Image
                className="w-32 h-auto transition-transform duration-500 transform hover:scale-105"
                src="/photos/logo.svg"
                alt="Unzet Logo"
                width={128}
                height={32}
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                className="flex items-center text-sm font-semibold leading-6 text-white transition-transform duration-500 transform cursor-pointer hover:text-gray-200 hover:scale-105"
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                <item.icon className="w-5 h-5 mr-2" aria-hidden="true" />
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <BookNowButton />
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="absolute inset-x-0 z-50 w-full px-6 py-6 bg-black border-b lg:hidden top-16 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 border-primary-500/20 rounded-br-ct">
            <div className="flex flex-col items-start space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  className="flex items-center px-3 py-2 text-base font-semibold leading-7 text-white rounded-tr-lg rounded-bl-lg cursor-pointer hover:text-black hover:bg-primary-500"
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  <item.icon className="w-5 h-5 mr-2" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
              <BookNowButton />
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
