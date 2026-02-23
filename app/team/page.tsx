import * as React from "react"
import { Linkedin, Mail, Phone } from "lucide-react"
import MainPageBreadCrumb from "@/components/custom/MainPageBreadCrumb"
import Container from "@/components/custom/Container"
import CustomButton from "@/components/custom/CustomButton"

/* ---------------------------------------------
   Types
--------------------------------------------- */

type TeamMember = {
  name: string
  role: string
  image: string
  bio: string
}

/* ---------------------------------------------
   Component
--------------------------------------------- */

const Team: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: "John Anderson",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      bio: "With over 20 years in the textile industry, John leads our vision for quality and innovation.",
    },
    {
      name: "Sarah Mitchell",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      bio: "Sarah ensures smooth operations and maintains our high standards of production quality.",
    },
    {
      name: "Michael Chen",
      role: "Chief Technical Officer",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
      bio: "Michael drives our technological advancement and innovation in textile manufacturing.",
    },
    {
      name: "Emily Rodriguez",
      role: "Sales Director",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      bio: "Emily leads our sales team and builds strong relationships with clients worldwide.",
    },
    {
      name: "David Park",
      role: "Quality Assurance Manager",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      bio: "David ensures every product meets our rigorous quality standards before delivery.",
    },
    {
      name: "Lisa Thompson",
      role: "Design Director",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
      bio: "Lisa brings creative vision to our textile designs and color development.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <MainPageBreadCrumb title="Our Team" description="Meet the experts behind Garmen's success. Our talented team is dedicated to delivering excellence." />
      

      {/* Team Grid */}
      <section className="bg-white py-8 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-5 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
                  <div className="relative h-60 md:h-80 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 to-transparent pb-6 opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="flex gap-3">
                        <a className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 transition-colors hover:bg-secondary hover:text-white">
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 transition-colors hover:bg-secondary hover:text-white">
                          <Mail className="h-5 w-5" />
                        </a>
                        <a className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 transition-colors hover:bg-secondary hover:text-white">
                          <Phone className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="mb-3 font-semibold text-secondary">
                      {member.role}
                    </p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Join Team CTA */}
      <section className="bg-gray-50 md:py-16 py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              Join Our Team
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              We&apos;re always looking for talented individuals to join our
              growing team. If you&apos;re passionate about textiles and quality,
              we&apos;d love to hear from you.
            </p>
            <CustomButton>
              View Open Positions
            </CustomButton>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team;