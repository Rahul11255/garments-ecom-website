"use client";
import Link from "next/link";
import Container from "./Container";

type Props = {
  title: string;
  description?: string;
};

const MainPageBreadCrumb = ({ title, description }: Props) => {
  return (
    <section className="relative py-8 md:py-16 bg-primary overflow-hidden">
      <div className="absolute -top-20 -right-20  size-44 md:size-80 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20  size-44 md:size-80 rounded-full bg-secondary/20 blur-3xl" />

      <Container>
        <div className="relative text-center text-white">
          <div className="mb-4 flex items-center justify-center gap-2 text-sm">
            <Link
              href="/"
              className="text-gray-300 hover:text-secondary transition"
            >
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-secondary font-medium">
              {title}
            </span>
          </div>

          <h1 className="mb-3 md:mb-5 text-2xl md:text-4xl lg:text-5xl font-bold">
            {title}
          </h1>

          <p className="mx-auto max-w-3xl text-[15px] md:text-base text-gray-300 leading-relaxed">
            {description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default MainPageBreadCrumb;
