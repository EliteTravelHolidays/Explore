import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { Calendar, ArrowLeft, ImageIcon } from "lucide-react"
import { getBlogById } from "../utils/api"
import LoadingSkeleton from "../components/common/LoadingSkeleton"

function BlogPost() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      const result = await getBlogById(id)
      if (result.error) {
        setError(result.error)
      } else {
        setPost(result.data)
      }
      setLoading(false)
    }

    fetchPost()
  }, [id])

  if (loading) {
    return <LoadingSkeleton />
  }

  if (error || !post) {
    return (
      <div className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
            <p className="text-red-600 mb-6">{error || "Blog post not found"}</p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:gap-4 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Stories
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const title = post?.title?.rendered || "Untitled Story"
  const content = post?.content?.rendered || ""
  const rawImage = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url
  const image = Array.isArray(rawImage) ? rawImage[0] : rawImage || null

  const date = new Date(post?.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <>
      <Helmet>
        <title>{title} | Elite Travels</title>
      </Helmet>

      <article className="py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-brand-orange font-semibold mb-8 hover:gap-4 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Stories
          </Link>

          {/* Featured Image */}
          <div className="mb-8 rounded-2xl overflow-hidden h-96">
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-brand-sky to-brand-blue flex items-center justify-center">
                <ImageIcon className="w-16 h-16 text-white" />
              </div>
            )}
          </div>

          {/* Post Date */}
          <p className="text-brand-sky text-sm font-semibold uppercase tracking-wider flex items-center gap-2 mb-4">
            <Calendar className="w-4 h-4" />
            {date}
          </p>

          {/* Post Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-8">{title}</h1>

          {/* Post Content */}
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Back Button at Bottom */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:gap-4 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Stories
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}

export default BlogPost
