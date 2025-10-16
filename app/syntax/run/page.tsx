"use client";

import React from "react";
import SidebarRight from "@/components/SidebarRight";
import RunCommandsPage from "@/components/syntax/Run";

export default function Page() {
  // Sidebar sections for the Run Commands page
  const pageSections = [
    "Overview",
    "Run a Saved Command",
    "Running Commands with Arguments",
    "Interactive Mode",
    "Run Multiple Commands",
    "Running Synced Commands",
    "Example Output",
    "Tips for Using Run",
  ];
  return (
    <div className="font-sans flex bg-[#0F0F0F] text-white gap-8">
      {/* Main content area */}
      <main className="flex-1 px-20 pt-16 max-w-[900px] mx-auto">
        <RunCommandsPage />
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
