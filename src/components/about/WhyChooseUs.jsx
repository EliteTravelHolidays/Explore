import { Clock, Heart, Shield, Zap } from "lucide-react"
import SectionWrapper from "../common/SectionWrapper"

const highlights = [
  { title: "Special Activities", Icon: Zap },
  { title: "24/7 Customer Service", Icon: Clock },
  { title: "Best Price Guaranteed", Icon: Shield },
  { title: "Elite Escape", Icon: Heart },
]

function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50 px-6 md:px-12">
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-brand-navy text-4xl font-black text-center mb-12">What Makes Us Different</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all"
              >
                <item.Icon className="w-8 h-8 text-brand-sky mx-auto mb-3" />
                <p className="font-semibold text-brand-navy text-sm md:text-base">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}

export default WhyChooseUs
