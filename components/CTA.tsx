import React from "react";
import Container from "./custom/Container";
import CustomButton from "./custom/CustomButton";

const CTA: React.FC = () => {
  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <Container>
        <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-14 overflow-hidden">


          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center text-center md:text-left">

            {/* Left Content */}
            <div>
              <h2 className="leading-tight">
                Let’s Choose the Right Fabric for Your Production
              </h2>

              <p className="mt-4 md:mt-6 text-gray-600  leading-relaxed">
                From sourcing premium materials to bulk garment manufacturing,
                we help you achieve the perfect balance of quality,
                durability, and cost-efficiency.
              </p>

              <div className="mt-4 md:mt-8 flex justify-center md:justify-start">
                <CustomButton>
                  Start Consultation
                </CustomButton>
              </div>
            </div>

            {/* Right Side Info Block */}
            <div className="bg-gray-100 rounded-xl p-4 md:p-8 text-left mx-auto md:mx-0 max-w-md">
              <h4 className="text-lg font-semibold text-primary mb-4">
                Why Work With Us?
              </h4>

              <ul className="space-y-3 text-gray-600">
                <li>✔ Premium fabric sourcing</li>
                <li>✔ Custom garment production</li>
                <li>✔ Competitive bulk pricing</li>
                <li>✔ Reliable delivery timelines</li>
              </ul>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default CTA;
