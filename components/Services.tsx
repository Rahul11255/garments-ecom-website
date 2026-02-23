import * as React from "react";
import { ArrowRight } from "lucide-react";
import { mockData } from "../mockData";
import Container from "./custom/Container";
import Link from "next/link";

/* ---------------------------------------------
   Types
--------------------------------------------- */

type Service = {
  title: string;
  description: string;
  image: string;
  slug: string;
};

type MockData = {
  services: Service[];
};

/* ---------------------------------------------
   Component
--------------------------------------------- */

const Services: React.FC = () => {
  const { services } = mockData as MockData;

  return (
    <section className="bg-white py-8 md:py-16">
      <Container>
        <div className="mb-8 md:mb-12 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
            OUR SERVICE
          </p>
          <h2 className=" text-primary">
            Textile is What We Do
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 pt-2">
            Our expertise covers the full textile production process, including
            material selection, garment stitching, and finishing. We deliver
            market-ready apparel with a focus on quality, consistency, and
            value.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white  transition-all duration-300 shadow hover:-translate-y-2 hover:shadow-md"
            >
              {/* Image */}
              <div className="relative h-52 md:h-64 overflow-hidden p-10 ">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-102"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-secondary/5 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className=" mb-3 md:mb-6 text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <Link
                  href={`/service/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary relative"
                >
                  <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-secondary after:transition-all after:duration-300 group-hover:after:w-full">
                    Read More
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
