import { Link } from "react-router-dom"
import { ChevronRight, Mail, MapPin, Phone, Heart } from "lucide-react"
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa"
import { EMAIL, NAV_LINKS, PHONE, WHATSAPP_URL } from "../../utils/constants"

function Footer() {
  const openWhatsApp = () => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer")
  }

  return (
    <footer className="bg-brand-navy text-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="bg-white/10 rounded-xl p-2 w-fit mb-4">
              <img
                src="/assets/logo.png"
                alt="Elite Travels logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Elite Travels is your trusted travel partner for curated holidays across India.
              From planning to return, one team handles your entire journey.
            </p>
            <div className="flex items-center gap-3">
              {[FaInstagram, FaFacebook, FaYoutube, FaWhatsapp].map((Icon, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={openWhatsApp}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-orange transition flex items-center justify-center"
                  aria-label="Social link"
                >
                  <Icon className="text-white" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-brand-sky font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center gap-2 text-white/70 text-sm hover:text-brand-orange transition"
                >
                  <ChevronRight className="w-4 h-4" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-brand-sky font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-white/70 text-sm">
              <a href="tel:+919740004573" className="flex items-center gap-2 hover:text-brand-orange transition">
                <Phone className="w-4 h-4" />
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-brand-orange transition">
                <Mail className="w-4 h-4" />
                {EMAIL}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-brand-sky font-semibold text-lg mb-4">Contact Us Directly</h3>
            <p className="text-white/70 text-sm mb-6">
              Prefer to talk? Our travel experts are ready to help plan your perfect trip.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold rounded-full px-6 py-3 transition-all duration-300 hover:shadow-lg w-64"
            >
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+919740004573"
              className="flex items-center justify-center gap-3 border border-white/30 hover:border-white text-white font-semibold rounded-full px-6 py-3 mt-3 transition-all duration-300 w-64"
            >
              <Phone className="w-4 h-4" />
              +91 9740004573
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-sm text-white/70">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Elite Travels. All rights reserved.</p>
          <p className="flex items-center gap-1">Designed with <Heart className="w-4 h-4 text-red-400 inline" /> for Elite Travelers</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
