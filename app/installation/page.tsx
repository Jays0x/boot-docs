"use client";

import React from "react";
import InstallationPage from "@/components/installation/installation-page";
import SidebarRight from "@/components/SidebarRight";

export default function Page() {
  // Define the sections dynamically for the right sidebar
  const pageSections = [
    "Install via npm",
    "Install via yarn",
    "Verify Installation",
    "Configuration Tips",
  ];

  return (
    <div className="font-sans flex min-h-screen bg-[#0f0f0f] text-white gap-3">
      {/* Main content area */}
      <main className="flex-1 px-8 pt-15 ">
        <InstallationPage />
      </main>

      {/* Right sidebar */}
      <div className="fixed right-50 top-0 pt-5"><SidebarRight sections={pageSections} /></div>
    </div>
  );
}
