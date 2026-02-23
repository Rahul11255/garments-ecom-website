import React from "react";
import { Check } from "lucide-react";
// import { mockData } from "../mockData";
import {mockData} from '../mockData';
import CustomButton from "./custom/CustomButton";
import Container from "./custom/Container";

/* -------------------- Types -------------------- */

type AboutData = {
  subtitle: string;
  title: string;
  description: string;
  images: string[];
  vision: string[];
  mission: string[];
};

type MockData = {
  about: AboutData;
};

/* -------------------- Component -------------------- */

const About: React.FC = () => {
  const { about } = mockData as MockData;

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Images */}
          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            <img
              src={about.images[1]}
              alt="About Garment 1"
              className="w-full h-full md:h-64 object-cover rounded-lg shadow-lg"
            />
            <img
              src={about.images[1]}
              alt="About Garment 2"
              className="w-full h-full md:h-64 object-cover rounded-lg shadow-lg lg:mt-8"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-3 lg:mb-4 font-semibold">
              {about.subtitle}
            </p>

            <h2 className=" mb-3 md:mb-6 text-primary">
              {about.title}
            </h2>

            <p className="text-gray-600 mb-6 lg:mb-8 leading-relaxed">
              {about.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision */}
              <div>
                <h4 className="text-xl font-bold mb-3 lg:mb-4 text-primary">
                  Our Vision
                </h4>
                <ul className="space-y-2">
                  {about.vision.map((item: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <Check className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mission */}
              <div>
                <h4 className="text-xl font-bold mb-3 lg:mb-4 text-gray-900">
                  Our Mission
                </h4>
                <ul className="space-y-2">
                  {about.mission.map((item: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <Check className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <CustomButton className="mt-8">
              More About Us
            </CustomButton>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
