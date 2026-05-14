import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import PageHeader from "../components/common/PageHeader"
import BlogGrid from "../components/blog/BlogGrid"
import { getBlogs } from "../utils/api"

function Blog() {
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
    <>
      <Helmet>
        <title>Travel Stories | Elite Travels</title>
      </Helmet>
      <PageHeader
        title="Travel Stories"
        subtitle="Inspiration for your next journey"
        breadcrumb="Blog"
      />
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <BlogGrid posts={blogs} loading={loading} error={error} />
        </div>
      </section>
    </>
  )
}

export default Blog
