import * as React from "react"
import { ArrowRight } from "lucide-react"
import { mockData } from "../mockData"
import Container from "./custom/Container"

type Project = {
  title: string
  description: string
  image: string
}

type MockData = {
  projects: Project[]
}

const Projects: React.FC = () => {
  const { projects } = mockData as MockData

  return (
    <section className="bg-white py-8 md:py-16 ">
      <Container>
        
        {/* Section Header */}
        <div className=" mb-8 md:mb-14 text-center">
          <p className="mb-3 md:mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            OUR PROJECTS
          </p>
          <h2 className="">
            Crafted Production Showcase
          </h2>

          <p className="mt-3 md:mt-4 mx-auto max-w-2xl text-gray-600">
            A selection of completed garment productions reflecting
            quality craftsmanship and reliable manufacturing standards.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center sm:text-left">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <button className="inline-flex items-center gap-2 text-secondary font-semibold text-sm uppercase tracking-wide group-hover:gap-3 transition-all duration-300">
                  View Details
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}

export default Projects
