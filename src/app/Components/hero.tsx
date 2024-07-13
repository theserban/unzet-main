import React from "react";
import {
  ShoppingCartIcon,
  CloudIcon,
  BookOpenIcon,
  UserIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

interface CardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  power: string;
  description: string;
}

const Card = ({ icon: Icon, title, power, description }: CardProps) => (
  <div className="p-6 text-white transition-transform duration-500 border shadow-lg bg-secondary-400 rounded-tr-ct rounded-bl-ct border-primary-500/20 hover:-translate-y-3">
    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full">
      <Icon className="w-12 h-12 text-primary-500" />
    </div>
    <p className="mb-2 text-lg font-bold">{title}</p>
    <p className="mb-3 font-semibold text-primary-500">{power}</p>
    <p>{description}</p>
  </div>
);

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Hero() {
  return (
    <section className="py-4 bg-black sm:py-0" id="hero">
      <div className="relative isolate">
        <div className="overflow-hidden">
          <svg
            className="absolute inset-x-0 top-12 sm:-left-1 left-3 -z-10 h-[64rem] w-full stroke-primary-500/20 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={180}
                height={180}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div className="px-6 pb-12 mx-auto max-w-7xl pt-24 sm:pt-36 lg:px-8 lg:pt-32">
            <div className="max-w-2xl mx-auto gap-x-12 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl sm:-mt-32">
                  Kickstart Your{" "}
                  <span className="text-primary-500">Startup Journey</span>
                </h1>
                <p className="mt-6 text-xl leading-8 text-white sm:max-w-md lg:max-w-none">
                  Everything we do, from helping startups achieve their goals to
                  building our own stuff, it&apos;s done with a clear
                  destination in mind, making people&apos;s lives more
                  enjoyable.
                </p>
                <div className="flex items-center mt-10 gap-x-6">
                  <button
                    onClick={() => scrollToSection("compete")}
                    className="cursor-pointer rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-sm font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                  >
                    Free Brands
                  </button>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-sm font-semibold leading-6 text-white transition-transform duration-500 transform cursor-pointer hover:text-gray-200 hover:scale-105"
                  >
                    Work With Us<span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
              <div className="relative flex justify-end w-full gap-8 mt-14 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 sm:w-auto">
                <div className="flex-none pt-32 ml-auto space-y-8 w-44 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <Card
                      icon={ShoppingCartIcon}
                      title="Perfect Sync"
                      power="Power +20"
                      description="You've aligned your product with the demand"
                    />
                    <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="flex-none mr-auto space-y-8 w-44 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <Card
                      icon={CloudIcon}
                      title="Cloud Chaser"
                      power="Power +18"
                      description="Your website is indexed and optimized"
                    />
                    <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Card
                      icon={BookOpenIcon}
                      title="Brand Bound"
                      power="Power +14"
                      description="You are now the proud owner of a great brand"
                    />
                    <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="flex-none pt-32 space-y-8 w-44 sm:pt-0">
                  <div className="relative">
                    <Card
                      icon={UserIcon}
                      title="King User"
                      power="Power +10"
                      description="You got the first user to sign in for the product"
                    />
                    <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Card
                      icon={ArrowUpIcon}
                      title="Social Surge"
                      power="Power +8"
                      description="You are trendy on all platforms, keep it up"
                    />
                    <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 bg-primary-black sm:py-24">
          <div className="px-6 mx-auto max-w-7xl lg:px-0">
            <div className="max-w-2xl mx-auto lg:max-w-none">
              <h2 className="text-lg font-semibold leading-8 text-center text-primary-500">
                Top Achievers
              </h2>
              <div className="grid items-start grid-cols-4 mx-auto mt-10 gap-x-8 gap-y-10 sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:grid-cols-4">
                <Image
                  className="object-contain object-center w-full col-span-2 transition-transform duration-500 transform max-h-9 lg:col-span-1 hover:scale-105"
                  src="/photos/persuwise.svg"
                  alt="Persuwise"
                  width={158}
                  height={48}
                />
                <Image
                  className="object-contain object-center w-full col-span-2 transition-transform duration-500 transform max-h-8 lg:col-span-1 hover:scale-105"
                  src="/photos/antvise.svg"
                  alt="Antvise"
                  width={158}
                  height={48}
                />
                <Image
                  className="object-contain object-center w-full col-span-2 mt-2 transition-transform duration-500 transform max-h-6 lg:col-span-1 hover:scale-105"
                  src="/photos/shiftintech.svg"
                  alt="Shiftintech"
                  width={158}
                  height={48}
                />
                <Image
                  className="object-contain object-center w-full col-span-2 mt-2 transition-transform duration-500 transform max-h-6 lg:col-span-1 hover:scale-105"
                  src="/photos/inereto.svg"
                  alt="Inereto"
                  width={158}
                  height={48}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
