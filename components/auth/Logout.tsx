
"use client";

import React from "react";
import { CodeBlockTabs } from "../CodeBlock";
import Badge from "../ui/Badge";

export default function LogoutCommandPage() {
  return (
    <div className="font-sans mt-12 w-[700px] space-y-12">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Logout Command</h1>
      <div className="text-white/70 mb-4">
        The <Badge label="boot logout" /> command disconnects your Boot CLI from the currently
        authenticated GitHub account. Use this when you want to switch accounts or secure your
        environment.
      </div>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <div className="text-white/70">
          Logging out removes authentication tokens stored locally, preventing any further
          synchronization with your GitHub account until you log in again.
        </div>
      </section>

      {/* Command Syntax */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Command Syntax</h2>
        <div className="text-white/70">
          Simply run:
        </div>

        <CodeBlockTabs singleCode={`boot logout`} type="bash" />

        <div className="text-white/70">
          This will immediately log you out and invalidate any local session.
        </div>
      </section>

      {/* Example Use Cases */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example Use Cases</h2>
        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>Switching to a different GitHub account for syncing commands.</li>
          <li>Logging out on a shared or public machine to secure your data.</li>
          <li>Resetting authentication if experiencing sync errors.</li>
        </ul>
      </section>

      {/* Example Output */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example Output</h2>
        <CodeBlockTabs
          singleCode={`$ boot logout
✔ Logging out...
✔ Successfully logged out from GitHub.`}
          type="bash"
        />
      </section>

      {/* Logout Flags */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Logout Flags</h2>
        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li><Badge label="--verbose" /> - Displays detailed logout steps.</li>
          <li><Badge label="--force" /> - Forces logout and clears cached credentials.</li>
        </ul>
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <div className="text-white/70">
          After logging out, you can:
        </div>

        <ul className="list-decimal list-inside text-white/70 space-y-2">
          <li>Log in again with a different GitHub account using <Badge label="boot login" />.</li>
          <li>Verify your logout state by attempting a sync; it should prompt for authentication.</li>
          <li>Continue using local commands; they remain unaffected.</li>
        </ul>
      </section>
    </div>
  );
}
