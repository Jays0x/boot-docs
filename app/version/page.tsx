"use client";

import React from "react";
import SidebarRight from "@/components/SidebarRight";
import VersionPage from "@/components/version/Version";

export default function Page() {
  // Sidebar sections for Version documentation
  const pageSections = [
    "Check Current Version",
    "Upgrade Boot CLI",
    "Rollback to Previous Version",
    "View Version History",
    "Using Beta Releases",
    "Next Steps",
  ];

  return (
    <div className="font-sans flex bg-[#0F0F0F] text-white gap-8">
      {/* Main content area */}
      <main className="flex-1 px-20 pt-16 max-w-[900px] mx-auto">
        <VersionPage />
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
