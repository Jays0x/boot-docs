"use client";

import React from "react";
import { CodeBlockTabs } from "../CodeBlock";
import Badge from "../ui/Badge";

export default function PullCommandPage() {
  return (
    <div className="font-sans mt-12 w-[700px] space-y-12">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Sync (Pull) Commands</h1>
      <div className="text-white/70 mb-4">
        The <Badge label="boot sync --pull" /> command downloads your saved Boot commands from
        GitHub and updates your local setup. This ensures your aliases stay consistent across all
        your devices.
      </div>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <div className="text-white/70">
          When you run <Badge label="boot sync --pull" />, Boot connects to your GitHub account,
          checks for available cloud-stored commands, and downloads them into your local environment.
          This makes it easy to restore your aliases after reinstalling Boot or setting up on a new machine.
        </div>
      </section>

      {/* Command Syntax */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Command Syntax</h2>
        <div className="text-white/70">
          Use the following syntax to pull your saved commands from the cloud:
        </div>

        <CodeBlockTabs singleCode={`boot sync --pull`} type="bash" />

        <div className="text-white/70">
          This command requires authentication. If you&apos;re not logged in, Boot will automatically
          prompt you to authenticate and then continue pulling your commands once verified.
        </div>
      </section>

      {/* Example Use Cases */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example Use Cases</h2>
        <div className="text-white/70">
          You might use <Badge label="boot sync --pull" /> in the following cases:
        </div>

        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>When setting up Boot on a new machine and want to restore your saved commands.</li>
          <li>After reinstalling your OS and needing to reload your Boot environment.</li>
          <li>When syncing updated commands from another device.</li>
        </ul>

        {/* Basic Pull Example */}
        <div className="space-y-2">
          <div className="text-white/70 font-medium">Basic Pull Example:</div>
          <CodeBlockTabs singleCode={`boot sync --pull`} type="bash" />
        </div>

        {/* Force Pull Example */}
        <div className="space-y-2">
          <div className="text-white/70 font-medium">Force Pull Example (overwrite local changes):</div>
          <CodeBlockTabs singleCode={`boot sync --pull --force`} type="bash" />
        </div>
      </section>

      {/* Automatic Authentication Flow */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Automatic Authentication Flow</h2>
        <div className="text-white/70">
          Boot automatically checks for authentication before pulling commands. If you&apos;re not logged in,
          it will prompt you to log in and then resume pulling immediately after authentication.
        </div>

        <CodeBlockTabs
          singleCode={`$ boot sync --pull
✖ You are not logged in.
→ Redirecting to authentication...

✔ Authentication successful!
✔ Fetching cloud commands...
✔ Found 5 new commands
✔ Updating local setup...
✔ Sync complete! 5 commands pulled successfully`}
          type="bash"
        />

        <div className="text-white/70">
          This seamless process ensures your pull operation continues without restarting the command manually.
        </div>
      </section>

      {/* Example Output */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example Output</h2>
        <CodeBlockTabs
          singleCode={`$ boot sync --pull
✔ Connecting to GitHub...
✔ Found 5 commands to update
✔ Pulling changes...
✔ Sync complete! Local commands are now up to date.`}
          type="bash"
        />
      </section>

      {/* How Pull Works */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Pull Works</h2>
        <div className="text-white/70">
          Boot compares your cloud-stored command data with your local <code className="text-gray-400">commands.json</code>.
          Only new or modified commands are pulled by default. You can use the <Badge label="--force" /> flag to
          overwrite all local commands with your GitHub version.
        </div>

        <CodeBlockTabs
          singleCode={`{
  "commands": [
    { "alias": "dev", "cmd": "npm run dev" },
    { "alias": "start", "cmd": "node server.js" }
  ],
  "lastPulled": "2025-10-15T10:00:00Z"
}`}
          type="json"
        />
      </section>

      {/* Pull Flags */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Pull Flags</h2>
        <div className="text-white/70">
          You can customize the pull operation with optional flags:
        </div>

        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li><Badge label="--force" /> - Overwrites local commands with cloud versions.</li>
          <li><Badge label="--verbose" /> - Displays detailed pull progress and file comparisons.</li>
          <li><Badge label="--dry-run" /> - Shows what would be pulled without making changes.</li>
        </ul>
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <div className="text-white/70">
          After pulling your commands, you can:
        </div>

        <ul className="list-decimal list-inside text-white/70 space-y-2">
          <li>Push updates back to GitHub with <Badge label="boot sync --push" />.</li>
          {/* <li>Check your current sync state using <Badge label="boot sync --status" />.</li> */}
          <li>Use your pulled commands immediately — no restart needed.</li>
        </ul>
      </section>
    </div>
  );
}
