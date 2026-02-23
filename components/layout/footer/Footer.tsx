import * as React from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { mockData } from "@/mockData";
import Container from "@/components/custom/Container";
import { Mail, MapPin, Phone } from "lucide-react";

/* ---------------------------------------------
   Types
--------------------------------------------- */

type TopBarInfo = {
  phone: string;
  email: string;
  address: string;
};

type MockData = {
  topBar: TopBarInfo;
};

/* ---------------------------------------------
   Component
--------------------------------------------- */

const Footer: React.FC = () => {
  const { topBar } = mockData as MockData;

  return (
    <footer className="bg-primary text-white py-12">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 grid-cols-3 gap-0.5 bg-secondary p-1.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="bg-white" />
                ))}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Garmen</h3>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Textile & Garment
                </p>
              </div>
            </div>

            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              Leading textile and garment industry providing quality materials
              and services worldwide.
            </p>

            <div className="flex items-center gap-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition-colors hover:bg-secondary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about" },
                { name: "Services", link: "/services" },
                { name: "Projects", link: "/project" },
                { name: "Contact", link: "/contact" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item?.link}
                    className="text-gray-400 transition-colors hover:text-secondary"
                  >
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Our Services</h4>
            <ul className="space-y-2">
              {[
              { name: "Garment Stitching", path: "/services/garment-stitching" },
              { name: "Custom Apparel", path: "/services/custom-apparel" },
              { name: "Fabric Printing", path: "/services/fabric-printing" },
              { name: "Fabric Dyeing", path: "/services/fabric-dyeing" },
              { name: "Satin Weaving", path: "/services/satin-weaving" },
              { name: "Linen Weaving", path: "/services/linen-weaving" },
            ].map((service,index) => (
                <li key={index}>
                  <Link
                    href={service?.path}
                    className="text-gray-400 transition-colors hover:text-secondary"
                  >
                    {service?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <FaPhoneAlt className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span>{topBar.phone}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <FaEnvelope className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span>{topBar.email}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span>{topBar.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 mt-4">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row pt-5">
            <p>© 2024 Garmen. All rights reserved.</p>
            <div className="flex gap-6">
              {[
                { name: "Privacy Policy", link: "/privacy" },
                { name: "Terms of Service", link: "/terms" },
                { name: "Cookie Policy", link: "/policy" },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="transition-colors hover:text-secondary"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
