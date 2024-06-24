import React from 'react';
import Image from 'next/image';

interface ProductsProps {
  onTryExperienceClick: () => void;
}

export default function Products({ onTryExperienceClick }: ProductsProps) {
  return (
    <section id="products">
      <div className="bg-black">
        <div className="mx-auto max-w-7xl py-24 sm:px-16 sm:mx-2 lg:mx-auto lg:px-8 sm:py-32">
          <div className="relative lg:flex lg:gap-x-20 lg:px-12 lg:pt-0 px-8 pt-8 sm:px-12 sm:pt-4 isolate overflow-hidden bg-secondary-400 rounded-tl-ct rounded-br-ct border border-primary-500/40 shadow-2xl transform transition-transform duration-500 hover:-translate-y-1">
            <div className="max-w-md sm:mx-0 sm:flex-auto sm:py-16 text-left">
              <h2 className="text-3xl font-bold tracking-tight text-primary-500">
                GuidedOn - Always Pitch
              </h2>
              <p className="mt-6 text-base leading-7 text-white sm:text-xl">
                Our first product, designed specifically for founders, it ensures you can pitch your business anytime someone visits your website.
              </p>
              <p className="mt-6 text-base leading-7 text-white sm:text-xl">
                Take advantage of every visitor with an accessible prerecorded pitch that guides them.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <button
                  className="cursor-pointer rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-xs font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                  onClick={onTryExperienceClick}
                >
                  Try the Experience
                </button>
                <button
                  className="cursor-pointer text-sm font-semibold leading-6 text-white hover:text-gray-200 transform transition-transform duration-500 hover:scale-105"
                >
                  Soon <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
            <div className="relative mt-16 h-60 lg:mt-8 sm:ml-12 lg:ml-0">
              <Image
                className="absolute left-0 top-0 w-[48rem] max-w-none rounded-tl-ct bg-white/5 ring-1 ring-white/10"
                src="/photos/project1.png"
                alt="GuidedOn"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
