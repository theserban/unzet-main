"use client";
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import {  } from '@headlessui/react'
import { useState } from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const currentYear = new Date().getFullYear();

const navigation = [
  { name: 'Clients', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Testimonials', href: '#' },
  { name: 'Pricing', href: '#' },
]

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    xUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]

import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

const timeline = [
  {
    name: 'Founded company',
    description:
      'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
    date: 'Aug 2021',
    dateTime: '2021-08',
  },
  {
    name: 'Secured $65m in funding',
    description:
      'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
    date: 'Dec 2021',
    dateTime: '2021-12',
  },
  {
    name: 'Released beta',
    description:
      'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
    date: 'Feb 2022',
    dateTime: '2022-02',
  },
  {
    name: 'Global launch of product',
    description:
      'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
    date: 'Dec 2022',
    dateTime: '2022-12',
  },
]

const navigationf = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/shiftintech",
    icon: (props: SVGProps) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/shiftintech/",
    icon: (props: SVGProps) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const featuredTestimonial = {
  body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
  author: {
    name: 'Brenna Goyette',
    handle: 'brennagoyette',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
    logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-white.svg',
  },
}
const testimonials = [
  [
    [
      {
        body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
        author: {
          name: 'Leslie Alexander',
          handle: 'lesliealexander',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
        author: {
          name: 'Lindsay Walton',
          handle: 'lindsaywalton',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
  ],
]



export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="bg-black">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Unzet</span>
              <img
                className="h-auto w-32 transform transition-transform duration-500 hover:scale-105"
                src="/photos/logo.svg"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white hover:text-gray-200 transform transition-transform duration-500 hover:scale-105">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button className="rounded-tr-lg rounded-bl-lg outline text-white px-4 py-2.5 text-xs font-semibold shadow-sm hover:bg-secondary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500 transform transition-transform duration-500 hover:scale-105 flex items-center">
          <span className='pr-2'>
          <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full bg-white opacity-100"></span>
           <span className="relative inline-flex pb-1 h-2 w-2 bg-white"></span>
          </span>
          </span> Book Now 
           </button>
          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Unzet</span>
                <img
                  className="h-auto w-32"
                  src="/photos/logo.svg"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-tr-lg rounded-bl-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-black hover:bg-primary-500"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
          <button className="rounded-tr-lg rounded-bl-lg outline text-white px-4 py-2.5 text-xs font-semibold shadow-sm hover:bg-secondary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500 transform transition-transform duration-500 hover:scale-105 flex items-center">
          <span className='pr-2'>
          <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-sm bg-white opacity-100"></span>
           <span className="relative inline-flex rounded-sm h-2 w-2 bg-white"></span>
          </span>
          </span> Book Now 
           </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

        <div className="relative isolate">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-primary-500/30 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
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
          <div className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-12 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Build the Right Deck to{" "}
                <span className="text-primary-500"> Become the Ace<span className="pl-1 relative text-dot-sm lg:text-dot top-dot">&#x25A0;</span></span> 
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-white sm:max-w-md lg:max-w-none">
                  Our mission is to transform tech startups and initiatives into strong brands by delivering all the essential elements needed to develop an outstanding product quickly and efficiently.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-sm font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                    >
                      Ace Level Clients
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-white hover:text-gray-200 transform transition-transform duration-500 hover:scale-105">
                     How It Works <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80 ">
                    <div className="relative">
                      <img
                        src="/photos/card.png"
                        alt=""
                        className="aspect-[2/3] w-full bg-black object-cover shadow-lg transform transition-transform duration-500 hover:-translate-y-3 rounded-tr-ct rounded-bl-ct border border-primary-500/20"
                      />
                      <div className="pointer-events-none absolute inset-0" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                         src="/photos/card3.png"
                        alt=""
                        className="aspect-[2/3] w-full bg-gray-900/5 object-cover shadow-lg transform transition-transform duration-500 hover:-translate-y-3 rounded-tr-ct rounded-bl-ct border border-primary-500/20"
                      />
                      <div className="pointer-events-none absolute inset-0" />
                    </div>
                    <div className="relative">
                      <img
                        src="/photos/card4.png"
                        alt=""
                        className="aspect-[2/3] w-full bg-gray-900/5 object-cover shadow-lg transform transition-transform duration-500 hover:-translate-y-3 rounded-tr-ct rounded-bl-ct border border-primary-500/20"
                      />
                      <div className="pointer-events-none absolute inset-0" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="/photos/card5.png"
                        alt=""
                        className="aspect-[2/3] w-full bg-gray-900/5 object-cover shadow-lg transform transition-transform duration-500 hover:-translate-y-3 rounded-tr-ct rounded-bl-ct border border-primary-500/20"
                      />
                      <div className="pointer-events-none absolute inset-0" />
                    </div>
                    <div className="relative">
                      <img
                         src="/photos/card6.png"
                        alt=""
                        className="aspect-[2/3] w-full bg-gray-900/5 object-cover shadow-lg transform transition-transform duration-500 hover:-translate-y-3 rounded-tr-ct rounded-bl-ct border border-primary-500/20"
                      />
                      <div className="pointer-events-none absolute inset-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




  <div className="bg-primary-black py-24 sm:py-18">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:max-w-none">
      <h2 className="text-lg font-semibold leading-8 text-primary-500 text-center">Incubated Startups</h2>
      <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-3">
        <img
          className="col-span-2 max-h-12 w-full object-contain object-center lg:col-span-1 transform transition-transform duration-500 hover:scale-105"
          src="photos/persuwise.svg"
          alt="Persuwise"
          width={158}
          height={48}
        />
          <img
          className="col-span-2 max-h-12 w-full object-contain object-center lg:col-span-1 transform transition-transform duration-500 hover:scale-105"
          src="photos/antvise.svg"
          alt="Antvise"
          width={158}
          height={48}
        />  

           <img
          className="col-span-2 max-h-12 w-full object-contain object-center lg:col-span-1 transform transition-transform duration-500 hover:scale-105 pt-4"
          src="photos/shiftintech.svg"
          alt="Shiftintech"
          width={158}
          height={48}
        /> 

      </div>
    </div>
  </div>
    </div>

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
        </div>

    <div className="overflow-hidden bg-black py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">Our people <span className="pl-1 relative text-dot-sm lg:text-dot top-dot">&#x25A0;</span></h2>
            <p className="mt-6 text-xl leading-8 text-white">
              Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut
              molestiae velit error quod. Excepturi quidem expedita molestias quas.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                    >
                      Get started
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-white hover:text-gray-200 transform transition-transform duration-500 hover:scale-105">
                      Live demo <span aria-hidden="true">→</span>
                    </a>
                  </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-8 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src="/photos/card2.png"
                alt=""
                className="aspect-[8/5] w-[42rem] max-w-none rounded-tr-ct rounded-bl-ct object-cover transform transition-transform duration-500 hover:-translate-x-3 mb-1"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  src="/photos/card2.png"
                  alt=""
                  className="aspect-[4/3] w-[28rem] max-w-none flex-none rounded-br-ct rounded-tl-ct bg-gray-50 object-cover transform transition-transform duration-500 hover:-translate-x-3"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  src="/photos/card2.png"
                  alt=""
                  className="aspect-[7/5] w-[34rem] max-w-none flex-none rounded-tr-ct rounded-bl-ct bg-gray-50 object-cover transform transition-transform duration-500 hover:-translate-x-3"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src="/photos/card2.png"
                  alt=""
                  className="aspect-[4/3] w-[20rem] max-w-none rounded-tl-ct rounded-br-ct bg-gray-50 object-cover transform transition-transform duration-500 hover:-translate-x-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="relative isolate">
          <svg
            className="absolute inset-x-0 top-20 -z-10 h-[64rem] w-full stroke-primary-500/30 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
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
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
            We approach the workplace
          </h2>
          <p className="mt-6 text-base leading-7 text-white">
            Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras
            purus nibh cursus sit eu in id. Integer vel nibh.
          </p>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 bg-secondary-400 rounded-tl-ct rounded-br-ct p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start border border-primary-500/20 transform transition-transform duration-500 hover:translate-y-3">
            <p className="flex-none text-3xl font-bold tracking-tight text-primary-500">250k</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">Users on the platform</p>
              <p className="mt-2 text-base text-md leading-7 text-white/70  ">
                Vel labore deleniti veniam consequuntur sunt nobis.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-tr-ct rounded-bl-ct bg-secondary-400 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44 border border-primary-500/20 transform transition-transform duration-500 hover:translate-y-3">
            <p className="flex-none text-3xl font-bold tracking-tight text-primary-500">$8.9 billion</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">
                We’re proud that our customers have made over $8 billion in total revenue.
              </p>
              <p className="mt-2 text-base text-md leading-7 text-white/70">
                Eu duis porta aliquam ornare. Elementum eget magna egestas.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-tl-ct rounded-br-ct bg-secondary-400 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28 border border-primary-500/20 transform transition-transform duration-500 hover:translate-y-3">
            <p className="flex-none text-3xl font-bold tracking-tight text-primary-500">401,093</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">Transactions this year</p>
              <p className="mt-2 text-base leading-7 text-white/70">
                Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu duis porta aliquam ornare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>


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
            Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras
            purus nibh cursus sit eu in id. Integer vel nibh.
          </p>
        </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden ">
          <img
            className="w-[24rem] max-w-none rounded-tl-ct shadow-xl ring-1 ring-gray-400/10 w-[56rem] h-[24rem]"
            src="/photos/card2.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-white lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-white">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-primary-500" aria-hidden="true" />
                  <span>
                     Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-primary-500" aria-hidden="true" />
                  <span>
                    Anim aute id magna aliqua
                    ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-primary-500" aria-hidden="true" />
                  <span>
                    Ac tincidunt sapien
                    vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-primary-500">No server? No problem.</h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
            </div>
          </div>
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


    <div className="relative isolate bg-black pb-32 pt-24 sm:pt-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
  <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
            We approach the workplace
          </h2>
          <p className="mt-6 text-base leading-7 text-white">
            Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras
            purus nibh cursus sit eu in id. Integer vel nibh.
          </p>
        </div>
    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-white sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
      <figure className="bg-secondary-400 pb-2 shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1 rounded-tr-ct rounded-bl-ct text-left rounded-bl-ct border border-primary-500/20 transform transition-transform duration-500 hover:translate-x-3">
        <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-white sm:p-12 sm:text-xl sm:leading-8">
          <p>{`“${featuredTestimonial.body}”`}</p>
        </blockquote>
        <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
          <img className="h-10 w-10 flex-none rounded-tr-md rounded-bl-md" src={featuredTestimonial.author.imageUrl} alt="" />
          <div className="flex-auto">
            <div className="font-semibold text-primary-500">{featuredTestimonial.author.name}</div>
            <div className="text-white">{`@${featuredTestimonial.author.handle}`}</div>
          </div>
          <img className="h-10 w-auto flex-none" src={featuredTestimonial.author.logoUrl} alt="" />
        </figcaption>
      </figure>
      {testimonials.map((columnGroup, columnGroupIdx) => (
        <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
          {columnGroup.map((column, columnIdx) => (
            <div
              key={columnIdx}
              className={classNames(
                (columnGroupIdx === 0 && columnIdx === 0) ||
                (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                  ? 'xl:row-span-2'
                  : 'xl:row-start-1',
                'space-y-8 text-left'
              )}
            >
              {column.map((testimonial) => (
                <figure
                  key={testimonial.author.handle}
                  className="p-6 shadow-lg ring-1 ring-gray-900/5 rounded-tr-ct rounded-bl-ct bg-secondary-400 text-left rounded-bl-ct border border-primary-500/20 transform transition-transform duration-500 hover:translate-x-3"
                >
                  <blockquote className="text-white font-semibold">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img className="h-10 w-10 rounded-tr-md rounded-bl-md" src={testimonial.author.imageUrl} alt="" />
                    <div>
                      <div className="font-semibold text-primary-500">{testimonial.author.name}</div>
                      <div className="text-white">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
</div>



    <div className="relative isolate">
          <svg
            className="absolute inset-x-0 top-20 -z-10 h-[64rem] w-full stroke-primary-500/20 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
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
    
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
            We approach the workplace
          </h2>
          <p className="mt-6 text-base leading-7 text-white">
            Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras
            purus nibh cursus sit eu in id. Integer vel nibh.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-tl-ct rounded-br-ct bg-secondary-400 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none border border-primary-500/20">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-primary-500">Lifetime membership</h3>
            <p className="mt-6 text-base leading-7 text-white">
              Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
              repellendus etur quidem assumenda.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-primary-500">What’s included</h4>
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-white sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-primary-500" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-tl-ct rounded-br-ct bg-primary-500 py-10 mx-2 my-2 text-center lg:flex lg:flex-col lg:justify-center lg:py-12">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-black">Pay once, own it forever</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-black">€1200</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-black">EUR</span>
                </p>
                <a
                  href="#"
                  className="mt-10 transform transition-transform duration-500 hover:scale-105 block w-full bg-secondary-400 rounded-tr-xl rounded-bl-xl px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
                >
                  Get access
                </a>
                <p className="mt-6 text-sm leading-5 text-black">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div className="mx-auto max-w-7xl px-6 lg:px-8">
  <div className="relative mx-auto max-w-2xl py-12 sm:py-16 lg:max-w-4xl flex lg:flex-row flex-col items-start lg:items-start gap-x-6 gap-y-8 lg:gap-x-10 ">
    <div className="w-68 lg:w-72 flex-shrink-0">
      <img
        className="rounded-tl-xl rounded-br-xl rounded-bl-ct border border-primary-500/20"
        src="/photos/founder.png"
        alt=""
      />
    </div>
    <div className="relative lg:ml-10">
      <blockquote className="text-xl leading-8 text-white sm:text-2xl sm:leading-9">
        <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">Simple no-tricks pricing</h2>
        <p className="mt-4 text-lg leading-8 text-white/80">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
        </p>
        <p className="mt-2 text-lg leading-8 text-white">
          The Serban, Founder
        </p>
        <div className="mt-8 flex items-center gap-x-6">
          <a
            href="#"
            className="rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
          >
            Get started
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white hover:text-gray-200 transform transition-transform duration-500 hover:scale-105">
            Live demo <span aria-hidden="true">→</span>
          </a>
        </div>
      </blockquote>
    </div>
  </div>
</div>

    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-40 pt-12">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Let me answer</h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-white/70">{faq.answer}</p>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>


    <div className="bg-primary-500 rounded-tr-ct">
      <div className="px-6 pt-24 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-400 sm:text-4xl">
            Boost your productivity.
            <br />
            Start using our app today.
          </h2>
          <div className="mt-10 flex items-center justify-center gap-x-6">

                    <a
                      href="#"
                      className="rounded-bl-xl rounded-tr-xl bg-secondary-400 px-3.5 py-2.5 text-sm font-semibold text-primary-500 shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                    >
                      Book Now
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-secondary-400 hover:text-black transform transition-transform duration-500 hover:scale-105">
                      Pitch Deck <span aria-hidden="true">→</span>
                    </a>
                  </div>
        </div>
      </div>
    </div>



    <section
        className="bg-primary-500" id="footer">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-left space-x-6 md:order-2">
            {navigationf.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-secondary-400 hover:text-black transform transition-transform duration-500 hover:scale-110"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-left text-sm leading-5 text-black">
              &copy; {currentYear} Unzet, All rights - <u><a href="https://drive.google.com/uc?export=download&id=1kEI0rRBbqS2LrOIxJRVQP0MeH_UCQYyV">Download Presskit</a></u>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
