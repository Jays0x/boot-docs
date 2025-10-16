"use client";

import React from "react";
import SidebarRight from "@/components/SidebarRight";
import AddTemplateCommandPage from "@/components/template/Add";

export default function Page() {
    // Sidebar sections for the add template Command (boot add-template <name> <cmd>) page 
const pageSections = [
  "Overview",
  "Command Syntax",
  "Example Use Cases",
  "Example Output",
  "Notes & Tips",
  "Next Steps",
];

  return (
   <div className="flex gap-8 pt-14 pl-20 min-h-screen text-white w-full">
      {/* Main content area */}
      <main className="w-full max-w-[700px] pb-10">
        <AddTemplateCommandPage />
      </main>

      {/* Right sidebar */}
      <aside className="w-full justify-end pl-10 hidden md:flex max-w-[320px]">
          <SidebarRight sections={pageSections} />
      </aside>
    </div>
  );
}
