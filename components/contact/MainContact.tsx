"use client";

import * as React from "react";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { mockData } from "@/mockData";
import Container from "@/components/custom/Container";
import CustomButton from "@/components/custom/CustomButton";

/* ---------------------------------------------
   Types
--------------------------------------------- */

type TopBarInfo = {
  phone: string;
  email: string;
  address: string;
};

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type MockData = {
  topBar: TopBarInfo;
};

/* ---------------------------------------------
   Component
--------------------------------------------- */

const MainContact: React.FC = () => {
  const { topBar } = mockData as MockData;

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 return (
  <section className="bg-gray-50 py-8 md:py-16">
    <Container>
      {/* Contact Info Cards */}
      <div className="mb-10 md:mb-20 grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-4">
        {[
          { icon: Phone, title: "Phone", value: topBar.phone },
          { icon: Mail, title: "Email", value: topBar.email },
          { icon: MapPin, title: "Address", value: topBar.address },
          { icon: Clock, title: "Working Hours", value: "Mon–Fri: 9AM – 6PM" },
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group rounded-2xl bg-white p-5 md:p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-secondary/10 transition group-hover:bg-secondary">
                <Icon className="h-7 w-7 text-secondary group-hover:text-white transition" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-primary">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.value}</p>
            </div>
          );
        })}
      </div>

      {/* Contact Form & Map */}
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Form Card */}
        <div className="rounded-3xl bg-white md:p-10 p-5 shadow-lg">
          <h2 className="mb-2  text-primary">
            Send us a Message
          </h2>
          <p className="mb-8 text-gray-500">
            Fill out the form and our team will get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            {[
              { label: "Your Name *", name: "name", type: "text", placeholder: "John Doe", required: true },
              { label: "Your Email *", name: "email", type: "email", placeholder: "john@example.com", required: true },
              { label: "Phone Number", name: "phone", type: "tel", placeholder: "+1 234 567 8900" },
              { label: "Subject *", name: "subject", type: "text", placeholder: "How can we help?", required: true },
            ].map((field) => (
              <div key={field.name}>
                <label className="mb-1 md:mb-2 block text-sm font-medium text-primary">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name as keyof ContactFormData]}
                  onChange={handleChange}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm transition focus:border-secondary focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20"
                />
              </div>
            ))}

            <div>
              <label className="mb-2 block text-sm font-medium text-primary">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm transition focus:border-secondary focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
            </div>

            <CustomButton className="w-full rounded-xl py-3 text-sm font-semibold">
              SEND MESSAGE
            </CustomButton>
          </form>
        </div>

        {/* Map Section */}
        <div className="rounded-3xl bg-white p-5 md:p-6 shadow-lg">
          <h2 className=" md:mb-6 mb-4 text-primary">
            Visit Our Office
          </h2>

          <div className="flex h-[200px] md:h-[450px] items-center justify-center rounded-2xl bg-gray-100">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 md:size-14 size-10 text-secondary" />
              <p className="font-medium text-primary">Our Location</p>
              <p className="mt-2  text-gray-500">
                {topBar.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

};

export default MainContact;
