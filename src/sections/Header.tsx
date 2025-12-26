import gambarHeader from "../assets/images/7.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Header = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      ".bg-image",
      { scale: 1.1, opacity: 0 },
      { scale: 1.05, opacity: 0.7, duration: 2.5 }
    );

    tl.to(".overlay", { opacity: 1, duration: 1.5 }, "-=1.5");

    tl.from("h1", { y: 80, opacity: 0, duration: 1.2 }, "-=1");

    tl.from(
      ".info-text",
      { y: 50, opacity: 0, duration: 1, stagger: 0.3 },
      "-=0.8"
    );

    tl.from(
      ".cta-button",
      { scale: 0.8, opacity: 0, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.5"
    );

    tl.from(
      ".accent",
      { opacity: 0, rotate: -15, duration: 1.5, stagger: 0.4 },
      "-=1.2"
    );
  }, []);

  return (
    <section
      id="cover"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1B263B 0%, #0d1a2e 100%)",
      }}
    >
      <div className="absolute inset-0">
        <img
          src={gambarHeader}
          alt="Rico & Diana Wedding"
          className="bg-image w-full h-full object-cover opacity-0 scale-105"
        />
        <div className="overlay absolute inset-0 bg-linear-to-t from-[#1B263B]/20 via-black/20 to-black/70 opacity-0" />
      </div>

      <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="font-great-vibes text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide text-[#C5A065] mb-4 md:mb-6 drop-shadow-lg">
          The Wedding of
          <br /> Rico & Diana
        </h1>

        <p className="info-text text-[#C5A065] text-2xl md:text-4xl font-light tracking-widest mb-8 md:mb-12">
          17 . 01 . 2026
        </p>

        <p className="info-text text-[#F5F0E6] text-lg md:text-xl font-light mb-10 md:mb-14">
          Kepada Yth. Bapak/Ibu/Saudara/i
        </p>

        <a
          href="#opening"
          className="cta-button inline-block px-10 py-4 bg-[#C5A065] text-white font-medium rounded-full text-lg md:text-xl tracking-wide hover:bg-[#d4b27a] transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Buka Undangan
        </a>
      </div>

      <div className="accent absolute bottom-8 left-8 md:left-16 opacity-40">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 10 C30 30, 20 60, 30 80 C50 100, 70 80, 70 60 C80 40, 70 20, 50 10"
            fill="#C5A065"
          />
        </svg>
      </div>
      <div className="accent absolute top-8 right-8 md:right-16 opacity-40 rotate-180">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 10 C30 30, 20 60, 30 80 C50 100, 70 80, 70 60 C80 40, 70 20, 50 10"
            fill="#C5A065"
          />
        </svg>
      </div>
    </section>
  );
};
