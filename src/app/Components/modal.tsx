"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { PlayIcon, PauseIcon, ArrowPathIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const INITIAL_SCROLL_STAMPS = [
  { time: 2, id: 'how' },
  { time: 8, id: 'hero' },
];

export default function Modal({ isPlaying, setIsPlaying, showControls, setShowControls }) {
  const [scrollStamps, setScrollStamps] = useState(INITIAL_SCROLL_STAMPS);
  const [showMainModal, setShowMainModal] = useState(true);
  const [currentPlaybackTime, setCurrentPlaybackTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const savedPlaybackTime = localStorage.getItem('currentPlaybackTime');
    if (savedPlaybackTime) {
      setCurrentPlaybackTime(parseFloat(savedPlaybackTime));
    }

    const savedScrollStamps = localStorage.getItem('scrollStamps');
    if (savedScrollStamps) {
      setScrollStamps([...INITIAL_SCROLL_STAMPS, ...JSON.parse(savedScrollStamps)]);
    }
  }, []);

  useEffect(() => {
    if (!isPlaying) {
      localStorage.setItem('currentPlaybackTime', currentPlaybackTime.toString());
    }
  }, [currentPlaybackTime, isPlaying]);

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) {
      setAudioDuration(audioRef.current.duration);
    }
  }, []);

  const smoothScrollTo = (targetY: number, duration: number) => {
    const overlay = document.getElementById('scroll-overlay');
    if (overlay) {
      overlay.classList.add('active');
    }

    const startY = window.scrollY;
    const diffY = targetY - startY;
    let startTime: number | null = null;

    const scroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startY + diffY * progress);

      if (timeElapsed < duration) {
        requestAnimationFrame(scroll);
      } else {
        if (overlay) {
          overlay.classList.remove('active');
        }
      }
    };

    requestAnimationFrame(scroll);
  };

  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      setCurrentPlaybackTime(currentTime);
      localStorage.setItem('currentPlaybackTime', currentTime.toString());

      scrollStamps.forEach(({ time, id }) => {
        if (currentTime >= time && currentTime < time + 1) {
          const targetElement = document.getElementById(id);
          if (targetElement) {
            smoothScrollTo(targetElement.offsetTop, 1000);
          }
        }
      });
    }
  }, [scrollStamps]);

  const addAudioEventListeners = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    }
  }, [handleLoadedMetadata, handleTimeUpdate]);

  const removeAudioEventListeners = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
    }
  }, [handleLoadedMetadata, handleTimeUpdate]);

  useEffect(() => {
    addAudioEventListeners();
    return () => {
      removeAudioEventListeners();
    };
  }, [addAudioEventListeners, removeAudioEventListeners]);

  useEffect(() => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.play();
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleGuidedPitchClick = () => {
    setShowControls(true);
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePauseClick = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handlePlayClick = () => {
    if (!isPlaying && audioRef.current) {
      audioRef.current.currentTime = currentPlaybackTime;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleReplayClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleIconClick = () => {
    setShowMainModal(true);
    addAudioEventListeners();
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentPlaybackTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleExploreByYourself = () => {
    setShowMainModal(false);
    localStorage.setItem('scrollStamps', JSON.stringify(scrollStamps));
    removeAudioEventListeners();
  };

  const handleArrowButtonClick = () => {
    setShowMainModal(false);
    localStorage.setItem('scrollStamps', JSON.stringify(scrollStamps));
    removeAudioEventListeners();
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (!showMainModal) {
      const savedPlaybackTime = localStorage.getItem('currentPlaybackTime');
      if (savedPlaybackTime && audioRef.current) {
        const currentTime = parseFloat(savedPlaybackTime);
        audioRef.current.currentTime = currentTime;
        setCurrentPlaybackTime(currentTime);

        scrollStamps.forEach(({ time, id }) => {
          if (currentTime >= time && currentTime < time + 1) {
            const targetElement = document.getElementById(id);
            if (targetElement) {
              smoothScrollTo(targetElement.offsetTop, 1000);
            }
          }
        });
      }
    }
  }, [showMainModal, scrollStamps]);

  return (
    <div style={{ zIndex: 1000 }}>
      <div id="scroll-overlay"></div>
      <div className={`transform transition-transform duration-500 hover:-translate-y-1 fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-6 bg-secondary-400 text-white p-6 rounded-tr-ct rounded-bl-ct border border-primary-500/40 shadow-lg transition-all duration-500 ${showMainModal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`} style={{ zIndex: 1000 }}>
        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:justify-between w-full">
          <div className="flex flex-row space-x-4 ml-2 mr-2">
            {!showControls ? (
              <>
                <button
                  className="cursor-pointer rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-xs font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                  onClick={handleGuidedPitchClick}
                >
                  <span className="whitespace-nowrap block md:hidden">Guided Pitch</span>
                  <span className="whitespace-nowrap hidden md:block">Vocal Guided Pitch</span>
                </button>
                <button
                  className="cursor-pointer rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-xs font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                  onClick={handleExploreByYourself}
                >
                  <span className="whitespace-nowrap block md:hidden">Explore Freely <span aria-hidden="true">→</span></span>
                  <span className="whitespace-nowrap hidden md:block">Explore by Yourself <span aria-hidden="true">→</span></span>
                </button>
              </>
            ) : (
              <div className="flex flex-col items-center space-y-4 w-full">
                <div className="flex flex-row space-x-4">
                  <button
                    className="flex items-center justify-center cursor-pointer rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-xs font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                    onClick={handlePauseClick}
                  >
                    <PauseIcon className="h-5 w-5 md:mr-0" />
                    <span className="hidden md:inline">Pause</span>
                  </button>
                  <button
                    className="flex items-center justify-center cursor-pointer rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-xs font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                    onClick={handlePlayClick}
                  >
                    <PlayIcon className="h-5 w-5 md:mr-0" />
                    <span className="hidden md:inline">Play</span>
                  </button>
                  <button
                    className="flex items-center justify-center cursor-pointer rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-xs font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                    onClick={handleReplayClick}
                  >
                    <ArrowPathIcon className="h-5 w-5 md:mr-1" />
                    <span className="hidden md:inline">Replay</span>
                  </button>
                  <button
                    className="flex items-center justify-center cursor-pointer rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-xs font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                    onClick={handleArrowButtonClick}
                  >
                    <ArrowRightIcon className="h-5 w-5 md:mr-0" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {showControls && (
          <div className="w-full mt-4 -mb-4">
            <input
              type="range"
              min="0"
              max={audioDuration}
              value={currentPlaybackTime}
              onChange={handleSliderChange}
              className="range range-xs w-full range-primary border-primary-500/20 border custom-range"
            />
          </div>
        )}
        <audio
          ref={audioRef}
          src="/audio/pitch.mp3"
          onTimeUpdate={() => setCurrentPlaybackTime(audioRef.current?.currentTime || 0)}
        />
      </div>
      <div
        className={`fixed bottom-0 right-0 mb-6 mr-6 bg-primary-500 text-white p-4 rounded-tl-cts rounded-br-cts border border-primary-500/20 shadow-lg transition-all duration-200 ${showMainModal ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0 cursor-pointer'}`}
        onClick={handleIconClick}
        style={{ zIndex: 1000 }}
      >
        <Image
          className="h-auto w-6"
          src="/photos/guidedicon.svg"
          alt="Guided Icon"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
}
