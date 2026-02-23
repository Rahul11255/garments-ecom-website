import React from "react";
import Container from "../custom/Container";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProjectData } from "@/types/project";

// SectionTitle component with responsive spacing
const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="text-center mb-8 md:mb-12">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">{title}</h2>
    {subtitle && (
      <p className="text-sm md:text-base text-gray-600 mt-2 md:mt-3 max-w-2xl mx-auto px-4 md:px-0">
        {subtitle}
      </p>
    )}
  </div>
);

// Component Props Interface
interface ProjectDetailMainProps {
  data?: ProjectData;
}

const ProjectDetailMain: React.FC<ProjectDetailMainProps> = ({ data }) => {
  // Null check for data
  if (!data) {
    return (
      <div className="text-center py-12 md:py-20 px-4">
        <p className="text-gray-500">No project data available</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <section className="py-8 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* IMAGE */}
          <div className="order-2 md:order-1">
            <img
              src={data.hero?.imageSrc || "/fallback-image.png"}
              alt={data.name || "Project Image"}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              {data.hero?.title || data.name || "Project Title"}
            </h2>

            <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600">
              {data.hero?.description1 || "Description coming soon"}
            </p>
            <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-600">
              {data.hero?.description2 || ""}
            </p>

            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
              {data.hero?.buttons?.length ? (
                data.hero.buttons.map((button, index) => (
                  <button key={index} className={button.className}>
                    {button.text}
                  </button>
                ))
              ) : (
                <button className="bg-black text-white px-6 py-3 rounded-lg text-sm md:text-base">
                  Learn More
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      {data.capabilities && (
        <section className="py-12 md:py-24 px-4 md:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* SECTION HEADER */}
            <div className="max-w-3xl mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                {data.capabilities.title || "Our Capabilities"}
              </h2>
              <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-600">
                {data.capabilities.subtitle || "End-to-end solutions"}
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              {/* Handle both sections array and items array formats */}
              {data.capabilities.sections ? (
                data.capabilities.sections.map((section, idx) => (
                  <div key={idx} className={`grid lg:grid-cols-3 gap-6 md:gap-12 ${idx > 0 ? 'pt-6 md:pt-10' : ''}`}>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                        {section.title || "Section Title"}
                      </h3>
                    </div>

                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-x-12 md:gap-y-4">
                      {section.items?.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center group border-b pb-2 md:pb-3"
                        >
                          <p className="text-sm md:text-base text-gray-800 font-medium group-hover:text-black transition">
                            {item || "Item"}
                          </p>
                          <span className="text-gray-400 group-hover:text-black transition text-sm md:text-base">
                            →
                          </span>
                        </div>
                      ))}

                      {section.footer && (
                        <div className="sm:col-span-2 pt-2 md:pt-4">
                          <p className="text-sm md:text-base font-medium text-gray-900">
                            {section.footer}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : data.capabilities.items && (
                <div className="grid lg:grid-cols-3 gap-6 md:gap-12">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                      {data.capabilities.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-2">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-y-4 md:gap-x-12 text-gray-700">
                      {data.capabilities.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 md:gap-3">
                          <span className="mt-1 flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-900 text-white text-xs">
                            ✓
                          </span>
                          <span className="text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                    {data.capabilities.footer && (
                      <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600">{data.capabilities.footer}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* PRINTING & BRANDING */}
      {data.printingBranding && (
        <section className="py-12 md:py-16 px-4 md:px-6 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <SectionTitle title={data.printingBranding.title || "Printing & Branding Options"} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              {data.printingBranding.sections?.map((section, idx) => (
                <div key={idx} className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                  <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">{section.title || "Section"}</h3>
                  <ul className="space-y-2 md:space-y-4 text-gray-700">
                    {section.items?.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 md:gap-3">
                        <span className="mt-1 flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-900 text-white text-xs">
                          ✓
                        </span>
                        <span className="text-sm md:text-base">{item || "Item"}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* QUALITY ASSURANCE SECTION */}
      {data.qualityAssurance && (
        <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6 md:gap-12">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {data.qualityAssurance.title || "Quality Assurance"}
                </h3>
                {data.qualityAssurance.description && (
                  <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-600">{data.qualityAssurance.description}</p>
                )}
              </div>

              <div className="lg:col-span-2">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-y-4 md:gap-x-12 text-gray-700">
                  {data.qualityAssurance.items?.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3">
                      <span className="mt-1 flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-900 text-white text-xs">
                        ✓
                      </span>
                      <span className="text-sm md:text-base">{item || "Item"}</span>
                    </li>
                  ))}
                </ul>

                {data.qualityAssurance.footer && (
                  <p className="mt-6 md:mt-8 text-sm md:text-base font-medium text-gray-900">
                    {data.qualityAssurance.footer}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PRIVATE LABEL & BRANDING */}
      {data.privateLabel && (
        <Container className="py-12 md:py-16">
          {/* Private Label Title and Description */}
          {data.privateLabel.title && (
            <div className="mb-8 md:mb-12 px-4 md:px-0">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                {data.privateLabel.title}
              </h2>
              {data.privateLabel.description && (
                <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-600 max-w-3xl">{data.privateLabel.description}</p>
              )}
            </div>
          )}

          {/* Private Label Control Section (You vs We) */}
          {data.privateLabel.control && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-16 px-4 md:px-0">
              <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">You Control:</h3>
                <ul className="space-y-2">
                  {data.privateLabel.control.you.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm md:text-base">
                      <span className="text-green-600">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">We Handle:</h3>
                <ul className="space-y-2">
                  {data.privateLabel.control.we.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm md:text-base">
                      <span className="text-green-600">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Private Label Sections */}
          {data.privateLabel.sections && (
            <div className="grid lg:grid-cols-3 gap-6 md:gap-12 px-4 md:px-0">
              {data.privateLabel.sections?.map((section, idx) => (
                <React.Fragment key={idx}>
                  <div>
                    <h3 className={`text-lg md:text-xl font-semibold ${section.primaryColor ? 'text-primary' : 'text-gray-900'}`}>
                      {section.title || "Section Title"}
                    </h3>
                    {section.description && (
                      <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-600">{section.description}</p>
                    )}
                  </div>

                  <div className="lg:col-span-2">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-y-4 md:gap-x-12 text-gray-700">
                      {section.items?.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 md:gap-3">
                          <span className={`mt-1 flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full ${section.primaryColor ? 'bg-primary' : 'bg-gray-900'} text-white text-xs`}>
                            ✓
                          </span>
                          <span className="text-sm md:text-base">{item || "Item"}</span>
                        </li>
                      ))}
                    </ul>

                    {section.footer && (
                      <p className={`mt-6 md:mt-8 text-sm md:text-base font-medium ${section.primaryColor ? 'text-primary' : 'text-gray-900'}`}>
                        {section.footer}
                      </p>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          )}

          {/* Private Label Items (if no sections) */}
          {data.privateLabel.items && !data.privateLabel.sections && (
            <div className="grid lg:grid-cols-3 gap-6 md:gap-12 px-4 md:px-0">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {data.privateLabel.title || "Private Label"}
                </h3>
              </div>
              <div className="lg:col-span-2">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-y-4 md:gap-x-12 text-gray-700">
                  {data.privateLabel.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3">
                      <span className="mt-1 flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-900 text-white text-xs">
                        ✓
                      </span>
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                {data.privateLabel.footer && (
                  <p className="mt-6 md:mt-8 text-sm md:text-base font-medium text-gray-900">{data.privateLabel.footer}</p>
                )}
              </div>
            </div>
          )}

          {/* Industries Section */}
          {data.privateLabel.industries && (
            <div className="grid lg:grid-cols-3 gap-6 md:gap-12 pt-12 md:pt-16 px-4 md:px-0">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {data.privateLabel.industries.title || "Industries We Serve"}
                </h3>
                {data.privateLabel.industries.description && (
                  <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-600">{data.privateLabel.industries.description}</p>
                )}
              </div>

              <div className="lg:col-span-2">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-y-4 md:gap-x-12 text-gray-700">
                  {data.privateLabel.industries.items?.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3">
                      <span className="mt-1 flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-900 text-white text-xs">
                        ✓
                      </span>
                      <span className="text-sm md:text-base">{item || "Item"}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Sustainable Manufacturing */}
          {data.privateLabel.sustainable && (
            <div className="grid lg:grid-cols-3 gap-6 md:gap-12 pt-12 md:pt-16 px-4 md:px-0">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {data.privateLabel.sustainable.title || "Sustainable Manufacturing"}
                </h3>
                {data.privateLabel.sustainable.description && (
                  <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-600">{data.privateLabel.sustainable.description}</p>
                )}
              </div>

              <div className="lg:col-span-2">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-y-4 md:gap-x-12 text-gray-700">
                  {data.privateLabel.sustainable.items?.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3">
                      <span className="mt-1 flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-900 text-white text-xs">
                        ✓
                      </span>
                      <span className="text-sm md:text-base">{item || "Item"}</span>
                    </li>
                  ))}
                </ul>
                {data.privateLabel.sustainable.footer && (
                  <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600">{data.privateLabel.sustainable.footer}</p>
                )}
              </div>
            </div>
          )}

          {/* Why Choose Garmen */}
          {data.privateLabel.whyChoose && (
            <div className="grid lg:grid-cols-3 gap-6 md:gap-12 pt-12 md:pt-16 px-4 md:px-0">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {data.privateLabel.whyChoose.title || "Why Choose Us?"}
                </h3>
              </div>

              <div className="lg:col-span-2">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-y-4 md:gap-x-12 text-gray-700">
                  {data.privateLabel.whyChoose.items?.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3">
                      <span className="mt-1 flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-900 text-white text-xs">
                        ✓
                      </span>
                      <span className="text-sm md:text-base">{item || "Item"}</span>
                    </li>
                  ))}
                </ul>

                {data.privateLabel.whyChoose.footer && (
                  <p className="mt-6 md:mt-8 text-sm md:text-base font-medium text-gray-900">
                    {data.privateLabel.whyChoose.footer}
                  </p>
                )}
              </div>
            </div>
          )}
        </Container>
      )}

      {/* PRODUCT DEVELOPMENT SECTION */}
      {data.productDevelopment && (
        <section className="py-12 md:py-16 px-4 md:px-6 bg-gray-50">
          <Container>
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                {data.productDevelopment.title}
              </h2>
              <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-600 max-w-3xl">{data.productDevelopment.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              {data.productDevelopment.sections?.map((section, idx) => (
                <div key={idx} className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                  <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">{section.title}</h3>
                  <ul className="space-y-2 md:space-y-3">
                    {section.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 md:gap-3">
                        <span className="mt-1 flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-900 text-white text-xs">
                          ✓
                        </span>
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* BRANDING SECTION */}
      {data.branding && (
        <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
          <Container>
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                {data.branding.title}
              </h2>
              <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-600 max-w-3xl">{data.branding.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {data.branding.sections?.map((section, idx) => (
                <div key={idx} className="bg-gray-50 p-5 md:p-6 rounded-xl">
                  <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">{section.title}</h3>
                  <ul className="space-y-1 md:space-y-2">
                    {section.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm md:text-base">
                        <span className="text-green-600">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {section.footer && (
                    <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-600 italic">{section.footer}</p>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CONFIDENTIALITY SECTION */}
      {data.confidentiality && (
        <section className="py-12 md:py-16 px-4 md:px-6 bg-gray-900 text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{data.confidentiality.title}</h2>
              <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8">{data.confidentiality.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-left">
                {data.confidentiality.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 md:gap-3">
                    <span className="mt-1 flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary text-white text-xs">
                      ✓
                    </span>
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 md:mt-8 text-sm md:text-base text-primary font-medium">{data.confidentiality.footer}</p>
            </div>
          </Container>
        </section>
      )}

      {/* PROCESS SECTION */}
      {data.process && (
        <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
          <Container>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">{data.process.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {data.process.steps.map((step, index) => (
                <div key={index} className="bg-gray-50 p-4 md:p-6 rounded-xl text-center">
                  <div className="text-xl md:text-2xl mb-1 md:mb-2">{step.split(' ')[0]}</div>
                  <p className="text-xs md:text-sm font-medium">{step.substring(step.indexOf(' ') + 1)}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-6 md:mt-8 text-sm md:text-base text-gray-600">{data.process.footer}</p>
          </Container>
        </section>
      )}

      {/* INDUSTRIES SECTION (Top Level) */}
      {data.industries && !data.privateLabel?.industries && (
        <section className="py-12 md:py-16 px-4 md:px-6 bg-gray-50">
          <Container>
            <div className="grid lg:grid-cols-3 gap-6 md:gap-12">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {data.industries.title || "Industries We Serve"}
                </h3>
                {data.industries.description && (
                  <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-600">{data.industries.description}</p>
                )}
              </div>
              <div className="lg:col-span-2">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-y-4 md:gap-x-12 text-gray-700">
                  {data.industries.items?.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3">
                      <span className="mt-1 flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-900 text-white text-xs">
                        ✓
                      </span>
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* SUSTAINABLE SECTION (Top Level) */}
      {data.sustainable && !data.privateLabel?.sustainable && (
        <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
          <Container>
            <div className="grid lg:grid-cols-3 gap-6 md:gap-12">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {data.sustainable.title || "Sustainable Manufacturing"}
                </h3>
                {data.sustainable.description && (
                  <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-600">{data.sustainable.description}</p>
                )}
              </div>
              <div className="lg:col-span-2">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-y-4 md:gap-x-12 text-gray-700">
                  {data.sustainable.items?.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3">
                      <span className="mt-1 flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-900 text-white text-xs">
                        ✓
                      </span>
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                {data.sustainable.footer && (
                  <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600">{data.sustainable.footer}</p>
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* WHY CHOOSE SECTION (Top Level) */}
      {data.whyChoose && !data.privateLabel?.whyChoose && (
        <section className="py-12 md:py-16 px-4 md:px-6 bg-gray-50">
          <Container>
            <div className="grid lg:grid-cols-3 gap-6 md:gap-12">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {data.whyChoose.title || "Why Choose Us?"}
                </h3>
              </div>
              <div className="lg:col-span-2">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-y-4 md:gap-x-12 text-gray-700">
                  {data.whyChoose.items?.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3">
                      <span className="mt-1 flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-900 text-white text-xs">
                        ✓
                      </span>
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                {data.whyChoose.footer && (
                  <p className="mt-6 md:mt-8 text-sm md:text-base font-medium text-gray-900">{data.whyChoose.footer}</p>
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* BULK CONTRACTS SECTION */}
      {data.bulkContracts && (
        <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
          <Container>
            <div className="grid lg:grid-cols-3 gap-6 md:gap-12">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {data.bulkContracts.title}
                </h3>
                {data.bulkContracts.description && (
                  <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-600">{data.bulkContracts.description}</p>
                )}
              </div>
              <div className="lg:col-span-2">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-y-4 md:gap-x-12 text-gray-700">
                  {data.bulkContracts.items?.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3">
                      <span className="mt-1 flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-900 text-white text-xs">
                        ✓
                      </span>
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                {data.bulkContracts.footer && (
                  <p className="mt-6 md:mt-8 text-sm md:text-base font-medium text-gray-900">{data.bulkContracts.footer}</p>
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* PRODUCTION CAPACITY */}
      {data.productionCapacity && (
        <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <SectionTitle title={data.productionCapacity.title || "Production Capacity"} />

            <div className="overflow-x-auto -mx-4 md:mx-0">
              <div className="inline-block min-w-full align-middle px-4 md:px-0">
                <table className="w-full border-2 border-black rounded-xl overflow-hidden border-collapse text-sm md:text-base">
                  <thead className="bg-black text-white">
                    <tr>
                      <th className="p-3 md:p-4 text-left border border-black">Order Type</th>
                      <th className="p-3 md:p-4 text-left border border-black">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.productionCapacity.tableData?.map((row) => (
                      <tr key={row.type}>
                        <td className="p-3 md:p-4 border border-black">{row.type || "Type"}</td>
                        <td className="p-3 md:p-4 border border-black">{row.quantity || "Quantity"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-center mt-4 md:mt-6 text-sm md:text-base text-gray-600">
              {data.productionCapacity.footer || "Production timeline varies by volume"}
            </p>
          </div>
        </section>
      )}

      {/* FAQ */}
      {data.faq && (
        <section className="py-8 md:py-12 px-4 md:px-6 bg-white">
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              {data.faq.title || "Frequently Asked Questions"}
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {data.faq.items?.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-left text-sm md:text-base">
                    {item.question || "Question"}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-muted-foreground">
                    {item.answer || "Answer"}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      {data.finalCta && (
        <section className="bg-black text-white py-12 md:py-20 px-4 md:px-6 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">{data.finalCta.title || "Start Your Project Today"}</h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            {data.finalCta.subtitle || "Let's turn your ideas into reality"}
          </p>
          <button className={data.finalCta.buttonClassName || "mt-6 md:mt-8 bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded-xl text-sm md:text-base font-medium hover:bg-gray-200 transition"}>
            {data.finalCta.buttonText || "Contact Us"}
          </button>
        </section>
      )}
    </div>
  );
};

export default ProjectDetailMain;