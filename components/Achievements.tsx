"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import CountUp from "react-countup"
import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa"
import { ImUsers } from "react-icons/im"
import { motion } from "framer-motion"

const stats = [
  {
    number: 19,
    icon: FaBriefcase,
    text: "training courses"
  },
  {
    number: 855,
    icon: FaClock,
    text: "Working hours"
  },
  {
    number: 196,
    icon: ImUsers,
    text: "happy customers"
  },
  {
    number: 9,
    icon: FaTrophy,
    text: "international awards"
  }
]

const statsContainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear"
    }
  }
}

const statsItem = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8]
    }
  }
}

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <section>
      <div className="container mx-auto">
        <motion.div variants={statsContainerVariant} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className="grid grid-cols-2 md:grid-cols-4 gap-16">
          {stats.map((item, index) => {
            return (
              <motion.div variants={statsItem} key={index} className="flex flex-col justify-center items-center">
                {/** circle outer number */}
                <div className="border border-accent/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6">
                  {/** circle inner count number */}
                  <div ref={ref} className="border border-accent/30 w-full h-full flex items-center justify-center text-5xl rounded-full ">
                    {/** render the countup animation only the components */}
                    {isInView && <CountUp start={0} end={item.number} duration={6} />}
                  </div>

                  <div className="flex flex-col justify-center items-center text-center">
                    <item.icon className="text-3xl mb-2" />
                    <h4 className="h4">{item.text}</h4>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
