import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import TestimonialCard from "../testimonials/TestimonialCard"
import LoadingSkeleton from "../common/LoadingSkeleton"
import SectionWrapper from "../common/SectionWrapper"
import { getTestimonials } from "../../utils/api"

function HomeTestimonialSection() {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTestimonials = async () => {
      const result = await getTestimonials()
      setTestimonials(Array.isArray(result.data) ? result.data : [])
      setError(result.error)
      setLoading(false)
    }

    fetchTestimonials()
  }, [])

  return (
    <section className="py-24 px-6 md:px-12 bg-brand-navy">
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-sky text-xs font-bold tracking-widest">TESTIMONIALS</p>
            <h2 className="text-white text-4xl font-black mt-3">Hear From Our Elite Explorers</h2>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <LoadingSkeleton type="card" />
              <LoadingSkeleton type="card" />
              <LoadingSkeleton type="card" />
            </div>
          ) : error ? (
            <p className="text-center text-white/70">Unable to load testimonials right now.</p>
          ) : (
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              spaceBetween={24}
              breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop
              pagination={{ clickable: true }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </SectionWrapper>
    </section>
  )
}

export default HomeTestimonialSection
