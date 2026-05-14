import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import BlogGrid from "../blog/BlogGrid"
import SectionWrapper from "../common/SectionWrapper"
import { getBlogs } from "../../utils/api"
import { ArrowRight } from "lucide-react"
// ...

function HomeBlogSection() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      const result = await getBlogs()
      setBlogs(Array.isArray(result.data) ? result.data : [])
      setError(result.error)
      setLoading(false)
    }

    fetchBlogs()
  }, [])

  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50">
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-orange text-xs font-bold tracking-widest">FROM OUR JOURNAL</p>
            <h2 className="text-4xl font-black text-brand-navy mt-3">Latest Travel Stories</h2>
          </div>

          <BlogGrid posts={blogs.slice(0, 3)} loading={loading} error={error} />

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex border-2 border-brand-blue text-brand-blue rounded-full px-10 py-4 font-bold hover:bg-brand-blue hover:text-white transition"
            >
             View All Stories <ArrowRight className="w-4 h-4 inline ml-1" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}

export default HomeBlogSection
