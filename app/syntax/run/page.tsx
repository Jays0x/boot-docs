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
   <div className="flex gap-8 pt-14 pl-20 min-h-screen text-white w-full">
      {/* Main content area */}
      <main className="w-full max-w-[700px] pb-10">
        <RunCommandsPage />
      </main>

      {/* Right sidebar */}
      <aside className="w-full justify-end pl-10 hidden md:flex max-w-[320px]">
          <SidebarRight sections={pageSections} />
      </aside>
    </div>
  );
}
