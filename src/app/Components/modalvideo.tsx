import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  PlayIcon,
  PauseIcon,
  ArrowPathIcon,
  ArrowRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const INITIAL_SCROLL_STAMPS = [
  { time: 0, id: "hero", description: "Start of the pitch" },
  { time: 9, id: "projects", description: "Overview of our projects" },
  { time: 26, id: "case", description: "Case studies" },
  { time: 37, id: "testimonials", description: "Client testimonials" },
  { time: 52, id: "how", description: "How we work" },
  { time: 75, id: "how2", description: "Our process in detail" },
  { time: 85, id: "stats", description: "Key statistics" },
  { time: 98, id: "products", description: "Our products" },
  { time: 109, id: "pricing", description: "Pricing details" },
  { time: 126, id: "founder", description: "About the founder" },
  { time: null, id: "footer", description: "End of the pitch" },
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
  const [lastScrollStampId, setLastScrollStampId] = useState<string | null>(
    null
  );
  const [tooltipVisible, setTooltipVisible] = useState<number | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const scrollStampRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null);

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
    if (videoRef.current) {
      setAudioDuration(videoRef.current.duration);
      setScrollStamps((prevStamps) => {
        const newStamps = prevStamps.map((stamp) =>
          stamp.id === "footer"
            ? { ...stamp, time: videoRef.current!.duration }
            : stamp
        );
        return newStamps;
      });
    }
  }, []);

  const smoothScrollTo = useCallback((id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      setCurrentPlaybackTime(currentTime);
      localStorage.setItem("currentPlaybackTime", currentTime.toString());

      scrollStamps.forEach(({ time, id }) => {
        if (
          time !== null &&
          Math.abs(currentTime - time) < 0.5 &&
          lastScrollStampId !== id
        ) {
          smoothScrollTo(id);
          setLastScrollStampId(id);
        }
      });
    }
  }, [scrollStamps, smoothScrollTo, lastScrollStampId]);

  const snapToNearestScrollStamp = useCallback(
    (time: number) => {
      let nearestStamp = scrollStamps[0];
      let minDifference = Math.abs(time - scrollStamps[0].time!);
      scrollStamps.forEach((stamp) => {
        if (stamp.time !== null) {
          const difference = Math.abs(time - stamp.time);
          if (difference < minDifference) {
            nearestStamp = stamp;
            minDifference = difference;
          }
        }
      });
      return nearestStamp.time;
    },
    [scrollStamps]
  );

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      video.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (video) {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [handleLoadedMetadata, handleTimeUpdate]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }
  }, [isPlaying]);

  const handleGuidedPitchClick = () => {
    setShowControls(true);
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePlayPauseClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.currentTime = currentPlaybackTime;
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleReplayClick = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleIconClick = () => {
    setShowMainModal(true);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    const snapTime = snapToNearestScrollStamp(newTime);
    setCurrentPlaybackTime(snapTime);
    if (videoRef.current) {
      videoRef.current.currentTime = snapTime;
    }
  };

  const handleArrowButtonClick = () => {
    setShowMainModal(false);
    localStorage.setItem("scrollStamps", JSON.stringify(scrollStamps));
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const renderScrollStampDots = () => {
    return scrollStamps
      .filter((stamp) => stamp.id !== "hero" && stamp.id !== "footer")
      .map((stamp, index) => (
        <div
          key={index}
          className="absolute w-0.5 m-6 h-3 ml-1 bg-primary-900/40 z-20 rounded-full transform -translate-y-full cursor-pointer"
          style={{
            left: `${(stamp.time / audioDuration) * 100}%`,
            top: "0%",
          }}
          onClick={() => {
            if (videoRef.current) {
              videoRef.current.currentTime = stamp.time;
              setCurrentPlaybackTime(stamp.time);
            }
          }}
          onMouseEnter={() => setTooltipVisible(index)}
          onMouseLeave={() => setTooltipVisible(null)}
          ref={(el) => {
            scrollStampRefs.current[index] = el;
          }}
        >
          {tooltipVisible === index && (
            <div className="absolute flex bottom-full rounded-tl-xl rounded-br-xl mb-2 w-auto whitespace-nowrap bg-secondary-400 border border-primary-500/20 text-white text-sm p-2 shadow-lg z-50">
              {stamp.description}
            </div>
          )}
        </div>
      ));
  };

  useEffect(() => {
    if (!showMainModal) {
      const savedPlaybackTime = localStorage.getItem("currentPlaybackTime");
      if (savedPlaybackTime && videoRef.current) {
        const currentTime = parseFloat(savedPlaybackTime);
        const snapTime = snapToNearestScrollStamp(currentTime);
        videoRef.current.currentTime = snapTime;
        setCurrentPlaybackTime(snapTime);

        scrollStamps.forEach(({ time, id }) => {
          if (snapTime === time) {
            smoothScrollTo(id);
            setLastScrollStampId(id);
          }
        });
      }
    }
  }, [showMainModal, scrollStamps, smoothScrollTo, snapToNearestScrollStamp]);

  const handleVideoToggle = () => {
    setShowVideo(!showVideo);
  };

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
                  className="flex items-center justify-center cursor-pointer rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-xs font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                  onClick={handleArrowButtonClick}
                >
                  <ArrowRightIcon className="w-5 h-5 md:mr-0" />
                </button>
              </>
            ) : (
              <div className="flex flex-col items-center w-full space-y-4">
                <video
                  ref={videoRef}
                  src="/video/pitch.mp4"
                  onTimeUpdate={() =>
                    setCurrentPlaybackTime(videoRef.current?.currentTime || 0)
                  }
                  className={`bottom-32 left-6 end-auto max-w-sm border border-1 border-primary-500/20 mx-auto rounded-tr-ct rounded-bl-ct overflow-hidden transition-all duration-200 fixed ${
                    showVideo ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                ></video>
                {showControls && (
                  <div className="w-full -mt-2 relative">
                    <div className="relative w-full h-2">
                      {renderScrollStampDots()}
                    </div>
                    <input
                      type="range"
                      min="0"
                      max={audioDuration}
                      value={currentPlaybackTime}
                      onChange={handleSliderChange}
                      className="w-full border range range-xs range-primary border-primary-500/20 custom-range relative z-10"
                    />
                  </div>
                )}
                <div className="flex flex-row space-x-4">
                  {showControls && (
                    <button
                      className="flex items-center justify-center cursor-pointer rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-xs font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                      onClick={handleVideoToggle}
                    >
                      <ChevronUpIcon className="w-5 h-5 md:mr-0" />
                      <span
                        className="hidden md:inline-block"
                        style={{ width: "45px" }}
                      >
                        Video
                      </span>
                    </button>
                  )}
                  <button
                    className="flex items-center justify-center cursor-pointer rounded-bl-xl rounded-tr-xl bg-primary-500 px-3.5 py-2.5 text-xs font-bold text-secondary-400 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 hover:scale-105"
                    onClick={handlePlayPauseClick}
                  >
                    {isPlaying ? (
                      <>
                        <PauseIcon className="w-5 h-5 md:mr-0" />
                        <span
                          className="hidden md:inline-block"
                          style={{ width: "45px" }}
                        >
                          Pause
                        </span>
                      </>
                    ) : (
                      <>
                        <PlayIcon className="w-5 h-5 md:mr-0" />
                        <span
                          className="hidden md:inline-block"
                          style={{ width: "45px" }}
                        >
                          Play
                        </span>
                      </>
                    )}
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
