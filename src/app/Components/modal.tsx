import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  PlayIcon,
  PauseIcon,
  ArrowPathIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import debounce from "lodash.debounce";

const INITIAL_SCROLL_STAMPS = [
  { time: 9, id: "projects" },
  { time: 26, id: "case" },
  { time: 37, id: "testimonials" },
  { time: 52, id: "how" },
  { time: 75, id: "how2" },
  { time: 85, id: "stats" },
  { time: 98, id: "products" },
  { time: 109, id: "pricing" },
  { time: 126, id: "founder" },
];

interface ModalProps {
  onClose: () => void;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  showControls: boolean;
  setShowControls: React.Dispatch<React.SetStateAction<boolean>>;
  showMainModal: boolean;
  setShowMainModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({
  onClose,
  isPlaying,
  setIsPlaying,
  showControls,
  setShowControls,
  showMainModal,
  setShowMainModal,
}: ModalProps) {
  const [scrollStamps, setScrollStamps] = useState(INITIAL_SCROLL_STAMPS);
  const [currentPlaybackTime, setCurrentPlaybackTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const savedPlaybackTime = localStorage.getItem("currentPlaybackTime");
    if (savedPlaybackTime) {
      setCurrentPlaybackTime(parseFloat(savedPlaybackTime));
    }

    const savedScrollStamps = localStorage.getItem("scrollStamps");
    if (savedScrollStamps) {
      setScrollStamps([
        ...INITIAL_SCROLL_STAMPS,
        ...JSON.parse(savedScrollStamps),
      ]);
    }

    const savedShowMainModal = localStorage.getItem("showMainModal");
    if (savedShowMainModal !== null) {
      setShowMainModal(savedShowMainModal === "true");
    }

    const savedShowControls = localStorage.getItem("showControls");
    if (savedShowControls !== null) {
      setShowControls(savedShowControls === "true");
    }
  }, [setShowMainModal, setShowControls]);

  useEffect(() => {
    if (!isPlaying) {
      localStorage.setItem(
        "currentPlaybackTime",
        currentPlaybackTime.toString()
      );
    }
  }, [currentPlaybackTime, isPlaying]);

  useEffect(() => {
    localStorage.setItem("showMainModal", showMainModal.toString());
  }, [showMainModal]);

