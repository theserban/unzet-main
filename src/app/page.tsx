"use client";
import React, { useState, useEffect } from 'react';
import Modal from './Components/modal';
import Navbar from './Components/navbar';
import Hero from './Components/hero';
import How from './Components/how';
import Products from './Components/products';
import Stats from './Components/stats';
import Projects from './Components/projects';
import Pricing from './Components/pricing';
import FAQ from './Components/faq';
import Testimonials from './Components/testimonials';
import Footer from './Components/footer';

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [showMainModal, setShowMainModal] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleTryExperienceClick = () => {
    setShowMainModal(true);
    if (!isModalOpen) {
      setIsModalOpen(true);
    }
    if (!isPlaying) {
      setIsPlaying(true);
    }
    if (!showControls) {
      setShowControls(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsPlaying(false);
  };

  return (
    <div className="relative">
      {isMounted && (
        <div className="fixed bottom-0 left-0 z-50 mb-4 ml-4">
          <Modal 
            onClose={handleCloseModal} 
            isPlaying={isPlaying} 
            setIsPlaying={setIsPlaying} 
            showControls={showControls} 
            setShowControls={setShowControls}
            showMainModal={showMainModal}
            setShowMainModal={setShowMainModal}
          />
        </div>
      )}
      <Navbar />
      <Hero />
      <Projects />
      <Testimonials />
      <How />
      <Stats />
      <Products onTryExperienceClick={handleTryExperienceClick} />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}