"use client";
import React, { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  ChevronRightIcon,
  MinusSmallIcon,
  PlusSmallIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "What is the Ace Level Status?",
    answer:
      "Being an 'Ace Level' at Unzet means that your business has achieved significant milestones with our help. These milestones include aligning your product with market demand, creating a strong brand, gaining substantial online visibility, and successfully acquiring your first users.",
  },
  {
    question: "Transparency throughout the project?",
    answer:
      "If you work with us, we ensure transparency by providing regular updates, detailed progress reports, and clear communication throughout the project. We involve you in every step, from planning to execution, so you always know what’s happening and can provide feedback.",
  },
  {
    question: "How involved will I be in the process?",
    answer:
      "You'll be very involved. We believe in close collaboration and will provide regular updates. Your input is crucial to ensure the final outcome meets your expectations.",
  },
];

export default function FAQ() {
  return (
    <>
      <section id="founder">
        <div className="px-6 mx-auto max-w-7xl lg:px-8 pt-20 sm:pt-16 pb-8 sm:pb-0">
          <div className="relative flex flex-col items-start max-w-2xl sm:max-w-4xl  py-4 sm:py-12 mx-auto lg:pt-16 lg:max-w-4xl lg:flex-row lg:items-start gap-x-6 gap-y-8 lg:gap-x-0">
            <div className="flex-shrink-0 rounded-lg w-88 lg:w-72">
              <Image
                className="sm:h-72 sm:w-72 transition-transform duration-500 transform border rounded-tr-ct rounded-bl-ct border-primary-500/20 hover:-translate-y-1"
                src="/photos/theserban.webp"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="relative lg:ml-10">
              <blockquote className="text-xl leading-8 text-white sm:text-2xl sm:leading-9">
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
                  Ace Shapers
                </h2>
                <p className="mt-3 text-xl leading-8 text-white">
                  We&apos;re here to blend creativity with purpose, and have a
                  blast while doing it. Join us on this exciting journey as we
                  shape the future with creativity, purpose, and good vibes!
                </p>
                <p className="mt-3 text-xl leading-8 text-white/80">
                  The Serban, Founder
                </p>
                <div className="flex items-center mt-6 gap-x-6">
                  <button
                    data-cal-namespace=""
                    data-cal-link="weunzet/30min"
                    data-cal-config='{"layout":"month_view"}'
                    className="rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                  >
                    Meet The Founder
                  </button>
                  <Link
                    href="https://www.linkedin.com/in/theserban/"
                    className="text-sm  flex font-semibold leading-6 text-white transition-transform duration-500 transform hover:text-gray-200 hover:scale-105"
                    target="_blank"
                  >
                    Linkedin{" "}
                    <ChevronRightIcon className="w-4 ml-0.5 mt-1 h-4" />
                  </Link>
                </div>
              </blockquote>
            </div>
          </div>
        </div>

        <div className="bg-black">
          <div className="px-6 py-4 pb-36 mx-auto max-w-7xl md:px-20 sm:pt-8">
            <div className="max-w-4xl mx-auto lg:px-2 lg:pb-16">
              <h2 className="mb-8 text-2xl font-bold leading-10 tracking-tight text-primary-500">
                Let me answer
              </h2>
              <dl className="space-y-6">
                {faqs.map((faq) => (
                  <Disclosure
                    as="div"
                    key={faq.question}
                    className="pt-4 pb-4 transition-transform duration-500 transform border-b hover:-translate-y-1 border-primary-500/20"
                  >
                    {({ open }) => (
                      <>
                        <dt>
                          <DisclosureButton className="flex items-start justify-between w-full text-left text-white">
                            <span className="text-base font-semibold leading-7">
                              {faq.question}
                            </span>
                            <span className="flex items-center ml-6 h-7">
                              {open ? (
                                <MinusSmallIcon
                                  className="w-6 h-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmallIcon
                                  className="w-6 h-6"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </DisclosureButton>
                        </dt>
                        <DisclosurePanel as="dd" className="pr-12 mt-2">
                          <p className="text-base leading-7 text-white/70">
                            {faq.answer}
                          </p>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
