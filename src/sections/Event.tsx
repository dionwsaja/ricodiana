import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaMapMarkerAlt, FaHeart } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export const EventSection = () => {
  useGSAP(() => {
    gsap.from(".event-card", {
      scrollTrigger: {
        trigger: "#event",
        start: "top 70%",
        toggleActions: "play none none none",
      },
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    });
  }, []);

  const eventData = [
    {
      title: "Akad Nikah",
      date: "17 Januari 2026",
      time: "08:00 - 09:00 WIB",
      label: "Mempelai Wanita",
      address:
        "Kediaman mempelai Wanita, Rt 05 Rw 02, Sungelebak Karanggeneng, Lamongan",
    },
    {
      title: "Resepsi",
      date: "17 Januari 2026",
      time: "10:00 - Selesai",
      label: "Mempelai Wanita",
      address:
        "Kediaman mempelai Wanita, Rt 05 Rw 02, Sungelebak Karanggeneng, Lamongan",
    },
  ];

  return (
    <section
      id="event"
      className="relative min-h-screen py-24 px-4 md:px-10 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1B263B 0%, #0d1a2e 100%)",
      }}
    >
      <h2 className="font-great-vibes text-5xl md:text-7xl text-[#C5A065] mb-20 text-center">
        The Wedding Event
      </h2>

      <div className="flex justify-center w-full max-w-6xl">
        {eventData.map((event, index) => (
          <div
            key={index}
            className="event-card w-full max-w-lg md:max-w-xl m-4"
          >
            <div className="bg-gold/80 p-3 md:p-5 rounded-t-[200px] rounded-b-3xl shadow-2xl h-full transform hover:scale-[1.02] transition-transform duration-500">
              <div
                className="bg-[#F5F0E6] rounded-t-[200px] rounded-b-2xl p-8 md:p-14 text-center flex flex-col items-center justify-between min-h-[650px] md:min-h-[700px] relative"
                style={{
                  backgroundImage: `linear-gradient(rgba(245, 240, 230, 0.85), rgba(245, 240, 230, 0.85)), url('/images/3.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex flex-col items-center">
                  <FaHeart className="text-gold/80 text-4xl mb-6 animate-pulse" />
                  <h3 className="font-great-vibes text-5xl md:text-6xl text-gold/80 mb-6 leading-tight">
                    {event.title}
                  </h3>
                  <div className="w-24 h-[1.5px] bg-gold/80/40 mb-8" />
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-gold/80 text-2xl font-bold uppercase tracking-wider">
                      {event.date}
                    </p>
                    <p className="text-gold/80 text-xl">Pukul : {event.time}</p>
                  </div>

                  <FaMapMarkerAlt className="text-gold/80 text-4xl mx-auto" />

                  <div className="space-y-2">
                    <p className="text-gold/80 font-bold text-xl">
                      {event.label}
                    </p>
                    <p className="text-gold/80/80 text-lg leading-relaxed max-w-[280px] mx-auto italic">
                      {event.address}
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <a
                    href="https://maps.app.goo.gl/zumwhfNauAP9r9sQ6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-10 py-4 bg-gold/80 text-white rounded-full transition-all shadow-lg hover:shadow-2xl active:scale-95"
                  >
                    <FaMapMarkerAlt />
                    <span>Open Map</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
