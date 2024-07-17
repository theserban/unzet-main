"use client";
import React from "react";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function Stats() {
  return (
    <div className="relative isolate">
      <section id="stats">
        <div className="py-24">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
                Numbers Speak
              </h2>
              <p className="mt-6 text-xl leading-7 text-white">
                We believe in being open and honest. That&prime;s why we want to
                share the truth we face as well. Running a tech business
                isn&prime;t easy. It takes good ideas, careful planning, hard
                work, and the ability to adapt.
              </p>
            </div>
            <div className="flex flex-col max-w-2xl gap-8 mx-auto mt-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
              <div className="relative flex flex-col-reverse justify-between p-8 mb-4 transition-transform duration-500 transform border gap-x-16 gap-y-8 sm:mb-0 rounded-tl-ct rounded-br-ct bg-secondary-400 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44 border-primary-500/20 hover:-translate-y-1">
                <Link
                  href="https://startupgenome.com/article/the-state-of-the-global-startup-economy"
                  className="absolute text-white top-2 right-2 hover:text-primary-500 transition-transform duration-500 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Read the report on the global startup economy"
                >
                  <ArrowTopRightOnSquareIcon className="w-6 h-6 text-primary-500" />
                </Link>
                <p className="flex-none text-3xl font-bold tracking-tight text-primary-500">
                  9 out of 10
                </p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-white">
                    Startups Fails
                  </p>
                  <p className="mt-2 text-base leading-7 text-md text-white/80">
                    generated often due to a lack of experience between
                    founders, insufficient funding, no strategy, a bad product
                    or poor product-market fit.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col-reverse justify-between p-8 transition-transform duration-500 transform border gap-x-16 gap-y-8 rounded-tl-ct rounded-br-ct bg-secondary-400 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28 border-primary-500/20 hover:-translate-y-1">
                <Link
                  href="https://www.ninetwothree.co/blog/how-long-do-startups-take-to-become-profitable"
                  className="absolute text-white top-2 right-2 hover:text-primary-500 transition-transform duration-500 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Read the blog post on startup profitability"
                >
                  <ArrowTopRightOnSquareIcon className="w-6 h-6 text-primary-500" />
                </Link>
                <p className="flex-none text-3xl font-bold tracking-tight text-primary-500">
                  3-5 Years
                </p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-white">
                    Until Profitability
                  </p>
                  <p className="mt-2 text-base leading-7 text-white/80">
                    is the average timeline for tech startups and initiatives,
                    in which to survive until they become big enough to generate
                    more money than they burn.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col-reverse justify-between p-8 transition-transform duration-500 transform border gap-x-16 gap-y-8 bg-secondary-400 rounded-tl-ct rounded-br-ct sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start border-primary-500/20 hover:-translate-y-1">
                <Link
                  href="https://www.forrester.com/report/the-six-steps-for-justifying-better-ux/RES117708"
                  className="absolute text-white top-2 right-2 hover:text-primary-500 transition-transform duration-500 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Read the Forrester report on better UX"
                >
                  <ArrowTopRightOnSquareIcon className="w-6 h-6 text-primary-500" />
                </Link>
                <p className="flex-none text-3xl font-bold tracking-tight text-primary-500">
                  76%
                </p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-white">
                    Users Leaving
                  </p>
                  <p className="mt-2 text-base leading-7 text-md text-white/80">
                    if they encounter poor ux and are less likely to return.
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
