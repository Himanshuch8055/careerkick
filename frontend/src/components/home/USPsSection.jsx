import { motion } from "framer-motion";
import { FaShippingFast, FaLock, FaHeadset } from "react-icons/fa";

const usps = [
  {
    icon: <FaShippingFast size={28} />, title: "Fast Delivery", desc: "Get your orders delivered quickly and reliably, every time.", color: "from-indigo-400 to-indigo-600"
  },
  {
    icon: <FaLock size={28} />, title: "Secure Payment", desc: "Your payment is encrypted and 100% safe with us.", color: "from-emerald-400 to-emerald-600"
  },
  {
    icon: <FaHeadset size={28} />, title: "24/7 Support", desc: "Our team is here for you anytime, day or night.", color: "from-pink-400 to-pink-600"
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.12, duration: 0.6 } })
};

const USPsSection = () => (
  <section
    className="relative mb-14 px-4"
    aria-labelledby="usps-heading"
  >
    {/* Glassmorphism background */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/60 via-indigo-50/80 to-white/60 backdrop-blur-md shadow-xl -z-10" />
    <h2 id="usps-heading" className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-10 tracking-tight">
      Why Shop With Us?
    </h2>
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center max-w-4xl mx-auto">
      {usps.map((usp, i) => (
        <motion.article
          key={usp.title}
          className="flex-1 min-w-[220px] max-w-xs bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-white/60 px-6 py-7 flex flex-col items-center text-center hover:shadow-2xl transition group relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          custom={i}
          variants={cardVariants}
        >
          <motion.span
            whileHover={{ scale: 1.18, rotate: [0, 8, -8, 0] }}
            className={`mb-3 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${usp.color} shadow-lg group-hover:shadow-indigo-200 transition-all duration-300`}
            aria-label={usp.title}
          >
            {usp.icon}
          </motion.span>
          <h3 className="text-lg font-bold text-gray-900 mb-1">{usp.title}</h3>
          <p className="text-gray-600 text-sm font-medium leading-snug">{usp.desc}</p>
        </motion.article>
      ))}
    </div>
  </section>
);


export default USPsSection;
