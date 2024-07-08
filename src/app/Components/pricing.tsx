import { useState, useEffect, useRef } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

type ModeValue = "for-profit" | "open-source";

interface Mode {
  value: ModeValue;
  label: string;
}

const modes: Mode[] = [
  { value: "for-profit", label: "For Profit" },
  { value: "open-source", label: "Open Source" },
];

const content: Record<
  ModeValue,
  {
    title: string;
    description: string;
    features: { name: string; description: string }[];
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
  }
> = {
  "for-profit": {
    title: "Unzet Potential",
    description:
      "We are here to help tech businesses become leaders. We provide everything needed for success, from a strong name and branding to a great product, marketing, and strategy.",
    features: [
      {
        name: "Purposeful Disruption",
        description:
          "Help businesses innovate and grow by changing how things are normally done.",
      },
      {
        name: "Brand Development",
        description:
          "Build and improve a company’s identity to connect with its audience.",
      },
      {
        name: "Product Optimization",
        description:
          "Make products better to increase customer satisfaction and sales.",
      },
      {
        name: "Market Research",
        description:
          "Collect and analyze data to understand the market and customers better.",
      },
      {
        name: "Marketing Guidance",
        description:
          "Give strategic advice to boost marketing efforts and engage customers.",
      },
      {
        name: "Variable Needs",
        description:
          "We will adapt to your needs and work together on your goals.",
      },
    ],
    price: "€1999",
    priceSuffix: "/month",
    priceButton: "Strategy Call",
    ctaText:
      "This subscription is tailored to align with your company’s goals.",
    ctaSubheading: "Recurring Growth Hacking",
    growthGroupsPill: "Growth Groups",
    growthGroupsSize1: "/2",
    growthGroupsSize2: "/4",
    growthGroupsButton: "Let's Talk",
    growthGroupsText:
      "Since we understand the challenges of building something from scratch, we provide an alternative: we pair up 2 to 4 businesses, allowing them to share the costs.",
  },
  "open-source": {
    title: "Open & Unzet",
    description:
      "We are here to support cool initiatives. If we like your project, we'll be by your side, providing the resources, guidance, and tools you need to succeed and make a real impact.",
    features: [
      {
        name: "Purposeful Disruption",
        description:
          "Help businesses innovate and grow by changing how things are normally done.",
      },
      {
        name: "Brand Development",
        description:
          "Build and improve a company’s identity to connect with its audience.",
      },
      {
        name: "Product Optimization",
        description:
          "Make products better to increase customer satisfaction and sales.",
      },
      {
        name: "Market Research",
        description:
          "Collect and analyze data to understand the market and customers better.",
      },
      {
        name: "Marketing Guidance",
        description:
          "Give strategic advice to boost marketing efforts and engage customers.",
      },
      {
        name: "Variable Needs",
        description:
          "We will adapt to your needs and work together on your goals.",
      },
    ],
    price: "€1",
    priceSuffix: "/project",
    priceButton: "Apply Call",
    ctaText: "This service is created from our big love for free software.",
    ctaSubheading: "Guided Scale",
    growthGroupsPill: "Main Streams",
    growthGroupsSize1: "/2",
    growthGroupsSize2: "/4",
    growthGroupsButton: "Let's Talk",
    growthGroupsText:
      "Collaborate with other open-source projects and benefit from bigger opportunities, shared resources and joint community support.",
  },
};

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
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
    if (
      featureRefs.current.every(
        (ref) => ref && !ref.contains(event.target as Node)
      )
    ) {
      setTooltipVisible(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative isolate">
      <section id="pricing">
        <div className="py-20 sm:py-24">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
                All Cards on the Table
              </h2>
              <p className="mt-6 text-xl leading-7 text-white">
                Right from the start, we provide transparent pricing for our
                services. We also promise to work on your business with the same
                dedication and care that we invest in our own.
              </p>
            </div>
            <div className="flex justify-center mt-16">
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
                          checked
                            ? "bg-primary-500 text-secondary-400"
                            : "text-white",
                          "cursor-pointer rounded-bl-xl rounded-tr-xl px-2.5 py-1"
                        )
                      }
                    >
                      {option.label}
                    </Radio>
                  ))}
                </RadioGroup>
              </fieldset>
            </div>
            <div className="max-w-2xl mx-auto mt-8 transition-transform duration-500 transform border hover:-translate-y-1 rounded-tl-ct rounded-br-ct bg-secondary-400 sm:mt-8 lg:mx-0 lg:flex lg:max-w-none border-primary-500/20">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-3xl font-bold tracking-tight text-primary-500">
                  {selectedContent.title}
                </h3>
                <p className="mt-6 text-base leading-7 text-white sm:text-xl">
                  {selectedContent.description}
                </p>
                <div className="flex items-center mt-8 gap-x-4">
                  <h4 className="flex-none text-xl font-semibold leading-6 text-primary-500">
                    What&prime;s included
                  </h4>
                </div>
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-2 mt-6 leading-6 text-white text-md sm:grid-cols-3 sm:gap-4"
                >
                  {selectedContent.features.map((feature, index) => (
                    <li
                      key={feature.name}
                      className="relative flex cursor-pointer gap-x-2 group"
                      ref={(el) => {
                        featureRefs.current[index] = el;
                      }}
                      onClick={() => handleIconClick(index)}
                    >
                      <InformationCircleIcon
                        className="flex-none w-5 h-6 text-primary-500"
                        aria-hidden="true"
                      />
                      {feature.name}
                      <div
                        className={`absolute left-6 -top-8 rounded-t-xl ${
                          tooltipVisible === index ? "block" : "hidden"
                        } sm:group-hover:block w-48 bg-secondary-400 border border-primary-500/20 text-white text-sm p-2 shadow-lg z-50`}
                      >
                        {feature.description}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-2 -mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="py-10 mx-2 my-2 text-center transition-transform duration-500 transform border rounded-tl-ct rounded-br-ct hover:-translate-y-1 bg-secondary-400 border-primary-500/20 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="max-w-xs px-8 mx-auto">
                    <p className="text-base font-semibold text-white">
                      {selectedContent.ctaSubheading}
                    </p>
                    <p className="flex items-baseline justify-center mt-6 gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-primary-500">
                        {selectedContent.price}
                      </span>
                      <span className="font-semibold leading-6 tracking-wide text-md text-primary-500">
                        {selectedContent.priceSuffix}
                      </span>
                    </p>
                    <button
                      data-cal-namespace=""
                      data-cal-link="weunzet/30min"
                      data-cal-config='{"layout":"month_view"}'
                      className="block w-full px-3 py-2 mt-4 text-sm font-semibold text-center text-black transition-transform duration-500 transform shadow-sm hover:scale-105 bg-primary-500 rounded-tr-xl rounded-bl-xl hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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

            <div className="relative mt-12 transition-transform duration-500 transform lg:mt-12 lg:px-8 sm:px-20 hover:-translate-y-1">
              <div className="w-full mx-auto lg:max-w-5xl">
                <div className="px-6 py-8 border rounded-tr-ct rounded-bl-ct bg-secondary-400 border-primary-500/20 sm:p-10 sm:py-6 lg:flex lg:items-center">
                  <div className="flex-1">
                    <div>
                      <h3 className="inline-flex px-4 py-1 font-semibold border rounded-bl-xl rounded-tr-xl border-primary-500/20 text-md text-primary-500">
                        {selectedContent.growthGroupsPill}
                      </h3>
                      <h3 className="inline-flex py-1 pl-4 font-semibold text-md text-primary-500">
                        {selectedContent.growthGroupsSize1}
                      </h3>
                      <h3 className="inline-flex py-1 pl-2 text-base font-semibold text-primary-500">
                        {selectedContent.growthGroupsSize2}
                      </h3>
                    </div>
                    <div className="text-lg text-gray-600">
                      <p className="mt-6 text-base leading-7 text-white sm:text-xl">
                        {selectedContent.growthGroupsText}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 transition-transform duration-500 transform rounded-md shadow lg:ml-10 lg:mt-0 lg:flex-shrink-0 hover:scale-105">
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
