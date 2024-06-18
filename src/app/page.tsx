"use client";

import React, { useState, useEffect } from 'react';
import Navbar from './Components/navbar';
import Hero from './Components/hero';
import How from './Components/how';
import Stats from './Components/stats';
import Projects from './Components/projects';
import Pricing from './Components/pricing';
import FAQ from './Components/faq';
import Testimonials from './Components/testimonials';
import Footer from './Components/footer';
import Modal from './Components/modal';
import { getCalApi } from "@calcom/embed-react";
import { Embed } from '@calcom/embed-react';

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        "theme": "dark",
        "styles": {
          "branding": {
            "brandColor": "#edff00"
          }
        },
        "hideEventTypeDetails": false,
        "layout": "week_view"
      });
    })();
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      {isMounted && (
        <div className="fixed bottom-0 left-0 mb-4 ml-4 z-50">
          <Modal onClose={handleCloseModal} />
        </div>
      )}
      <Navbar />
      <Hero />
      <Projects />
      <Stats />
      <How />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
