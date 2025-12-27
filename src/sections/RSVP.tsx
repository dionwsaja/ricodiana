import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useState } from "react";

const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

type FormData = {
  name: string;
  phone: string;
  attendance: string;
  guests: string;
  message: string;
};

export const RSVPSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    attendance: "",
    guests: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Mengirim...");

    // Buat object FormData
    const formBody = new FormData();
    // Masukkan data state ke FormData
    formBody.append("name", formData.name);
    formBody.append("phone", formData.phone);
    formBody.append("attendance", formData.attendance);
    formBody.append("guests", formData.guests);
    formBody.append("message", formData.message);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwD-S-FSpi4mDjpnSPztYZ6bkbAWiPiMs8MADGovzks3BBelGX4IgUoLv4rQ0azLwCn_w/exec",
        {
          method: "POST",

          body: formBody,
        }
      );

      if (response.ok) {
        setStatus("Terima kasih! Konfirmasi berhasil dikirim.");
        setFormData({
          name: "",
          phone: "",
          attendance: "",
          guests: "",
          message: "",
        });
      } else {
        setStatus("Gagal mengirim. Coba lagi.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Terjadi kesalahan koneksi.");
    }
  };

  return (
    <section
      id="rsvp"
      className="relative py-24 px-6 md:px-12 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1B263B 0%, #0d1a2e 100%)",
      }}
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="font-great-vibes text-5xl md:text-6xl text-[#C5A065] mb-8 drop-shadow-lg">
            Konfirmasi Kehadiran
          </h2>

          <p className="text-[#F5F0E6] text-xl md:text-2xl font-light leading-relaxed mb-12">
            Kehadiran Anda adalah hadiah terbesar bagi kami. Mohon konfirmasi
            kehadiran Anda di bawah ini.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="bg-[#1B263B]/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-[#C5A065]/30 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Nama */}
            <div className="text-left">
              <label className="block text-[#C5A065] text-lg font-medium mb-3">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-[#0d1a2e]/50 border border-[#C5A065]/30 rounded-xl text-[#F5F0E6] focus:outline-none focus:border-[#C5A065]"
                placeholder="Masukkan nama lengkap Anda"
              />
            </div>

            {/* Phone */}
            <div className="text-left">
              <label className="block text-[#C5A065] text-lg font-medium mb-3">
                Nomor HP / WhatsApp
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-[#0d1a2e]/50 border border-[#C5A065]/30 rounded-xl text-[#F5F0E6] focus:outline-none focus:border-[#C5A065]"
                placeholder="08xx xxxx xxxx"
              />
            </div>

            {/* Attendance */}
            <div className="text-left">
              <label className="block text-[#C5A065] text-lg font-medium mb-3">
                Apakah Anda akan hadir?
              </label>
              <select
                name="attendance"
                value={formData.attendance}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-[#0d1a2e]/50 border border-[#C5A065]/30 rounded-xl text-[#F5F0E6] focus:outline-none focus:border-[#C5A065]"
              >
                <option value="">Pilih</option>
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
                <option value="Mungkin Hadir">Mungkin Hadir</option>
              </select>
            </div>

            {/* Guests */}
            <div className="text-left">
              <label className="block text-[#C5A065] text-lg font-medium mb-3">
                Jumlah Tamu (termasuk diri sendiri)
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-[#0d1a2e]/50 border border-[#C5A065]/30 rounded-xl text-[#F5F0E6] focus:outline-none focus:border-[#C5A065]"
              >
                <option value="">Pilih jumlah tamu</option>
                <option value="1">1 Orang</option>
                <option value="2">2 Orang</option>
                <option value="3">3 Orang</option>
                <option value="4">4 Orang</option>
                <option value="5+">Lebih dari 4 Orang</option>
              </select>
            </div>

            {/* Message */}
            <div className="text-left">
              <label className="block text-[#C5A065] text-lg font-medium mb-3">
                Ucapan & Doa (Opsional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-6 py-4 bg-[#0d1a2e]/50 border border-[#C5A065]/30 rounded-xl text-[#F5F0E6] focus:outline-none focus:border-[#C5A065]"
                placeholder="Tuliskan ucapan atau doa Anda..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-12 py-5 bg-[#C5A065] text-[#1B263B] font-medium rounded-full text-xl hover:bg-[#d4b27a] transition-all shadow-lg"
            >
              Kirim Konfirmasi
            </motion.button>
          </form>

          {status && <p className="text-[#C5A065] mt-6 text-lg">{status}</p>}
        </motion.div>
      </div>
    </section>
  );
};
