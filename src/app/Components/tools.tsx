import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const items = [
  {
    logo: "/photos/rotato.webp",
    text: "product videos",
    link: "https://rotato.app/",
  },
  {
    logo: "/photos/linearity.webp",
    text: "2d motion graphics",
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
  {
    logo: "/photos/blureo.webp",
    text: "open source community",
    link: "https://blureo.com/",
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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shuffled = shuffleArray(items);
    setShuffledItems(shuffled);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollWidth > container.clientWidth + container.scrollLeft
      );
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [shuffledItems]);

  const handleArrowClick = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth / 2;

    if (direction === "left" && canScrollLeft) {
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    } else if (direction === "right" && canScrollRight) {
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const renderItems = () => {
    return shuffledItems.map((item, index) => (
      <a
        key={index}
        href={item.link}
        className="flex-shrink-0 text-center transition-transform duration-500 transform border px-10 py-5 tool-item hover:-translate-y-1 rounded-tr-ct rounded-bl-ct bg-secondary-400 border-primary-500/20"
      >
        <div className="h-12 flex items-center justify-center mb-2">
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
      <div className="mx-auto overflow-hidden py-24 pb-12 sm:pt-0">
        <div className="px-6 mx-auto max-w-7xl lg:px-8 sm:pt-16">
          <div className="flex justify-left">
            <div className="max-w-2xl sm:max-w-4xl lg:max-w-2xl mx-auto lg:mx-0 py-12 pt-0">
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
            ref={containerRef}
            id="tools-container"
            className="flex space-x-6 overflow-x-auto scroll-smooth py-1 border-r border-l border-secondary-300/20 px-2 no-scrollbar"
          >
            {renderItems()}
          </div>
          <div className="flex justify-start items-center mt-6">
            <button
              onClick={() => handleArrowClick("left")}
              className={`mx-2 transition-transform duration-500 transform hover:scale-110 ${
                canScrollLeft
                  ? "text-primary-500 hover:text-primary-400 opacity-100"
                  : "text-primary-400 opacity-60 cursor-not-allowed"
              }`}
              aria-label="Previous"
              disabled={!canScrollLeft}
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleArrowClick("right")}
              className={`mx-2 transition-transform duration-500 transform hover:scale-110 ${
                canScrollRight
                  ? "text-primary-500 hover:text-primary-400 opacity-100"
                  : "text-primary-400 opacity-60 cursor-not-allowed"
              }`}
              aria-label="Next"
              disabled={!canScrollRight}
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
