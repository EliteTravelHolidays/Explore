import CountUp from "react-countup"
import { Award, MapPin, Plane, Users } from "lucide-react"
import SectionWrapper from "../common/SectionWrapper"
import { STATS } from "../../utils/constants"

const iconMap = {
  Plane,
  MapPin,
  Users,
  Award,
}

function StatsStrip() {
  return (
    <section className="relative z-10 -mt-10 mx-4 md:mx-16">
      <SectionWrapper>
        <div className="bg-white rounded-2xl shadow-2xl px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => {
              const IconComponent = iconMap[stat.icon]

              return (
                <div key={stat.label} className={index < 3 ? "md:border-r md:border-gray-100" : ""}>
                  <IconComponent className="w-8 h-8 text-brand-sky mb-3" />
                  <CountUp
                    end={parseInt(stat.number, 10)}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                    suffix="+"
                    className="text-4xl font-black text-brand-blue"
                  />
                  <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}

export default StatsStrip
