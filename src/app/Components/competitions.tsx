import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import PrivacyPolicyModal from "./privacy";

interface EventProps {
  imageUrl: string;
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  link?: string;
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const parseDate = (dateString: string) => {
  const [day, month, year] = dateString.split("/").map(Number);
  return new Date(year, month - 1, day);
};

const formatDate = (date: Date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  return `${day}/${month}`;
};

const calculateProgressPercentage = (startDate: string, endDate: string) => {
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  const totalDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
  const daysElapsed =
    (new Date().getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
  const progressPercentage = (daysElapsed / totalDays) * 100;
  return Math.min(Math.max(progressPercentage, 0), 100);
};

const EventCard: React.FC<EventProps & { onEnterNow: () => void }> = ({
  imageUrl,
  startDate,
  endDate,
  title,
  description,
  link,
  onEnterNow,
}) => {
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    setProgressPercentage(calculateProgressPercentage(startDate, endDate));
  }, [startDate, endDate]);

  const isFutureEvent = new Date() < parseDate(startDate);

  const handleShare = async () => {
    const url = new URL(window.location.href);
    url.hash = "compete";
    const shareUrl = url.toString();
    const shareText = `${title} - ${description}`;
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy the link: ", error);
    }
  };

  return (
    <div
      className={`space-y-4 bg-black border border-primary-500/20 rounded-tr-ct rounded-bl-ct shadow-md lg:p-0 hover:-translate-y-1 duration-500 ${
        isFutureEvent ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <Image
        className="object-cover w-full rounded-tr-ct rounded-bl-ct shadow-lg"
        src={imageUrl}
        alt={title}
        width={500}
        height={300}
      />
      <div className="p-6 pt-1">
        <div>
          <div className="flex justify-between text-sm text-white mb-1">
            <span>{formatDate(parseDate(startDate))}</span>
            <span>{formatDate(parseDate(endDate))}</span>
          </div>
          <div className="w-full bg-black border border-primary-500/20 rounded-full h-2.5">
            <div
              className="bg-primary-500 h-2.5 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        <h3 className="text-lg font-bold leading-tight text-white mt-4">
          {title}
        </h3>
        <p className="text-base font-normal text-white py-4">{description}</p>

        <div className="flex flex-col gap-4 sm:flex-row md:flex-col lg:flex-row lg:items-center mt-2">
          <button
            onClick={isFutureEvent ? undefined : onEnterNow}
            className={`rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-sm font-bold text-secondary-400 shadow-sm ${
              isFutureEvent
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
            }`}
          >
            {isFutureEvent ? "Coming Soon" : "Enter Now"}
          </button>
          <button
            onClick={handleShare}
            className="text-sm font-semibold leading-6 text-white transition-transform duration-500 transform cursor-pointer hover:text-gray-200 hover:scale-105"
          >
            Share Competition <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const events: EventProps[] = [
  {
    imageUrl: "/photos/hirepill.webp",
    startDate: "01/08/2024",
    endDate: "01/09/2024",
    title: "Empower Careers, One Pill at a Time",
    description:
      "The name embodies the idea of providing a 'pill' or solution to various challenges faced by businesses and individuals alike. ",
    link: "mailto:we@unzet.com?subject=Competition%20Entry&body=Name%3A%0A%0ACurrent%20Company%3A%0A%0A60%20seconds%20pitch%20link%3A%0A%0AI%20want%20to%20win%20because%3A",
  },
  {
    imageUrl: "/photos/azignera.webp",
    startDate: "01/08/2024",
    endDate: "01/09/2024",
    title: "It's the Time to Assign",
    description:
      "The name evokes a sense of progress, perfect for those looking to redefine how tasks are approached and managed.",
    link: "mailto:we@unzet.com?subject=Competition%20Entry&body=Name%3A%0A%0ACurrent%20Company%3A%0A%0A60%20seconds%20pitch%20link%3A%0A%0AI%20want%20to%20win%20because%3A",
  },
  {
    imageUrl: "/photos/coming.webp",
    startDate: "08/09/2024",
    endDate: "08/10/2024",
    title: "Excitement stays in the Secret",
    description:
      "You can suggest what kind of names you want for our next batch of competitions by sending us an email.",
    link: "mailto:we@unzet.com?subject=Competition%20Entry&body=Name%3A%0A%0ACurrent%20Company%3A%0A%0A60%20seconds%20pitch%20link%3A%0A%0AI%20want%20to%20win%20because%3A",
  },
];

const Modal = ({
  show,
  onClose,
  children,
}: {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    },
    [onClose, modalRef]
  );

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.body.style.overflow = "auto";
      };
    }
  }, [show, handleClickOutside]);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto px-6">
      <div className="relative w-full max-w-3xl">
        <button
          onClick={onClose}
          className="absolute right-0 p-2 text-3xl text-white bg-white bg-opacity-20 rounded-tr-xl rounded-bl-xl -top-12"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <div
          ref={modalRef}
          className="bg-black mt-3 border border-1 border-primary-500/20 p-8 rounded-tl-ct rounded-br-ct shadow-lg text-white max-h-[70vh] overflow-y-auto"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default function Events() {
  const [isRulesModalOpen, setRulesModalOpen] = useState(false);
  const [isEnterNowModalOpen, setEnterNowModalOpen] = useState(false);
  const [isPrivacyPolicyModalOpen, setPrivacyPolicyModalOpen] = useState(false);
  const [acknowledgeRules, setAcknowledgeRules] = useState(false);
  const [currentEventLink, setCurrentEventLink] = useState<string | undefined>(
    undefined
  );

  const handleOpenRulesModal = () => {
    setRulesModalOpen(true);
  };

  const handleCloseRulesModal = () => {
    setRulesModalOpen(false);
  };

  const handleOpenEnterNowModal = (link: string) => {
    setCurrentEventLink(link);
    setEnterNowModalOpen(true);
  };

  const handleCloseEnterNowModal = () => {
    setEnterNowModalOpen(false);
    setAcknowledgeRules(false);
  };

  const handleEnterCompetition = () => {
    if (acknowledgeRules && currentEventLink) {
      window.location.href = currentEventLink;
    } else {
      alert("Please acknowledge the rules and privacy policy to continue.");
    }
  };

  return (
    <section id="compete" className="bg-black">
      <div className="max-w-7xl px-6 py-8 mx-auto lg:px-8 sm:py-16 lg:py-28">
        <div className="max-w-2xl mx-auto lg:mx-0 mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
            Focus On Building
          </h2>
          <p className="mt-6 text-xl leading-7 text-white">
            Pitch us your idea in a 60 seconds video and enter the battle for a
            premium startup name, a seo friendly .com domain and a brand kit so
            you can focus on building that beauty!
          </p>
          <div className="flex items-center mt-10 gap-x-6">
            <button
              onClick={handleOpenRulesModal}
              className="cursor-pointer rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-sm font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
            >
              The Rules
            </button>
            <button
              onClick={() => scrollToSection("tools")}
              className="text-sm font-semibold leading-6 text-white transition-transform duration-500 transform cursor-pointer hover:text-gray-200 hover:scale-105"
            >
              Tools <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 mt-8 xl:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <EventCard
              key={index}
              {...event}
              onEnterNow={() => handleOpenEnterNowModal(event.link!)}
            />
          ))}
        </div>
      </div>
      <Modal show={isRulesModalOpen} onClose={handleCloseRulesModal}>
        <h2 className="text-3xl font-bold text-primary-500">
          Competition Rules
        </h2>
        <ul className="list-disc list-inside mt-4">
          <li className="my-2">
            You can also participate if you already have a name that you&apos;re
            not happy about.
          </li>
          <li className="my-2">
            Submit a 60-second pitch video in which you tell us about your
            idea/startup.
          </li>
          <li className="my-2">
            Please use a platform like Youtube, Vimeo and attach the link in the
            mail.
          </li>
          <li className="my-2">
            Have an active Porkbun account where we can instantly transfer your
            domain.
          </li>
          <li className="my-2">
            Make sure to start the video with &quot;I&apos;m a founder&quot; - a
            compilation with great people.
          </li>
          <li className="my-2">
            Explain why you think you should win the competition and display the
            name.
          </li>
          <li className="my-2">
            You accept that the video content can be used to promote both your
            startup and Unzet.
          </li>
          <li className="my-2">
            Have fun cause we are sure you are battle ready and #builttobuild :)
          </li>
        </ul>
      </Modal>
      <Modal show={isEnterNowModalOpen} onClose={handleCloseEnterNowModal}>
        <h2 className="text-3xl font-bold text-primary-500">
          Enter Competition
        </h2>
        <div className="mt-4">
          <label className="flex items-start text-white cursor-pointer">
            <input
              type="checkbox"
              checked={acknowledgeRules}
              onChange={(e) => setAcknowledgeRules(e.target.checked)}
              className="mr-2 mt-1"
            />
            <span>
              I confirm that I have read and agree to the{" "}
              <span
                className="text-primary-500 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setPrivacyPolicyModalOpen(true);
                }}
              >
                the privacy policy
              </span>{" "}
              and{" "}
              <span
                className="text-primary-500 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleCloseEnterNowModal();
                  handleOpenRulesModal();
                }}
              >
                the rules.{" "}
              </span>
              By doing so, I accept all terms and conditions and promise to
              follow the guidelines.
            </span>
          </label>
        </div>
        <button
          onClick={handleEnterCompetition}
          className={`mt-6 rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-sm font-bold text-secondary-400 shadow-sm ${
            !acknowledgeRules
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
          }`}
          disabled={!acknowledgeRules}
        >
          Enter Competition
        </button>
      </Modal>
      <PrivacyPolicyModal
        show={isPrivacyPolicyModalOpen}
        onClose={() => setPrivacyPolicyModalOpen(false)}
      />
    </section>
  );
}
