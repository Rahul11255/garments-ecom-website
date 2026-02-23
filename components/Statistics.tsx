'use client'

import * as React from "react"
import { useEffect, useRef, useState } from "react"
import { mockData } from "../mockData"
import Container from "./custom/Container"

type Statistic = {
  label: string
  value: number
  suffix?: string
}

type MockData = {
  statistics: Statistic[]
}

const Statistics: React.FC = () => {
  const { statistics } = mockData as MockData
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [start, setStart] = useState(false)
  const [counts, setCounts] = useState<number[]>(
    statistics.map(() => 0)
  )

  // 👇 Trigger when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true)
        }
      },
      { threshold: 0.4 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!start) return

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
    const timers: number[] = []

    statistics.forEach((stat, index) => {
      let currentStep = 0
      const increment = stat.value / steps

      const timer = window.setInterval(() => {
        currentStep++

        if (currentStep <= steps) {
          setCounts((prev) => {
            const next = [...prev]
            next[index] = Math.min(
              Math.floor(increment * currentStep),
              stat.value
            )
            return next
          })
        } else {
          window.clearInterval(timer)
        }
      }, stepDuration)

      timers.push(timer)
    })

    return () => {
      timers.forEach((timer) => window.clearInterval(timer))
    }
  }, [start, statistics])

 return (
  <section
    ref={sectionRef}
    className="relative bg-linear-to-br from-primary via-primary to-primary/90 py-8 md:py-16 overflow-hidden"
  >
    {/* Background Glow */}
    <div className="absolute -top-20 -left-20 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

    <Container>
      <div className= " mb-7 md:mb-14 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Our Industry In Numbers
        </h2>
        <p className="mt-3 text-gray-300 max-w-xl mx-auto">
          Delivering excellence with measurable impact across the apparel industry.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
        {statistics.map((stat, index) => (
          <div
            key={index}
            className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-500/20"
          >
            {/* Number */}
            <div className="mb-4 text-4xl md:text-5xl font-extrabold bg-linear-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
              {counts[index]}
              {stat.suffix ?? ""}
            </div>

            {/* Divider */}
            <div className="w-12 h-1 bg-rose-400 mx-auto mb-4 rounded-full group-hover:w-20 transition-all duration-300"></div>

            {/* Label */}
            <p className="text-gray-300 text-lg font-medium tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Container>
  </section>
)

}

export default Statistics
