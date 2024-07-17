import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const items = [
  {
    logo: "/photos/rotato.webp",
    text: "product videos",
    link: "https://rotato.app/",
  },
  {
    logo: "/photos/linearity.webp",
    text: "motion graphics",
    link: "https://www.linearity.io/move/",
  },
  {
    logo: "/photos/shots.webp",
    text: "fast mockups",
    link: "https://shots.so",
  },
  {
    logo: "/photos/penpot.webp",
    text: "web friendly ui",
    link: "https://penpot.app",
  },
  {
    logo: "/photos/instant.webp",
    text: "name brainstorming",
    link: "https://instantdomainsearch.com/",
  },
];

const shuffleArray = (
  array: { logo: string; text: string; link: string }[]
) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default function Tools() {
  const [shuffledItems, setShuffledItems] = useState<typeof items>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const shuffled = shuffleArray(items);
    setShuffledItems([...shuffled, ...shuffled]);
  }, []);

  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? shuffledItems.length / 2 - 1 : prevIndex - 1
      );
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        prevIndex === shuffledItems.length / 2 - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const renderItems = () => {
    const displayedItems = shuffledItems.slice(currentIndex, currentIndex + 6);
    return displayedItems.map((item, index) => (
      <a
        key={index}
        href={item.link}
        className="flex-shrink-0 text-center transition-transform duration-500 transform border px-12 py-6 tool-item hover:-translate-y-1 rounded-tr-ct rounded-bl-ct bg-secondary-400 border-primary-500/20"
      >
        <div className="h-12 flex items-center justify-center mb-4">
          <Image
            src={item.logo}
            alt="Logo"
            width={128}
            height={48}
            className="object-contain hover:filter-none grayscale"
          />
        </div>
        <p className="text-white text-md">{item.text}</p>
      </a>
    ));
  };

  return (
    <section id="tools" className="relative">
      <div className=" mx-auto overflow-hidden sm:pt-0 py-24 pb-12 sm:py-24">
        <div className="px-6 mx-auto max-w-7xl lg:px-8 sm:pt-16">
          <div className="flex justify-left">
            <div className="max-w-2xl mx-auto lg:mx-0 py-12 pt-0">
              <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
                Cool Tools
              </h2>
              <p className="mt-6 text-xl leading-7 text-white">
                These are some great tools for doing things yourself, from
                branding to product launches. We researched and found the best
                ones, along with the fastest way to complete each task.
              </p>
              <p className="mt-4 text-xl leading-7 text-gray-300">
                DIY Launch Kit Coming Soon
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-7 lg:px-8 pb-12">
          <div
            id="tools-container"
            className="flex space-x-6 overflow-hidden relative pt-4"
          >
            {renderItems()}
            <div className="absolute top-0 right-0 w-1/12 h-full bg-gradient-to-l from-black to-transparent"></div>
          </div>
          <div className="justify-right items-right mt-6">
            <button
              onClick={() => handleArrowClick("left")}
              className="mx-2 text-primary-500 transition-transform duration-500 transform hover:scale-110 hover:text-primary-400"
              aria-label="Previous"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleArrowClick("right")}
              className="mx-2 text-primary-500 transition-transform duration-500 transform hover:scale-110 hover:text-primary-400"
              aria-label="Next"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
