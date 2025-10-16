"use client";

import React from "react";
import SidebarRight from "@/components/SidebarRight";
import LoginCommandPage from "@/components/auth/Login";

export default function Page() {
  // Sidebar sections for the Login Command page
  const pageSections = [
    "Overview",
    "Login Command Syntax",
    "Authenticate with GitHub",
    "Token Storage",
    "Handling Login Errors",
    "Logout Command",
    "Example Output",
    "Next Steps",
  ];

  return (
       <div className="flex gap-8 pt-14 pl-20 min-h-screen text-white w-full">
         {/* Main content area */}
         <main className="w-full max-w-[700px] pb-10">
           <LoginCommandPage />
         </main>
   
         {/* Right sidebar */}
         <aside className="w-full justify-end pl-10 hidden md:flex max-w-[320px]">
             <SidebarRight sections={pageSections} />
         </aside>
       </div>
  );
}
