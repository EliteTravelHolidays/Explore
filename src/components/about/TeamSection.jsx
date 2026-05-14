import { Users } from "lucide-react"
import BookingCTA from "../common/BookingCTA"
import SectionWrapper from "../common/SectionWrapper"

function TeamSection() {
  return (
    <section className="py-20 bg-white text-center px-6 md:px-12">
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-brand-navy mb-8">Meet Our Team</h2>
          <div className="bg-gray-50 rounded-3xl p-12">
            <Users className="text-brand-sky text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-brand-navy">Our Growing Team of Travel Experts</h3>
            <p className="text-gray-500 mt-2">Team profiles coming soon</p>
            <div className="mt-6">
              <BookingCTA />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}

export default TeamSection
