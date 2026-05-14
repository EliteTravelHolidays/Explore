import { motion } from "framer-motion"
import { ArrowRight, BadgeIndianRupee, ClipboardList, HeadphonesIcon } from "lucide-react"
import SectionWrapper from "../common/SectionWrapper"

const cards = [
  {
    title: "Personalized Planning",
    description: "Every itinerary is crafted around your preferences, budget and travel style",
    Icon: ClipboardList,
  },
  {
    title: "24/7 Support",
    description: "Our team is available around the clock to assist you throughout your journey",
    Icon: HeadphonesIcon,
  },
  {
    title: "Best Price Guaranteed",
    description: "We promise the best rates with no hidden charges on any booking",
    Icon: BadgeIndianRupee,
  },
]

function WhyUs() {
  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50">
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-brand-orange text-xs font-bold tracking-widest">WHY CHOOSE US</p>
            <h2 className="text-4xl font-black text-brand-navy mt-3">Travel Smarter With Elite Travels</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-4">
              A dedicated team, transparent planning, and seamless support from start to finish.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                className="relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-brand-orange rounded-full text-white font-bold text-sm flex items-center justify-center">
                  {index + 1}
                </span>
                <div className="w-16 h-16 rounded-2xl bg-brand-sky/10 flex items-center justify-center mb-6">
                  <card.Icon className="w-8 h-8 text-brand-sky" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed">{card.description}</p>
                <div className="mt-6 pt-6 border-t border-gray-100 text-brand-orange font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}

export default WhyUs
