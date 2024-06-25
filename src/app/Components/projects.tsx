import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MagnifyingGlassIcon, ArrowLeftIcon, ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface Card {
  src: string;
  title: string;
}

const cardData: Card[] = [
  { src: "/photos/p1-sitpitch.webp", title: "Pitch Deck" },
  { src: "/photos/p3-pwapp.webp", title: "Extension UI" },
  { src: "/photos/p4-antvise.webp", title: "Naming & Branding" },
  { src: "/photos/p5-inereto.webp", title: "Naming" },
  { src: "/photos/p2-sitweb.webp", title: "Landing Page" },
  { src: "/photos/p6-sitagr.webp", title: "Events Aggregator" },
  { src: "/photos/p7-dcapp.webp", title: "Open Source Design" },
  { src: "/photos/p8-pwbrd.webp", title: "Rebranding" },
  { src: "/photos/p9-zngweb.webp", title: "Web Design" },
  { src: "/photos/p10-srsapp.webp", title: "IOS App UI" },
  { src: "/photos/p11-azgbb.webp", title: "Brand Book" },
  { src: "/photos/p12-azgapp.webp", title: "Web App" },
  { src: "/photos/p13-agrpitch.webp", title: "Illustrations" },
  { src: "/photos/p14-vpppitch.webp", title: "Guidelines" },
  { src: "/photos/p15-wellwork.webp", title: "Workshop" },
  { src: "/photos/p16-tssell.webp", title: "Automation Research" },
];

const caseStudyData: Card[] = [
  { src: "/photos/ts-glass.webp", title: "Broken Glass" },
  { src: "/photos/ts-social.webp", title: "Social Media" },
];

const stats = [
  { label: 'Duration', value: '5m' },
  { label: 'Disruptions', value: '3x' },
  { label: 'Power', value: '+40' },
  { label: 'Rank', value: 'Ace' },
];

