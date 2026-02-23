"use client";

import * as React from "react";
import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { mockData } from "@/mockData";
import TopHeader from "./TopHeader";
import CustomButton from "@/components/custom/CustomButton";
import Container from "@/components/custom/Container";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

/* ---------------------------------------------
   Types
--------------------------------------------- */

type TopBarInfo = {
  phone: string;
  email: string;
  address: string;
};

type NavSubItem = {
  name: string;
  path: string;
  slug?: string;
};

type NavItem = {
  name: string;
  path: string;
  hasDropdown?: boolean;
  items?: NavSubItem[];
};

type MockData = {
  topBar: TopBarInfo;
  navigation: NavItem[];
};

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const { navigation } = mockData as MockData;

  return (
    <>
      <TopHeader />

      <header className="sticky top-0 z-50 bg-primary">
        <Container>
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="grid h-10 w-10 grid-cols-3 gap-0.5 bg-rose-400 p-1.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="bg-white" />
                ))}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Garmen</h1>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Textile & Garment
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.path}
                    className="flex items-center gap-1 py-3 text-white transition-colors duration-300 hover:text-rose-400"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                  </Link>

                  {item.hasDropdown && item.items && (
                    <div
                      className="
                        absolute left-1/2 -translate-x-1/2 top-full
                        min-w-[220px]
                        rounded-xl bg-white py-3 shadow-xl
                        opacity-0 translate-y-3 scale-95
                        pointer-events-none
                        transition-all duration-300 ease-out
                        group-hover:opacity-100
                        group-hover:translate-y-0
                        group-hover:scale-100
                        group-hover:pointer-events-auto
                      "
                    >
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.path}
                          className="
                            block px-3 py-1.5 text-sm text-primary
                            transition-all duration-200
                            border-l-[3px] border-transparent
                            hover:bg-rose-50 
                            hover:text-secondary
                            hover:border-secondary
                          "
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <CustomButton className="hidden lg:block">
              Make Project
            </CustomButton>

            {/* Mobile Sheet */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="text-white">
                    <Menu className="h-6 w-6" />
                  </button>
                </SheetTrigger>

                <SheetContent side="right" className="w-[300px] bg-primary border-none">
                  <div className="mt-6 space-y-4">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.name
                                ? null
                                : item.name
                            )
                          }
                          className="flex w-full items-center justify-between text-white py-2"
                        >
                          <span>{item.name}</span>
                          {item.hasDropdown && (
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-300 ${
                                activeDropdown === item.name
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          )}
                        </button>

                        {item.hasDropdown &&
                          activeDropdown === item.name &&
                          item.items && (
                            <div className="ml-4 mt-2 space-y-2">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.path}
                                  className="block text-gray-300 hover:text-rose-400 transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                      </div>
                    ))}

                    <CustomButton className="w-full mt-4">
                      Make Project
                    </CustomButton>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
