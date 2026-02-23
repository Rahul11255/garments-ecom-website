'use client';

import * as React from "react"
import { useEffect, useRef } from "react"
import { mockData } from "../mockData"

/* ---------------------------------------------
   Types
--------------------------------------------- */

type Partner = {
  name: string
}

type MockData = {
  partners: Partner[]
}

/* ---------------------------------------------
   Component
--------------------------------------------- */

const Partners: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollStep = 1
    const scrollInterval = 30

    const scroll = () => {
      scrollAmount += scrollStep

      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0
      }

      scrollContainer.scrollLeft = scrollAmount
    }

    const interval = window.setInterval(scroll, scrollInterval)
    return () => window.clearInterval(interval)
  }, [])

  const { partners } = mockData as MockData

  return (
    <section className="overflow-hidden bg-gray-50 py-5 md:py-10">
      <div>
        <div
          ref={scrollRef}
          className="flex items-center gap-4 md:gap-8 overflow-hidden"
          style={{ scrollBehavior: "auto" }}
        >
          {/* Duplicate partners for seamless loop */}
          {[...partners, ...partners, ...partners].map(
            (partner, index) => (
              <div
                key={index}
                className="shrink-0 opacity-60 transition-transform hover:scale-110 hover:opacity-100"
              >
                <div className="flex h-14 md:h-16 w-36 items-center justify-center rounded bg-gray-200 font-semibold text-gray-500">
                  {partner.name}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Partners
