"use client";
import React, { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

export default function FAQ() {
  const [imageSrc, setImageSrc] = useState('/photos/founder.png');

  return (
    <>
          <section id="founder">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-4xl flex lg:flex-row flex-col items-start lg:items-start gap-x-6 gap-y-8 lg:gap-x-10">
          <div className="w-68 lg:w-72 flex-shrink-0 p-2 rounded-lg">
            <Image
              className="rounded-tr-ct rounded-bl-ct border border-primary-500/20 transform transition-transform duration-500 hover:scale-105"
              src={imageSrc}
              alt=""
              onMouseEnter={() => setImageSrc('/photos/founder2.png')}
              onMouseLeave={() => setImageSrc('/photos/founder.png')}
              width={500} 
              height={500} 
            />
          </div>
          <div className="relative lg:ml-10">
            <blockquote className="text-xl leading-8 text-white sm:text-2xl sm:leading-9">
              <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl mt-6">Purposeful Disruptors</h2>
              <p className="mt-4 text-lg leading-8 text-white">
                Our mission is to generate and implement creative and impactful ideas to propel your growth, ensuring you become the next ace in the tech world.
              </p>
              <p className="mt-1 text-lg leading-8 text-white/80">
                The Serban, Founder
              </p>
              <div className="mt-6 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                >
                  Book a Call
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white hover:text-gray-200 transform transition-transform duration-500 hover:scale-105">
                  Linkedin <span aria-hidden="true">→</span>
                </a>
              </div>
            </blockquote>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="mx-auto max-w-7xl px-6 pb-32 py-4 sm:pt-8">
          <div className="mx-auto max-w-4xl divide-y divide-white/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-white mb-8">Let me answer</h2>

            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-4 pb-8 transform transition-transform duration-500 hover:-translate-y-1">
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7 ">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-white/70">{faq.answer}</p>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}

          </div>
        </div>
      </div>
      </section>
    </>
  );
}
