import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Love = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // smooth: true,
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
        trigger: "#love-story",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      ".timeline-line",
      { height: 0 },
      { height: "100%", duration: 2.5, ease: "power3.out" }
    );

    tl.from(
      ".timeline-item",
      { opacity: 0, y: 70, duration: 1.2, stagger: 0.5 },
      "-=1.8"
    );

    tl.from(
      ".timeline-dot",
      { scale: 0, duration: 0.8, stagger: 0.5, ease: "back.out(1.7)" },
      "-=1.5"
    );
  }, []);

  return (
    <section
      id="love-story"
      className="relative py-24 px-6 md:px-12 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1B263B 0%, #0d1a2e 100%)",
      }}
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="font-great-vibes text-5xl md:text-6xl text-[#C5A065] text-center mb-16 drop-shadow-lg">
          Our Love Story
        </h2>

        <div className="relative">
          {/* Garis vertical putus-putus */}
          <div className="timeline-line absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-[#C5A065]/40 h-full top-0 rounded-full origin-top border-dashed border-2 border-[#C5A065]/50" />

          {/* Item 1 - 2019 */}
          <div className="timeline-item mb-20 md:mb-32 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
            <div className="w-full md:w-1/2 text-left md:text-right pr-0 md:pr-12">
              <div className="bg-[#1B263B]/60 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#C5A065]/30 shadow-lg">
                <h3 className="font-great-vibes text-4xl tracking-widest text-[#C5A065] mb-3">
                  How we first met
                </h3>
                <p className="text-[#F5F0E6] text-lg font-light mb-2">
                  2019 (Awal Bertemu)
                </p>
                <p className="text-[#F5F0E6]/90 text-base">
                  Awal mengenal dimulai sejak lama setelah lulus SMA yang tidak
                  sengaja dikenalkan teman akrab pada tahun 2019 kami mulai
                  dekat dan mengenal satu sama lain.
                </p>
              </div>
            </div>
            <div className="timeline-dot hidden md:block w-5 h-5 bg-[#C5A065] rounded-full border-4 border-[#1B263B] absolute left-1/2 -translate-x-1/2 mt-8" />
          </div>

          {/* Item 2 - 2025 */}
          <div className="timeline-item mb-20 md:mb-32 flex flex-col md:flex-row-reverse items-start md:items-center gap-6 md:gap-12">
            <div className="w-full md:w-1/2 text-left md:text-left pl-0 md:pl-12">
              <div className="bg-[#1B263B]/60 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#C5A065]/30 shadow-lg">
                <h3 className="font-great-vibes tracking-widest text-4xl text-[#C5A065] mb-3">
                  The Proposal <br />{" "}
                  <span className="tracking-wider text-2xl">
                    When Forever Began
                  </span>
                </h3>
                <p className="text-[#F5F0E6] text-lg font-light mb-2">
                  2025 (Lamaran)
                </p>
                <p className="text-[#F5F0E6]/90 text-base">
                  Setelah 6 tahun mengenal dekat kami berdua meyakini mampu
                  melangkah ke jenjang yang lebih serius, pada tanggal 22 Juni
                  2025 kami resmi bertunangan.
                </p>
              </div>
            </div>
            <div className="timeline-dot hidden md:block w-5 h-5 bg-[#C5A065] rounded-full border-4 border-[#1B263B] absolute left-1/2 -translate-x-1/2 mt-8" />
          </div>

          {/* Item 3 - 2026 */}
          <div className="timeline-item flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
            <div className="w-full md:w-1/2 text-left md:text-right pr-0 md:pr-12">
              <div className="bg-[#1B263B]/60 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#C5A065]/30 shadow-lg">
                <h3 className="font-great-vibes text-4xl tracking-widest text-[#C5A065] mb-3">
                  Our Wedding Day <br />{" "}
                  <span className="text-2xl tracking-wider">
                    The beginning of a new chapter
                  </span>
                </h3>
                <p className="text-[#F5F0E6] text-lg font-light mb-2">
                  2026 (Pernikahan)
                </p>
                <p className="text-[#F5F0E6]/90 text-base">
                  Dan segala pertimbangan dan restu dari kedua orang tua dan
                  keluarga akhirnya kami memutuskan untuk menyelenggarakan
                  pernikahan pada tanggal 17 Januari 2026.
                </p>
              </div>
            </div>
            <div className="timeline-dot hidden md:block w-5 h-5 bg-[#C5A065] rounded-full border-4 border-[#1B263B] absolute left-1/2 -translate-x-1/2 mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
};
