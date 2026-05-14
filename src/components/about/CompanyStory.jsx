import { CheckCircle2, Trophy } from "lucide-react"
import BookingCTA from "../common/BookingCTA"
import SectionWrapper from "../common/SectionWrapper"

const features = [
  "Personalized travel planning",
  "Best prices and exclusive deals",
  "24/7 travel assistance",
  "Secure and quick bookings",
  "Trusted destinations",
  "Expert-guided experiences",
]

function CompanyStory() {
  return (
    <section className="py-24 px-6 md:px-12">
      <SectionWrapper>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-orange text-xs font-bold tracking-widest">OUR STORY</p>
            <h2 className="text-brand-navy font-black text-4xl mt-3">Your Best Journey Begins Here</h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Elite Travels is a Bengaluru-based travel company built on one promise:
              make every journey stress-free and memorable for families, couples, and groups.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              We specialize in personalized trips across India with carefully curated stays,
              transport, and local experiences tailored to your style and budget.
            </p>

            <div className="mt-8 space-y-3">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-sky" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <BookingCTA />
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80"
              alt="Travel planning session"
              className="rounded-3xl shadow-2xl w-full object-cover h-96"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 max-w-[180px] text-center">
              <Trophy className="text-brand-orange text-3xl mx-auto" />
              <p className="text-brand-navy font-black text-2xl mt-2">10+</p>
              <p className="text-gray-500 text-xs">Years of Excellence</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}

export default CompanyStory
