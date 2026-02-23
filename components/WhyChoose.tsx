import * as React from "react"
import { Progress } from "./ui/progress"
import { mockData } from "../mockData"
import Container from "./custom/Container"

/* ---------------------------------------------
   Types
--------------------------------------------- */

type Skill = {
  name: string
  percentage: number
}

type WhyChooseData = {
  subtitle: string
  title: string
  description1: string
  description2: string
  skills: Skill[]
}

type MockData = {
  whyChoose: WhyChooseData
}

/* ---------------------------------------------
   Component
--------------------------------------------- */

const WhyChoose: React.FC = () => {
  const { whyChoose } = mockData as MockData

  return (
    <section className="bg-white py-8 md:py-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 lg:gap-16 lg:grid-cols-2">
          {/* Content */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
              {whyChoose.subtitle}
            </p>

            <h2 className=" mb-3 md:mb-6 ">
              {whyChoose.title}
            </h2>

            <p className="mb-3 md:mb-6 leading-relaxed text-gray-600">
              {whyChoose.description1}
            </p>

            <p className="leading-relaxed text-gray-600">
              {whyChoose.description2}
            </p>
          </div>

          {/* Progress Bars */}
          <div className=" space-y-5 md:space-y-8">
            {whyChoose.skills.map((skill, index) => (
              <div key={index}>
                <div className="mb-2 flex justify-between">
                  <span className="font-semibold text-primary">
                    {skill.name}
                  </span>
                  <span className="font-semibold text-secondary">
                    {skill.percentage}%
                  </span>
                </div>

                <Progress value={skill.percentage} className="h-3" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WhyChoose
