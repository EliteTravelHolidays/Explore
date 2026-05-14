import { MessageCircle } from "lucide-react"
import LoadingSkeleton from "../common/LoadingSkeleton"
import TestimonialCard from "./TestimonialCard"

function TestimonialGrid({ testimonials, loading, error }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <LoadingSkeleton key={index} type="card" />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-300">Unable to load traveler reviews right now.</p>
      </div>
    )
  }

  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="text-center py-16">
        <MessageCircle className="w-12 h-12 mx-auto text-brand-sky mb-3" />
        <p className="text-white/70">No testimonials yet. Check back soon!</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  )
}

export default TestimonialGrid
