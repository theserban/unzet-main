"use client";

import React, { useState, useEffect } from "react";
import { GithubLogo } from "phosphor-react";
import {
  Bars3Icon,
  XMarkIcon,
  ClipboardIcon,
  ArrowPathRoundedSquareIcon,
  SwatchIcon,
  BookmarkIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";

const navigation = [
  { name: "Brands", href: "#compete", icon: SwatchIcon },
  { name: "Remains", href: "#donate", icon: ArrowDownTrayIcon },
  { name: "Archive", href: "#projects", icon: ClipboardIcon },
  { name: "Process", href: "#how", icon: ArrowPathRoundedSquareIcon },
  { name: "FAQ", href: "#founder", icon: BookmarkIcon },
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

  const BookNowButton = () => (
    <button
      onClick={() => setMobileMenuOpen(false)}
      data-cal-namespace=""
      data-cal-link="weunzet/30min"
      data-cal-config='{"layout":"week_view"}'
      className="rounded-tr-lg rounded-bl-lg border-1 border border-white/80 text-white px-4 py-2.5 text-sm font-semibold shadow-sm hover:bg-secondary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500 transform transition-transform duration-500 hover:scale-105 flex items-center"
    >
      <span className="pr-2">
        <span className="relative flex w-2 h-2">
          <span className="absolute inline-flex w-full h-full bg-white opacity-100 animate-ping"></span>
          <span className="relative inline-flex w-2 h-2 pb-1 bg-white"></span>
        </span>
      </span>{" "}
      Let&apos;s Talk
    </button>
  );

  return (
    <header className="inset-x-0 top-0 z-50 fixed bg-black rounded-br-ct border-b border-primary-500/20">
      <nav
        className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Unzet</span>
            <Image
              className="w-32 h-auto transition-transform duration-500 transform hover:scale-105"
              src="/photos/logo.svg"
              alt="Unzet Logo"
              width={128}
              height={32}
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center text-sm font-semibold leading-6 text-white transition-transform duration-500 transform cursor-pointer hover:text-gray-200 hover:scale-105"
            >
              <item.icon className="w-5 h-5 mr-2" aria-hidden="true" />
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <Link
            href="https://github.com/theserban/unzet-main"
            passHref
            className="duration-500 transform hover:scale-105"
          >
            <GithubLogo className="w-5 h-5 text-white" aria-hidden="true" />
          </Link>
          <BookNowButton />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md text-white"
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
      </nav>
      {mobileMenuOpen && (
        <div className="absolute inset-x-0 z-50 w-full px-4 py-8 bg-black border-b lg:hidden top-12 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 border-primary-500/20 rounded-br-ct">
          <div className="flex flex-col items-start space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-2 py-2 text-base font-semibold leading-7 text-white rounded-tr-lg rounded-bl-lg cursor-pointer hover:text-black hover:bg-primary-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon className="w-5 h-5 mr-2" aria-hidden="true" />
                {item.name}
              </Link>
            ))}
            <div className="flex flex-1 justify-end items-center gap-4 pl-2">
              <Link
                href="https://github.com/theserban/unzet-main"
                passHref
                className="duration-500 transform hover:scale-105"
              >
                <GithubLogo className="w-5 h-5 text-white" aria-hidden="true" />
              </Link>
              <BookNowButton />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
