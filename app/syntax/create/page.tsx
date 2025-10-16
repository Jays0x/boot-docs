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
    <div className="font-sans flex bg-[#0F0F0F] text-white gap-8">
      {/* Main content area */}
      <main className="flex-1 px-20 pt-16 max-w-[900px] mx-auto">
        <CreateCommandsPage />
      </main>

      {/* Right sidebar */}
      <aside className="hidden lg:block w-[300px]">
        <div className="sticky top-20">
          <SidebarRight sections={pageSections} />
        </div>
      </aside>
    </div>
  );
}
