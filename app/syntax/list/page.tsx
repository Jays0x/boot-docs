"use client";

import React from "react";
import SidebarRight from "@/components/SidebarRight";
import ListCommandsPage from "@/components/syntax/List";

export default function Page() {
  // Sidebar sections for the List Commands page
  const pageSections = [
    "Overview",
    "List Saved Commands",
    "Display Details",
    "Filtering Commands",
    "GitHub Synced Commands",
    "Example Output",
    "Next Steps",
  ];

  return (
<div className="flex gap-8 pt-14 pl-20 min-h-screen text-white w-full">
      {/* Main content area */}
      <main className="w-full max-w-[700px] pb-10">
        <ListCommandsPage />
      </main>

      {/* Right sidebar */}
      <aside className="w-full justify-end pl-10 hidden md:flex max-w-[320px]">
          <SidebarRight sections={pageSections} />
      </aside>
    </div>
  );
}
