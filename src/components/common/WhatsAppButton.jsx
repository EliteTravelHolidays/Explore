import { FaWhatsapp } from "react-icons/fa"
import { WHATSAPP_URL } from "../../utils/constants"

function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="relative w-14 h-14 block">
        <span className="animate-ping absolute inset-0 rounded-full bg-green-400 opacity-30" />
        <span className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-green-600 transition-all">
          <FaWhatsapp className="text-white text-2xl" />
        </span>
      </a>
    </div>
  )
}

export default WhatsAppButton
