"use client";

import React from "react";
import { CodeBlockTabs } from "../CodeBlock";
import Badge from "../ui/Badge";

export default function RemoveCommandsPage() {
  return (
    <div className="font-sans mt-12 space-y-12 w-full">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Removing Saved Commands</h1>
      <div className="text-white/70 mb-4">
        The <div className="inline-block"><Badge label="boot remove" /></div> command lets you delete any previously saved command from
        your local or synced Boot configuration. Use this when a command is outdated, replaced, or no
        longer needed in your workflow.
      </div>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Usage</h2>
        <p className="text-white/70">
          To remove a saved command, simply pass its alias name to the <div className="inline-block"><Badge label="boot remove" /></div> command:
        </p>

        <CodeBlockTabs singleCode={`boot remove serve`} type="bash" />

        <p className="text-white/70">
          Boot will permanently delete the saved alias <div className="inline-block"><Badge label="serve" /></div> from your configuration.
        </p>
      </section>

      {/* Confirmation Prompt */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Confirmation Prompt</h2>
        <p className="text-white/70">
          By default, Boot will confirm before deleting a command to prevent accidental removals:
        </p>

        <CodeBlockTabs
          singleCode={`$ boot remove build
⚠️  Are you sure you want to remove 'build'? (y/N)`} 
          type="bash"
        />

        <p className="text-white/70">
          Type <div className="inline-block"><Badge label="y" /></div> to confirm or <div className="inline-block"><Badge label="N" /></div> to cancel.
        </p>
      </section>

      {/* Force Remove */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Force Remove</h2>
        <p className="text-white/70">
          You can skip the confirmation step by passing the <div className="inline-block"><Badge label="--force" /></div> flag:
        </p>

        <CodeBlockTabs singleCode={`boot remove deploy --force`} type="bash" />

        <p className="text-white/70">
          This instantly deletes the alias <div className="inline-block"><Badge label="deploy" /></div> without requiring manual confirmation.
        </p>
      </section>

      {/* Interactive Mode */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Interactive Mode</h2>
        <p className="text-white/70">
          If you&apos;re not sure which alias to remove, you can run <div className="inline-block"><Badge label="boot remove" /></div> without arguments.
          Boot will open an interactive list of all saved commands:
        </p>

        <CodeBlockTabs
          singleCode={`$ boot remove
? Select a command to remove:
> serve   → npm run dev
  build   → yarn build
  deploy  → git push origin main`}
          type="text"
        />

        <p className="text-white/70">
          Use the arrow keys to select a command, then press <strong>Enter</strong> to confirm its removal.
        </p>
      </section>

      {/* Remove Multiple Commands */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Removing Multiple Commands</h2>
        <p className="text-white/70">
          You can delete several saved commands in one go by separating their aliases with spaces:
        </p>

        <CodeBlockTabs singleCode={`boot remove serve build deploy`} type="bash" />

        <p className="text-white/70">
          Boot will remove all listed aliases after confirmation.
        </p>
      </section>

      {/* GitHub Sync Behavior */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">GitHub Sync Behavior</h2>
        <p className="text-white/70">
          If you&apos;ve enabled GitHub sync, deleting a command locally will also mark it as removed in your GitHub backup.
        </p>

        <CodeBlockTabs singleCode={`boot remove build --sync`} type="bash" />

        <p className="text-white/70">
          This ensures your local and remote command lists remain consistent across all devices.
        </p>
      </section>

      {/* Example Output */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example Output</h2>

        <CodeBlockTabs
          singleCode={`$ boot remove serve
→ Removing alias: serve
✔ Command 'serve' successfully deleted from Boot config`}
          type="bash"
        />
      </section>

      {/* Troubleshooting */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Troubleshooting</h2>
        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>
            If the alias doesn&apos;t exist, check with <div className="inline-block"><Badge label="boot list" /></div> to verify saved commands.
          </li>
          <li>
            If sync deletion fails, ensure you&apos;re logged into GitHub using <div className="inline-block"><Badge label="boot login" /></div>.
          </li>
          <li>
            If a deleted alias still appears, run <div className="inline-block"><Badge label="boot sync --reset" /></div> to refresh your list.
          </li>
        </ul>
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <p className="text-white/70">
          After removing outdated commands, you can:
        </p>

        <ul className="list-decimal list-inside text-white/70 space-y-2">
          <li>View remaining commands with <div className="inline-block"><Badge label="boot list" /></div>.</li>
          <li>Recreate updated commands using <div className="inline-block"><Badge label="boot save" /></div>.</li>
          <li>Run saved commands instantly using <div className="inline-block"><Badge label="boot run" /></div>.</li>
        </ul>
      </section>
    </div>
  );
}
