import React from "react";
import { mockData } from "@/mockData";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Container from "@/components/custom/Container";

interface TopBarData {
  phone: string;
  email: string;
  address: string;
}

const TopHeader: React.FC = () => {
  const { topBar } = mockData as { topBar: TopBarData };

  const socialIcons = [
    { icon: FaFacebookF, link: "#" },
    { icon: FaTwitter, link: "#" },
    { icon: FaInstagram, link: "#" },
    { icon: FaYoutube, link: "#" },
  ];

  return (
    <div className="hidden border-b border-gray-200 bg-gray-100 md:block">
      <Container>
        <div className="flex items-center justify-between py-2 text-sm">
          
          {/* Left Section */}
          <div className="flex items-center gap-6 text-primary">
            
            {/* Phone */}
            <a
              href={`tel:${topBar.phone}`}
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <FaPhoneAlt className="text-[18px]" />
              <span>{topBar.phone}</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${topBar.email}`}
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <FaEnvelope className="text-[18px]" />
              <span>{topBar.email}</span>
            </a>

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[18px]" />
              <span>{topBar.address}</span>
            </div>

          </div>

          <div className="flex items-center gap-2">
            {socialIcons.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-7.5 items-center justify-center rounded-full bg-rose-400 text-white hover:bg-secondary transition-colors"
                >
                  <Icon className="text-[16px]" />
                </a>
              );
            })}
          </div>

        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
