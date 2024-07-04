import React from "react";
import {
  TagIcon,
  IdentificationIcon,
  UsersIcon,
  PencilIcon,
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
      title: "Strategic Name Development",
      description:
        "Ready-to-trademark brand names with guaranteed dot-com domains, SEO optimized with creative slogan & brand story creation.",
      link: "#",
      icon: <TagIcon className="w-8 h-8 text-primary-500" />,
      className: "sm:col-span-2",
    },
    {
      title: "Brand Identity",
      description:
        "Memorable brand identity design to make your business look visually appealing",
      link: "#",
      icon: <IdentificationIcon className="w-8 h-8 text-primary-500" />,
      className: "sm:col-span-1",
    },
    {
      title: "Brand Positioning",
      description:
        "Optimizing brand influence that deeply connects with your target audience and",
      link: "#",
      icon: <TagIcon className="w-8 h-8 text-primary-500" />,
      className: "sm:col-span-1",
    },
    {
      title: "Self-Evolving",
      description:
        "Elevating digital presence with adaptive website design service ",
      link: "#",
      icon: <TagIcon className="w-8 h-8 text-primary-500" />,
      className: "sm:col-span-1",
    },
    {
      title: "Brand Marketing & Growth",
      description:
        "Igniting creative marketing action plans that are easy-to-follow, helping you increase awareness, sales and momentum to grow your brand.",
      link: "#",
      icon: <UsersIcon className="w-8 h-8 text-primary-500" />,
      className: "sm:col-span-2",
    },
    {
      title: "Brand Clarity",
      description:
        "Gain complete brand clarity with our immersive workshops, guiding you through insightful",
      link: "#",
      icon: <PencilIcon className="w-8 h-8 text-primary-500" />,
      className: "sm:col-span-1",
    },
  ];

  return (
    <section className="bg-black">
      <div className="px-6 py-8 mx-auto max-w-7xl sm:text-left lg:px-8 lg:py-16">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
            Insights from Top Achievers
          </h2>
          <p className="mt-6 text-xl leading-7 text-white">
            We love seeing how innovators disrupt the market. Instead of sharing
            opinions about us, here are their missions, both past and present,
            which we proudly support and contribute to.
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
