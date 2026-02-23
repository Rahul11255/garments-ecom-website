import About from "@/components/About"
import Blog from "@/components/Blog"
import CTA from "@/components/CTA"
import FAQ from "@/components/FAQ"
import Features from "@/components/Features"
import Hero from "@/components/Hero"
import HowWeWork from "@/components/HowWeWork"
import Partners from "@/components/Partners"
import Projects from "@/components/Projects"
import Services from "@/components/Services"
import Statistics from "@/components/Statistics"
import Testimonials from "@/components/Testimonials"
import WhyChoose from "@/components/WhyChoose"

/* ---------------------------------------------
   Component
--------------------------------------------- */

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <About />
      <Statistics />
      <Services />
      <Partners />
      <WhyChoose />
      <Testimonials />
      <CTA />
      <Projects />
      <HowWeWork />
      <FAQ />
      <Blog />
    </div>
  )
}

export default Home
