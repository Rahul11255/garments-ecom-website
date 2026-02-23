import { notFound } from "next/navigation";
import Link from "next/link";
import {ArrowLeft} from "lucide-react";
import { services } from "@/data/services";
import Container from "@/components/custom/Container";
import ServiceDetailMain from "@/components/service/ServiceDetailMain";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

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
              {service.title}
            </h1>
            <p className="text-md text-gray-300 mb-6">
              {service.shortDescription}
            </p>
            {service.subTitle && (
              <p className="text-md text-rose-100 font-medium">
                {service.subTitle}
              </p>
            )}
          </div>
        </Container>
      </section>


      {/* Main Content */}
     <ServiceDetailMain service={service} />
    </div>
  );
}

