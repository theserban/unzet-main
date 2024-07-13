import React from "react";
import {
  UserGroupIcon,
  CpuChipIcon,
  ChartBarIcon,
  BoltIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";

interface CardProps {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  link,
  icon,
  className,
}) => {
  return (
    <div
      className={`p-6  mt-8 sm:mt-0 rounded-tr-ct rounded-bl-ct shadow-lg bg-secondary-400 border border-primary-500/20 transform transition duration-500 hover:-translate-y-1 ${className}`}
    >
      <div className="flex items-center mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-bold text-primary-500">{title}</h3>
      <p className="mb-4 text-white">{description}</p>
    </div>
  );
};

export default function Services() {
  const cardsData = [
    {
      title: "Tribe Maker",
      description:
        "We love connecting people and building awesome communities where everyone supports and inspires each other. Together, we can make sure no one is left out, and every voice is heard.",
      link: "#",
      icon: <UserGroupIcon className="w-8 h-8 text-primary-500" />,
      className: "sm:col-span-2",
    },
    {
      title: "Tech Titan",
      description:
        "We’re all about staying on top of the latest tech. Mastering new tools keeps us sane.",
      link: "#",
      icon: <CpuChipIcon className="w-8 h-8 text-primary-500" />,
      className: "sm:col-span-1",
    },
    {
      title: "Data Driver",
      description:
        "Data is our best friend. We use it to make smart decisions and stay on the right track.",
      link: "#",
      icon: <ChartBarIcon className="w-8 h-8 text-primary-500" />,
      className: "sm:col-span-1",
    },
    {
      title: "Quick Study",
      description:
        "We’re fast learners. Picking up new skills helps us stay ahead and keep things fresh.",
      link: "#",
      icon: <BoltIcon className="w-8 h-8 text-primary-500" />,
      className: "sm:col-span-1",
    },
    {
      title: "Artful Ace",
      description:
        "Creativity is our superpower. Our goal is to infuse a spark of originality and fun into every task. We treat projects as blank canvases, and we paint it with creativity and passion.",
      link: "#",
      icon: <LightBulbIcon className="w-8 h-8 text-primary-500" />,
      className: "sm:col-span-2",
    },
    {
      title: "Solution Seeker",
      description:
        "We’re problem solvers. No matter what challenge comes our way, we get things done.",
      link: "#",
      icon: <PuzzlePieceIcon className="w-8 h-8 text-primary-500" />,
      className: "sm:col-span-1",
    },
  ];

  return (
    <section className="bg-black">
      <div className="px-6 py-8 mx-auto max-w-7xl sm:text-left lg:px-8 lg:py-16">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
            We stand for
          </h2>
          <p className="mt-6 text-xl leading-7 text-white">
            Having principles is often underrated, but we stick to ours, which
            shows the commitment to doing our best and making a real difference.
            Here&apos;s who we are how we act in this crazy world.
          </p>
        </div>
        <div className="gap-8 mt-8 sm:mt-20 sm:grid sm:grid-cols-3 lg:grid-cols-4">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              link={card.link}
              icon={card.icon}
              className={card.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
