import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import BookingCTA from "../components/common/BookingCTA"
import EnquiryForm from "../components/common/EnquiryForm"
import PageHeader from "../components/common/PageHeader"
import TestimonialGrid from "../components/testimonials/TestimonialGrid"
import { getTestimonials } from "../utils/api"

function Testimonials() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTestimonials = async () => {
      const result = await getTestimonials()
      setData(Array.isArray(result.data) ? result.data : [])
      setError(result.error)
      setLoading(false)
    }

    fetchTestimonials()
  }, [])

  return (
    <>
      <Helmet>
        <title>Reviews | Elite Travels</title>
      </Helmet>
      <PageHeader
        title="Traveler Reviews"
        subtitle="Real stories, real adventures"
        breadcrumb="Testimonials"
      />

      <section className="py-16 px-6 md:px-12 bg-brand-navy">
        <div className="max-w-7xl mx-auto">
          <TestimonialGrid testimonials={data} loading={loading} error={error} />
        </div>
      </section>

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

export default Testimonials
