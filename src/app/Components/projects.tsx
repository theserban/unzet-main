import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";

interface Card {
  src: string;
  title: string;
}

const cardData: Card[] = [
  { src: "/photos/p1.webp", title: "Pitch Deck" },
  { src: "/photos/p3.webp", title: "Extension UI" },
  { src: "/photos/p4.webp", title: "Naming & Branding" },
  { src: "/photos/p5.webp", title: "Naming" },
  { src: "/photos/p2.webp", title: "Landing Page" },
  { src: "/photos/p6.webp", title: "Events Aggregator" },
  { src: "/photos/p7.webp", title: "Landing Page" },
  { src: "/photos/p8.webp", title: "Rebranding" },
  { src: "/photos/p9.webp", title: "Launch Campaign" },
  { src: "/photos/p10.webp", title: "Product Illustrations" },
  { src: "/photos/p11.webp", title: "Guidelines" },
  { src: "/photos/p12.webp", title: "Sales Flow" },
  { src: "/photos/p13.webp", title: "Presentation" },
  { src: "/photos/p14.webp", title: "Landing Page" },
  { src: "/photos/p15.webp", title: "Name Workshop" },
  { src: "/photos/p16.webp", title: "Repositioning" },
];

export default function Projects() {
  const [activeCards, setActiveCards] = useState<number[]>([]);
  const [previousCards, setPreviousCards] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState<Card | null>(null);
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);
  const [caseStudyImage, setCaseStudyImage] = useState<Card | null>(null);

  const generateRandomIndices = useCallback(
    (count: number, max: number, exclude: number[]): number[] => {
      const indices = new Set<number>();
      while (indices.size < count) {
        const newIndex = Math.floor(Math.random() * max);
        if (!exclude.includes(newIndex)) {
          indices.add(newIndex);
        }
      }
      return Array.from(indices);
    },
    []
  );

  const shuffleProjects = useCallback(() => {
    const newIndices = generateRandomIndices(3, cardData.length, previousCards);
    setPreviousCards(newIndices);
    setActiveCards(newIndices);
  }, [generateRandomIndices, previousCards]);

  useEffect(() => {
    const initialIndices = generateRandomIndices(3, cardData.length, []);
    setActiveCards(initialIndices);
    setPreviousCards(initialIndices);
  }, [generateRandomIndices]);

  const openModal = (image: Card) => {
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  const openCaseStudyModal = (image: Card) => {
    setCaseStudyImage(image);
    setShowCaseStudyModal(true);
  };

  const closeCaseStudyModal = () => {
    setShowCaseStudyModal(false);
    setCaseStudyImage(null);
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains("modal-background")) {
      closeModal();
      closeCaseStudyModal();
    }
  };

  return (
    <div className="relative z-20 isolate">
      {showModal && modalImage && (
        <div
          className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-60 modal-background"
          onClick={handleBackgroundClick}
        >
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute right-0 p-2 m-4 text-3xl text-white bg-white -top-16 bg-opacity-20 rounded-tr-xl rounded-bl-xl"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <Image
              src={modalImage.src}
              alt={modalImage.title}
              width={1000}
              height={600}
              className="object-contain px-4 py-2"
              priority
            />
            <h3 className="mt-4 text-lg text-center text-white">
              {modalImage.title}
            </h3>
          </div>
        </div>
      )}
      {showCaseStudyModal && caseStudyImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 modal-background"
          onClick={handleBackgroundClick}
        >
          <div className="relative ">
            <button
              onClick={closeCaseStudyModal}
              className="absolute right-0 p-2 m-4 text-3xl text-white bg-white -top-16 bg-opacity-20 rounded-tr-xl rounded-bl-xl"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <Image
              src={caseStudyImage.src}
              alt={caseStudyImage.title}
              width={1000}
              height={600}
              className="object-contain px-4 py-2"
              priority
            />
            <h3 className="mt-4 text-lg text-center text-white">
              {caseStudyImage.title}
            </h3>
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
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
        />
      </svg>
      <section id="projects">
        <div className="pt-16 pb-0 overflow-hidden bg-black sm:pt-24 sm:pb-4">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="grid max-w-2xl grid-cols-1 mx-auto lg:mx-0 lg:max-w-none gap-4 sm:gap-0">
              <div className="flex flex-col gap-8 lg:flex-row">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
                    Worked On
                  </h2>
                  <p className="mt-6 mr-8 text-xl leading-8 text-white">
                    We like to be a part of tech initiatives, here is a list of
                    some of them - p.s which are awesome :)
                  </p>
                  <p className="mt-6 mr-8 text-xl leading-8 text-white">
                    This is just a small archive of dreams we took a part in,
                    our goal is to make it as big as we can and be that cake
                    piece in each project we undertake.
                  </p>
                  <div className="flex items-center mt-10 gap-x-6 mb-8 sm:mb-0">
                    <button
                      onClick={shuffleProjects}
                      className="flex align-center justify-center cursor-pointer gap-x-1 rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-sm font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                    >
                      <ArrowsRightLeftIcon className="w-5 h-5" /> Shuffle
                      Projects
                    </button>
                    <button
                      data-cal-namespace=""
                      data-cal-link="weunzet/30min"
                      data-cal-config='{"layout":"month_view"}'
                      className="text-sm font-semibold leading-6 text-white transition-transform duration-500 transform cursor-pointer hover:text-gray-200 hover:scale-105"
                    >
                      Join The Archive <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  {activeCards.length > 0 && (
                    <div className="relative group">
                      <div className="transition-transform duration-500 transform hover:-translate-y-1">
                        <Image
                          src={cardData[activeCards[0]].src}
                          alt={`Project ${cardData[activeCards[0]].title}`}
                          className="aspect-[7/5] w-full rounded-tl-ct rounded-br-ct object-cover mb-2 border border-primary-500/20"
                          width={700}
                          height={500}
                          loading="eager"
                          priority
                        />
                        <div
                          className="absolute p-2 text-2xl text-white transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 cursor-pointer top-2 right-2 rounded-tl-xl rounded-br-xl group-hover:opacity-100"
                          onClick={() => openModal(cardData[activeCards[0]])}
                        >
                          <MagnifyingGlassIcon className="w-6 h-6" />
                        </div>
                        <h3 className="mt-2 text-lg font-medium text-center text-white">
                          {cardData[activeCards[0]].title}
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col mt-8 gap-x-10 sm:flex-row gap-4 sm:gap-10">
                {activeCards.slice(1, 3).map((cardIndex, idx) => (
                  <div key={idx} className="relative group sm:w-1/2">
                    <div className="mb-8 transition-transform duration-500 transform hover:-translate-y-1">
                      <Image
                        src={cardData[cardIndex].src}
                        alt={`Project ${cardData[cardIndex].title}`}
                        className="aspect-[7/5] w-full rounded-tl-ct rounded-br-ct object-cover mb-2 border border-primary-500/20"
                        width={700}
                        height={500}
                        loading="eager"
                        priority
                      />
                      <div
                        className="absolute p-2 text-2xl text-white transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 cursor-pointer top-2 right-2 rounded-tl-xl rounded-br-xl group-hover:opacity-100"
                        onClick={() => openModal(cardData[cardIndex])}
                      >
                        <MagnifyingGlassIcon className="w-6 h-6" />
                      </div>
                      <h3 className="mt-2 text-lg font-medium text-center text-white">
                        {cardData[cardIndex].title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
