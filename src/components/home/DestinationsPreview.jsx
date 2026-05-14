import { Clock, ArrowRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import SectionWrapper from "../common/SectionWrapper"
import { DESTINATIONS, NEW_SITE_URL } from "../../utils/constants"

function DestinationsPreview() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-brand-navy">Explore Top Destinations</h2>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {DESTINATIONS.map((destination) => (
              <SwiperSlide key={destination.name}>
                <div className="relative rounded-3xl overflow-hidden h-80 cursor-pointer group">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute top-4 right-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                    {destination.tag}
                  </span>
                  <div className="absolute bottom-0 p-6 w-full">
                    <h3 className="text-white text-xl font-bold">{destination.name}</h3>
                    <p className="text-white/90 text-sm flex items-center gap-1 mt-1">
                      <Clock className="w-4 h-4" />
                      {destination.days}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-white font-bold text-lg">{destination.price}</span>
                      <button
                        type="button"
                        className="bg-white/20 backdrop-blur rounded-full px-4 py-1 text-white text-sm inline-flex items-center gap-1"
                        onClick={() => window.open(NEW_SITE_URL, "_blank", "noopener,noreferrer")}
                      >
                        Book Now <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => window.open(NEW_SITE_URL, "_blank", "noopener,noreferrer")}
              className="border-2 border-brand-blue text-brand-blue rounded-full px-10 py-4 font-bold hover:bg-brand-blue hover:text-white transition inline-flex items-center gap-2"
            >
              View All Packages <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}

export default DestinationsPreview
