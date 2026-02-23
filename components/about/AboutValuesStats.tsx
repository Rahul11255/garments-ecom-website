"use client";

import * as React from "react";
import { Target, Users, TrendingUp } from "lucide-react";
import Container from "@/components/custom/Container";

type Statistic = {
  label: string;
  value: number;
  suffix?: string;
};

type Props = {
  statistics: Statistic[];
};

const AboutValuesStats: React.FC<Props> = ({ statistics }) => {
  return (
    <>
      {/* Core Values */}
      <section className="bg-white md:py-16 py-8">
        <Container>
          <div className="mb-8 md:mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
              OUR VALUES
            </p>
            <h2 className="mb-4 md:mb-6  text-primary">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Quality First",
                desc: "We ensure every product meets the highest standards.",
              },
              {
                icon: Users,
                title: "Customer Focus",
                desc: "Customers drive our innovation and service.",
              },
              {
                icon: TrendingUp,
                title: "Continuous Innovation",
                desc: "We adopt new technologies to stay ahead.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="p-4 md:p-8 text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10">
                    <Icon className="h-10 w-10 text-secondary" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Statistics */}
      <section className="bg-primary md:py-16 py-8">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-4 text-center">
            {statistics.map((stat, index) => (
              <div key={index}>
                <div className="mb-3 text-4xl md:text-5xl font-bold text-secondary">
                  {stat.value}
                  {stat.suffix ?? ""}
                </div>
                <p className=" text-base md:text-lg text-gray-300">{stat.label}</p>
              </div>
            ))}

            <div>
              <div className="mb-3 text-5xl font-bold text-secondary">
                25+
              </div>
              <p className="text-lg text-gray-300">
                Years Experience
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutValuesStats;
