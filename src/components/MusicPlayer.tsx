import { useState, useEffect, useRef } from "react";
import { Howl } from "howler";
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    soundRef.current = new Howl({
      src: ["/assets/music/lagu.mp3"],
      loop: true,
      volume: 0.5,
      autoplay: false,
      html5: true,
      onload: () => {
        console.log("Musik loaded");
      },
      onloaderror: (_: number, err: string) => {
        console.error("Load error:", err);
      },
    });

    return () => {
      soundRef.current?.unload();
    };
  }, []);

  const togglePlay = () => {
    if (!soundRef.current) return;

    if (isPlaying) {
      soundRef.current.pause();
      setIsPlaying(false);
    } else {
      soundRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause Musik" : "Play Musik"}
        className="relative w-16 h-16 md:w-20 md:h-20 bg-[#1B263B]/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border-2 border-[#C5A065]/50 hover:border-[#C5A065] transition-all duration-500 group"
      >
        {isPlaying ? (
          <FaCirclePause className="text-[#C5A065] text-4xl md:text-5xl z-10 group-hover:scale-110 transition-transform" />
        ) : (
          <FaCirclePlay className="text-[#C5A065] text-4xl md:text-5xl z-10 group-hover:scale-110 transition-transform" />
        )}

        {/* Piringan */}
        <div
          className={`absolute inset-0 rounded-full border-4 border-[#C5A065]/30
            ${isPlaying ? "spin-force" : "spin-force-slow spin-pause"}`}
        >
          <div className="absolute inset-2 rounded-full border border-[#C5A065]/50" />
        </div>
      </button>
    </div>
  );
};

export default MusicPlayer;
