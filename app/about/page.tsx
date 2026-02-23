"use client";

import { mockData } from "@/mockData";
import MainPageBreadCrumb from "@/components/custom/MainPageBreadCrumb";
import AboutIntro from "@/components/about/AboutIntro";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import AboutValuesStats from "@/components/about/AboutValuesStats";

const About = () => {
  const { about, statistics } = mockData;

  return (
    <div className="min-h-screen">
      <MainPageBreadCrumb title="About Garmen" />

      <AboutIntro about={about} />
      <AboutVisionMission
        vision={about.vision}
        mission={about.mission}
      />
      <AboutValuesStats statistics={statistics} />
    </div>
  );
};

export default About;
