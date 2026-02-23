import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { mockData } from "../mockData";
import Container from "./custom/Container";

/* -------------------- Types -------------------- */

type FAQItem = {
  question: string;
  answer: string;
};

/* -------------------- Component -------------------- */

const FAQ: React.FC = () => {
  const faqItems = mockData.faq as FAQItem[];

  return (
    <section className="py-8 md:py-14 bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
              FAQ
            </p>
            <h2 className=" mb-6 text-primary">
              Most Favorite Question
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Phasellus ultricies ex vitae neque placerat porta. Aenean libero
              eros nec ultrices vel tristique non, porta eget dolor. Donec vel
              ipsum imperdiet sed neque, sit amet porta facilisis elit. Nunc
              neque enim finibus.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item: FAQItem, index: number) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border rounded-lg px-6 cursor-pointer"
              >
                <AccordionTrigger className="text-left hover:no-underline cursor-pointer">
                  <span className="font-semibold text-primary">
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
      </Container>
    </section>
  );
};

export default FAQ;
