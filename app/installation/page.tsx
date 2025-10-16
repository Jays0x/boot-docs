"use client";

import React from "react";
import InstallationPage from "@/components/installation/installation-page";
import SidebarRight from "@/components/SidebarRight";

export default function Page() {
  const pageSections = [
    "Prerequisites",
    "Installation Methods",
    "Updating Boot",
    "First-Time Setup",
    "Enable GitHub Sync",
    "Verify Installation",
    "Next Steps",
  ];

  return (
    <div className="font-sans flex bg-[#0F0F0F] text-white gap-8">
      {/* Main content area */}
      <main className="flex-1 px-20 pt-16 max-w-[900px] mx-auto">
        <InstallationPage />
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
