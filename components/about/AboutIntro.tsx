"use client";

import * as React from "react";
import Container from "@/components/custom/Container";

type AboutData = {
  title: string;
  description: string;
  images: string[];
};

type Props = {
  about: AboutData;
};

const AboutIntro: React.FC<Props> = ({ about }) => {
  return (
    <section className="bg-white md:py-16 py-8">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 md:gap-16 lg:grid-cols-2">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={about.images[0]}
              alt="About 1"
              className=" h-48 md:h-64 w-full rounded-xl object-cover shadow-lg"
            />
            <img
              src={about.images[1]}
              alt="About 2"
              className=" md:mt-8  h-48 md:h-64 w-full rounded-xl object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
              OUR STORY
            </p>
            <h2 className="mb-4 md:mb-6 text-primary">
              {about.title}
            </h2>
            <p className="mb-6 md:mb-8 leading-relaxed text-gray-600">
              {about.description}
            </p>
            <p className="leading-relaxed text-gray-600">
              We have been at the forefront of textile innovation, delivering
              premium quality fabrics and garments worldwide.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutIntro;
