import * as React from "react"
import { Check } from "lucide-react"
import MainPageBreadCrumb from "@/components/custom/MainPageBreadCrumb"
import Container from "@/components/custom/Container"

/* ---------------------------------------------
   Types
--------------------------------------------- */

type PricingPlan = {
  name: string
  price: string
  period: string
  features: string[]
  popular: boolean
}

/* ---------------------------------------------
   Component
--------------------------------------------- */

const Pricing: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: "Basic",
      price: "$299",
      period: "per order",
      features: [
        "Up to 5,000 meters",
        "Standard fabric options",
        "Basic color matching",
        "Standard delivery time",
        "Email support",
        "Quality guarantee",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$799",
      period: "per order",
      features: [
        "Up to 20,000 meters",
        "Premium fabric options",
        "Advanced color matching",
        "Priority delivery",
        "Phone & email support",
        "Quality guarantee",
        "Free samples",
        "Dedicated account manager",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      features: [
        "Unlimited meters",
        "All fabric options",
        "Custom color development",
        "Express delivery",
        "24/7 priority support",
        "Extended warranty",
        "Free samples & revisions",
        "Dedicated team",
        "Custom solutions",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <MainPageBreadCrumb 
      title="Pricing Plans" 
      description="Transparent pricing for quality textile services. Choose the plan that fits your needs." />

      {/* Pricing Cards */}
      <section className="bg-gray-50 py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-lg bg-white shadow-lg ${
                  plan.popular
                    ? "ring-4 ring-secondary md:scale-105"
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="bg-secondary py-2 text-center text-sm font-semibold uppercase tracking-wider text-white">
                    Most Popular
                  </div>
                )}

                <div className=" p-5 md:p-8">
                  <h3 className="mb-2 text-2xl font-bold text-primary">
                    {plan.name}
                  </h3>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="ml-2 text-gray-500">
                      / {plan.period}
                    </span>
                  </div>

                  <ul className="mb-4 md:mb-8 space-y-3 md:space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full rounded py-3 text-sm font-semibold uppercase tracking-wider transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-rose-400 to-pink-400 text-white hover:from-secondary hover:to-pink-500"
                        : "bg-gray-100 text-primary hover:bg-gray-200"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-8 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-primary">
              Pricing FAQs
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-bold text-primary">
                  Do you offer custom pricing?
                </h3>
                <p className="text-gray-600">
                  Yes, for large orders or unique requirements, we offer custom
                  pricing tailored to your specific needs.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-bold text-primary">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600">
                  We accept bank transfers, credit cards, and for established
                  clients, we offer net payment terms.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-bold text-primary">
                  Are there any hidden fees?
                </h3>
                <p className="text-gray-600">
                  No, all our pricing is transparent. The quoted price includes
                  all standard services. Additional fees only apply for express
                  services if requested.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Pricing;
