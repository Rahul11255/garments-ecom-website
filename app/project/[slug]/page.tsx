import Container from '@/components/custom/Container'
import ProjectDetailMain from '@/components/project/ProjectDetailMain'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { ProjecDetailtList } from '@/data/project'
import { notFound } from 'next/navigation'

const page  = async ( {params}: {params: {slug: string}}) => {
  const {slug} = await params;
  const project = ProjecDetailtList.find((p) => p.slug === slug);

    if (!project) return notFound();


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-r from-slate-900 to-slate-800 py-8 md:py-16">
        {/* Decorative Background Shapes */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-secondary opacity-20 blur-3xl z-10 "></div>
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary opacity-20 blur-3xl z-10"></div>

        <Container>
          <Link
            href="/services"
            className="mb-6 inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Services
          </Link>

          <div className="max-w-3xl z-20 relative">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              T-Shirts
            </h1>
            <p className="text-md text-gray-300 mb-6">
              Premium T-Shirt Manufacturing for Brands, Retailers & Bulk Buyers
            </p>
            {/* {service.subTitle && ( */}
              {/* <p className="text-md text-rose-100 font-medium">
                aaaaaaaaaa
              </p> */}
            {/* )} */}
          </div>
        </Container>
      </section>


      {/* Main Content */}
      <ProjectDetailMain  data={project}/>
    </div>
  )
}

export default page