import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Phone, PlaneTakeoff } from "lucide-react"
import { HiBars3, HiXMark } from "react-icons/hi2"
import { NAV_LINKS, NEW_SITE_URL, PHONE } from "../../utils/constants"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const openBookingPortal = () => {
    window.open(NEW_SITE_URL, "_blank", "noopener,noreferrer")
  }

  return (
    <nav
      className="fixed top-0 w-full z-50 h-20 min-h-[80px] px-6 md:px-16 transition-all duration-300 md:px-12"
      style={scrolled || !isHomePage ? {
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.3)'
      } : {
        background: 'transparent',
        backdropFilter: 'none',
        boxShadow: 'none'
      }}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between py-4 px-6 md:px-16">
        <Link to="/" className="flex h-full items-center gap-2">
          {!logoError ? (
            <img
              src="/assets/logo.png"
              alt="Elite Travels logo"
              className="h-16 w-auto object-contain"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="flex items-center gap-2">
              <PlaneTakeoff className="w-7 h-7 text-brand-blue" />
              <span className="text-brand-blue font-bold">ELITE TRAVELS</span>
            </div>
          )}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-colors ${
                  scrolled || !isHomePage
                    ? isActive
                      ? "text-brand-blue"
                      : "text-gray-700 hover:text-brand-blue"
                    : "text-white hover:text-white"
                } after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full ${
                  isActive ? "after:w-full" : ""
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className={`flex items-center gap-2 text-sm ${scrolled || !isHomePage ? "text-gray-600" : "text-white"}`}>
            <Phone className="w-4 h-4" />
            <span>{PHONE}</span>
          </div>
          <button
            type="button"
            onClick={openBookingPortal}
            className={`rounded-full px-6 py-2.5 font-semibold transition-colors ${
              scrolled || !isHomePage
                ? "bg-brand-orange text-white hover:bg-orange-600"
                : "bg-white text-brand-orange hover:bg-white/90"
            }`}
          >
            Book Now
          </button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className={`md:hidden transition-colors ${scrolled || !isHomePage ? "text-brand-navy" : "text-white"}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <HiXMark className="w-7 h-7" /> : <HiBars3 className="w-7 h-7" />}
        </button>
      </div>

      <div
        className={`absolute top-20 left-0 w-full overflow-hidden transition-all duration-300 md:hidden ${
          scrolled || !isHomePage ? "bg-white shadow-xl" : "bg-brand-navy/95 backdrop-blur-md shadow-xl"
        } ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`block font-medium ${
                  scrolled || !isHomePage
                    ? isActive
                      ? "text-brand-blue"
                      : "text-gray-700"
                    : isActive
                      ? "text-white"
                      : "text-white/90"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            )
          })}
          <button
            type="button"
            onClick={openBookingPortal}
            className={`w-full rounded-full px-6 py-3 font-semibold ${
              scrolled || !isHomePage ? "bg-brand-orange text-white" : "bg-white text-brand-orange"
            }`}
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
