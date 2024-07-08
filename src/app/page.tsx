"use client";
import React, { useState, useEffect } from "react";

import Navbar from "./Components/navbar";
import Hero from "./Components/hero";
import Services from "./Components/services";
import How from "./Components/how";
import Pricing from "./Components/pricing";
import Stats from "./Components/stats";
import Projects from "./Components/projects";
import Tools from "./Components/tools";
import FAQ from "./Components/faq";
import Testimonials from "./Components/testimonials";
import Footer from "./Components/footer";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <How />
      <Testimonials />
      <Tools />
      <Stats />
      <Pricing />
      <FAQ />
      <Footer onModalOpen={handleModalOpen} onModalClose={handleModalClose} />
    </div>
  );
}