  useEffect(() => {
    localStorage.setItem("showControls", showControls.toString());
  }, [showControls]);

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) {
      setAudioDuration(audioRef.current.duration);
    }
  }, []);

  const smoothScrollTo = useCallback((id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const debouncedSmoothScrollTo = useCallback(
    (id: string) => debounce(() => smoothScrollTo(id), 1000)(),
    [smoothScrollTo]
  );

  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      setCurrentPlaybackTime(currentTime);
      localStorage.setItem("currentPlaybackTime", currentTime.toString());

      scrollStamps.forEach(({ time, id }) => {
        if (currentTime >= time && currentTime < time + 1) {
          debouncedSmoothScrollTo(id);
        }
      });
    }
  }, [scrollStamps, debouncedSmoothScrollTo]);

  const addAudioEventListeners = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    }
  }, [handleLoadedMetadata, handleTimeUpdate]);

  const removeAudioEventListeners = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    }
  }, [handleLoadedMetadata, handleTimeUpdate]);

  useEffect(() => {
    if (showMainModal) {
      addAudioEventListeners();
    } else {
      removeAudioEventListeners();
    }
    return () => {
      removeAudioEventListeners();
    };
  }, [showMainModal, addAudioEventListeners, removeAudioEventListeners]);

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
    localStorage.setItem("scrollStamps", JSON.stringify(scrollStamps));
  };

  const handleArrowButtonClick = () => {
    setShowMainModal(false);
    localStorage.setItem("scrollStamps", JSON.stringify(scrollStamps));
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (!showMainModal) {
      const savedPlaybackTime = localStorage.getItem("currentPlaybackTime");
      if (savedPlaybackTime && audioRef.current) {
        const currentTime = parseFloat(savedPlaybackTime);
        audioRef.current.currentTime = currentTime;
        setCurrentPlaybackTime(currentTime);

        scrollStamps.forEach(({ time, id }) => {
          if (currentTime >= time && currentTime < time + 1) {
            debouncedSmoothScrollTo(id);
          }
        });
      }
    }
  }, [showMainModal, scrollStamps, debouncedSmoothScrollTo]);

  return (
    <div style={{ zIndex: 1000 }}>
      <div id="scroll-overlay"></div>
      <div
        className={`transition-transform hover:-translate-y-1 fixed bottom-0 left-1/2 -translate-x-1/2 mb-6 bg-secondary-400 text-white p-6 rounded-tr-ct rounded-bl-ct border border-primary-500/40 shadow-lg duration-500 ${
          showMainModal
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="flex flex-col items-center w-full space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:justify-between">
          <div className="flex flex-row ml-2 mr-2 space-x-4">
            {!showControls ? (
              <>
                <button
                  className="cursor-pointer rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-xs font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                  onClick={handleGuidedPitchClick}
                >
                  <span className="block whitespace-nowrap md:hidden">
                    Guided Pitch
                  </span>
                  <span className="hidden whitespace-nowrap md:block">
                    Vocal Guided Pitch
                  </span>
                </button>
                <button
                  className="cursor-pointer rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-xs font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                  onClick={handleExploreByYourself}
                >
                  <span className="block whitespace-nowrap md:hidden">
                    Explore Freely <span aria-hidden="true">→</span>
                  </span>
                  <span className="hidden whitespace-nowrap md:block">
                    Explore by Yourself <span aria-hidden="true">→</span>
                  </span>
                </button>
              </>
            ) : (
              <div className="flex flex-col items-center w-full space-y-4">
                <div className="flex flex-row space-x-4">
                  <button
                    className="flex items-center justify-center cursor-pointer rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-xs font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                    onClick={handlePauseClick}
                  >
                    <PauseIcon className="w-5 h-5 md:mr-0" />
                    <span className="hidden md:inline">Pause</span>
                  </button>
                  <button
                    className="flex items-center justify-center cursor-pointer rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-xs font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                    onClick={handlePlayClick}
                  >
                    <PlayIcon className="w-5 h-5 md:mr-0" />
                    <span className="hidden md:inline">Play</span>
                  </button>
                  <button
                    className="flex items-center justify-center cursor-pointer rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-xs font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                    onClick={handleReplayClick}
                  >
                    <ArrowPathIcon className="w-5 h-5 md:mr-1" />
                    <span className="hidden md:inline">Replay</span>
                  </button>
                  <button
                    className="flex items-center justify-center cursor-pointer rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-xs font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                    onClick={handleArrowButtonClick}
                  >
                    <ArrowRightIcon className="w-5 h-5 md:mr-0" />
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
              className="w-full border range range-xs range-primary border-primary-500/20 custom-range"
            />
          </div>
        )}
        <audio
          ref={audioRef}
          src="/audio/pitch.mp3"
          onTimeUpdate={() =>
            setCurrentPlaybackTime(audioRef.current?.currentTime || 0)
          }
        />
      </div>
      <div
        className={`fixed bottom-0 right-0 mb-6 mr-6 bg-primary-500 text-white p-4 rounded-tl-cts rounded-br-cts border border-primary-500/20 shadow-lg transition-all duration-200 ${
          showMainModal
            ? "opacity-0 translate-y-4 pointer-events-none"
            : "opacity-100 translate-y-0 cursor-pointer"
        }`}
        onClick={handleIconClick}
        style={{ zIndex: 1000 }}
      >
        <Image
          className="w-6 h-auto"
          src="/photos/guidedicon.svg"
          alt="Guided Icon"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
}
