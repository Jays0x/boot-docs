"use client";

import React from "react";
import SidebarRight from "@/components/SidebarRight";
import RemoveCommandsPage from "@/components/syntax/Remove";

export default function Page() {
  // Sidebar sections for the Remove Commands page
  const pageSections = [
    "Overview",
    "Remove a Saved Command",
    "Remove by Name or ID",
    "Bulk Remove Commands",
    "Confirm Before Deleting",
    "Remove GitHub Synced Commands",
    "Example Output",
    "Next Steps",
  ];

  return (
    <div className="flex gap-8 pt-14 pl-20 min-h-screen text-white w-full">
      {/* Main content area */}
      <main className="w-full max-w-[700px] pb-10">
        <RemoveCommandsPage />
      </main>

      {/* Right sidebar */}
      <aside className="w-full justify-end pl-10 hidden md:flex max-w-[320px]">
          <SidebarRight sections={pageSections} />
      </aside>
    </div>
  );
}
