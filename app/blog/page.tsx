import * as React from "react";
import { Calendar, MessageCircle, User } from "lucide-react";
import Link from "next/link";
import { mockData } from "@/mockData";
import MainPageBreadCrumb from "@/components/custom/MainPageBreadCrumb";
import Container from "@/components/custom/Container";

/* ---------------------------------------------
   Types
--------------------------------------------- */

type BlogPost = {
  title: string;
  image: string;
  date: string;
  excerpt: string;
  comments: number | string;
};

type MockData = {
  blog: BlogPost[];
};

/* ---------------------------------------------
   Component
--------------------------------------------- */

const Blog: React.FC = () => {
  const { blog } = mockData as MockData;
  const featuredPost = blog[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <MainPageBreadCrumb
        title="Blog & Articles"
        description="Stay updated with the latest news, insights, and trends in the textile industry."
      />

      {/* Featured Post */}
      {featuredPost && (
        <section className="bg-white py-6 md:py-12">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="overflow-hidden rounded-lg bg-gray-50 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="flex flex-col justify-center p-8">
                    <span className="mb-4 w-fit rounded bg-secondary px-3 py-1 text-xs font-semibold uppercase text-white">
                      Featured
                    </span>

                    <h2 className="mb-4 text-3xl font-bold text-gray-900">
                      {featuredPost.title}
                    </h2>

                    <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>By Admin</span>
                      </div>
                    </div>

                    <p className="mb-6 text-gray-600">{featuredPost.excerpt}</p>

                    <Link
                      href="/single-post"
                      className="text-sm font-semibold uppercase text-secondary hover:text-rose-600"
                    >
                      Read Full Article →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Blog Grid */}
      <section className="bg-gray-50 py-8 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blog.map((post, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-secondary">
                    {post.title}
                  </h3>

                  <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>

                  <p className="mb-4 text-gray-600">{post.excerpt}</p>

                  <Link
                    href="/single-post"
                    className="text-sm font-semibold uppercase text-secondary hover:text-rose-600"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            <button className="rounded border border-gray-300 bg-white px-4 py-2 hover:bg-gray-50">
              Previous
            </button>
            <button className="rounded bg-secondary px-4 py-2 text-white">
              1
            </button>
            <button className="rounded border border-gray-300 bg-white px-4 py-2 hover:bg-gray-50">
              2
            </button>
            <button className="rounded border border-gray-300 bg-white px-4 py-2 hover:bg-gray-50">
              3
            </button>
            <button className="rounded border border-gray-300 bg-white px-4 py-2 hover:bg-gray-50">
              Next
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Blog;
