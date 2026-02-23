import * as React from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { mockData } from "@/mockData"
import MainPageBreadCrumb from "@/components/custom/MainPageBreadCrumb"

/* ---------------------------------------------
   Types
--------------------------------------------- */

type Service = {
  title: string
  description: string
  image: string
}

type MockData = {
  services: Service[]
}

/* ---------------------------------------------
   Component
--------------------------------------------- */

const servicesData = [
    {
     image:'/services/garment-stitching.png', 
     title:'Garment Stitching', 
     description:'Complete garment stitching services with precision tailoring, strong seams, and quality finishing for ready-to-sell apparel.',
     slug:'/garment-stitching'
    },
    {
     image:'/services/custom-apparel.png', 
     title:'Custom Apparel', 
     description:'Customized garment production based on your designs, measurements, and requirements from sampling to bulk manufacturing.',
     slug:'/custom-apparel'
    },
    {
     image:'/services/fabric-printing.png', 
     title:'Fabric Printing', 
     description:'Smooth, high-quality satin weaving with controlled texture and finish, suitable for garments requiring elegance, softness, and strength.',
     slug:'/fabric-printing'
    },
    {
      image:'/services/fabric-dyeing.png', 
      title:'Fabric Dyeing', 
      description:'We offer uniform and color-fast fabric dyeing using reliable processes to ensure consistent shades, durability, and fabric safety across batches.',
      slug:'/fabric-dyeing'
    },
    {
      image:'/services/satin-weaving.png', 
      title:'Satin Weaving', 
      description:'Smooth, high-quality satin weaving with controlled texture and finish, suitable for garments requiring elegance, softness, and strength.',
      slug:'/satin-weaving'
    },
    {
      image:'/services/linen-weaving.png', 
      title:'Linen Weaving', 
      description:'Breathable and durable linen weaving with attention to fabric strength, texture, and comfort for long-lasting garments.',
      slug:'/linen-weaving'
    },
  ];

const Services: React.FC = () => {
  const { services } = mockData as MockData

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
       <MainPageBreadCrumb 
      title="Our Services"
      description="Comprehensive textile solutions tailored to meet your specific needs with excellence and precision."
      />
    

      {/* Services Grid */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-secondary"> WHAT WE OFFER</p>
            <h2 className="mb-6 text-4xl font-bold text-gray-900"> Textile is What We Do</h2>
            <p className="mx-auto max-w-2xl text-gray-600">Nulla in nibh at leo faucibus molestie eget nec velit. Phasellusvel felis vel orci iaculis tempor tristique sagittis urna.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service, index) => (
              <div key={index} className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <img src={service.image} alt={service.title} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"/>
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-900"> {service.title}</h3>
                  <p className="mb-4 text-gray-600"> {service.description}</p>

                  <p className="mb-4 text-gray-600">
                    Our {service.title.toLowerCase()} service ensures top-quality results with attention to detail and precision craftsmanship.
                  </p>

                  <Link href={`/services${service.slug}`} className="flex items-center gap-2 text-sm font-semibold uppercase text-secondary hover:text-rose-600">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white"> Ready to Start Your Project? </h2>
            <p className="mb-8 text-lg leading-relaxed text-white"> Contact us today to discuss your textile needs and let our experts guide you to the perfect solution.</p>
            <Link href="/contact" className="inline-block rounded bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-secondary transition-all hover:bg-gray-100">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services;