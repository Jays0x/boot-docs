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
    <div className="font-sans flex bg-[#0F0F0F] text-white gap-8">
      {/* Main content area */}
      <main className="flex-1 px-20 pt-16 max-w-[900px] mx-auto">
        <LoginCommandPage />
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
