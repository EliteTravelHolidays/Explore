import { useEffect, useState } from "react"
import { FaPlay, FaQuoteLeft, FaStar, FaUserCircle } from "react-icons/fa"
import { getMediaById } from "../../utils/api"

function TestimonialCard({ testimonial }) {
  const text = (testimonial?.content?.rendered || "").replace(/<[^>]*>/g, "")
  const name = testimonial?.acf?.person_name || testimonial?.title?.rendered || "Guest Traveler"
  const photoId = testimonial?.acf?.testimonial_photo || null
  const role = testimonial?.acf?.person_role || null
  const videoUrl = testimonial?.acf?.video_url || null

  const [photoUrl, setPhotoUrl] = useState(null)

  useEffect(() => {
    if (photoId && typeof photoId === "number") {
      getMediaById(photoId).then(({ data }) => {
        if (data) setPhotoUrl(data)
      })
    } else if (typeof photoId === "string" && photoId.startsWith("http")) {
      setPhotoUrl(photoId)
    }
  }, [photoId])

  return (
    <article className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-6 hover:bg-white/20 transition-all">
      <FaQuoteLeft className="text-brand-sky text-3xl opacity-60" />
      <p className="text-white/85 text-sm leading-relaxed mt-3 line-clamp-4">{text}</p>
      <div className="flex gap-1 mt-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar key={index} className="text-brand-orange text-xs" />
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-3">
        <div className="relative w-12 h-12">
          {photoUrl ? (
            <img src={photoUrl} alt={name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
          ) : (
            <FaUserCircle className="text-4xl text-white/50" />
          )}
          {videoUrl ? (
            <button
              type="button"
              onClick={() => window.open(videoUrl, "_blank", "noopener,noreferrer")}
              className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center"
              aria-label="Play testimonial video"
            >
              <FaPlay className="text-white text-xs" />
            </button>
          ) : null}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          <p className="text-white/60 text-xs">{role}</p>
        </div>
      </div>
    </article>
  )
}

export default TestimonialCard