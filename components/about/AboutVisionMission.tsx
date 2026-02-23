"use client";

import * as React from "react";
import { Check, Target, Award } from "lucide-react";
import Container from "@/components/custom/Container";

type Props = {
  vision: string[];
  mission: string[];
};

const AboutVisionMission: React.FC<Props> = ({ vision, mission }) => {
  return (
    <section className="bg-gray-50 md:py-16  py-8">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Vision */}
          <div className="rounded-2xl bg-white  md:p-8 p-4 shadow-lg">
            <Target className="mb-4 md:mb-6 size-10 md:size-12 text-secondary" />
            <h3 className="mb-6 text-lg md:text-2xl font-bold text-primary">
              Our Vision
            </h3>
            <ul className="space-y-3">
              {vision.map((item, index) => (
                <li key={index} className="flex gap-3 text-gray-600">
                  <Check className="size-5 text-secondary" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission */}
          <div className="rounded-2xl bg-white p-4 md:p-8 shadow-lg">
            <Award className="mb- md:mb-6 size-10 md:size-12 text-secondary" />
            <h3 className="mb-6 text-lg md:text-2xl font-bold text-primary">
              Our Mission
            </h3>
            <ul className="space-y-3">
              {mission.map((item, index) => (
                <li key={index} className="flex gap-3 text-gray-600">
                  <Check className="size-5 text-secondary" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutVisionMission;
