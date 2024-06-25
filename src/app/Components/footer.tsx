import React, { useState, useRef, useEffect } from "react";
import {
  ClockIcon,
  PhoneIcon,
  ClipboardIcon,
  CreditCardIcon,
  MapPinIcon,
  EnvelopeIcon,
  AtSymbolIcon,
  UserGroupIcon,
  ArrowPathRoundedSquareIcon,
  UserIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

interface Link {
  name: string;
  href: string;
  icon: React.ElementType<React.SVGProps<SVGSVGElement>>;
}

const Card = ({ title, links, socials }: { title: string; links: Link[]; socials?: { [key: string]: string } }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleAllClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (socials) {
      Object.values(socials).forEach((url) => window.open(url, '_blank'));
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, buttonRef]);

  return (
    <div className="bg-secondary-400 text-white p-6 rounded-tr-ct pb-8 rounded-bl-ct border border-primary-500/20 shadow-lg transition-transform duration-500 hover:-translate-y-1">
      <h2 className="text-lg font-bold mb-2 ">{title}</h2>
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
        {socials && (
          <li className="relative flex items-center space-x-2">
            <button
              ref={buttonRef}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 text-md font-regular leading-6 text-white hover:text-gray-200 transition-transform duration-500 hover:scale-105"
            >
              <AtSymbolIcon className="h-5 w-5 text-primary-500" aria-hidden="true" />
              <span>weunzet on socials</span>
            </button>
            {dropdownOpen && (
              <div ref={dropdownRef} className="absolute bottom-8 -left-3 bg-secondary-400 text-white border border-primary-500/20 shadow-lg rounded-tl-xl rounded-br-xl p-4 z-10 md:top-auto md:bottom-8 transition-transform duration-500 hover:-translate-y-1">
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={handleAllClick}
                      className="flex items-center space-x-2 text-md font-regular leading-6 hover:text-gray-200 transition-transform duration-500 hover:scale-105"
                    >
                      <UserGroupIcon className="h-5 w-5 text-primary-500" aria-hidden="true" />
                      <span>All</span>
                    </a>
                  </li>
                  {Object.keys(socials).map((key, index) => (
                    <li key={index} className="mt-2">
                      <a
                        href={socials[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-md font-regular leading-6 hover:text-gray-200 transition-transform duration-500 hover:scale-105"
                      >
                        {key === 'LinkedIn' && <FaLinkedin className="h-5 w-5 text-primary-500" aria-hidden="true" />}
                        {key === 'Instagram' && <FaInstagram className="h-5 w-5 text-primary-500" aria-hidden="true" />}
                        <span>{key}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        )}
      </ul>
    </div>
  );
};

const socials = {
  LinkedIn: "https://www.linkedin.com/company/weunzet",
  Instagram: "https://www.instagram.com/weunzet",
};

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="bg-secondary-400 rounded-tr-ct border-t border-primary-500/20 relative">
      <div className="relative isolate overflow-hidden py-16 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Play your cards right today,
                <br />
                <span className="text-primary-500">And we start tomorrow!</span>
              </h2>
              <p className="mt-4 text-xl leading-8 text-white">
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
              <dl className="text-lg grid grid-cols-1 flex gap-x-8 gap-y-8 sm:grid-cols-2 lg:pt-2 relative z-10">
                <Card
                  title="Menu"
                  links={[
                    { name: "Ace Level Projects", href: "#projects", icon: ClipboardIcon },
                    { name: "What Clients Say", href: "#testimonials", icon: UserIcon },
                    { name: "How Does It Works", href: "#how", icon: ArrowPathRoundedSquareIcon },
                    { name: "Product Laboratory", href: "#products", icon: SwatchIcon },
                    { name: "What is The Cost", href: "#pricing", icon: CreditCardIcon },
                  ]}
                />
                <Card
                  title="Contact"
                  links={[
                    { name: "we@unzet.com", href: "mailto:we@unzet.com", icon: EnvelopeIcon },
                    { name: "+40 (750) 460 150", href: "tel:+40750460150", icon: PhoneIcon },
                    { name: "9:00 to 18:00 GMT+2", href: "#", icon: ClockIcon },
                    { name: "Bucharest, Romania", href: "#", icon: MapPinIcon },
                  ]}
                  socials={socials}
                />
              </dl>
            </div>
          </div>
        </div>
        <div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        ></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-between lg:px-8 border-t border-primary-500/20 shadow-lg">
        <div className="md:order-1 md:mt-0">
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
