"use client";

import React, { useState, useEffect } from 'react';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, TrophyIcon, MapIcon, CheckIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const timeline = [
  {
    name: 'Founded company',
    description: 'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
    date: 'Aug 2021',
    dateTime: '2021-08',
  },
  {
    name: 'Secured $65m in funding',
    description: 'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
    date: 'Dec 2021',
    dateTime: '2021-12',
  },
  {
    name: 'Released beta',
    description: 'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
    date: 'Feb 2022',
    dateTime: '2022-02',
  },
  {
    name: 'Global launch of product',
    description: 'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
    date: 'Dec 2022',
    dateTime: '2022-12',
  },
];

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
    <div className="pt-4 grid grid-cols-2 gap-x-4">
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
        const useClientElement = document.getElementById('use-client');
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
        <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
            </svg>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="mx-auto max-w-2xl lg:mx-0">
                  <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
                    We approach the workplace
                  </h2>
                  <p className="mt-6 text-base leading-7 text-white">
                    Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id. Integer vel nibh.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-white lg:max-w-lg">
                  <ul role="list" className="space-y-8 text-white">
                    <li className="flex gap-x-3">
                      <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-primary-500" aria-hidden="true" />
                      <span>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-primary-500" aria-hidden="true" />
                      <span>
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <ServerIcon className="mt-1 h-5 w-5 flex-none text-primary-500" aria-hidden="true" />
                      <span>
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                      </span>
                    </li>
                  </ul>
                  <p className="mt-8">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                  </p>
                  <h2 id="use-client" className="mt-16 text-2xl font-bold tracking-tight text-primary-500">No server? No problem.</h2>
                  <p className="mt-6">
                    Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in.  enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.
                  </p>
                </div>
              </div>
            </div>
            <div id="sticky-card" className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              {changeContent ? (
                <Card
                  icon={TrophyIcon}
                  title="New Content"
                  power="Power +80"
                  description={[
                    { text: 'Task 1 completed', status: 'done' },
                    { text: 'Task 2 in progress', status: 'in-progress' },
                    { text: 'Task 3 pending', status: 'in-progress' },
                    { text: 'Task 4 done', status: 'done' }
                  ]}
                  pills={['3/5 done', 'Dec 25', 'New Plan']}
                />
              ) : (
                <Card
                  icon={MapIcon}
                  title="Colab Start"
                  power="Power 0"
                  description={[
                    { text: 'Wireframe 1 done', status: 'done' },
                    { text: 'Wireframe 2 pending', status: 'in-progress' },
                    { text: 'Wireframe 3 not started', status: 'in-progress' }
                  ]}
                  pills={['0/5 done', 'Jun 16', 'Care Plan']}
                />
              )}
            </div>
          </div>
        </div>

        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {timeline.map((item) => (
                <div key={item.name}>
                  <time
                    dateTime={item.dateTime}
                    className="flex items-center text-sm font-semibold leading-6 text-primary-500"
                  >
                    <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                      <circle cx={2} cy={2} r={2} fill="currentColor" />
                    </svg>
                    {item.date}
                  </time>
                  <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{item.name}</p>
                  <p className="mt-1 text-base leading-7 text-white">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
