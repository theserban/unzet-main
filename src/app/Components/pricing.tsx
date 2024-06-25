import { useState, useEffect, useRef } from 'react';
import { Radio, RadioGroup } from '@headlessui/react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

type ModeValue = 'for-profit' | 'open-source';

interface Mode {
  value: ModeValue;
  label: string;
}

const modes: Mode[] = [
  { value: 'for-profit', label: 'For Profit' },
  { value: 'open-source', label: 'Open Source' },
];

const content: Record<ModeValue, {
  title: string;
  description: string;
  features: { name: string; description: string; }[];
  price: string;
  priceSuffix: string;
  priceButton: string;
  ctaText: string;
  ctaSubheading: string;
  growthGroupsPill: string;
  growthGroupsSize1: string;
  growthGroupsSize2: string;
  growthGroupsButton: string;
  growthGroupsText: string;
}> = {
  'for-profit': {
    title: 'Unzet Potential',
    description: 'We are here to help tech businesses become leaders. We provide everything needed for success, from a strong name and branding to a great product, marketing, and strategy.',
    features: [
      { name: 'Purposeful Disruption', description: 'Help businesses innovate and grow by changing how things are normally done.' },
      { name: 'Brand Development', description: 'Build and improve a company’s identity to connect with its audience.' },
      { name: 'Product Optimization', description: 'Make products better to increase customer satisfaction and sales.' },
      { name: 'Market Research', description: 'Collect and analyze data to understand the market and customers better.' },
      { name: 'Business Consultancy', description: 'Provide expert advice to improve business strategies and operations.' },
      { name: 'Marketing Guidance', description: 'Give strategic advice to boost marketing efforts and engage customers.' },
    ],
    price: '€1899',
    priceSuffix: '/month',
    priceButton: "Strategy Call",
    ctaText: 'This subscription is tailored to align with your company’s goals.',
    ctaSubheading: 'Recurring Growth Hacking',
    growthGroupsPill: 'Growth Groups',
    growthGroupsSize1: '/2',
    growthGroupsSize2: '/4',
    growthGroupsButton: "Let's Talk",
    growthGroupsText: 'Since we understand the challenges of building something from scratch, we provide an alternative: we pair up 2 to 4 businesses, allowing them to share the costs.',
  },
  'open-source': {
    title: 'Open & Unzet',
    description: "We are here to support cool initiatives. If we like your project, we'll be by your side, providing the resources, guidance, and tools you need to succeed and make a real impact.",
    features: [
      { name: 'Purposeful Disruption', description: 'Help businesses innovate and grow by changing how things are normally done.' },
      { name: 'Brand Development', description: 'Build and improve a company’s identity to connect with its audience.' },
      { name: 'Product Optimization', description: 'Make products better to increase customer satisfaction and sales.' },
      { name: 'Market Research', description: 'Collect and analyze data to understand the market and customers better.' },
      { name: 'Business Consultancy', description: 'Provide expert advice to improve business strategies and operations.' },
      { name: 'Marketing Guidance', description: 'Give strategic advice to boost marketing efforts and engage customers.' },
    ],
    price: '€1',
    priceSuffix: '/project',
    priceButton: "Apply Call",
    ctaText: 'This service is created from our big love for free software.',
    ctaSubheading: 'Guided Scale',
    growthGroupsPill: 'Mainstreams',
    growthGroupsSize1: '/2',
    growthGroupsSize2: '/4',
    growthGroupsButton: "Let's Talk",
    growthGroupsText: 'Collaborate with other open-source projects and benefit from bigger opportunities, shared resources and joint community support.',
  },
};

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  const [mode, setMode] = useState<Mode>(modes[0]);
  const [tooltipVisible, setTooltipVisible] = useState<number | null>(null);
  const featureRefs = useRef<(HTMLLIElement | null)[]>([]);

  const selectedContent = content[mode.value];

  const handleIconClick = (index: number) => {
    setTooltipVisible(tooltipVisible === index ? null : index);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (featureRefs.current.every(ref => ref && !ref.contains(event.target as Node))) {
      setTooltipVisible(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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
                All Cards on the Table
              </h2>
              <p className="mt-6 leading-7 text-white text-xl">
                Right from the start, we provide transparent pricing for our services. We also promise to work on your business with the same dedication and care that we invest in our own.
              </p>
            </div>
            <div className="mt-16 flex justify-center">
              <fieldset aria-label="Project type">
                <RadioGroup
                  value={mode}
                  onChange={setMode}
                  className="bg-secondary-400 grid grid-cols-2 gap-x-1 rounded-bl-2xl rounded-tr-2xl  p-1.5 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-primary-500/40"
                >
                  {modes.map((option) => (
                    <Radio
                      key={option.value}
                      value={option}
                      className={({ checked }) =>
                        classNames(
                          checked ? 'bg-primary-500 text-secondary-400' : 'text-white',
                          'cursor-pointer rounded-bl-xl rounded-tr-xl px-2.5 py-1',
                        )
                      }
                    >
                      {option.label}
                    </Radio>
                  ))}
                </RadioGroup>
              </fieldset>
            </div>
            <div className="transform transition-transform duration-500 hover:-translate-y-1 mx-auto mt-8 max-w-2xl rounded-tl-ct rounded-br-ct bg-secondary-400 sm:mt-8 lg:mx-0 lg:flex lg:max-w-none border border-primary-500/20">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-3xl font-bold tracking-tight text-primary-500">
                  {selectedContent.title}
                </h3>
                <p className="mt-6 text-base leading-7 text-white sm:text-xl">
                  {selectedContent.description}
                </p>
                <div className="mt-8 flex items-center gap-x-4">
                  <h4 className="flex-none text-xl font-semibold leading-6 text-primary-500">What&prime;s included</h4>
                </div>
                <ul
                  role="list"
                  className="mt-6 grid grid-cols-1 gap-2 text-md leading-6 text-white sm:grid-cols-3 sm:gap-4"
                >
                  {selectedContent.features.map((feature, index) => (
                    <li
                      key={feature.name}
                      className="flex gap-x-2 relative group cursor-pointer"
                      ref={(el) => {
                        featureRefs.current[index] = el;
                      }}
                      onClick={() => handleIconClick(index)}
                    >
                      <InformationCircleIcon
                        className="h-6 w-5 flex-none text-primary-500"
                        aria-hidden="true"
                      />
                      {feature.name}
                      <div className={`absolute left-6 -top-8 rounded-t-xl ${tooltipVisible === index ? 'block' : 'hidden'} sm:group-hover:block w-48 bg-secondary-400 border border-primary-500/20 text-white text-sm p-2 shadow-lg z-50`}>
                         {feature.description}
                     </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-tl-ct rounded-br-ct transform transition-transform duration-500 hover:-translate-y-1 bg-secondary-400 border border-primary-500/20 py-10 mx-2 my-2 text-center lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-white">{selectedContent.ctaSubheading}</p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-primary-500">{selectedContent.price}</span>
                      <span className="text-md font-semibold leading-6 tracking-wide text-primary-500">{selectedContent.priceSuffix}</span>
                    </p>
                    <button
                      data-cal-namespace=""
                      data-cal-link="weunzet/30min"
                      data-cal-config='{"layout":"month_view"}'
                      className="mt-4 transform transition-transform duration-500 hover:scale-105 block w-full bg-primary-500 rounded-tr-xl rounded-bl-xl px-3 py-2 text-center text-sm font-semibold text-black shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {selectedContent.priceButton}
                    </button>
                    <p className="mt-6 text-base leading-7 text-white sm:text-md">
                      {selectedContent.ctaText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-12 sm:px-6 lg:mt-12 lg:px-8 sm:px-20 transform transition-transform duration-500 hover:-translate-y-1">
              <div className="mx-auto w-full lg:max-w-5xl">
                <div className="rounded-tr-ct rounded-bl-ct bg-secondary-400 border border-primary-500/20 px-6 py-8 sm:p-10 sm:py-6 lg:flex lg:items-center">
                  <div className="flex-1">
                    <div>
                      <h3 className="rounded-bl-xl rounded-tr-xl inline-flex border border-primary-500/20 px-4 py-1 text-md font-semibold text-primary-500">
                      {selectedContent.growthGroupsPill}
                      </h3>
                      <h3 className="inline-flex pl-4 py-1 text-md font-semibold text-primary-500">
                      {selectedContent.growthGroupsSize1}
                      </h3>
                      <h3 className="inline-flex pl-2 py-1 text-base font-semibold text-primary-500">
                      {selectedContent.growthGroupsSize2}
                      </h3>
                    </div>
                    <div className="text-lg text-gray-600">
                      <p className="mt-6 text-base leading-7 text-white sm:text-xl">
                        {selectedContent.growthGroupsText}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 rounded-md shadow lg:ml-10 lg:mt-0 lg:flex-shrink-0 transform transition-transform duration-500 hover:scale-105">
                    <button
                      data-cal-namespace=""
                      data-cal-link="weunzet/30min"
                      data-cal-config='{"layout":"month_view"}'
                      className="rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                    >
                     {selectedContent.growthGroupsButton}
                    </button>
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
