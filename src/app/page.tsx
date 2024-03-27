import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/Button/Button";
import { LP_GRID_ITEMS } from "lp-items";

import { Metadata } from "next"
import Link from 'next/link';


export default function Web() {
  return (
    <main>
      <div className="container mx-auto py-24 px-5 bg-gradient-to-t from-blue-other rounded-lg md:text-center flex flex-col items-start md:items-center text-blue" id="top">
        <h1 className="font-telegraf text-gray text-4xl md:text-6xl lg:text-8xl pb-12">Artificial Intelligence: Capable, Responsible, and Secure</h1>
        <p className="font-radioGrotesk text-gray pb-10 lg:w-1/2 text-xl">
          #BeyondTrainingData #ContextIsAllYouNeed
        </p>
        {/* Additional content here */}
        <Link href="#contact" className="text-blue-dark px-5 py-3 bg-blue-sky border hover:bg-white border-blue-sky rounded-full flex items-center gap-2 font-radioGroteskBold transition duration-300 ease-in-out">
          Learn More
          {/* SVG and other elements here */}
        </Link>
      </div>
      {/* More sections here */}
    </main>
  );
}
