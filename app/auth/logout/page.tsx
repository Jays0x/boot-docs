"use client";

import React from "react";
import SidebarRight from "@/components/SidebarRight";
import LogoutCommandPage from "@/components/auth/Logout";

export default function Page() {
  // Sidebar sections for the logout Command (boot logout) page
const pageSections = [
  "Overview",
  "Command Syntax",
  "Example Use Cases",
  "Example Output",
  "Logout Flags",
  "Next Steps",
];

  return (
    <div className="font-sans flex bg-[#0F0F0F] text-white gap-8">
      {/* Main content area */}
      <main className="flex-1 px-20 pt-16 max-w-[900px] mx-auto">
        <LogoutCommandPage />
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
