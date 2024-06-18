"use client";

import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import How from './components/how';
import Stats from './components/stats';
import Projects from './components/projects';
import Pricing from './components/pricing';
import FAQ from './components/faq';
import Testimonials from './components/testimonials';
import Footer from './components/footer';
import Modal from './components/modal';
import { getCalApi } from "@calcom/embed-react";

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
