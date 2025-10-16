"use client";

import React from "react";
import { CodeBlockTabs } from "../CodeBlock";
import Badge from "../ui/Badge";

export default function RunCommandsPage() {
  return (
    <div className="font-sans mt-12 space-y-12 w-full">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Running Saved Commands</h1>
      <div className="text-white/70 mb-4">
        The <strong>boot run</strong> command allows you to quickly execute any saved command by its alias.
        It&apos;s the fastest way to reuse commands you&apos;ve stored with <Badge label="boot save" /> — whether
        it&apos;s starting a dev server, deploying a project, or initializing a setup script.
      </div>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-white/70">
          Running commands is simple — you just reference the alias you saved earlier. Boot automatically
          retrieves and executes the associated terminal command.
        </p>

        <CodeBlockTabs
          singleCode={`boot run serve`}
          type="bash"
        />

        <p className="text-white/70">
          In this example, Boot will execute the command previously saved under the alias{" "}
          <code className="text-gray-400">serve</code> — for example, <code className="text-gray-400">npm run dev</code>.
        </p>
      </section>

      {/* Running with Arguments */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Passing Additional Arguments</h2>
        <p className="text-white/70">
          You can append additional arguments or flags when running a saved command.
          These will be passed directly to the original command.
        </p>

        <CodeBlockTabs
          singleCode={`boot run build -- --watch`}
          type="bash"
        />

        <div className="text-white/70">
          Here, Boot runs the saved <code className="text-gray-400">build</code> command and appends{" "}
          <Badge label="--watch" /> to it, useful for continuous builds or environment toggles.
        </div>
      </section>

      {/* Chaining and Parallel Execution */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Chaining Commands</h2>
        <p className="text-white/70">
          Boot allows you to chain multiple saved commands in sequence for complex tasks like deployment or CI setups.
        </p>

        <CodeBlockTabs
          singleCode={`boot run serve && boot run build && boot run deploy`}
          type="bash"
        />

        <div className="text-white/70">
          This runs the <Badge label="serve" />, <Badge label="build" />, and <Badge label="deploy" /> commands one after another.
        </div>

        <div className="text-white/70">
          You can also run commands in parallel (depending on your shell) using <Badge label="&" /> or <Badge label="&amp;&amp;" /> syntax.
        </div>
      </section>

      {/* Run from Any Directory */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Run from Anywhere</h2>
        <p className="text-white/70">
          You can execute your saved commands from any directory. Boot keeps a global record of all aliases,
          so you don&apos;t have to be in the project folder where the command was saved.
        </p>

        <CodeBlockTabs
          singleCode={`boot run next`}
          type="bash"
        />

        <p className="text-white/70">
          Perfect for global workflows like spinning up new apps, launching dev servers, or running build scripts.
        </p>
      </section>

      {/* Interactive Mode */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Interactive Mode</h2>
        <div className="text-white/70">
          When you forget an alias, Boot can help you interactively select and run saved commands.
          Just run <Badge label="boot run" /> without arguments:
        </div>

        <CodeBlockTabs
          singleCode={`boot run`}
          type="bash"
        />

        <CodeBlockTabs
          singleCode={`? Select a command to run:
> serve   → npm run dev
  deploy  → git push origin main
  next    → npx create-next-app@latest my-app`}
          type="text"
        />

        <p className="text-white/70">
          Use your arrow keys to select a command, then hit <strong>Enter</strong> to execute it.
        </p>
      </section>

      {/* Run with Environment Variables */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Using Environment Variables</h2>
        <p className="text-white/70">
          You can inject environment variables directly into your saved commands during runtime.
        </p>

        <CodeBlockTabs
          singleCode={`NODE_ENV=production boot run build`}
          type="bash"
        />

        <div className="text-white/70">
          This runs the <Badge label="build" /> command in production mode — great for custom deploy or CI workflows.
        </div>
      </section>

      {/* Example Output */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example Output</h2>
        <p className="text-white/70">
          Here&apos;s an example of what happens when you run a saved command:
        </p>

        <CodeBlockTabs
          singleCode={`$ boot run serve
→ Running alias: serve
→ Command: npm run dev

> ready - started server on http://localhost:3000
> watching for changes...`}
          type="bash"
        />
      </section>

      {/* Troubleshooting */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Troubleshooting</h2>
        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>
            If Boot cannot find the alias, ensure it was saved correctly using{" "}
            <Badge label="boot save" />.
          </li>
          <li>
            For permission errors, make sure you have execution rights in your project directory.
          </li>
          <li>
            If the command is synced via GitHub but not available locally, run{" "}
            <Badge label="boot sync github" /> to restore it.
          </li>
        </ul>
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <p className="text-white/70">
          You&apos;ve learned how to run saved commands — now explore more advanced Boot CLI features:
        </p>
        <ul className="list-decimal list-inside text-white/70 space-y-2">
          {/* <li>Update saved commands with <Badge label="boot update" />.</li> */}
          <li>Remove old aliases using <Badge label="boot remove" />.</li>
          <li>Sync all your commands across devices using <Badge label="boot sync github" />.</li>
        </ul>
      </section>
    </div>
  );
}
