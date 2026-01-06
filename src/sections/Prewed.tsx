import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const prewedPhotos = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
];

const fadeInUp: Variants = {
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
};

// Varian untuk container agar anak-anaknya (gambar) muncul bergantian (stagger)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Jeda antar gambar 0.1 detik
    },
  },
};

export const PrewedSection = () => {
  return (
    <section
      id="prewed"
      className="relative py-24 px-4 md:px-12 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1B263B 0%, #0d1a2e 100%)",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Judul Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="font-great-vibes text-5xl md:text-6xl text-[#C5A065]">
            Wedding Gallery
          </h2>
        </motion.div>

        {/* Grid Gallery */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {prewedPhotos.map((src, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="overflow-hidden rounded-lg md:rounded-2xl shadow-xl bg-gray-800"
            >
              <img
                src={src}
                alt={`Prewedding ${i + 1}`}
                className="w-full h-full object-cover aspect-[3/4] hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Pesan Penutup (Opsional) */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12 text-[#C5A065]/60 italic font-light"
        >
          Captured with love
        </motion.p>
      </div>
    </section>
  );
};
