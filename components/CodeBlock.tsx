"use client";

import React, { useState } from "react";
import { Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  type?: "cmd" | "bash" | "powershell" | "zsh" | "sh" | "shell" | "terminal" | "text" | "json";
}

interface TabCodeBlockProps {
  codes?: {
    npm?: string;
    yarn?: string;
    bun?: string;
    pnpm?: string;
  };
  enabledTabs?: {
    npm?: boolean;
    yarn?: boolean;
    bun?: boolean;
    pnpm?: boolean;
  };
  singleCode?: string; // Allow direct string if tabs are not needed
  type?: CodeBlockProps["type"];
}

const syntaxColors = {
  command: "#E56C79",
  action: "#B392F0",
  flag: "#ffffff70",
  value: "#65FFA3",
};

// -------------------- Single CodeBlock --------------------
export function CodeBlock({ code, type }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightSyntax = (text: string) => {
    text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const pattern = /("[^"]*"|@[a-zA-Z0-9/_-]+|\S+)/g;
    return text.replace(pattern, (token) => {
      if (/^".*"$/.test(token)) return `<span style="color:${syntaxColors.value}">${token}</span>`;
      if (/^@[\w\-./]+$/.test(token)) return `<span style="color:${syntaxColors.value}">${token}</span>`;
      if (/^(boot|npm|yarn|bun|pnpm)$/.test(token)) return `<span style="color:${syntaxColors.command}">${token}</span>`;
      if (/^(save|install|create|run|remove|add)$/.test(token)) return `<span style="color:${syntaxColors.action}">${token}</span>`;
      if (/^-{1,2}[a-zA-Z0-9-]+$/.test(token)) return `<span style="color:${syntaxColors.flag}">${token}</span>`;
      return token;
    });
  };

  return (
    <div className="relative bg-[#0F0F0F] border border-white/10 rounded-lg font-mono text-sm">
      <div className="bg-[#181818] px-3 py-2 rounded-t-[10px] border-b border-white/10 flex justify-between items-center">
        <p>{type}</p>
        <div
          className="bg-[#2C2C2C] flex items-center justify-center w-[25px] h-[25px] rounded-[5px] cursor-pointer hover:bg-[#3C3C3C]"
          onClick={handleCopy}
        >
          <Copy size={14} />
        </div>
      </div>
      <pre className="p-4 overflow-auto h-[calc(100%-42px)] leading-6">
        <code className="whitespace-pre-wrap break-words" dangerouslySetInnerHTML={{ __html: highlightSyntax(code) }} />
      </pre>
      {copied && (
        <div className="absolute top-2 right-10 bg-[#0f0f0f] text-white text-xs px-2 py-1 rounded">
          Copied!
        </div>
      )}
    </div>
  );
}

// -------------------- Tabbed or Single CodeBlock --------------------
export function CodeBlockTabs({ codes = {}, enabledTabs = {}, singleCode, type }: TabCodeBlockProps) {
  const managers: (keyof typeof codes)[] = ["npm", "yarn", "bun", "pnpm"];
  const filteredManagers = managers.filter((manager) => enabledTabs[manager] && codes[manager]);
  const [active, setActive] = useState(filteredManagers[0] || "");

  // Single code block mode
  if (singleCode) return <CodeBlock code={singleCode} type={type} />;

  if (!filteredManagers.length) return null;

  return (
    <div className="space-y-4">
      {/* Tabs */}
      <div className="flex gap-2 mb-2">
        {filteredManagers.map((manager) => (
          <button
            key={manager}
            className={`px-3 py-1 rounded-t-lg border border-white/10 ${
              active === manager
                ? "bg-[#181818] text-white font-medium"
                : "bg-[#0F0F0F] text-white/50 hover:text-white"
            }`}
            onClick={() => setActive(manager)}
          >
            {manager}
          </button>
        ))}
      </div>

      {/* Active CodeBlock */}
      <CodeBlock
        code={codes[active] || ""}
        type={active as CodeBlockProps["type"]}
      />
    </div>
  );
}
