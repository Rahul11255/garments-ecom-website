import * as React from "react"
import { ArrowLeft, Calendar, User, Tag, Facebook, Twitter, Linkedin} from "lucide-react"
import Link from "next/link"

/* ---------------------------------------------
   Component
--------------------------------------------- */

const SinglePost: React.FC = () => {
  return ( 
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-800 py-20">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-rose-400 hover:text-rose-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Blog</span>
          </Link>

          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-bold text-white">
              Various Types and Classes of Seams Used in Sewing
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>February 10, 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>By John Anderson</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="h-5 w-5" />
                <span>Textile Tips</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <img
              src="https://images.unsplash.com/photo-1556906918-cb269c083f41?w=1200&q=80"
              alt="Blog Post"
              className="mb-12 h-[500px] w-full rounded-lg object-cover shadow-lg"
            />

            <div className="prose prose-lg max-w-none">
              <p className="mb-8 text-xl leading-relaxed text-gray-600">
                In the world of textile manufacturing and garment construction,
                understanding different types of seams is crucial for achieving
                quality results.
              </p>

              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                What is a Seam?
              </h2>
              <p className="mb-6 leading-relaxed text-gray-600">
                A seam is the joint where two or more pieces of fabric are stitched
                together. The type of seam used depends on several factors
                including the fabric type, garment purpose, and desired aesthetic.
              </p>

              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Common Types of Seams
              </h2>

              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                1. Plain Seam
              </h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                The most basic and commonly used seam type. Suitable for most
                fabrics and garment styles.
              </p>

              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                2. French Seam
              </h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                Encloses raw edges, ideal for lightweight or sheer fabrics, and
                provides a clean professional finish.
              </p>

              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                3. Flat-Felled Seam
              </h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                Known for strength and durability, commonly used in denim and
                workwear.
              </p>

              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                4. Overlocked Seam
              </h3>
              <p className="mb-8 leading-relaxed text-gray-600">
                Uses a serger to trim and finish seams simultaneously. Ideal for
                knit fabrics.
              </p>

              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Choosing the Right Seam
              </h2>
              <p className="mb-6 leading-relaxed text-gray-600">
                Selecting the appropriate seam depends on:
              </p>

              <ul className="mb-8 ml-4 list-inside list-disc space-y-2 text-gray-600">
                <li>Fabric weight and type</li>
                <li>Intended garment use</li>
                <li>Desired appearance</li>
                <li>Durability requirements</li>
                <li>Production cost and time</li>
              </ul>

              <p className="leading-relaxed text-gray-600">
                Choosing the right seam ensures quality, durability, and
                professional results in textile production.
              </p>
            </div>

            {/* Share Buttons */}
            <div className="mt-12 border-t pt-8">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Share this article
              </h3>
              <div className="flex gap-3">
                <a className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-700">
                  <Facebook className="h-6 w-6" />
                </a>
                <a className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white transition-colors hover:bg-sky-600">
                  <Twitter className="h-6 w-6" />
                </a>
                <a className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white transition-colors hover:bg-blue-800">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Related Articles
          </h2>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Link href="/single-post" key={i} className="group">
                <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        i === 1
                          ? "1558769132"
                          : i === 2
                          ? "1567401893414"
                          : "1556906918"
                      }-cb1aea1c8b6d?w=600&q=80`}
                      alt={`Related Post ${i}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-secondary">
                      Related Article Title {i}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      February {10 + i}, 2023
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SinglePost;
