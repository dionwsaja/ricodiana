import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";
import { FaInstagram } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export const Couple = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#couple",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(".bg-overlay", { opacity: 0 }, { opacity: 1, duration: 1.5 });
    tl.from(".couple-title", { y: 50, opacity: 0, duration: 1 }, "-=1");
    tl.from(
      ".groom-card, .bride-card",
      { y: 60, opacity: 0, duration: 1.2, stagger: 0.4 },
      "-=0.8"
    );
    tl.from(
      ".photo-ring",
      {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        stagger: 0.4,
        ease: "back.out(1.7)",
      },
      "-=1"
    );
  }, []);

  return (
    <section
      id="couple"
      className="relative py-20 px-6 md:px-12 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1B263B 0%, #0d1a2e 100%)",
      }}
    >
      <div className="bg-overlay absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/40" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="couple-title font-great-vibes text-5xl md:text-6xl text-[#C5A065] mb-16 drop-shadow-lg">
          The Couple
        </h2>

        <div className="flex relative flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          {/* Groom */}
          <div className="groom-card text-center">
            <div className="photo-ring w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#C5A065]/50 mx-auto shadow-xl mb-6">
              <img
                src="/images/rico.png"
                alt="Muhammad Rico Listiawan"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="font-great-vibes text-3xl md:text-4xl text-[#C5A065] mb-3">
              Mohammad Rico Listiawan
            </h3>
            <p className="text-[#F5F0E6] text-lg font-light mb-2">
              Putra Pertama Bpk. Tulistiono & Ibu Tutik Handayani
            </p>
            <p className="text-[#F5F0E6]/80 text-base mb-4">
              Bulangan, Dukun, Gresik
            </p>

            <a
              href="https://www.instagram.com/rich.co17?igsh=MTkzY3ZrMGZua3U3Zw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C5A065] hover:text-[#d4b27a] transition-colors"
            >
              <FaInstagram size={24} />
              Instagram Rico
            </a>
          </div>

          {/* Bride */}
          <div className="bride-card text-center">
            <div className="photo-ring w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#C5A065]/50 mx-auto shadow-xl mb-6">
              <img
                src="/images/diana.png"
                alt="Diana Agustin"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="font-great-vibes text-3xl md:text-4xl text-[#C5A065] mb-3">
              Diana Agustin
            </h3>
            <p className="text-[#F5F0E6] text-lg font-light mb-2">
              Putri Kedua Bpk. Kaseran & Ibu Muzaini
            </p>
            <p className="text-[#F5F0E6]/80 text-base mb-4">
              Sungelebak, Karanggeneng, Lamongan
            </p>

            <a
              href="https://www.instagram.com/bubbleyies.06?igsh=MXcybzdtcmV0Yzl5eg=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C5A065] hover:text-[#d4b27a] transition-colors"
            >
              <FaInstagram size={24} />
              Instagram Diana
            </a>
          </div>

          {/* Ribbon */}
          <img
            src="/materials/ribbon.png"
            alt="Decoration ribbon"
            className="absolute -z-20 -rotate-90 md:rotate-0 opacity-25 md:w-125 top-1/2 -translate-y-42"
          />
        </div>
      </div>
    </section>
  );
};
