"use client";

import { SearchIcon, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

function CommandCenter() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Toggle with keyboard shortcut: ⌘ + S (or Ctrl + S)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const actions = [
    { title: "Open Dashboard", shortcut: "D" },
    { title: "Create New Project", shortcut: "N" },
    { title: "View Notifications", shortcut: "V" },
    { title: "Settings", shortcut: "," },
  ];

  const filtered = actions.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Search bar trigger */}
      <div
        className="flex justify-between items-center p-2 bg-[#181818] rounded-[10px] w-[500px] h-[35px] border border-white/10 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="flex gap-3 items-center text-[#ffffff50]">
          <SearchIcon size={16} />
          <span className="text-sm text-[#ffffff30]">Search...</span>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-[#2C2C2C] py-1 px-2 rounded-[5px] flex items-center justify-center">
            <Image src='command.svg' alt="command" width={14} height={14}  />
          </div>
          <div className="bg-[#2C2C2C] py-1 px-3 rounded-[5px] text-[#FFFFFF70] w-[22px] h-[22px] text-[14px] flex items-center justify-center">
            S
          </div>
        </div>
      </div>

      {/* Command Center Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-transparent backdrop-blur-sm flex justify-center items-center z-50"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#181818] border border-white/10 rounded-xl p-4 w-[500px]"
            >
              {/* Header / Search input */}
              <div className="flex items-center gap-3 border-b border-white/10 pb-2 mb-3">
                <SearchIcon size={18} />
                <input
                  type="text"
                  autoFocus
                  placeholder="Type a command..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="bg-transparent outline-none text-white w-full"
                />
                <X
                  size={16}
                  className="cursor-pointer text-gray-400 hover:text-white"
                  onClick={() => setOpen(false)}
                />
              </div>

              {/* Command List */}
              <div className="flex flex-col gap-2">
                {filtered.length > 0 ? (
                  filtered.map((a, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center px-3 py-2 rounded-md hover:bg-[#2C2C2C] cursor-pointer"
                    >
                      <span className="text-sm text-gray-200">{a.title}</span>
                      <span className="text-xs text-gray-400 bg-[#2C2C2C] px-2 py-[2px] rounded">
                        {a.shortcut}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm text-center py-4">
                    No results found.
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default CommandCenter;
