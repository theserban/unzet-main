import React, { useState, useEffect } from "react";
import {
  ClockIcon,
  PhoneIcon,
  ClipboardIcon,
  EnvelopeIcon,
  AtSymbolIcon,
  UserGroupIcon,
  ArrowPathRoundedSquareIcon,
  SwatchIcon,
  MapPinIcon,
  ArrowDownTrayIcon,
  BookmarkIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { LinkedinLogo, InstagramLogo, YoutubeLogo } from "phosphor-react";
import Link from "next/link";
import Privacy from "./privacy";
import Image from "next/image";

const socials = {
  LinkedIn: "https://www.linkedin.com/company/weunzet",
  Instagram: "https://www.instagram.com/weunzet",
  Youtube: "https://www.youtube.com/@weunzet",
};

export default function Footer() {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div id="footer">
      <div className="relative border-t bg-secondary-400 rounded-tr-ct border-primary-500/20">
        <div className="relative pt-12 pb-16 overflow-hidden isolate">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="max-w-xl text-white lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-3xl">
                  Play Your Cards Right Today,{" "}
                  <br className="hidden sm:inline" />
                  <span className="text-primary-500">
                    And We Start Tomorrow!
                  </span>
                </h2>

                <p className="mt-4 text-xl leading-8 text-white">
                  Let&apos;s find a way to work together, exchange resources,
                  ask questions, and become friends.
                </p>
                <div className="flex items-center mt-6 gap-x-6">
                  <button
                    data-cal-namespace=""
                    data-cal-link="weunzet/30min"
                    data-cal-config='{"layout":"month_view"}'
                    className="rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-sm font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105 text-center"
                  >
                    Let&apos;s Talk
                  </button>
                  <Link href="https://www.linkedin.com/newsletters/7217200504387342336/">
                    <div className="flex text-sm font-semibold leading-6 text-white transition-transform duration-500 transform cursor-pointer hover:text-gray-200 hover:scale-105">
                      Newsletter{" "}
                      <ChevronRightIcon className="w-4 ml-0.5 mt-1 h-4" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="relative grid grid-cols-1 text-lg gap-x-0 gap-y-12 sm:grid-cols-2 lg:pt-2">
                <Card
                  title="Menu"
                  links={[
                    {
                      name: "Get a Free Brand",
                      href: "#compete",
                      icon: SwatchIcon,
                    },
                    {
                      name: "Startup Remains",
                      href: "#donate",
                      icon: ArrowDownTrayIcon,
                    },
                    {
                      name: "Cool Projects",
                      href: "#projects",
                      icon: ClipboardIcon,
                    },
                    {
                      name: "How It Works",
                      href: "#how",
                      icon: ArrowPathRoundedSquareIcon,
                    },
                    {
                      name: "Answers to FAQ",
                      href: "#founder",
                      icon: BookmarkIcon,
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
        <div className="px-8 mx-auto shadow-lg max-w-7xl pb-4">
          <div className="grid grid-cols-1 border-t border-primary-500/20 sm:grid-cols-3 items-start gap-4 sm:py-0 -mt-4 sm:-mt-4">
            <div className="order-3 sm:order-1 pt-0 sm:pt-8 flex items-center sm:block -mb-8">
              <p className="text-md sm:text-sm leading-5 text-left text-white sm:mt-0">
                Copyright &copy; {new Date().getFullYear()} Unzet
              </p>
              <button
                className="text-md sm:text-sm ml-4 sm:ml-0 text-white text-left hover:scale-105 transform duration-500 sm:hidden"
                type="button"
                onClick={handleOpenModal}
              >
                Privacy Policy
              </button>
            </div>

            <div className="order-1 sm:order-2 flex justify-start sm:justify-center pb-2 sm:pb-0 pt-10 sm:pt-8">
              <Link href="https://blureo.com">
                <Image
                  src="/photos/blureo-member.svg"
                  alt="Member of Blureo"
                  width={280}
                  height={40}
                  className="sm:w-38 sm:h-4 w-56 h-8 -mt-2 sm:-mt-0 -mb-1 hover:scale-105 transform duration-500"
                />
              </Link>
            </div>

            <div className="order-3 flex flex-row justify-start sm:justify-end gap-4 pt-0 sm:pt-8">
              <button
                className="hidden text-md sm:text-sm text-white text-left hover:scale-105 transform duration-500"
                type="button"
              >
                Reset Consent
              </button>
              <button
                className="text-md sm:text-sm text-white text-left hover:scale-105 transform duration-500 invisible sm:visible"
                type="button"
                onClick={handleOpenModal}
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </div>
      <Privacy show={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

interface Link {
  name: string;
  href?: string;
  icon: React.ElementType<React.SVGProps<SVGSVGElement>>;
  "data-cal-namespace"?: string;
  "data-cal-link"?: string;
  "data-cal-config"?: string;
  style?: React.CSSProperties;
}

const Card: React.FC<{
  title: string;
  links: Link[];
  socials?: { [key: string]: string };
}> = ({ title, links, socials }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleAllClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (socials) {
      Object.values(socials).forEach((url) => window.open(url, "_blank"));
    }
  };

  React.useEffect(() => {
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
    <div className="text-white shadow-lg bg-secondary-400 rounded-tl-ct rounded-br-ct -mt-2">
      {title && <h2 className="mb-2 text-lg font-bold">{title}</h2>}
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href || "#"} passHref>
              <div
                onClick={(e) => {
                  if (!link.href) e.preventDefault();
                }}
                className="flex items-center justify-between w-full px-2 py-1 space-x-2 leading-6 text-white transition-transform duration-500 text-md font-regular hover:text-gray-200 hover:scale-105 hover:bg-secondary-300 rounded-md"
                {...(link.name === "9:00 to 18:00 GMT+2" && {
                  "data-cal-namespace": "",
                  "data-cal-link": "weunzet/30min",
                  "data-cal-config": '{"layout":"month_view"}',
                  style: { cursor: "pointer" },
                })}
              >
                <div className="flex items-center space-x-2">
                  <link.icon
                    className="w-5 h-5 text-primary-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="flex-grow">{link.name}</span>
                </div>
                <ChevronRightIcon
                  className="w-5 h-5 flex-shrink-0 sm:hidden"
                  aria-hidden="true"
                />
              </div>
            </Link>
          </li>
        ))}
        {socials && (
          <li className="relative">
            <button
              ref={buttonRef}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between w-full px-2 py-1 space-x-2 leading-6 text-white transition-transform duration-500 text-md font-regular hover:text-gray-200 hover:scale-105 hover:bg-secondary-300 rounded-md"
            >
              <div className="flex items-center space-x-2">
                <AtSymbolIcon
                  className="w-5 h-5 text-primary-500 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="flex-grow">weunzet on socials</span>
              </div>
              <ChevronRightIcon
                className="w-5 h-5 flex-shrink-0 sm:hidden"
                aria-hidden="true"
              />
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
                        {key === "Youtube" && (
                          <YoutubeLogo
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
