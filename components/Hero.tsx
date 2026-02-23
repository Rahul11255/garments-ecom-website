import * as React from "react"
import { Play } from "lucide-react"
import { mockData } from "../mockData"
import CustomButton from "./custom/CustomButton"
import Container from "./custom/Container"

/* ---------------------------------------------
   Types
--------------------------------------------- */

type HeroData = {
  image: string
  subtitle: string
  title: string
  description: string
}

type MockData = {
  hero: HeroData
}

/* ---------------------------------------------
   Component
--------------------------------------------- */

const Hero: React.FC = () => {
  const { hero } = mockData as MockData

  return (
    <section
      className="relative flex h-[350px]  md:h-[500px] lg:h-[calc(100vh-118px)]  items-end sm:items-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${hero.image}')`,
      }}
    >
      <Container className="pb-6  sm:pb-0">
        <div className="max-w-2xl">
          <p className="mb-3 sm:mb-4 text-sm uppercase tracking-[0.3em] text-gray-300">
            {hero.subtitle}
          </p>

          <h1 className=" mb-4 sm:mb-6 text-2xl sm:text-4xl lg:text-5xl font-semibold lg:font-bold leading-tight text-white">
            From Fabric to Finished Garment We Handle It All
          </h1>

          <p className=" hidden sm:block mb-8 text-base lg:text-lg leading-relaxed text-gray-200">
            {/* {hero.description} */}
            We provide complete garment stitching solutions — from sourcing premium raw materials to delivering ready-to-sell apparel. Whether you supply the fabric or rely on us for end-to-end production, we ensure consistent quality, precision tailoring, and on-time delivery.
          </p>

          <div className="flex items-center gap-4">
            <CustomButton>Discover More</CustomButton>

            <button className="flex items-center gap-2 sm:gap-3 text-white transition-colors hover:text-rose-400">
              <div className="flex size-8 sm:size-12 items-center justify-center rounded-full border-2 border-white transition-colors hover:border-rose-400 bg-primary cursor-pointer">
                <Play className="size-4 sm:size-6 fill-white" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider">
                Play Video
              </span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
