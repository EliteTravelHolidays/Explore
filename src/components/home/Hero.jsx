import { motion } from "framer-motion"
import { Link as ScrollLink } from "react-scroll"
import Typewriter from "typewriter-effect"
import { ChevronDown, ShieldCheck } from "lucide-react"
import { NEW_SITE_URL } from "../../utils/constants"

function Hero() {
  return (
    <section className="h-screen relative overflow-hidden -mt-24 pt-24">
      <img
        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80"
        alt="Beautiful travel destination"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-blue/70 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-center">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="bg-white/20 backdrop-blur rounded-full px-4 py-2 text-white text-sm inline-flex items-center gap-2 mb-6">
            <ShieldCheck className="w-4 h-4" />
            Trusted by 1000+ Families
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Your Dream Trip to
            <span className="block gradient-text">
              <Typewriter
                options={{
                  strings: ["Kerala", "Goa", "Kashmir", "Rajasthan", "Himachal"],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h1>

          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Trusted travel planning that covers flights, hotels, transport, and support,
            so your trip feels effortless from day one.
          </p>

          <div className="flex gap-4 flex-wrap justify-center">
            <button
              type="button"
              onClick={() => window.open(NEW_SITE_URL, "_blank", "noopener,noreferrer")}
              className="bg-brand-orange rounded-full px-8 py-4 font-bold text-white hover:bg-orange-600 transition"
            >
              Explore Packages
            </button>

            <ScrollLink
              to="enquiry"
              smooth
              duration={500}
              className="border-2 border-white text-white rounded-full px-8 py-4 font-bold hover:bg-white hover:text-brand-blue transition cursor-pointer"
            >
              Plan My Trip
            </ScrollLink>
          </div>

          <div className="mt-10 flex justify-center">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              className="opacity-80"
              style={{ animation: "spin 20s linear infinite" }}
            >
             
              <line x1="10" y1="60" x2="110" y2="60" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              <line x1="60" y1="10" x2="60" y2="110" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            </svg>
          </div>
        </motion.div>
      </div>

      <ChevronDown className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white w-8 h-8 animate-bounce" />
    </section>
  )
}

export default Hero
