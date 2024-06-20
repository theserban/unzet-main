'use client';
import React from "react";
import {
  ClockIcon,
  PhoneIcon,
  ClipboardIcon,
  ArrowPathIcon,
  FaceSmileIcon,
  CreditCardIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

interface Link {
  name: string;
  href: string;
  icon: React.ElementType<React.SVGProps<SVGSVGElement>>;
}

const Card = ({ title, links }: { title: string; links: Link[] }) => (
  <div className="bg-secondary-400 text-white p-6 rounded-tr-ct pb-8 rounded-bl-ct border border-primary-500/20 shadow-lg transition-transform duration-500 hover:-translate-y-1">
    <h2 className="text-lg font-bold mb-2">{title}</h2>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index} className="flex items-center space-x-2">
          <a
            href={link.href}
            className="flex items-center space-x-2 text-md font-regular leading-6 text-white hover:text-gray-200 transition-transform duration-500 hover:scale-105"
          >
            <link.icon className="h-5 w-5 text-primary-500" aria-hidden="true" />
            <span>{link.name}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const navigationf = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/shiftintech",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
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
    icon: (props: React.SVGProps<SVGSVGElement>) => (
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

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="bg-secondary-400 rounded-tr-ct border-t border-primary-500/20 relative">
      <div className="relative isolate overflow-hidden py-14 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Play your cards right today,
                <br />
                <span className="text-primary-500">And we start tomorrow!</span>
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-200">
                Whether you are sure you want to collaborate with us or just want to exchange resources, let&apos;s meet.
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <button
                  data-cal-namespace=""
                  data-cal-link="weunzet/30min"
                  data-cal-config='{"layout":"month_view"}'
                  className="rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-sm font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105 text-center"
                >
                  Book Now
                </button>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white hover:text-gray-200 transform transition-transform duration-500 hover:scale-105"
                >
                  Pitch Deck <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:pt-2 relative z-10">
                <Card
                  title="Menu"
                  links={[
                    { name: "Ace Level Projects", href: "#brand-a", icon: ClipboardIcon },
                    { name: "How it Works", href: "#brand-b", icon: ArrowPathIcon },
                    { name: "What Clients Say", href: "#brand-a", icon: FaceSmileIcon },
                    { name: "What's the cost", href: "#brand-b", icon: CreditCardIcon },
                  ]}
                />
                <Card
                  title="Contact"
                  links={[
                    { name: "we@unzet.com", href: "#facebook", icon: EnvelopeIcon },
                    { name: "+40 (750) 460 150", href: "#twitter", icon: PhoneIcon },
                    { name: "9:00 to 18:00 GMT+2", href: "#twitter", icon: ClockIcon },
                    { name: "Bucharest, Romania", href: "#twitter", icon: MapPinIcon },
                  ]}
                />
              </dl>
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-transparent border-t-2 border-secondary-400"></div>
            </div>
          </div>
        </div>
        <div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        ></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-between lg:px-8 border-t border-primary-500/20 shadow-lg">
        <div className="flex justify-left space-x-6 md:order-2 mt-2">
          {navigationf.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-primary-500 hover:text-primary-400 transform transition-transform duration-500 hover:scale-110"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-5 w-5" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-6 md:order-1 md:mt-0">
          <p className="text-left text-sm leading-5">
            &copy; {currentYear} Unzet, All rights - {" "}
            <u>
              <a
                className="transform transition-transform duration-500 hover:scale-105 inline-block hover:text-gray-200"
                href="https://drive.google.com/uc?export=download&id=1kEI0rRBbqS2LrOIxJRVQP0MeH_UCQYyV"
              >
                Download Presskit
              </a>
            </u>
          </p>
        </div>
      </div>
    </div>
  );
}
