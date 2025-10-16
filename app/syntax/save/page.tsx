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
   <div className="flex gap-8 pt-14 pl-20 min-h-screen text-white w-full">
      {/* Main content area */}
      <main className="w-full max-w-[700px] pb-10">
        <SaveCommandsPage />
      </main>

      {/* Right sidebar */}
      <aside className="w-full justify-end pl-10 hidden md:flex max-w-[320px]">
          <SidebarRight sections={pageSections} />
      </aside>
    </div>
  );
}
