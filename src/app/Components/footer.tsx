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
import { LinkedinLogo, InstagramLogo } from "phosphor-react";

interface Link {
  name: string;
  href?: string;
  icon: React.ElementType<React.SVGProps<SVGSVGElement>>;
  "data-cal-namespace"?: string;
  "data-cal-link"?: string;
  "data-cal-config"?: string;
  style?: React.CSSProperties;
}

const Card = ({
  title,
  links,
  socials,
}: {
  title: string;
  links: Link[];
  socials?: { [key: string]: string };
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleAllClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (socials) {
      Object.values(socials).forEach((url) => window.open(url, "_blank"));
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
    <div className="p-6 pb-8 text-white transition-transform duration-500 border shadow-lg bg-secondary-400 rounded-tr-ct rounded-bl-ct border-primary-500/20 hover:-translate-y-1">
      {title && <h2 className="mb-2 text-lg font-bold">{title}</h2>}
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index} className="flex items-center space-x-2">
            <a
              href={link.href || "#"}
              onClick={(e) => {
                if (!link.href) e.preventDefault();
              }}
              className="flex items-center space-x-2 leading-6 text-white transition-transform duration-500 text-md font-regular hover:text-gray-200 hover:scale-105"
              {...(link.name === "9:00 to 18:00 GMT+2" && {
                "data-cal-namespace": "",
                "data-cal-link": "weunzet/30min",
                "data-cal-config": '{"layout":"month_view"}',
                style: { cursor: "pointer" },
              })}
            >
              <link.icon
                className="w-5 h-5 text-primary-500"
                aria-hidden="true"
              />
              <span>{link.name}</span>
            </a>
          </li>
        ))}
        {socials && (
          <li className="relative flex items-center space-x-2">
            <button
              ref={buttonRef}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 leading-6 text-white transition-transform duration-500 text-md font-regular hover:text-gray-200 hover:scale-105"
            >
              <AtSymbolIcon
                className="w-5 h-5 text-primary-500"
                aria-hidden="true"
              />
              <span>weunzet on socials</span>
            </button>
            {dropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute z-10 p-4 text-white transition-transform duration-500 border shadow-lg bottom-8 -left-3 bg-secondary-400 border-primary-500/20 rounded-tl-xl rounded-br-xl md:top-auto md:bottom-8 hover:-translate-y-1"
              >
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={handleAllClick}
                      className="flex items-center space-x-2 leading-6 transition-transform duration-500 text-md font-regular hover:text-gray-200 hover:scale-105"
                    >
                      <UserGroupIcon
                        className="w-5 h-5 text-primary-500"
                        aria-hidden="true"
                      />
                      <span>All</span>
                    </a>
                  </li>
                  {Object.keys(socials).map((key, index) => (
                    <li key={index} className="mt-2">
                      <a
                        href={socials[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 leading-6 transition-transform duration-500 text-md font-regular hover:text-gray-200 hover:scale-105"
                      >
                        {key === "LinkedIn" && (
                          <LinkedinLogo
                            size={20}
                            className="w-5 h-5 text-primary-500"
                            aria-hidden="true"
                          />
                        )}
                        {key === "Instagram" && (
                          <InstagramLogo
                            className="w-5 h-5 text-primary-500"
                            aria-hidden="true"
                          />
                        )}
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
    <div className="relative border-t bg-secondary-400 rounded-tr-ct border-primary-500/20">
      <div className="relative py-16 pb-20 overflow-hidden isolate">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl text-white lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Play your cards right today,
                <br />
                <span className="text-primary-500">And we start tomorrow!</span>
              </h2>
              <p className="mt-4 text-xl leading-8 text-white">
                Whether you are sure you want to collaborate with us or just
                want to exchange resources, let&apos;s meet.
              </p>
              <div className="flex items-center mt-8 gap-x-6">
                <button
                  data-cal-namespace=""
                  data-cal-link="weunzet/30min"
                  data-cal-config='{"layout":"month_view"}'
                  className="rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-sm font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105 text-center"
                >
                  Book Now
                </button>
                <button className="text-sm font-semibold leading-6 text-white transition-transform duration-500 transform cursor-pointer hover:text-gray-200 hover:scale-105">
                  Deck Soon <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
            <div className="relative grid grid-cols-1 text-lg gap-x-8 gap-y-8 sm:grid-cols-2 lg:pt-2">
              <Card
                title="Menu"
                links={[
                  {
                    name: "Ace Level Projects",
                    href: "#projects",
                    icon: ClipboardIcon,
                  },
                  {
                    name: "What Clients Say",
                    href: "#testimonials",
                    icon: UserIcon,
                  },
                  {
                    name: "How Does It Works",
                    href: "#how",
                    icon: ArrowPathRoundedSquareIcon,
                  },
                  {
                    name: "Product Laboratory",
                    href: "#products",
                    icon: SwatchIcon,
                  },
                  {
                    name: "What is The Cost",
                    href: "#pricing",
                    icon: CreditCardIcon,
                  },
                ]}
              />
              <Card
                title="Contact"
                links={[
                  {
                    name: "we@unzet.com",
                    href: "mailto:we@unzet.com",
                    icon: EnvelopeIcon,
                  },
                  {
                    name: "+40 (750) 460 150",
                    href: "tel:+40750460150",
                    icon: PhoneIcon,
                  },
                  {
                    name: "9:00 to 18:00 GMT+2",
                    icon: ClockIcon,
                    "data-cal-namespace": "",
                    "data-cal-link": "weunzet/30min",
                    "data-cal-config": '{"layout":"month_view"}',
                    style: { cursor: "pointer" },
                  },
                  {
                    name: "Bucharest, Romania",
                    href: "https://www.google.com/maps/place/Unzet/@45.9159548,22.3813054,7z/data=!3m1!4b1!4m6!3m5!1s0xab831d8ce9074bd1:0x8e4e7886695442aa!8m2!3d45.9425072!4d25.0201084!16s%2Fg%2F11w1zh9zhq?entry=ttu",
                    icon: MapPinIcon,
                  },
                ]}
                socials={socials}
              />
            </div>
          </div>
        </div>
        <div
          className="absolute top-0 -translate-x-1/2 left-1/2 -z-10 blur-3xl xl:-top-6"
          aria-hidden="true"
        ></div>
      </div>
      <div className="px-6 py-6 mx-auto border-t shadow-lg max-w-7xl md:flex md:items-center md:justify-between lg:px-8 border-primary-500/20">
        <div className="md:order-1 md:mt-0">
          <p className="text-sm leading-5 text-left text-white">
            &copy; {currentYear} Unzet, All Rights Reserved <u></u>
          </p>
        </div>
      </div>
    </div>
  );
}
