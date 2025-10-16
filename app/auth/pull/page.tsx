"use client";

import React from "react";
import SidebarRight from "@/components/SidebarRight";
import PullCommandPage from "@/components/auth/Pull";

export default function Page() {
  // Sidebar sections for the Pull Command (boot sync --pull) page
     const pageSections = [
     "Overview",
     "Command Syntax",
     "Example Use Cases",
     "Automatic Authentication Flow",
     "Example Output",
     "How Pull Works",
     "Pull Flags",
     "Next Steps",
     ];

  return (
       <div className="flex gap-8 pt-14 pl-20 min-h-screen text-white w-full">
         {/* Main content area */}
         <main className="w-full max-w-[700px] pb-10">
           <PullCommandPage />
         </main>
   
         {/* Right sidebar */}
         <aside className="w-full justify-end pl-10 hidden md:flex max-w-[320px]">
             <SidebarRight sections={pageSections} />
         </aside>
       </div>
  );
}
