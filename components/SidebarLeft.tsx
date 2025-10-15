"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { sidebarData } from "@/model/data/sidebarData";

export default function SidebarLeft() {
  const pathname = usePathname();

  return (
    <aside className="bg-[#0f0f0f] px-4 py-10 mt-16 text-sm overflow-y-auto flex flex-col items-center justify-start w-52 h-[calc(100vh-70px)]">
      {sidebarData.map((section) => (
        <div
          key={section.category}
          className="mb-6 flex flex-col items-start justify-start w-full text-left"
        >
          {/* Category Title */}
          <h3 className="text-[#FFFFFF80] font-semibold text-xs uppercase tracking-wide mb-2">
            {section.category}
          </h3>

          {/* Links */}
          <nav className="space-y-2 flex flex-col items-left w-full">
            {section.links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.title}
                  href={link.href}
                  className={`block px-3 py-1 w-full rounded-md transition-colors text-left ${
                    isActive
                      ? "bg-[#2C2C2C] text-white"
                      : "text-[#9e9e9e] hover:text-white"
                  }`}
                >
                  {link.title}
                </a>
              );
            })}
          </nav>
        </div>
      ))}
    </aside>
  );
}
