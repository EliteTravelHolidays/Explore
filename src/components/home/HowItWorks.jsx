import { motion } from "framer-motion"
import { ClipboardList, MessageCircle, Smile } from "lucide-react"
import SectionWrapper from "../common/SectionWrapper"
import { HOW_IT_WORKS } from "../../utils/constants"

const iconMap = {
  MessageCircle,
  ClipboardList,
  Smile,
}

function HowItWorks() {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-brand-blue to-brand-sky">
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-white/70 text-xs font-bold tracking-widest">HOW IT WORKS</p>
            <h2 className="text-white text-4xl font-black mt-3">Your Journey in 3 Simple Steps</h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="absolute top-12 left-1/4 right-1/4 h-px bg-white/30 hidden md:block border-dashed" />
            {HOW_IT_WORKS.map((item, index) => {
              const Icon = iconMap[item.icon]

              return (
                <motion.div
                  key={item.step}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
                  className="text-center"
                >
                  <div className="relative w-24 h-24 rounded-full bg-white/20 backdrop-blur border-2 border-white/40 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-white" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-brand-orange rounded-full text-white text-xs font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/75 leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}

export default HowItWorks
