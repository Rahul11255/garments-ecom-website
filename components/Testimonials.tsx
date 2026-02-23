'use client';

import * as React from "react"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { mockData } from "../mockData"

type Testimonial = {
  text: string
  name: string
  role: string
  image: string
}

type MockData = {
  testimonials: Testimonial[]
}

const Testimonials: React.FC = () => {
  const { testimonials } = mockData as MockData
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

 return (
  <section className="py-8 md:py-20 bg-white">
    <div className="container mx-auto px-4">

      <div className="max-w-5xl mx-auto text-center md:text-left">

        {/* Section Heading */}
        <div className="mb-7 md:mb-16 text-center md:text-left">
          <h2 className=" text-secondary">
            Client Feedback
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto md:mx-0">
            We work closely with brands, retailers, and bulk buyers to ensure
            consistent quality and dependable delivery.
          </p>
        </div>

        {/* Testimonial Box */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-center text-center md:text-left">

          {/* Quote Content */}
          <div className="flex flex-col items-center md:items-start">
            <Quote className="size-8 md:size-12 text-primary mb-4 md:mb-6" />

            <p
              key={currentIndex}
              className="text-lg md:text-2xl text-primary leading-relaxed font-medium max-w-xl"
            >
              “{testimonials[currentIndex]?.text}”
            </p>

            <div className="mt-4 md:mt-6">
              <h4 className="text-lg font-semibold text-primary">
                {testimonials[currentIndex]?.name}
              </h4>
              <p className="text-gray-500">
                {testimonials[currentIndex]?.role}
              </p>
            </div>
          </div>

          {/* Client Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={testimonials[currentIndex]?.image}
              alt={testimonials[currentIndex]?.name}
              className="size-28 md:size-56 object-cover border-2 border-secondary rounded-full shadow-md"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-5 md:mt-14 flex justify-center md:justify-start gap-4 md:gap-6">
          <button
            onClick={prev}
            className="h-11 w-11 cursor-pointer flex items-center justify-center rounded-md border border-gray-300 text-gray-700 hover:bg-secondary hover:text-white transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={next}
            className="h-11 w-11 cursor-pointer flex items-center justify-center rounded-md border border-gray-300 text-gray-700 hover:bg-secondary hover:text-white transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

      </div>
    </div>
  </section>
)


}

export default Testimonials
