import Hero from "../components/home/Hero"
import StatsStrip from "../components/home/StatsStrip"
import WhyUs from "../components/home/WhyUs"
import DestinationsPreview from "../components/home/DestinationsPreview"
import HowItWorks from "../components/home/HowItWorks"
import HomeTestimonialSection from "../components/home/HomeTestimonialSection"
import HomeBlogSection from "../components/home/HomeBlogSection"
import EnquiryForm from "../components/common/EnquiryForm"
import BookingCTA from "../components/common/BookingCTA"

function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <WhyUs />
      <DestinationsPreview />
      <HowItWorks />
      <HomeTestimonialSection />
      <HomeBlogSection />
      <EnquiryForm />

      <section className="bg-brand-navy py-20 text-center px-6 md:px-12">
        <h2 className="text-white font-black text-4xl mb-4">Ready for Your Next Adventure?</h2>
        <p className="text-white/70 mb-8">
          Book directly on our travel portal for flights, hotels and packages
        </p>
        <BookingCTA size="lg" />
      </section>
    </>
  )
}

export default Home
