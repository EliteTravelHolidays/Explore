import { Calendar, ImageIcon } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { SITE_URL, WP_BASE_URL } from "../../utils/constants"

function BlogCard({ post }) {
  const decodeHTML = (html) => {
    const txt = document.createElement('textarea')
    txt.innerHTML = html
    return txt.value
  }

  const title = post?.title?.rendered || "Untitled Story"
  const rawExcerpt = post.excerpt?.rendered || post.content?.rendered || ''
  const excerpt = decodeHTML(
    rawExcerpt.replace(/<[^>]*>/g, '')
  ).substring(0, 150).trim() + '...'
  const rawImage = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url
  const image = Array.isArray(rawImage) ? rawImage[0] : rawImage || null

  const date = new Date(post?.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  const id = post?.id
  const postUrl = post.link || `${WP_BASE_URL}/?p=${post.id}`

  const whatsappUrl = `https://wa.me/?text=Check this travel story: ${encodeURIComponent(
    post?.title?.rendered || ""
  )} ${SITE_URL}/blog/${post?.id}`

  const handleCardClick = () => {
    window.open(postUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <article
      onClick={handleCardClick}
      className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer h-full flex flex-col group"
    >
      <div className="h-56 relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
            loading="lazy"
          />
        ) : (
          <div className="h-full bg-gradient-to-br from-brand-sky to-brand-blue flex items-center justify-center">
            <ImageIcon className="w-12 h-12 text-white" />
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-brand-sky text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5" />
          {date}
        </p>

        <h3 className="text-brand-navy font-bold text-lg line-clamp-2 mt-2 mb-3">{title}</h3>
        <p className="text-gray-500 text-sm line-clamp-3 flex-1">{excerpt}</p>

        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
          <span className="text-brand-orange font-semibold text-sm">Read More...</span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              window.open(whatsappUrl, "_blank", "noopener,noreferrer")
            }}
            className="text-green-500 text-xl"
            aria-label="Share on WhatsApp"
          >
            <FaWhatsapp />
          </button>
        </div>
      </div>
    </article>
  )
}

export default BlogCard
