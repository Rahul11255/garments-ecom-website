import React from "react";
import { Calendar, MessageCircle } from "lucide-react";
import { mockData } from "../mockData";
import Container from "./custom/Container";

/* -------------------- Types -------------------- */

type BlogPost = {
  title: string;
  date: string;
  comments: number;
  excerpt: string;
  image: string;
};

/* -------------------- Component -------------------- */

const Blog: React.FC = () => {
  const blogPosts = mockData.blog as BlogPost[];

  return (
    <section className="py-8 md:py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            BLOG
          </p>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Blog & Articles
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nulla in nibh at leo faucibus molestie eget nec velit. Phasellus vel
            felis vel orci iaculis tempor tristique sagittis urna. Phasellus ac
            ante in lacus tempor egestas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post: BlogPost, index: number) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-secondary hover:text-rose-600 font-semibold uppercase text-sm">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blog;
