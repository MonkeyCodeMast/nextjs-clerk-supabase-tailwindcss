// agentia/src/app/home/pages.tsx

import Link from 'next/link';
import React from "react";

export default function HomePage() {
  return (
    <div className="container mx-auto">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold leading-tight">
          Blog is publically available
        </h1>
        <p className="text-gray-600 text-lg mt-4">
          #BeyondTrainingData #ContextIsAllYouNeed
        </p>
        <Link href="/learn-more" className="mt-8 inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition duration-300">
            Learn More
        </Link>
      </header>
      <main className="py-6">
        <p className="text-gray-600 text-base px-4">
            Blog is publically available</p>
      </main>
      <footer className="text-center py-4">
        {/* Footer content here */}
      </footer>
    </div>
  );
}
