"use client";

import MainPageBreadCrumb from "@/components/custom/MainPageBreadCrumb";
import MainContact from "@/components/contact/MainContact";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <MainPageBreadCrumb
        title="Contact Us"
        description="Get in touch with us for any inquiries. We're here to help with your textile needs."
      />

      <MainContact />
    </div>
  );
};

export default Contact;
