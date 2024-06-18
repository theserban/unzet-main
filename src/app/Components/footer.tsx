"use client";
import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
];

export default function Pricing() {
  return (
    <div className="relative isolate">
      <svg
        className="absolute inset-x-0 top-20 -z-10 h-[64rem] w-full stroke-primary-500/20 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
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

    <section id="pricing">
      <div className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
              Predictable pricing
            </h2>
            <p className="mt-6 text-base leading-7 text-white">
              So you get to know what you&apos;re paying for. 
            </p>
          </div>
          <div className="transform transition-transform duration-500 hover:-translate-y-1 mx-auto mt-16 max-w-2xl rounded-tl-ct rounded-br-ct bg-secondary-400 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none border border-primary-500/20">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-primary-500">Unzet Your Potential</h3>
              <p className="mt-6 text-base leading-7 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet indis perferendis blanditiis
                repellendus etur quidem assumenda.
              </p>
              <div className="mt-8 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-primary-500">What&rsquo;s included</h4>
              </div>
              <ul
                role="list"
                className="mt-6 grid grid-cols-1 gap-2 text-sm leading-6 text-white sm:grid-cols-3 sm:gap-4"
              >
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-2">
                    <CheckIcon className="h-6 w-5 flex-none text-primary-500" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-tl-ct rounded-br-ct transform transition-transform duration-500 hover:-translate-y-1 bg-secondary-400 border border-primary-500/20 py-10 mx-2 my-2 text-center lg:flex lg:flex-col lg:justify-center lg:py-12">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-white">Recurring Growth Hacking</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-primary-500">€1200</span>
                    <span className="text-md font-semibold leading-6 tracking-wide text-primary-500">/month</span>
                  </p>
                  <a
                        data-cal-namespace=""
                        data-cal-link="weunzet/30min"
                        data-cal-config='{"layout":"month_view"}'
                    href="#"
                    className="mt-4 transform transition-transform duration-500 hover:scale-105 block w-full bg-primary-500 rounded-tr-xl rounded-bl-xl px-3 py-2 text-center text-sm font-semibold text-black shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Strategy Call
                  </a>
                  <p className="mt-6 text-sm leading-5 text-white">
                    This subscription is tailored to align with your company&rsquo;s goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-12 sm:px-6 lg:mt-12 lg:px-8 transform transition-transform duration-500 hover:-translate-y-1">
            <div className="mx-auto w-full lg:max-w-5xl">
              <div className="rounded-tr-ct rounded-bl-ct bg-secondary-400 border border-primary-500/20 px-6 py-8 sm:p-10 sm:py-6 lg:flex lg:items-center">
                <div className="flex-1">
                  <div>
                    <h3 className="rounded-bl-xl rounded-tr-xl inline-flex border border-primary-500/20 px-4 py-1 text-base font-semibold text-primary-500">
                      Growth Groups
                    </h3>
                    <h3 className="inline-flex pl-4 py-1 text-base font-semibold text-primary-500">
                      /2
                    </h3>
                    <h3 className="inline-flex pl-2 py-1 text-base font-semibold text-primary-500">
                      /4
                    </h3>
                  </div>
                  <div className="text-lg text-gray-600">
                    <p className="mt-4 text-base leading-7 text-white">
                      Since we understand the challenges of building something from scratch, we provide an alternative: we pair up 2 to 4 businesses, allowing them to share the costs.
                    </p>
                  </div>
                </div>
                <div className="mt-6 rounded-md shadow lg:ml-10 lg:mt-0 lg:flex-shrink-0 transform transition-transform duration-500 hover:scale-105">
                  <a
                        data-cal-namespace=""
                        data-cal-link="weunzet/30min"
                        data-cal-config='{"layout":"month_view"}'
                    href="#"
                    className="rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                  >
                    Let&apos;s Talk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}
