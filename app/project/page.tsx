import * as React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/custom/Container";
import CustomButton from "@/components/custom/CustomButton";
import MainPageBreadCrumb from "@/components/custom/MainPageBreadCrumb";
import { projectList } from "@/data/project";



const Projects: React.FC = () => {
 

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <MainPageBreadCrumb
        title="Our Projects"
        description=" Explore our portfolio of successful textile projects delivered
              with excellence and precision."
      />

      {/* Projects Grid */}
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projectList.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.imageSrc}
                    alt={project.name}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {project.name}
                  </h3>
                  <p className="mb-4 text-gray-600">
                    {project.shortDescription}
                  </p>
                  <Link
                    href={`/project/${project.slug}`}
                    className="flex items-center gap-2 text-sm font-semibold uppercase text-secondary hover:text-rose-600"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white py-8 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              Have a Project in Mind?
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Let's discuss how we can bring your textile project to life with
              our expertise and quality.
            </p>
            <Link href="/contact">
              <CustomButton>Start Your Project</CustomButton>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Projects;
