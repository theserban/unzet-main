"use client";

import React, { useState, useEffect } from "react";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, TrophyIcon, MapIcon, CheckIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const getIcon = (status: string): JSX.Element | null => {
  switch (status) {
    case 'done':
      return <CheckIcon className="h-5 w-5 text-primary-500 mr-2" />;
    case 'in-progress':
      return <ArrowPathIcon className="h-5 w-5 text-primary-500 mr-2" />;
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

const Card: React.FC<CardProps> = ({ icon: Icon, title, power, description, pills }) => (
  <div className="ring-1 ring-gray-400/10 w-[37rem] h-auto bg-secondary-400 text-white p-6 rounded-tr-ct rounded-bl-ct border border-primary-500/20 shadow-lg transition-transform duration-500 hover:-translate-y-3">
    <div className="flex items-center mb-4">
      <div className="flex items-center justify-center h-12 w-12 rounded-full">
        <Icon className="h-12 w-12 text-primary-500" />
      </div>
      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl font-bold ml-4">{title}</h3>
    </div>
    <div className="flex items-center mb-4 space-x-2">
      {pills.map((pill, index) => (
        <h3 key={index} className="rounded-bl-xl rounded-tr-xl inline-flex border border-primary-500/20 px-4 py-1 text-base font-semibold text-primary-500">
          {pill}
        </h3>
      ))}
      <p className="text-primary-500 font-semibold pl-2">{power}</p>
    </div>
    <div className="pt-4 grid grid-cols-2">
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

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        setChangeContent(true);
      } else {
        const useClientElement = document.getElementById('how2');
        const cardElement = document.getElementById('sticky-card');
        if (useClientElement && cardElement) {
          const useClientRect = useClientElement.getBoundingClientRect();
          const cardRect = cardElement.getBoundingClientRect();
          if (cardRect.top < useClientRect.bottom && cardRect.bottom > useClientRect.top) {
            setChangeContent(true);
          } else {
            setChangeContent(false);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section id='how'>
        <div className="relative isolate overflow-hidden px-6 py-16 sm:py-24 lg:overflow-visible lg:px-0">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
            </svg>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="mx-auto max-w-2xl lg:mx-0">
                  <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
                  The Royal Flush
                  </h2>
                  <p className="mt-6 leading-7 text-white text-xl">
                  Everything we do varies from project to project. As growth hackers, we must approach each initiative differently to address its unique needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-lg leading-7 text-white lg:max-w-lg">
                  <ul role="list" className="space-y-8 text-white">
                    <li className="flex gap-x-3">
                      <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-primary-500" aria-hidden="true" />
                      <span>
                      Whether it&prime;s for our product or a client&prime;s, we begin by identifying the specific needs at that stage of development. This could involve naming and branding at the outset, or implementing various strategies, starting ads and building pitches later on.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-primary-500" aria-hidden="true" />
                      <span>
                      We focus on one task at a time, following a staged process where each loop is closed before starting the next. This approach requires close collaboration with the team and regular updates on the progress.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <ServerIcon className="mt-1 h-5 w-5 flex-none text-primary-500" aria-hidden="true" />
                      <span>
                      We developed a system where each major task is represented as a card, like trading cards from childhood. Each card gives you power and brings you closer to success. For instance, having your branding in place makes marketing much easier.
                      </span>
                    </li>
                  </ul>
                  <section id="how2">
                  <h2 className="mt-16 text-3xl font-bold tracking-tight text-primary-500">Be the Joker</h2>
                  <p className="mt-6 leading-7 text-white text-xl">
                  To succeed, you need to think differently and solve problems in multiple ways, just like the flexibility and unpredictability of the Joker in a deck of cards.
                  </p>
                  <p className="mt-6 leading-7 text-white text-xl">
                  We aim to be a seamless part of your team, not just a service provider.  Our primary goal is to contribute to innovation, allowing us to scale our impact by collaborating with many incredible initiatives.
                  </p>
                  </section>
                </div>
              </div>
            </div>
            <div id="sticky-card" className="-ml-16 -mt-12 pt-12 pl-12 pr-12   lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              {changeContent ? (
                <Card
                  icon={TrophyIcon}
                  title="Podium Edge"
                  power="Power +80"
                  description={[
                    { text: 'Naming & Branding', status: 'done' },
                    { text: 'Product Market Fit', status: 'done' },
                    { text: 'Acquire Users', status: 'done' },
                    { text: 'Research & Development', status: 'in-progress' }
                  ]}
                  pills={['3/4 done', 'Dec 25', 'New King']}
                />
              ) : (
                <Card
                  icon={MapIcon}
                  title="The Blueprint"
                  power="Power 0"
                  description={[
                    { text: 'Naming & Branding', status: 'in-progress' },
                    { text: 'Product Market Fit', status: 'in-progress' },
                    { text: 'Acquire Users', status: 'in-progress' },
                    { text: 'Research & Development', status: 'in-progress' }
                  ]}
                  pills={['0/4 done', 'Jun 16', 'Early Jack']}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
