import type { CookieConsentConfig } from "vanilla-cookieconsent";

const getConfig = () => {
  const config: CookieConsentConfig = {
    cookie: {
      name: "cc_cookie",
      domain: location.hostname,
      path: "/",
      expiresAfterDays: 365,
    },

    onFirstConsent: ({ cookie }) => {
      console.log("onFirstConsent fired", cookie);
    },

    onConsent: ({ cookie }) => {
      console.log("onConsent fired!", cookie);
    },

    onChange: ({ changedCategories, changedServices }) => {
      console.log("onChange fired!", changedCategories, changedServices);
    },

    onModalReady: ({ modalName }) => {
      console.log("ready:", modalName);
    },

    onModalShow: ({ modalName }) => {
      console.log("visible:", modalName);
    },

    onModalHide: ({ modalName }) => {
      console.log("hidden:", modalName);
    },

    guiOptions: {
      consentModal: {
        layout: "box",
        position: "bottom left",
        equalWeightButtons: true,
        flipButtons: false,
      },
      preferencesModal: {
        layout: "box",
        position: "right",
        equalWeightButtons: true,
        flipButtons: false,
      },
    },

    categories: {
      necessary: {
        enabled: true,
        readOnly: true,
      },
      calcom: {
        autoClear: {
          cookies: [
            {
              name: /^_calcom/,
            },
          ],
        },
        services: {
          calcom: {
            label: "Cal.com Booking",
            onAccept: () => {},
            onReject: () => {},
          },
        },
      },
    },

    language: {
      default: "en",
      translations: {
        en: {
          consentModal: {
            title: "Cookies",
            description:
              'We use cookies or similar technologies for technical purposes only, check <a href="#footer">privacy policy</a>.',
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject all",
            showPreferencesBtn: "Manage Individual preferences",
          },
          preferencesModal: {
            title: "Manage cookie preferences",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject all",
            savePreferencesBtn: "Accept current selection",
            closeIconLabel: "Close modal",
            serviceCounterLabel: "Service|Services",
            sections: [
              {
                title: "Your Privacy Choices",
                description: `In this panel you can express some preferences related to the processing of your personal information. You may review and change expressed choices at any time by resurfacing this panel via the provided link. To deny your consent to the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices.`,
              },
              {
                title: "Strictly Necessary",
                description:
                  "These cookies are essential for the proper functioning of the website and cannot be disabled.",
                linkedCategory: "necessary",
                cookieTable: {
                  caption: "Cookie table",
                  headers: {
                    name: "Cookie",
                    domain: "Domain",
                    duration: "Duration",
                    desc: "Description",
                  },
                  body: [
                    {
                      name: "cc_cookie",
                      domain: location.hostname,
                      duration: "182 days",
                      desc: "CookieConsent to store your preferences.",
                    },
                    {
                      name: "_calcom",
                      domain: location.hostname,
                      duration: "Unlimited",
                      desc: "Cal.com cookie for booking appointments.",
                    },
                  ],
                },
              },
              {
                title: "More information",
                description:
                  'For any queries in relation to my policy on cookies and your choices, please <a href="mailto:we@unzet.com">contact us</a>',
              },
            ],
          },
        },
      },
    },
  };

  return config;
};

export default getConfig;
