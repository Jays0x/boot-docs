"use client";

import React from "react";
import SidebarRight from "@/components/SidebarRight";
import CreateCommandsPage from "@/components/syntax/Create";

export default function Page() {
  // Sidebar section headings
  const pageSections = [
    "Overview",
    "Basic Usage",
    "Example: Next.js Project",
    "Example: Express API",
    "Example: NestJS Application",
    "Example: React Native App",
    "Optional Flags",
    "Full Example",
    "Interactive Setup",
    "Next Steps",
  ];

  return (
   <div className="flex gap-8 pt-14 pl-20 min-h-screen text-white w-full">
      {/* Main content area */}
      <main className="w-full max-w-[700px] pb-10">
        <CreateCommandsPage />
      </main>

      {/* Right sidebar */}
      <aside className="w-full justify-end pl-10 hidden md:flex max-w-[320px]">
          <SidebarRight sections={pageSections} />
      </aside>
    </div>
  );
}
