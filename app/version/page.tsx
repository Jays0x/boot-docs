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
   <div className="flex gap-8 pt-14 pl-20 min-h-screen text-white w-full">
      {/* Main content area */}
      <main className="w-full max-w-[700px] pb-10">
        <VersionPage />
      </main>

      {/* Right sidebar */}
      <aside className="w-full justify-end pl-10 hidden md:flex max-w-[320px]">
          <SidebarRight sections={pageSections} />
      </aside>
    </div>
  );
}
