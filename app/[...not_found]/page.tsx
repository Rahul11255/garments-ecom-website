import * as React from "react"
import { Home, Search } from "lucide-react"
import Link from "next/link"

/* ---------------------------------------------
   Component
--------------------------------------------- */

const NotFound: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-10">
      <div className="px-4 text-center">
        <div className="mb-8">
          <h1 className="mb-4 text-9xl font-bold text-secondary">404</h1>
          <div className="mx-auto mb-8 h-1 w-24 bg-secondary" />
        </div>

        <h2 className="mb-4 text-4xl font-bold text-gray-900">
          Page Not Found
        </h2>

        <p className="mx-auto mb-8 max-w-md text-xl text-gray-600">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might have
          been moved or deleted.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded bg-gradient-to-r from-rose-400 to-pink-400 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:from-secondary hover:to-pink-500"
          >
            <Home className="h-5 w-5" />
            Go to Homepage
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded bg-gray-200 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-gray-900 transition-all hover:bg-gray-300"
          >
            <Search className="h-5 w-5" />
            Contact Support
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="mx-auto mt-16 grid max-w-md grid-cols-3 gap-4 opacity-20">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="aspect-square rounded bg-rose-200" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NotFound;