import * as React from "react"
import {
  MessageCircle,
  ClipboardList,
  Settings,
  Sparkles,
  type LucideIcon,
} from "lucide-react"
import { mockData } from "../mockData"
import Container from "./custom/Container"

type HowWeWorkStep = {
  icon: string
  title: string
  description: string
}

type HowWeWorkData = {
  subtitle: string
  title: string
  description1: string
  description2: string
  steps: HowWeWorkStep[]
}

type MockData = {
  howWeWork: HowWeWorkData
}

const iconMap: Record<string, LucideIcon> = {
  "💬": MessageCircle,
  "📋": ClipboardList,
  "⚙️": Settings,
  "✨": Sparkles,
}

const HowWeWork: React.FC = () => {
  const { howWeWork } = mockData as MockData

  return (
    <section className="bg-white py-8 md:py-16">
      <Container>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-4">
            {howWeWork.subtitle}
          </p>

          <h2 className=" mb-4 md:mb-6">
            {howWeWork.title}
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {howWeWork.description1}
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid gap-5 md:gap-8 md:grid-cols-2 lg:grid-cols-4">

          {howWeWork.steps.map((step, index) => {
            const IconComponent = iconMap[step.icon] ?? MessageCircle

            return (
              <div
                key={index}
                className="group relative bg-gray-50 rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-bold px-4 py-1 rounded-full">
                  {`0${index + 1}`}
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6 mt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm group-hover:bg-secondary transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-secondary group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-8 md:mt-16 text-center">
          <button className="bg-secondary text-white px-8 py-3 rounded-md text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            Start Your Project
          </button>
        </div>

      </Container>
    </section>
  )
}

export default HowWeWork
