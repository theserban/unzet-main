"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

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
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
                Playing the Numbers
              </h2>
              <p className="mt-6 leading-7 text-white text-xl">
              We believe in being open and honest. That's why we want to share the truth: running a tech business isn't easy. It takes good ideas, careful planning, hard work, and the ability to adapt.
              </p>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
              <div className="relative flex flex-col-reverse justify-between gap-x-16 gap-y-8 bg-secondary-400 rounded-tl-ct rounded-br-ct p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start border border-primary-500/20 transform transition-transform duration-500 hover:-translate-y-3">
                <Link href="https://www.forrester.com/report/the-six-steps-for-justifying-better-ux/RES117708" className="absolute top-2 right-2 text-white hover:text-primary-500" target="_blank" rel="noopener noreferrer">
                  <ArrowTopRightOnSquareIcon className="h-6 w-6 text-primary-500" />
                </Link>
                <p className="flex-none text-3xl font-bold tracking-tight text-primary-500">76%</p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-white">Users Leaving</p>
                  <p className="mt-2 text-base text-md leading-7 text-white/80">
                  if they encounter poor ux and are less likely to return.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-tl-ct rounded-br-ct bg-secondary-400 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28 border border-primary-500/20 transform transition-transform duration-500 hover:-translate-y-3">
                <Link href="https://www.ninetwothree.co/blog/how-long-do-startups-take-to-become-profitable" className="absolute top-2 right-2 text-white hover:text-primary-500" target="_blank" rel="noopener noreferrer">
                  <ArrowTopRightOnSquareIcon className="h-6 w-6 text-primary-500" />
                </Link>
                <p className="flex-none text-3xl font-bold tracking-tight text-primary-500">3-5 Years</p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-white">Until Profitability</p>
                  <p className="mt-2 text-base leading-7 text-white/80">
                  is the average timeline for tech startups and initiatives, in which to survive until they become big enough to generate more money than they burn.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col-reverse justify-between gap-x-16 gap-y-8 mb-4 sm:mb-0 rounded-tl-ct rounded-br-ct bg-secondary-400 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44 border border-primary-500/20 transform transition-transform duration-500 hover:-translate-y-3">
                <Link href="https://startupgenome.com/article/the-state-of-the-global-startup-economy" className="absolute top-2 right-2 text-white hover:text-primary-500" target="_blank" rel="noopener noreferrer">
                  <ArrowTopRightOnSquareIcon className="h-6 w-6 text-primary-500" />
                </Link>
                <p className="flex-none text-3xl font-bold tracking-tight text-primary-500">9 out of 10</p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-white">
                    Startups Fails
                  </p>
                  <p className="mt-2 text-base text-md leading-7 text-white/80">
                   generated often due to a lack of experience between founders, insufficient funding, no strategy, a bad product or poor product-market fit.
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
