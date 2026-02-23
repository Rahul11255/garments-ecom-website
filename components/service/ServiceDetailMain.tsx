import React from 'react'
import { Check, Package, Settings, Factory, Truck, Users} from "lucide-react";
import Container from "../custom/Container";
import { Service } from '@/data/services';
import QuoteForm from '@/app/services/[slug]/quote-form';


const ServiceDetailMain = ({service}: {service: Service}) => {
  return (
     <section className="p-4">
        <Container>
          <div className="grid lg:grid-cols-3 gap-6 py-5 md:py-10">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8 md:space-y-12">
               {/* Main Image */}
                {service.image && (
                    <div className="overflow-hidden rounded-lg md:rounded-2xl shadow-xl md:mx-4 ">
                    <img src={service.image} alt={service.title} className="w-full h-auto object-fill hover:scale-105 transition-transform duration-500"/>
                    </div>
                )}
              {/* About Section */}
              <div>
                <h2 className=" mb-6 pb-2 border-b-2 border-secondary inline-block">About This Service</h2>
               {service.subTitle && ( <p className="text-lg mb-2 font-medium">{service.subTitle}</p>)}
                <div className="space-y-4 text-gray-700">
                  {service.desc1 && <p className="text-md">{service.desc1}</p>}
                  {service.desc2 && <p className="text-md">{service.desc2}</p>}
                </div>
              </div>

              {/* Features Section */}
              {service.features?.list && service.features.list.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-5 md:mb-8">
                    <div className="p-2 bg-rose-100 rounded-lg">
                      <Settings className="h-6 w-6 text-secondary" />
                    </div>
                    <h2 className="">{service.features.title || "Our Services"}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 md:gap-8 gap-5">
                    {service.features.list.map((feature: any, i: number) => (
                      <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                        {feature.desc && (<p className="text-gray-600 mb-4">{feature.desc}</p>)}

                        {feature.points && feature.points.length > 0 && (
                          <ul className="space-y-2">
                            {feature.points.map((point: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700">
                                <Check className="text-secondary w-5 h-5 mt-0.5 shrink-0" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Why Choose Us Section */}
              {service.whyChooseUs && (
                <div>
                  <div className="flex items-center gap-3 mb-4 md:mb-8">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <Users className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h2 className=""> {service.whyChooseUs.title || "Why Choose Us"}</h2>
                  </div>

                  <div className="bg-linear-to-r from-emerald-50 to-teal-50 rounded-2xl p-5 md:p-8">
                    <ul className=" space-y-3 md:space-y-4">
                      {service.whyChooseUs.list?.map((point: string, i: number) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-primary text-base md:text-lg">{point}</span>
                        </li>
                      ))}
                    </ul>
                    {service.whyChooseUs.note && ( <p className="mt-6 text-gray-600 italic">{service.whyChooseUs.note}</p>)}
                  </div>
                </div>
              )}

              {/* Process Section */}
              {service.processes && service.processes.list?.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-5 md:mb-8">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Factory className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="">{service.processes.title}</h2>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 md:p-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {service.processes.list.map((step: string, i: number) => (
                        <div key={i} className="relative">
                          <div className="bg-white rounded-xl p-5 shadow-sm">
                            <div className="absolute -top-3 -left-3 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">
                              {i + 1}
                            </div>
                            <p className="text-gray-800 font-medium pt-2">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    {service.processes.note && ( <p className="mt-6 text-gray-600 text-center italic"> {service.processes.note}</p>)}
                  </div>
                </div>
              )}

              {/* Industries Section */}
              {service.industries && (
                <div>
                  <h2 className=" mb-6"> {service.industries.title}</h2>
                  {service.industries.desc && ( <p className="text-gray-600 mb-6"> {service.industries.desc} </p>)}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.industries.list?.map((industry: string, i: number) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-800">{industry}</span>
                        </div>
                      ))}
                    </div>
                    {service.industries.note && ( <p className="mt-6 text-gray-600">{service.industries.note}</p>)}
                  </div>
                </div>
              )}

              {/* Machinery Section */}
              {service.machinery && (
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6"> {service.machinery.title}</h2>
                  {service.machinery.subTitle && ( <p className="text-gray-600 mb-6">{service.machinery.subTitle} </p>)}
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.machinery.list?.map((item: string, i: number) => (
                        <div key={i} className="flex items-center gap-3">
                          <Check className="text-secondary w-5 h-5 shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                    {service.machinery.note && (<p className="mt-6 text-gray-600">{service.machinery.note}</p> )}
                  </div>
                </div>
              )}

              {/* Types Section (optional) */}
              {service.types && (
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6"> {service.types.title || "Types"}</h2>
                  {service.types.desc && ( <p className="text-gray-600 mb-6">{service.types.desc}</p>)}
                  <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.types.list?.map((t: string, i: number) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                          <span className="text-gray-800">{t}</span>
                        </div>
                      ))}
                    </div>
                    {service.types.note && (<p className="mt-4 text-gray-600 italic">{service.types.note}</p>)}
                  </div>
                </div>
              )}

              {/* Options Section (optional) */}
              {service.options && (
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.options.title || "Options"}</h2>
                  {service.options.desc && (<p className="text-gray-600 mb-6">{service.options.desc}</p>)}
                  <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.options.list?.map((opt: string, i: number) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                          <span className="text-gray-800">{opt}</span>
                        </div>
                      ))}
                    </div>
                    {service.options.note && ( <p className="mt-4 text-gray-600 italic">{service.options.note}</p> )}
                  </div>
                </div>
              )}

              {/* Quality Section (optional) */}
              {service.quality && (
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.quality.title || "Quality Assurance"}</h2>
                  {service.quality.desc && ( <p className="text-gray-600 mb-6">{service.quality.desc}</p>)}
                  <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.quality.list?.map((q: string, i: number) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="mt-1">
                            <Check className="text-secondary w-5 h-5 shrink-0" />
                          </div>
                          <span className="text-gray-800">{q}</span>
                        </div>
                      ))}
                    </div>
                    {service.quality.note && ( <p className="mt-4 text-gray-600 italic">{service.quality.note}</p>)}
                  </div>
                </div>
              )}

              {/* Applications Section (optional) */}
              {service.applications && (
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.applications.title || "Applications"}</h2>
                  {service.applications.desc && ( <p className="text-gray-600 mb-6">{service.applications.desc}</p>)}
                  <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.applications.list?.map((app: string, i: number) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                          <span className="text-gray-800">{app}</span>
                        </div>
                      ))}
                    </div>
                    {service.applications?.note && ( <p className="mt-4 text-gray-600 italic">{service.applications?.note}</p>)}
                  </div>
                </div>
              )}

              {/* Environmental Responsibility Section (optional) */}
              {service.enviromentalResponsibility && (
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.enviromentalResponsibility.title || "Environmental Responsibility"}</h2>
                  {service.enviromentalResponsibility.desc && ( <p className="text-gray-600 mb-6">{service.enviromentalResponsibility.desc}</p>)}
                  <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.enviromentalResponsibility.list?.map(
                        (item: string, i: number) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="mt-1">
                              <Check className="text-secondary w-5 h-5 shrink-0" />
                            </div>
                            <span className="text-gray-800">{item}</span>
                          </div>
                        )
                      )}
                    </div>
                    {service.enviromentalResponsibility.note && (<p className="mt-4 text-gray-600 italic"> {service.enviromentalResponsibility.note}</p>)}
                  </div>
                </div>
              )}

              {/* Capacity Section */}
              {service.capacity && (
                <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <Truck className="h-6 w-6 text-rose-400" />
                    <h3 className="text-2xl font-bold">{service.capacity.title}</h3>
                  </div>

                  <div className="space-y-6">
                    {service.capacity.list?.map((cap: any, i: number) => (
                      <div key={i} className="border-l-2 border-secondary pl-4">
                        <div className="text-lg font-bold text-rose-300"> {cap.type}</div>
                        <div className="text-gray-300">{cap.range}</div>
                      </div>
                    ))}
                  </div>

                  {service.capacity.note && ( <p className="mt-6 text-sm text-gray-300 italic"> {service.capacity.note}</p> )}
                </div>
              )}

              {/* Packaging Section */}
              {service.packaging && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-amber-100 rounded-lg">
                      <Package className="h-6 w-6 text-amber-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">{service.packaging.title}</h2>
                  </div>
                  {service.packaging.subTitle && ( <p className="text-gray-600 mb-6">{service.packaging.subTitle}</p> )}
                  <div className="bg-amber-50 rounded-2xl p-8">
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.packaging.list?.map((item: string, i: number) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
            <QuoteForm/>
            </div>
          </div>

          {/* CTA Section */}
          {service.cta && (
            <div className="bg-linear-to-r from-secondary to-pink-500 rounded-2xl md:m-10 md:mx-28 p-10 text-white text-center ">
              <h2 className="text-3xl font-bold mb-4">{service.cta.title}</h2>
              {service.cta.question && ( <p className="text-md mb-3">{service.cta.question}</p>)}
              {service.cta.answer && (<p className="text-md mb-6">{service.cta.answer}</p>)}
              {service.cta.note && ( <p className="text-md font-medium">{service.cta.note}</p>)}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Request a Quote
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Call Now
                </button>
              </div>
            </div>
          )}
        </Container>
      </section>
  )
}

export default ServiceDetailMain