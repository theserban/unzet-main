"use client";
import React, { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

const faqs = [
  {
    question: "Why do I need Unzet?",
    answer: "We are dedicated to helping tech companies become strong brands. We work closely with you, offering customized solutions to meet your needs. Our focus on transparency, practical strategies, and innovation ensures we deliver great results quickly.",
  },
    {
    question: "What is the Ace Level Status?",
    answer: "Being an 'Ace Level' at Unzet means that your business has achieved significant milestones with our help. These milestones include aligning your product with market demand, creating a strong brand, gaining substantial online visibility, and successfully acquiring your first users. ",
  },
    {
    question: "Transparency throughout the project?",
    answer: "We ensure transparency by providing regular updates, detailed progress reports, and clear communication throughout the project. We involve you in every step, from planning to execution, so you always know what’s happening and can provide feedback.",
  },
  {
    question: "The Royal Flush Approach?",
    answer: "We tailor our strategies to the unique needs of each project, addressing specific challenges and goals. This personalized approach ensures that every aspect of your business is optimized for success, providing a comprehensive solution that drives growth and innovation.",
  },
  {
    question: "How involved will I be in the process?",
    answer: "You'll be very involved. We believe in close collaboration and will provide regular updates. Your input is crucial to ensure the final outcome meets your expectations.",
  },
  {
    question: "Is there a minimum commitment?",
    answer: "Yes, we recommend working together for at least 2 months. This helps us fully understand your goals and achieve the best results.",
  },
];

export default function FAQ() {
  const [imageSrc, setImageSrc] = useState('/photos/founder.png');

  return (
    <>
          <section id="founder">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative mx-auto max-w-2xl py-16 lg:pt-16 sm:py-12 lg:max-w-4xl flex lg:flex-row flex-col items-start lg:items-start gap-x-6 gap-y-8 lg:gap-x-0">
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
              <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl mt-4">Purposeful Disruptors</h2>
              <p className="mt-3 text-xl leading-8 text-white">
                We are here to generate and implement creative and impactful ideas to propel your growth, ensuring you become the next ace in the tech world.
              </p>
              <p className="text-xl leading-8 text-white/80 mt-3">
                The Serban, Founder
              </p>
              <div className="mt-6 flex items-center gap-x-6">
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
                  className="text-sm font-semibold leading-6 text-white hover:text-gray-200 transform transition-transform duration-500 hover:scale-105" 
                  target="_blank">
                  Linkedin <span aria-hidden="true">→</span>
                </Link>
              </div>
            </blockquote>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="mx-auto max-w-7xl px-6 md:px-20 pb-32 py-4 sm:pt-8">
          <div className="mx-auto max-w-4xl lg:px-2 divide-y divide-white/10 lg:pb-16">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-primary-500 mb-8">Let me answer</h2>

            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-4 pb-8 transform transition-transform duration-500 hover:-translate-y-1">
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
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
