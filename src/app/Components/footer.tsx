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
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { LinkedinLogo, InstagramLogo } from "phosphor-react";

import * as CookieConsent from "vanilla-cookieconsent";
import "../Scripts/cookie.css";
import getConfig from "../Scripts/CookieConsentConfig";

const ResetCookieConsent = () => {
  if (typeof window !== "undefined" && CookieConsent) {
    CookieConsent.reset(true);
    CookieConsent.run(getConfig());
  }
};

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

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
      <div className="relative w-full max-w-3xl">
        <button
          onClick={onClose}
          className="absolute right-0 p-2 text-3xl text-white bg-white bg-opacity-20 rounded-tr-xl rounded-bl-xl -top-12"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <div
          ref={modalRef}
          className="bg-black mt-3 border border-1 border-primary-500/20 p-8 rounded-tl-ct rounded-br-ct shadow-lg text-white max-h-[80vh] overflow-y-auto"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

const socials = {
  LinkedIn: "https://www.linkedin.com/company/weunzet",
  Instagram: "https://www.instagram.com/weunzet",
};

const currentYear = new Date().getFullYear();

export default function Footer({
  onModalOpen,
  onModalClose,
}: {
  onModalOpen: () => void;
  onModalClose: () => void;
}) {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && CookieConsent) {
      CookieConsent.run(getConfig());
    } else {
      console.error("CookieConsent is not defined or window is not available");
    }
  }, []);

  const handleOpenModal = () => {
    onModalOpen();
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    onModalClose();
    setModalOpen(false);
  };

  return (
    <section id="footer">
      <div className="relative border-t bg-secondary-400 rounded-tr-ct border-primary-500/20">
        <div className="relative py-16 pb-20 overflow-hidden isolate">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="max-w-xl text-white lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Play your cards right today,
                  <br />
                  <span className="text-primary-500">
                    And we start tomorrow!
                  </span>
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
            <p className="text-sm leading-5 text-left text-white mb-2 sm:mb-0">
              &copy; {currentYear} Unzet, All Rights Reserved{" "}
            </p>
          </div>
          <div className="md:order-2 md:mt-0 md:ml-auto flex gap-4">
            <button
              className="text-sm"
              type="button"
              onClick={ResetCookieConsent}
            >
              Reset Consent
            </button>
            <button className="text-sm" type="button" onClick={handleOpenModal}>
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
      <Modal show={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-3xl font-bold text-primary-500">Privacy Policy</h2>
        <h3 className="text-lg mb-4 mt-1">Updated 05.07.2024</h3>
        <p>
          Personal data used on the website The operation of the website is
          ensured with the help of information systems and software modules that
          generally obtain some personal data; the transmission of this data is
          done implicitly so that online communication protocols return optimal
          results for the use of the website. This information is not collected
          to be associated with identified individuals, but due to their nature,
          they may allow, through processing and integration with certain data
          stored by third parties, the identification of users. This information
          includes IP addresses, the time of the request, the method used to
          send the request to the server, the size of the file obtained in
          response, as well as other parameters related to the user’s operating
          system. To the extent that this information leads to the
          identification of a user, the provisions of this Privacy Policy become
          applicable.
        </p>
        <h2 className="text-xl font-bold text-primary-500 my-4">
          Processing Purpose
        </h2>
        <p>
          We use this data only to obtain anonymous statistical information
          about the use of the website and to verify its correct functioning. On
          the other hand, we process personal data to establish direct and
          accurate communication with those interested in the services we offer
          – a wide range of services in the field of graphic design and website
          development on a monthly basis for each client individually.
        </p>
        <h2 className="text-xl font-bold text-primary-500 my-4">
          Processing Basis
        </h2>
        <p>
          For the construction and functionality of the website, the legal basis
          for processing your data is provided by fulfilling legal obligations
          regarding the security aspects of our systems, according to art. 6
          para. (1), lit. c) of Regulation (EU) 679/2016 and art. (3) of Law
          506/2004; For the operation of the website, the legal basis for
          processing your personal data is constituted by the creation of an
          account according to art. 6 para. (1), lit. b) of Regulation (EU)
          679/2016; For providing the latest updates on the products and
          services offered through our website, requesting additional
          information through the websites forms (e.g newsletter, sign-up), the
          legal basis for processing your personal data is fulfilled by
          obtaining your explicit, informed, and freely given consent in
          accordance with art. 6 para. (1), lit. a) and respecting the
          requirements for consent, set out in art. 7 and 8 of Regulation (EU)
          679/2016.
        </p>
        <h2 className="text-xl font-bold text-primary-500 my-4">
          Contacting us and providing assistance
        </h2>
        <p>
          You have the option to contact us in various ways: by email, by phone,
          on social media. In this case, we may process the following personal
          data: name, surname, email, phone, and any other information you
          voluntarily provide when contacting us. We recommend providing only
          the information necessary for us to help you with your request. We use
          this information to respond to your request, including providing
          information about our services.
        </p>
        <h2 className="text-xl font-bold text-primary-500 my-4">
          Providing personal data
        </h2>
        <p>
          We are careful to maintain compliance with the principle of data
          minimization, but you should know that you can refuse to provide
          certain personal data (indicated above). However, in such a case, you
          may not be able to benefit from certain specific services within the
          contractual relationship described in this Privacy Policy.
        </p>
        <h2 className="text-xl font-bold text-primary-500 my-4">
          Automatic processing of personal data
        </h2>
        <p>
          Your personal data will not be processed for the purpose of generating
          decisions based solely on automated processing that would produce
          legal effects on you or significantly affect you.
        </p>
        <h2 className="text-xl font-bold text-primary-500 my-4">
          Processing duration
        </h2>
        <p>
          As a rule, we will process your Personal Data for the duration of the
          website’s existence unless you request their deletion. In certain
          circumstances, we may keep personal data for longer periods, for
          example, if we are required to do so in accordance with legal,
          regulatory, tax, or accounting requirements. At the same time, we may
          keep personal data for longer periods to have an accurate record of
          your relationships with us in case of any complaints or if we
          reasonably believe there is a prospect of litigation related to the
          processing of your personal data.
        </p>
        <h2 className="text-xl font-bold text-primary-500 my-4">
          Transfer of personal data
        </h2>
        <p>
          We may transfer personal data, to the extent necessary, to the
          following categories of recipients: contractual partners;
          subcontractors; payment processors; IT service companies; marketing
          companies; public authorities, courts, or arbitral tribunals, as well
          as competent authorities to investigate criminal offenses. These
          recipients may be located in the European Union and/or the European
          Economic Area. In case the recipients are located outside the European
          Union and the European Economic Area, including in countries that are
          not recognized as providing an adequate level of protection, the
          transfer of personal data is carried out only if there are adequate
          guarantees, in accordance with applicable law. In this regard, we rely
          on several guarantees, such as standard contractual clauses issued by
          the European Commission. You can receive from us a list of recipients
          from third countries, as well as a copy of the agreed provisions that
          ensure an adequate level of protection of personal data. For any such
          requests, please contact us at the contact details mentioned below.
        </p>
        <h2 className="text-xl font-bold text-primary-500 my-4">
          Security of personal data
        </h2>
        <p>
          The security of your personal data is important to us. Therefore, your
          personal data will be processed by applying reasonable technical and
          organizational measures to protect personal data, such as limiting
          access to personal data, encrypting or anonymizing personal data,
          storing on secure media. However, despite our efforts, we cannot
          always guarantee the effectiveness of the implemented security
          measures, and therefore, we cannot guarantee the security of personal
          data at all times.
        </p>
        <h2 className="text-xl font-bold text-primary-500 my-4">
          Your rights regarding the processing of personal data
        </h2>
        <p>In accordance with applicable law, you have the following rights:</p>
        <p className="my-4">
          Right of access: You have the right to obtain confirmation from us
          that your personal data is processed by us, as well as information
          about the specific processing, such as: the purpose, categories of
          personal data processed, recipients of personal data, the period for
          which personal data is retained, whether we transfer them abroad and
          how we protect them, your rights, the right to lodge a complaint with
          the supervisory authority, where we obtained personal data from.
        </p>
        <p className="my-4">
          Right to rectification: You have the possibility to request the
          rectification of your personal data, provided that legal requirements
          are met. In the event of errors, after notification, we will
          immediately correct your personal data.
        </p>
        <p className="my-4">
          Right to erasure: In certain cases, you have the possibility to
          request the erasure of personal data: (i) they are no longer necessary
          for the purposes for which we collected and processed them; (ii) you
          have withdrawn your consent for the processing of personal data, and
          we can no longer process personal data based on other legal grounds;
          (iii) personal data is processed unlawfully; (iv) you exercise a legal
          right to object. We will not be able to comply with your request for
          deletion if the processing of personal data is necessary to fulfill a
          legal obligation or to establish, exercise, or defend a legal right in
          court. There are also other circumstances where we are not obliged to
          comply with this request for deletion of personal data. Restriction of
          processing: You can request to restrict the processing of your
          personal data in the following situations: (i) if you contest the
          accuracy of personal data, for a period that allows us to verify the
          accuracy of the personal data in question; (ii) if the processing is
          unlawful, and you oppose the erasure of personal data, requesting
          instead the restriction of their use; (iii) if we no longer need
          personal data for the purpose of processing, but you request them for
          legal action; (iv) if you have objected to processing, for the time it
          is verified whether our legitimate rights as a data controller prevail
          over those of the data subject. We may continue to use personal data
          following a request for restriction if: (i) we have your consent; (ii)
          to establish, exercise, or ensure the defense of a legal right; or
          (iii) to protect the rights of another natural or legal person. Right
          to data portability: To the extent that personal data is processed
          based on your consent or for the performance of a contract and the
          processing is done by automated means, you have the right to have your
          personal data provided to you in a structured, commonly used, and
          machine-readable format and you have the right to transmit this
          personal data to another data controller. This right does not
          negatively affect the rights and freedoms of others.
        </p>
        <p className="my-4">
          Right to object: In certain situations, such as when we process your
          personal data based on a legitimate interest, you have the right to
          object to the processing of your personal data by us. In case of
          unjustified objection, Stan Cel SRL is entitled to continue processing
          personal data. Right to object to receiving commercial messages: You
          can also object to the processing of your personal data for the
          purpose of sending commercial messages. Withdrawal of consent: To the
          extent that we process your personal data based on your consent, you
          can withdraw your consent at any time without affecting the legality
          of the processing based on consent before its withdrawal. Right not to
          be subject to individual decisions: In certain circumstances, you have
          the right not to be subject to a decision based solely on automated
          processing, including profiling, which produces legal effects
          concerning you or similarly affects you to a significant extent. This
          right does not apply when the decision: (i) is necessary for the
          conclusion or performance of a contract between you and us; (ii) is
          authorized by law that provides for and provides adequate guarantees
          for your rights and freedoms; (iii) is based on your explicit consent.
        </p>
        <p className="my-4">
          Right to appeal to the supervisory authority: You have the right to
          lodge a complaint with the National Authority for the Supervision of
          Personal Data Processing (ANSPDCP) regarding any violation of your
          rights regarding the processing of your personal data. The contact
          details of ANSPDCP are: G-ral Blvd. Gheorghe Magheru 28-30, Sector 1,
          postal code 010336 Bucharest, Romania; email:
          anspdcp@dataprotection.ro.
        </p>
        <h2 className="text-xl font-bold text-primary-500 my-4">
          Exercising your rights
        </h2>
        <p className="my-4">
          The Data Protection Officer (DPO) is responsible for facilitating
          communication between you, us, and the National Supervisory Authority
          (ANSPDCP), being an extension of the ANS in the processing of personal
          data of the data controller, for compliance with GDPR requirements.
          Feel free to rely on his expertise in defending your right to privacy
          and private life regarding the processing of your personal data, at
          the email address dpo@unzet.com
        </p>
        <p className="my-4">
          Identity verification: We pay the utmost attention to the
          confidentiality of all personal data and reserve the right to verify
          your identity if you make a request regarding personal data.
        </p>
        <p className="my-4">
          Fees: As a rule, you can exercise your rights for free. However, we
          reserve the right to request a reasonable fee if your requests are
          clearly unfounded or excessive, especially due to their repetitive
          nature.
        </p>
        <p className="my-4">
          Response time: We make every effort to respond to your requests within
          one month of receiving the request. This period may be extended by two
          months when necessary, taking into account the complexity and number
          of requests, in which case we will inform you of any such extension
          and the reasons for the delay.
        </p>
        <h2 className="text-xl font-bold text-primary-500 my-4">Contact</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or its
          implementation, you can contact us by email at we@unzet.com
        </p>
        <h2 className="text-xl font-bold text-primary-500 my-4">
          Updates to this privacy policy
        </h2>
        <p>
          We regularly review and, if necessary, periodically update this
          privacy policy when changes occur following the provision of services.
          If we want to use your personal data in a way that we have not
          identified before, we will contact you to provide information about it
          and, if necessary, to request your consent.
        </p>
      </Modal>
    </section>
  );
}
