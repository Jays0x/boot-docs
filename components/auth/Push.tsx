"use client";

import React from "react";
import { CodeBlockTabs } from "../CodeBlock";
import Badge from "../ui/Badge";

export default function PushCommandPage() {
  return (
    <div className="font-sans mt-12 w-[700px] space-y-12">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Sync (Push) Commands</h1>
      <div className="text-white/70 mb-4">
        The <Badge label="boot sync --push" /> command uploads your locally saved Boot commands to your
        connected GitHub account. This allows you to back up your aliases and access them across
        multiple devices securely.
      </div>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <div className="text-white/70">
          Boot supports cloud synchronization through GitHub. When you push your local commands,
          Boot uploads your command data (aliases, command strings, metadata) to a private GitHub
          Gist or repository under your authenticated account.
        </div>
      </section>

      {/* Command Syntax */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Command Syntax</h2>
        <div className="text-white/70">
          Use the following syntax to push your saved commands to the cloud:
        </div>

        <CodeBlockTabs singleCode={`boot sync --push`} type="bash" />

        <div className="text-white/70">
          This command requires that you&apos;re already logged in via <Badge label="boot login" />.
          If not authenticated, Boot will automatically prompt you to log in before continuing.
        </div>
      </section>

      {/* Example Use Cases */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example Use Cases</h2>
        <div className="text-white/70">
          You might use <Badge label="boot sync --push" /> in the following cases:
        </div>

        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>When setting up Boot on a new machine and want to keep all aliases synced.</li>
          <li>After saving new commands locally and want to update your GitHub backup.</li>
          <li>When collaborating with your team to share project-specific Boot commands.</li>
        </ul>

        {/* Basic Push Example */}
        <div className="space-y-2">
          <div className="text-white/70 font-medium">Basic Push Example:</div>
          <CodeBlockTabs singleCode={`boot sync --push`} type="bash" />
        </div>

        {/* Force Push Example */}
        <div className="space-y-2">
          <div className="text-white/70 font-medium">Force Push Example (overwrite existing data):</div>
          <CodeBlockTabs singleCode={`boot sync --push --force`} type="bash" />
        </div>
      </section>

      {/* Automatic Authentication Flow */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Automatic Authentication Flow</h2>
        <div className="text-white/70">
          When you run <Badge label="boot sync --push" />, Boot first checks if you&apos;re authenticated.
          If not, it will prompt you to log in, then automatically continue pushing your commands
          once authentication succeeds.
        </div>

        <CodeBlockTabs
          singleCode={`$ boot sync --push
✖ You are not logged in.
→ Redirecting to authentication...

✔ Authentication successful!
✔ Checking for local changes...
✔ Found 3 new commands
✔ Uploading to GitHub...
✔ Sync complete! 3 commands pushed to @yourusername`}
          type="bash"
        />

        <div className="text-white/70">
          This seamless authentication ensures you never have to manually rerun the command after logging in.
        </div>
      </section>

      {/* Example Output */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example Output</h2>
        <CodeBlockTabs
          singleCode={`$ boot sync --push
✔ Checking for local changes...
✔ Found 3 new commands
✔ Uploading to GitHub...
✔ Sync complete! 3 commands pushed to @yourusername`}
          type="bash"
        />
      </section>

      {/* How Sync Works */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Sync Works</h2>
        <div className="text-white/70">
          Boot compares your local <code className="text-gray-400">commands.json</code> file with the one stored on GitHub.
          It only pushes new or modified commands to avoid overwriting existing ones unless the
          <Badge label="--force" /> flag is used.
        </div>

        <CodeBlockTabs
          singleCode={`{
  "commands": [
    { "alias": "serve", "cmd": "npm run dev" },
    { "alias": "deploy", "cmd": "git push origin main" }
  ],
  "lastSynced": "2025-10-15T09:30:00Z"
}`}
          type="json"
        />
      </section>

      {/* Push Flags */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Push Flags</h2>
        <div className="text-white/70">
          You can customize your push operation with additional flags:
        </div>

        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li><Badge label="--force" /> - Overwrites all existing cloud commands.</li>
          <li><Badge label="--verbose" /> - Displays detailed upload progress.</li>
          <li><Badge label="--dry-run" /> - Simulates the push without making changes.</li>
        </ul>
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <div className="text-white/70">
          After pushing your commands, you can:
        </div>

        <ul className="list-decimal list-inside text-white/70 space-y-2">
          <li>Pull commands from GitHub on another device using <Badge label="boot sync --pull" />.</li>
          <li>Verify your sync status using <Badge label="boot sync --status" />.</li>
          {/* <li>Continue managing your aliases locally or online through your Boot dashboard.</li> */}
        </ul>
      </section>
    </div>
  );
}
