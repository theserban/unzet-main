import React, { useState, useEffect } from "react";
import {
  TrophyIcon,
  MapIcon,
  CheckIcon,
  ArrowPathIcon,
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
  CalendarDaysIcon,
  DocumentArrowUpIcon,
  TicketIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";

const getIcon = (status: string): JSX.Element | null => {
  switch (status) {
    case "done":
      return <CheckIcon className="w-5 h-5 mr-2 text-primary-500" />;
    case "in-progress":
      return <ArrowPathIcon className="w-5 h-5 mr-2 text-primary-500" />;
    default:
      return null;
  }
};

interface CardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  power: string;
  description: { text: string; status: string }[];
  pills: string[];
}

const Card: React.FC<CardProps> = ({
  icon: Icon,
  title,
  power,
  description,
  pills,
}) => (
  <div className="ring-1 ring-gray-400/10 w-[37rem] h-auto bg-secondary-400 text-white p-6 rounded-tr-ct rounded-bl-ct border border-primary-500/20 shadow-lg transition-transform duration-500 hover:-translate-y-3">
    <div className="flex items-center mb-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-full">
        <Icon className="w-12 h-12 text-primary-500" />
      </div>
      <h3 className="ml-4 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h3>
    </div>
    <div className="flex items-center mb-4 space-x-2">
      {pills.map((pill, index) => (
        <h3
          key={index}
          className="inline-flex px-4 py-1 text-base font-semibold border rounded-bl-xl rounded-tr-xl border-primary-500/20 text-primary-500"
        >
          {pill}
        </h3>
      ))}
      <p className="pl-2 font-semibold text-primary-500">{power}</p>
    </div>
    <div className="grid grid-cols-2 pt-4">
      {description.map((item, index) => (
        <div key={index} className="flex items-center mb-2">
          {getIcon(item.status)}
          {item.text}
        </div>
      ))}
    </div>
  </div>
);

export default function How() {
  const [changeContent, setChangeContent] = useState(false);
  const userDate = new Date();
  const datePlus35 = new Date(userDate);
  datePlus35.setDate(userDate.getDate() + 35);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        setChangeContent(true);
      } else {
        const useClientElement = document.getElementById("how2");
        const cardElement = document.getElementById("sticky-card");
        if (useClientElement && cardElement) {
          const useClientRect = useClientElement.getBoundingClientRect();
          const cardRect = cardElement.getBoundingClientRect();
          if (
            cardRect.top < useClientRect.bottom &&
            cardRect.bottom > useClientRect.top
          ) {
            setChangeContent(true);
          } else {
            setChangeContent(false);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section id="how">
        <div className="relative px-6 py-16 overflow-hidden isolate sm:py-24 lg:overflow-visible lg:px-0">
          <div className="absolute inset-0 overflow-hidden -z-10">
            <svg
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              />
            </svg>
          </div>
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-2xl mx-auto lg:mx-0">
                  <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
                    How We Roll
                  </h2>
                  <p className="mt-6 text-xl leading-7 text-white">
                    Everything we do varies from project to project. As ace
                    shapers, we must approach each initiative differently to
                    address its unique needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-2xl text-lg leading-7 text-white lg:max-w-lg">
                  <ul role="list" className="space-y-8 text-white">
                    <li className="flex gap-x-3">
                      <WalletIcon
                        className="flex-none w-5 h-5 mt-1 text-primary-500"
                        aria-hidden="true"
                      />
                      <span>
                        We begin by identifying your specific needs at that
                        stage of development. This could involve naming and
                        branding at the outset, or implementing various
                        strategies, starting ads and building pitches later on.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <CalendarDaysIcon
                        className="flex-none w-5 h-5 mt-1 text-primary-500"
                        aria-hidden="true"
                      />
                      <span>
                        Each task sprint is closed before starting the next one.
                        This approach requires close collaboration with the team
                        and regular updates on the progress.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <DocumentArrowUpIcon
                        className="flex-none w-5 h-5 mt-1 text-primary-500"
                        aria-hidden="true"
                      />
                      <span>
                        You should visualise achievements, that&apos;s why we
                        have a system of cards representing each step you reach
                        in your journey. For instance, having a great branding
                        will get you the &quot;Brand Bound&quot; achievement.
                      </span>
                    </li>
                  </ul>
                  <h2
                    className="mt-16 text-3xl font-bold tracking-tight text-primary-500"
                    id="how2"
                  >
                    In change we trust
                  </h2>
                  <p className="mt-6 text-xl leading-7 text-white">
                    To succeed, you need to think differently and solve problems
                    in multiple ways, that&apos;s why you should be &quot;The
                    Joker&quot; and dont take things &quot;as they are&quot;.
                  </p>
                  <p className="mt-6 text-xl leading-7 text-white">
                    We aim to blend smoothly with your team, going beyond the
                    role of a service provider. We approach your startups with
                    the same care and dedication as if they were our own.
                  </p>
                </div>
              </div>
            </div>
            <div
              id="sticky-card"
              className="pt-16 pl-12 pr-12 -mt-12 -ml-12 sm:-ml-4 lg:-ml-16 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
            >
              {changeContent ? (
                <Card
                  icon={TrophyIcon}
                  title="Podium Edge"
                  power="Power +80"
                  description={[
                    { text: "Naming & Branding", status: "done" },
                    { text: "Product Market Fit", status: "done" },
                    { text: "Acquire Users", status: "done" },
                    { text: "Research & Development", status: "in-progress" },
                  ]}
                  pills={["3/4 done", formatDate(datePlus35), "New King"]}
                />
              ) : (
                <Card
                  icon={MapIcon}
                  title="The Blueprint"
                  power="Power 0"
                  description={[
                    { text: "Naming & Branding", status: "in-progress" },
                    { text: "Product Market Fit", status: "in-progress" },
                    { text: "Acquire Users", status: "in-progress" },
                    { text: "Research & Development", status: "in-progress" },
                  ]}
                  pills={["0/4 done", formatDate(userDate), "Early Jack"]}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
