import { useMemo, useState } from "react"
import { Loader2, Mail, MapPin, MessageSquare, Phone, Send, User } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import toast from "react-hot-toast"
import SectionWrapper from "./SectionWrapper"
import { submitEnquiry } from "../../utils/api"
import { PHONE, WHATSAPP_URL } from "../../utils/constants"

function EnquiryForm() {
  const initialState = useMemo(
    () => ({
      name: "",
      phone: "",
      email: "",
      destination: "",
      message: "",
    }),
    []
  )

  const [name, setName] = useState(initialState.name)
  const [phone, setPhone] = useState(initialState.phone)
  const [email, setEmail] = useState(initialState.email)
  const [destination, setDestination] = useState(initialState.destination)
  const [message, setMessage] = useState(initialState.message)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const resetFields = () => {
    setName(initialState.name)
    setPhone(initialState.phone)
    setEmail(initialState.email)
    setDestination(initialState.destination)
    setMessage(initialState.message)
  }

  const validateRequired = () => {
    if (!name.trim() || !phone.trim() || !email.trim()) {
      toast.error("Please fill all required fields before submitting.", { duration: 4000 })
      return false
    }

    return true
  }

  const onSubmit = async () => {
    if (!validateRequired()) {
      return
    }

    const phoneRegex = /^[6-9]\d{9}$/
    if (!phoneRegex.test(phone.trim())) {
      setError("Please enter a valid 10-digit Indian mobile number.")
      return
    }

    setLoading(true)
    setError(null)

    const result = await submitEnquiry({
      name,
      email,
      phone,
      destination,
      message,
    })

    setLoading(false)

    if (result.error) {
      setError("Something went wrong. Please try again or contact us on WhatsApp.")
      return
    }

    setSuccess(true)
    resetFields()
  }

  return (
    <section id="enquiry" className="py-24 px-6 md:px-12 bg-brand-peach">
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-brand-orange text-xs font-bold tracking-widest mb-3">GET IN TOUCH</p>
            <h2 className="text-brand-navy font-black text-4xl mb-4">Plan Your Dream Trip</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Fill in your details – our travel experts will call you within 24 hours
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-gray-700">
              <Phone className="w-4 h-4" />
              <span>{PHONE}</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12 bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {success ? (
              <div className="text-center py-12">
                <p className="text-green-500 font-bold text-lg">
                  Thank you! We will contact you shortly.
                </p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="mt-4 text-brand-blue underline text-sm"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
            <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Phone Number</label>
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-brand-blue/20">
                  <span className="px-3 py-3 bg-gray-50 text-gray-500 text-sm font-medium border-r border-gray-200 whitespace-nowrap">
                    +91
                  </span>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 px-3 py-3 text-sm outline-none bg-white"
                    maxLength={10}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    placeholder="e.g. Kerala, Goa, Kashmir..."
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-gray-400 w-4 h-4" />
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    placeholder="Tell us about your travel preferences"
                  />
                </div>
              </div>
            </div>

            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            <button
              type="button"
              disabled={loading}
              onClick={onSubmit}
              className="w-full mt-6 bg-brand-orange text-white rounded-full py-4 font-bold text-lg disabled:opacity-60 hover:bg-orange-600 transition"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="inline-flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Enquiry →
                </span>
              )}
            </button>

            <div className="mt-6 text-center">
              <p className="text-gray-500">Prefer to talk directly?</p>
              <div className="flex gap-4 justify-center mt-4 flex-wrap">
                <button
                  type="button"
                  onClick={() => window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer")}
                  className="bg-green-500 text-white rounded-full px-6 py-3 inline-flex items-center gap-2"
                >
                  <FaWhatsapp />
                  Chat on WhatsApp
                </button>
                <a
                  href="tel:+919740004573"
                  className="border-2 border-brand-blue text-brand-blue rounded-full px-6 py-3 inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Us Now
                </a>
              </div>
              {success ? <p className="mt-4 text-green-600 text-sm">Thanks! We have received your enquiry.</p> : null}
            </div>
            </>
            )}
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}

export default EnquiryForm