export default function Projects() {
  const [activeCards, setActiveCards] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState<Card | null>(null);
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);
  const [caseStudyImage, setCaseStudyImage] = useState<Card | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Initialize with 3 random unique images
    setActiveCards(generateRandomIndices(3, cardData.length));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCards(generateRandomIndices(3, cardData.length));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const generateRandomIndices = (count: number, max: number): number[] => {
    const indices = new Set<number>();
    while (indices.size < count) {
      indices.add(Math.floor(Math.random() * max));
    }
    return Array.from(indices);
  };

  const openModal = (image: Card) => {
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  const getNextImage = () => {
    if (modalImage) {
      const currentIndex = cardData.indexOf(modalImage);
      if (currentIndex < cardData.length - 1) {
        setModalImage(cardData[currentIndex + 1]);
      }
    }
  };

  const getPrevImage = () => {
    if (modalImage) {
      const currentIndex = cardData.indexOf(modalImage);
      if (currentIndex > 0) {
        setModalImage(cardData[currentIndex - 1]);
      }
    }
  };

  const openCaseStudyModal = (image: Card) => {
    setCaseStudyImage(image);
    setShowCaseStudyModal(true);
  };

  const closeCaseStudyModal = () => {
    setShowCaseStudyModal(false);
    setCaseStudyImage(null);
  };

  const getNextCaseStudyImage = () => {
    if (caseStudyImage) {
      const currentIndex = caseStudyData.indexOf(caseStudyImage);
      if (currentIndex < caseStudyData.length - 1) {
        setCaseStudyImage(caseStudyData[currentIndex + 1]);
      }
    }
  };

  const getPrevCaseStudyImage = () => {
    if (caseStudyImage) {
      const currentIndex = caseStudyData.indexOf(caseStudyImage);
      if (currentIndex > 0) {
        setCaseStudyImage(caseStudyData[currentIndex - 1]);
      }
    }
  };

  return (
    <div className="relative isolate z-20">
      {showModal && modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-20">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute -top-16 right-0 m-4 text-white text-3xl bg-white bg-opacity-20 p-2 rounded-tr-xl rounded-bl-xl"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            {cardData.indexOf(modalImage) > 0 && (
              <button
                onClick={getPrevImage}
                className="absolute bottom-0 left-0 m-4 text-white text-3xl bg-white bg-opacity-20 p-2 rounded-tl-xl rounded-br-xl transform translate-y-1/2"
              >
                <ArrowLeftIcon className="h-6 w-6" />
              </button>
            )}
            <Image
              src={modalImage.src}
              alt={modalImage.title}
              width={1000}
              height={600}
              className="object-contain px-4 py-2"
            />
            <h3 className="text-white text-lg text-center mt-4">{modalImage.title}</h3>
            {cardData.indexOf(modalImage) < cardData.length - 1 && (
              <button
                onClick={getNextImage}
                className="absolute bottom-0 right-0 m-4 text-white text-3xl bg-white bg-opacity-20 bg-opacity-50 rounded-tr-xl rounded-bl-xl p-2 transform translate-y-1/2"
              >
                <ArrowRightIcon className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      )}
      {showCaseStudyModal && caseStudyImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative ">
            <button
              onClick={closeCaseStudyModal}
              className="absolute top-0 right-0 m-4 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-tl-xl rounded-br-xl"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            {caseStudyData.indexOf(caseStudyImage) > 0 && (
              <button
                onClick={getPrevCaseStudyImage}
                className="absolute bottom-0 left-0 m-4 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-tl-xl rounded-br-xl transform translate-y-1/2"
              >
                <ArrowLeftIcon className="h-6 w-6" />
              </button>
            )}
            <Image
              src={caseStudyImage.src}
              alt={caseStudyImage.title}
              width={1000}
              height={600}
              className="object-contain"
            />
            <h3 className="text-white text-lg text-center mt-4">{caseStudyImage.title}</h3>
            {caseStudyData.indexOf(caseStudyImage) < caseStudyData.length - 1 && (
              <button
                onClick={getNextCaseStudyImage}
                className="absolute bottom-0 right-0 m-4 text-white text-3xl bg-black bg-opacity-50 rounded-tr-xl rounded-bl-xl p-2 transform translate-y-1/2"
              >
                <ArrowRightIcon className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      )}
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
                <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">Ace Projects</h2>
                <p className="mt-6 text-xl leading-8 text-white">
                  We have worked on many tech endeavors, including products, services, and open-source. 
                </p>
                <p className="mt-6 text-xl leading-8 text-white">
                  From branding to helping with product building, strategies, marketing, and more, we ensured everything needed for their growth. 
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <button
                    onClick={() => openModal(cardData[0])}
                    className="cursor-pointer rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-sm font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                  >
                    View All Projects
                  </button>
                  <button
                    onClick={() => scrollToSection('case')}
                    className="cursor-pointer text-sm font-semibold leading-6 text-white hover:text-gray-200 transform transition-transform duration-500 hover:scale-105"
                  >
                    Case Study <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:flex sm:flex-wrap sm:items-start sm:justify-end sm:gap-8 lg:contents">
                {activeCards.map((cardIndex, idx) => (
                  <div key={idx} className="w-full sm:w-full lg:ml-auto lg:w-auto lg:flex-none lg:self-end relative group">
                    <div className="transform transition-transform duration-500 hover:-translate-y-3 sm:mt-12 mt-8 lg:mt-0">
                      <Image
                        src={cardData[cardIndex].src}
                        alt={`Project ${cardData[cardIndex].title}`}
                        className="aspect-[7/4] w-full sm:w-full lg:w-[38rem] max-w-none rounded-tl-ct rounded-br-ct object-cover mb-2 border border-primary-500/20"
                        width={700}
                        height={400}
                        priority={idx === 0} // Add priority attribute to the first image
                      />
                      <div
                        className="absolute top-2 right-2 text-white text-2xl cursor-pointer bg-black bg-opacity-50 rounded-tl-xl rounded-br-xl p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => openModal(cardData[cardIndex])}
                      >
                        <MagnifyingGlassIcon className="h-6 w-6" />
                      </div>
                      <h3 className="text-white font-medium text-lg text-center">{cardData[cardIndex].title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="case">
        <div className="bg-black py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-x-8 gap-y-16 sm:gap-y-12">
                <div className="lg:pr-4 order-3 lg:order-1">
                  <div className="relative overflow-hidden px-6 pb-9 pt-[40%] shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 transform transition-transform duration-500 hover:-translate-y-3 group">
                    <Image
                      className="absolute inset-0 h-full w-full object-cover rounded-tl-ct rounded-br-ct mb-2 border border-primary-500/20"
                      src="/photos/ts-glass.webp"
                      alt="Broken Glass"
                      width={1200}
                      height={900}
                      priority // Add priority attribute to case study images
                    />
                    <div
                      className="absolute top-2 right-2 text-white text-2xl cursor-pointer bg-black bg-opacity-50 rounded-tl-xl rounded-br-xl p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={() => openCaseStudyModal(caseStudyData[0])}
                    >
                      <MagnifyingGlassIcon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="relative overflow-hidden px-6 pb-9 pt-[40%] shadow-2xl sm:px-12 sm:mt-12 lg:mt-8 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 transform transition-transform duration-500 hover:-translate-y-3 mt-8 group">
                    <Image
                      className="absolute inset-0 h-full w-full object-cover rounded-tl-ct rounded-br-ct mb-2 border border-primary-500/20"
                      src="/photos/ts-social.webp"
                      alt="Social"
                      width={700}
                      height={400}
                      priority // Add priority attribute to case study images
                    />
                    <div
                      className="absolute top-2 right-2 text-white text-2xl cursor-pointer bg-black bg-opacity-50 rounded-tl-xl rounded-br-xl p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={() => openCaseStudyModal(caseStudyData[1])}
                    >
                      <MagnifyingGlassIcon className="h-6 w-6" />
                    </div>
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
                    <div className="max-w-2xl">
                      <p className="mt-6 text-xl leading-7 text-white">
                        Teckstar is a dynamic company specializing in matching businesses with top-tier developers. When we partnered with them, our goal was to help them scale their operations and enhance their market presence.
                      </p>
                      <p className="mt-8 text-xl leading-8 text-white pb-4">
                        We overhauled Teckstar’s business processes and branding to improve efficiency and presence. One of our key initiatives was the implementation of a new sales flow, which we named &prime;The Broken Glass&prime;. This new system streamlined their sales operations, making the process more effective, leading to a noticeable increase in sales performance.
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
