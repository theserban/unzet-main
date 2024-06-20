import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const cardData = [
  { src: "/photos/project1.png", title: "1" },
  { src: "/photos/project2.png", title: "2" },
  { src: "/photos/project3.png", title: "3" },
  { src: "/photos/project4.png", title: "4" },
  { src: "/photos/project5.png", title: "5" },
];

const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '37' },
  { label: 'Countries', value: '12' },
  { label: 'Raised', value: '$25M' },
];

export default function Projects() {
  const [activeCards, setActiveCards] = useState([0, 1, 2, 3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCards(prevActiveCards => prevActiveCards.map(index => (index + 1) % cardData.length));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative isolate">
      <svg
        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-primary-500/20 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
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
      <section id="projects">
        <div className="overflow-hidden bg-black py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-8 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">Our people</h2>
                <p className="mt-6 text-xl leading-8 text-white">
                  Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem.
                </p>
                <p className="mt-6 text-xl leading-8 text-white">
                  Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                </div>
              </div>
              <div className="grid grid-cols-1 sm:flex sm:flex-wrap sm:items-start sm:justify-end sm:gap-8 lg:contents">
                <div className="w-full sm:w-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <div className="transform transition-transform duration-500 hover:-translate-y-3">
                    <Image
                      src={cardData[activeCards[0]].src}
                      alt={`Project ${cardData[activeCards[0]].title}`}
                      className="aspect-[7/4] w-full sm:w-[38rem] max-w-none rounded-tr-ct rounded-bl-ct object-cover mb-2 border border-primary-500/20 filter grayscale hover:filter-none"
                      width={700}
                      height={400}
                    />
                    <h3 className="text-primary-500 text-lg text-center">{cardData[activeCards[0]].title}</h3>
                  </div>
                </div>
                <div className="w-full sm:w-auto lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first w-full sm:w-auto lg:w-auto mt-8 lg:mt-0">
                    <div className="transform transition-transform duration-500 hover:-translate-y-3">
                      <Image
                        src={cardData[activeCards[1]].src}
                        alt={`Project ${cardData[activeCards[1]].title}`}
                        className="aspect-[7/4] w-full sm:w-[28rem] max-w-none flex-none rounded-br-ct rounded-tl-ct object-cover mb-2 border border-primary-500/20 filter grayscale hover:filter-none"
                        width={700}
                        height={400}
                      />
                      <h3 className="text-primary-500 text-lg text-center">{cardData[activeCards[1]].title}</h3>
                    </div>
                  </div>
                  <div className="w-full sm:w-auto lg:w-auto mt-8 lg:mt-0">
                    <div className="transform transition-transform duration-500 hover:-translate-y-3">
                      <Image
                        src={cardData[activeCards[2]].src}
                        alt={`Project ${cardData[activeCards[2]].title}`}
                        className="aspect-[7/4] w-full sm:w-[34rem] max-w-none flex-none rounded-tr-ct rounded-bl-ct object-cover mb-2 border border-primary-500/20 filter grayscale hover:filter-none"
                        width={700}
                        height={400}
                      />
                      <h3 className="text-primary-500 text-lg text-center">{cardData[activeCards[2]].title}</h3>
                    </div>
                  </div>
                  <div className="w-full sm:w-auto sm:block sm:flex-auto lg:w-auto lg:flex-none mt-8 lg:mt-0">
                    <div className="transform transition-transform duration-500 hover:-translate-y-3">
                      <Image
                        src={cardData[activeCards[3]].src}
                        alt={`Project ${cardData[activeCards[3]].title}`}
                        className="aspect-[7/4] w-full sm:w-[20rem] max-w-none rounded-tl-ct rounded-br-ct object-cover mb-2 border border-primary-500/20 filter grayscale hover:filter-none"
                        width={700}
                        height={400}
                      />
                      <h3 className="text-primary-500 text-lg text-center">{cardData[activeCards[3]].title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="case">
        <div className="bg-black py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-x-8 gap-y-16 sm:gap-y-24">
                <div className="lg:pr-4 order-3 lg:order-1">
                  <div className="relative overflow-hidden px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 transform transition-transform duration-500 hover:-translate-y-3">
                    <Image
                      className="absolute inset-0 h-full w-full object-cover rounded-tl-ct rounded-br-ct mb-2 border border-primary-500/20 filter grayscale hover:filter-none"
                      src="/photos/project5.png"
                      alt="Project 5"
                      width={700}
                      height={400}
                    />
                    <div
                      className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div className="relative overflow-hidden px-6 pb-9 pt-44 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 transform transition-transform duration-500 hover:-translate-y-3 mt-8">
                    <Image
                      className="absolute inset-0 h-full w-full object-cover rounded-tl-ct rounded-br-ct mb-2 border border-primary-500/20 filter grayscale hover:filter-none"
                      src="/photos/project1.png"
                      alt="Project 1"
                      width={700}
                      height={400}
                    />
                    <div
                      className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-primary-500/20 pt-10 sm:grid-cols-4 lg:hidden">
                    {stats.map((stat, statIdx) => (
                      <div key={statIdx}>
                        <dt className="text-sm font-semibold leading-6 text-primary-500">{stat.label}</dt>
                        <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-white">{stat.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
                      Our time @ Teckstar <br /> Case Study
                    </h1>
                    <div className="max-w-xl">
                      <p className="mt-6 text-xl leading-8 text-white">
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                      </p>
                      <p className="mt-8 text-xl leading-8 text-white">
                        Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                      </p>
                    </div>
                  </div>
                  <dl className="grid grid-cols-2 gap-8 border-t border-primary-500/20 mt-4 pb-12 sm:pb-0 pt-4 sm:grid-cols-4 hidden lg:grid">
                    {stats.map((stat, statIdx) => (
                      <div key={statIdx}>
                        <dt className="text-sm font-semibold leading-6 text-primary-500">{stat.label}</dt>
                        <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-white">{stat.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
