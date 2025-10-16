"use client";

import React from "react";
import SidebarRight from "@/components/SidebarRight";
import SaveCommandsPage from "@/components/syntax/Save";

export default function Page() {
  const pageSections = [
    "Overview",
    "Save a Command",
    "Example Variations",
    "Where Commands Are Stored",
    "Tips for Using Save",
    "Next Steps",
  ];


  return (
    <div className="font-sans flex bg-[#0F0F0F] text-white gap-8">
      {/* Main content area */}
      <main className="flex-1 px-20 pt-16 max-w-[900px] mx-auto">
        <SaveCommandsPage />
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
