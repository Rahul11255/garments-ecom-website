import * as React from "react"
import { mockData } from "@/mockData"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import MainPageBreadCrumb from "@/components/custom/MainPageBreadCrumb"
import Container from "@/components/custom/Container"
import CustomButton from "@/components/custom/CustomButton"


/* ---------------------------------------------
   Types
--------------------------------------------- */

type FAQItem = {
  question: string
  answer: string
}

type MockData = {
  faq: FAQItem[]
}

/* ---------------------------------------------
   Component
--------------------------------------------- */

const FAQ: React.FC = () => {
  const { faq } = mockData as MockData

  const additionalFaqs: FAQItem[] = [
    {
      question: "What is your minimum order quantity?",
      answer:
        "Our minimum order quantity varies depending on the fabric type and customization requirements. For standard fabrics, it starts from 500 meters, while custom orders may require a minimum of 1000 meters.",
    },
    {
      question: "How long does production take?",
      answer:
        "Standard production time is 4–6 weeks from order confirmation. Express services are available for urgent orders with additional fees. Timeline may vary based on order complexity and current production schedule.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to clients worldwide. We work with reliable shipping partners to ensure safe and timely delivery. Shipping costs and delivery times vary by destination.",
    },
    {
      question: "Can I request fabric samples before placing an order?",
      answer:
        "Absolutely! We encourage clients to request samples to ensure the fabric meets their requirements. Sample costs and shipping are minimal and can be credited toward your first order.",
    },
    {
      question: "What quality control measures do you have?",
      answer:
        "We implement rigorous quality control at every stage of production. This includes raw material inspection, in-process quality checks, color matching verification, and final inspection before packaging and shipping.",
    },
    {
      question: "Do you offer custom color matching?",
      answer:
        "Yes, we provide custom color matching services using advanced spectrophotometer technology. You can provide Pantone codes, fabric swatches, or physical samples for accurate color replication.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <MainPageBreadCrumb 
      title="Frequently Asked Questions" 
      description="Find answers to common questions about our services, processes, and policies."
       />


      {/* FAQ Sections */}
      <section className="bg-white py-8 md:py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            {/* General Questions */}
            <div className="mb-8 md:mb-12">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                General Questions
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                {faq.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`general-${index}`}
                    className="rounded-lg border bg-gray-50 px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold text-gray-900">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Order & Production */}
            <div className="mb-8 md:mb-12">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Order & Production
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                {additionalFaqs.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`order-${index}`}
                    className="rounded-lg border bg-gray-50 px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold text-gray-900">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Still Have Questions?
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <CustomButton>
              Contact Support
            </CustomButton>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ;
