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
    <div className="font-sans flex bg-[#0F0F0F] text-white gap-8">
      {/* Main content area */}
      <main className="flex-1 px-20 pt-16 max-w-[900px] mx-auto">
        <RemoveCommandsPage />
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
