"use client";

import React from "react";
import SidebarRight from "@/components/SidebarRight";
import IntroductionPage from "@/components/introduction/Introduction";
import { Analytics } from "@vercel/analytics/next";

export default function Page() {
  // Define the sections dynamically for the right sidebar
  const pageSections = [
    "Introduction",
    "What Is Boot?",
    "Why Boot?",
    "Key Features",
    "Example Use Cases",
    "Next Steps",
  ];

  return (
    <div className="flex gap-8 pt-14 pl-20 min-h-screen text-white w-full">
      <Analytics />
      {/* Main content area */}
      <main className="w-full max-w-[700px] pb-10">
        <IntroductionPage />
      </main>

      {/* Right sidebar */}
      <aside className="w-full justify-end pl-10 hidden md:flex max-w-[320px]">
          <SidebarRight sections={pageSections} />
      </aside>
    </div>
  );
}
