"use client";

import React from "react";
import { CodeBlockTabs } from "../CodeBlock";
import Badge from "../ui/Badge";

export default function SaveCommandsPage() {
  return (
    <div className="font-sans mt-12 w-[700px] space-y-12">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Saving Commands</h1>
      <p className="text-white/70 mb-4">
        The <strong>boot save</strong> command lets you store any frequently used terminal command
        under a short, easy-to-remember alias. This makes it simple to run your favorite scripts
        or project commands anytime — without retyping them.
      </p>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-white/70">
          Saving commands is the core feature of Boot CLI. Once a command is saved, you can
          run it later using its alias, sync it with GitHub (if enabled), or manage it
          through Boot&apos;s command manager.
        </p>
      </section>

      {/* Save a Command */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Save a Command</h2>
        <p className="text-white/70">
          To save a new command, use <Badge label="boot save" /> followed by an alias and the full
          command you want to store:
        </p>

        <CodeBlockTabs
          singleCode={`boot save serve "npm run dev"`}
          type="bash"
        />

        <p className="text-white/70">
          This saves <code className="text-gray-400">npm run dev</code> under the alias
          <code className="text-gray-400"> serve</code>. You can later run it using
          <Badge label="boot run serve" />.
        </p>
      </section>

      {/* Example Variations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example Variations</h2>
        <p className="text-white/70">
          You can save commands for various use cases — from starting servers to deploying apps.
        </p>

        {/* Updated to use correct props for CodeBlockTabs */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Next.js Project</h3>
            <CodeBlockTabs
              singleCode={`boot save next "npx create-next-app@latest my-app"`}
              type="bash"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Express API</h3>
            <CodeBlockTabs
              singleCode={`boot save api "npx express-generator my-api"`}
              type="bash"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Deployment</h3>
            <CodeBlockTabs
              singleCode={`boot save deploy "git add . && git commit -m 'deploy' && git push origin main"`}
              type="bash"
            />
          </div>
        </div>
      </section>

      {/* Where Commands Are Stored */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Where Commands Are Stored</h2>
        <p className="text-white/70">
          Boot saves all commands locally in a configuration file inside your system.
          If you&apos;ve enabled <Badge label="GitHub Sync" />, your saved commands will also be
          synced to your GitHub account, allowing you to access them from any device.
        </p>

        <p className="text-white/70">
          Each saved command includes its alias, command string, and metadata (like timestamps
          and sync status).
        </p>
      </section>

      {/* Tips for Using Save */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Tips for Using Save</h2>
        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>Use short but descriptive aliases (e.g., <code>serve</code>, <code>build</code>, <code>deploy</code>).</li>
          <li>Save your setup commands for new projects — you can reuse them easily.</li>
          <li>Enable GitHub sync to keep your saved commands across devices.</li>
          <li>Group related commands using consistent naming (e.g., <code>api:start</code>, <code>api:test</code>).</li>
        </ul>
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <p className="text-white/70">
          Now that you&apos;ve learned how to save commands, move on to:
        </p>
        <ul className="list-decimal list-inside text-white/70 space-y-2">
          <li>Running saved commands using <Badge label="boot run" />.</li>
          <li>Listing all saved commands with <Badge label="boot list" />.</li>
          <li>Deleting or updating commands as needed.</li>
        </ul>
      </section>
    </div>
  );
}
