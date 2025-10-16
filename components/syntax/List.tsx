"use client";

import React from "react";
import { CodeBlockTabs } from "../CodeBlock";
import Badge from "../ui/Badge";

export default function ListCommandsPage() {
  return (
    <div className="font-sans mt-12 w-[700px] space-y-12">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Listing Saved Commands</h1>
      <p className="text-white/70 mb-4">
        The <strong>boot list</strong> command displays all commands you’ve previously saved.
        It’s a quick way to review your stored aliases, check details, and verify what’s available
        in your Boot CLI environment.
      </p>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-white/70">
          Once you’ve saved multiple commands using <Badge label="boot save" />, you can use{" "}
          <Badge label="boot list" /> to see them all in one place.
          You can view basic command info or extended metadata depending on your flags.
        </p>
      </section>

      {/* List Saved Commands */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">List Saved Commands</h2>
        <p className="text-white/70">
          To display a list of all saved commands, simply run:
        </p>

        <CodeBlockTabs
          singleCode={`boot list`}
          type="bash"
        />

        <p className="text-white/70">
          This will print all saved command aliases with their corresponding command strings.
        </p>
      </section>

      {/* Display Details */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Display Detailed Information</h2>
        <p className="text-white/70">
          Use the <Badge label="--all" /> flag to show more detailed information like timestamps,
          sync status, and usage count.
        </p>

        <CodeBlockTabs
          singleCode={`boot list --all`}
          type="bash"
        />

        <p className="text-white/70">
          This is helpful when you want to inspect metadata for debugging or housekeeping.
        </p>
      </section>

      {/* Filtering Commands */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Filtering Commands</h2>
        <p className="text-white/70">
          You can filter your saved commands by alias name to find specific entries.
        </p>

        <CodeBlockTabs
          singleCode={`boot list serve`}
          type="bash"
        />

        <p className="text-white/70">
          This will return only the command(s) matching the given alias.
        </p>
      </section>

      {/* GitHub Synced Commands */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">GitHub Synced Commands</h2>
        <p className="text-white/70">
          If you’ve enabled <Badge label="GitHub Sync" />, Boot also shows whether each command
          is synced to your account. Synced commands can be accessed across multiple devices.
        </p>

        <CodeBlockTabs
          singleCode={`boot list --sync`}
          type="bash"
        />

        <p className="text-white/70">
          Unsynced commands will be listed as <code className="text-gray-400">local only</code>.
        </p>
      </section>

      {/* Example Output */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example Output</h2>
        <p className="text-white/70">
          Here’s an example of what the output might look like when you run{" "}
          <Badge label="boot list --all" />:
        </p>

        <CodeBlockTabs
          singleCode={`Alias     | Command                              | Synced | Last Used
serve     | npm run dev                          | yes    | 2 hours ago
deploy    | git add . && git commit -m 'deploy'  | yes    | 1 day ago
next      | npx create-next-app@latest my-app    | no     | 3 days ago`}
          type="text"
        />
      </section>

      {/* JSON Output */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">JSON Output</h2>
        <p className="text-white/70">
          If you prefer a structured view for automation or scripting, you can output
          your saved commands in JSON format using:
        </p>

        <CodeBlockTabs
          singleCode={`boot list --json`}
          type="bash"
        />

        <CodeBlockTabs
          singleCode={`[
  {
    "alias": "serve",
    "command": "npm run dev",
    "synced": true,
    "lastUsed": "2025-10-15T12:00:00Z"
  },
  {
    "alias": "deploy",
    "command": "git add . && git commit -m 'deploy' && git push origin main",
    "synced": true,
    "lastUsed": "2025-10-14T15:23:00Z"
  }
]`}
          type="json"
        />
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <p className="text-white/70">
          Now that you know how to list and manage saved commands, continue exploring:
        </p>
        <ul className="list-decimal list-inside text-white/70 space-y-2">
          <li>Run commands using <Badge label="boot run" />.</li>
          <li>Remove old commands with <Badge label="boot remove" />.</li>
          <li>Sync and manage saved commands with GitHub.</li>
        </ul>
      </section>
    </div>
  );
}
