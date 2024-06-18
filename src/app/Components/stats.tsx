"use client";
import React from 'react';

export default function Stats() {
  return (
    <div className="relative isolate">
      <svg
        className="absolute inset-x-0 top-20 -z-10 h-[64rem] w-full stroke-primary-500/30 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
      </svg>
      <section id="stats">
      <div className="py-16 pb-24 sm:pb-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
              We approach the workplace
            </h2>
            <p className="mt-6 text-base leading-7 text-white">
              Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras
              purus nibh cursus sit eu in id. Integer vel nibh.
            </p>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 bg-secondary-400 rounded-tl-ct rounded-br-ct p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start border border-primary-500/20 transform transition-transform duration-500 hover:-translate-y-3">
              <p className="flex-none text-3xl font-bold tracking-tight text-primary-500">250k</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">Users on the platform</p>
                <p className="mt-2 text-base text-md leading-7 text-white/70">
                  Vel labore deleniti veniam consequuntur sunt nobis.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 mb-4 sm:mb-0 rounded-tr-ct rounded-bl-ct bg-secondary-400 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44 border border-primary-500/20 transform transition-transform duration-500 hover:-translate-y-3">
              <p className="flex-none text-3xl font-bold tracking-tight text-primary-500">$8.9 billion</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">
                  We’re proud that our customers have made over $8 billion in total revenue.
                </p>
                <p className="mt-2 text-base text-md leading-7 text-white/70">
                  Eu duis porta aliquam ornare. Elementum eget magna egestas.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-tl-ct rounded-br-ct bg-secondary-400 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28 border border-primary-500/20 transform transition-transform duration-500 hover:-translate-y-3">
              <p className="flex-none text-3xl font-bold tracking-tight text-primary-500">401,093</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">Transactions this year</p>
                <p className="mt-2 text-base leading-7 text-white/70">
                  Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu duis porta aliquam ornare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
