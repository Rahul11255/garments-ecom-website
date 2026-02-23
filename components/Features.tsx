import * as React from "react"
import { Target, CheckCircle, Users, type LucideIcon } from "lucide-react"
import { mockData } from "../mockData"
import Container from "./custom/Container"

/* ---------------------------------------------
   Types
--------------------------------------------- */

type Feature = {
  icon: "🎯" | "✓" | "👥" | string
  title: string
  description: string
}

type MockData = {
  features: Feature[]
}

/* ---------------------------------------------
   Icon map
--------------------------------------------- */

const iconMap: Record<string, LucideIcon> = {
  "🎯": Target,
  "✓": CheckCircle,
  "👥": Users,
}

/* ---------------------------------------------
   Component
--------------------------------------------- */

const Features: React.FC = () => {
  const { features } = mockData as MockData

  const data:{icon:string,title:string, description:string}[] = [
    {
      icon: "🎯",
      title: "End-to-End Garment Stitching",
      description: "From cutting to final finishing, we convert fabric into ready-to-sell garments with precision stitching and consistent quality.",
    },
    {
      icon: "✓",
      title: "Raw Material – Client or Ours",
      description: "Clients may provide their own fabric, or choose from our range of high-quality raw materials sourced as per garment requirement.",
    },
    {
      icon: "👥",
      title: "Bulk & Custom Manufacturing",
      description: "We support small batches and large bulk orders for brands, retailers, uniforms, and private labels with reliable timelines.",
    },
  ];

  return (
    <section className=" py-8 lg:py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {data?.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] ?? Target

            return (
              <div
                key={index}
                className="group rounded-lg bg-primary p-4 md:p-8 transition-all hover:bg-secondary"
              >
                <div className="mb-4 md:mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-secondary group-hover:bg-primary/30 transition-transform group-hover:scale-110">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                <h3 className="mb-2 md:mb-3 text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="group-hover:text-white text-gray-300">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Features
