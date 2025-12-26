import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
} satisfies import("framer-motion").Variants; // Optional: helps TS

export const FooterSection = () => {
  return (
    <footer
      id="footer"
      className="relative py-16 px-6 md:px-12 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0d1a2e 0%, #1B263B 100%)",
      }}
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <p className="text-[#F5F0E6] text-lg md:text-xl font-light leading-relaxed mb-8">
            Dengan segala kerendahan hati, kami ucapkan terima kasih atas
            kehadiran dan doa restu Anda. Semoga kita semua senantiasa diberi
            keberkahan dalam menjalani kehidupan.
          </p>

          <p className="text-[#C5A065] text-2xl md:text-3xl font-light tracking-wide mb-12">
            Terima kasih atas segala doa dan kasih sayangnya.
          </p>

          <div className="text-[#F5F0E6]/80 text-base md:text-lg font-light mb-8">
            <p className="mb-2">Created with Love by</p>
            <p className="font-medium text-[#C5A065] text-xl">
              Nanda & Kolosal Production
            </p>
          </div>

          <div className="text-[#F5F0E6]/70 text-sm md:text-base italic">
            <p>Song by Nadhif Basalamah</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
