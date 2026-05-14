import { FaPlaneDeparture } from "react-icons/fa"
import { NEW_SITE_URL } from "../../utils/constants"

function BookingCTA({ text = "Book Your Dream Trip", fullWidth = false, size = "md" }) {
  const sizeMap = {
    sm: "px-5 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  }

  const sizeClass = sizeMap[size] || sizeMap.md

  return (
    <button
      type="button"
      onClick={() => window.open(NEW_SITE_URL, "_blank", "noopener,noreferrer")}
      className={`bg-brand-orange text-white font-bold rounded-full hover:bg-orange-600 hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center ${sizeClass} ${
        fullWidth ? "w-full" : ""
      }`}
    >
      <FaPlaneDeparture className="mr-2" />
      {text}
    </button>
  )
}

export default BookingCTA
