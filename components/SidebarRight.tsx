"use client";

import React from "react";

interface SidebarRightProps {
  sections?: string[]; // Make it dynamic (optional prop)
}

export default function SidebarRight({
  sections = ["Install via npm", "Install via yarn", "Verify Installation"], // Default data
}: SidebarRightProps) {
  return (
    <aside className="h-[100vh] mr-20 text-sm overflow-y-auto mt-14 sticky top-[70px] pt-4 hidden md:block w-full">
      {/* Heading */}
      <div className="text-[#8f8f8f] mb-4 font-semibold uppercase tracking-wide text-xs">
        On this page
      </div>

      {/* Timeline */}
      <ul className="relative ml-4 border-l border-[#2c2c2c] space-y-6">
        {sections.map((section, index) => (
          <li key={section} className="relative pl-6 group">
            {/* Diamond Dot */}
            <span
              className="absolute -left-[6.5px] top-[3px] w-2.5 h-2.5 border-[1.5px] bg-[#0F0F0F] border-white/20 rotate-45 "
            />

            {/* Line connecting items (except last) */}
            {index !== sections.length - 1 && (
              <span className="absolute left-[2px] top-[14px] w-[1px] h-[calc(100%-10px)] bg-[#2c2c2c]" />
            )}

            {/* Section Text */}
            <span className="text-[#9e9e9e] group-hover:text-white cursor-pointer transition-colors">
              {section}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
