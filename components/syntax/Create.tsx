"use client";

import React from "react";
import { CodeBlockTabs } from "../CodeBlock";
import Badge from "../ui/Badge";

export default function CreateCommandsPage() {
  return (
    <div className="font-sans mt-12 w-[700px] space-y-12">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Creating Projects</h1>
      <p className="text-white/70 mb-4">
        The <Badge label="boot create" /> command helps you quickly bootstrap a new project using popular frameworks such as{" "}
        <strong>Next.js</strong>, <strong>Express</strong>, <strong>NestJS</strong>, and{" "}
        <strong>React Native</strong>. You can also customize setup options like package managers,
        dependencies, and configurations.
      </p>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-white/70">
          Instead of manually running multiple setup commands, <Badge label="boot create" /> provides
          a unified interface to create your app faster — with smart defaults and optional prompts.
        </p>
      </section>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Usage</h2>
        <p className="text-white/70">
          To start a new project, use <Badge label="boot create" /> followed by your project name:
        </p>

        <CodeBlockTabs
          singleCode={`boot create my-app`}
          type="bash"
        />

        <p className="text-white/70">
          Boot will then prompt you to choose a framework (e.g. Next.js, Express, NestJS, or React Native)
          and optionally install recommended dependencies automatically.
        </p>
      </section>

      {/* Example: Next.js Project */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example: Next.js Project</h2>
        <p className="text-white/70">
          To directly create a Next.js project without prompts:
        </p>

        <CodeBlockTabs
          singleCode={`boot create my-app --template nextjs`}
          type="bash"
        />

        <p className="text-white/70">
          This runs <Badge label="npx create-next-app@latest my-app" /> under the hood.
        </p>
        
      </section>

      {/* Example: Express API */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example: Express API</h2>
        <p className="text-white/70">
          To bootstrap a new Express API project:
        </p>

        <CodeBlockTabs
          singleCode={`boot create api-server --template express`}
          type="bash"
        />

        <p className="text-white/70">
          This sets up an <Badge label="Express.js" /> boilerplate with essential middlewares, environment
          variables, and nodemon for development.
        </p>
      </section>

      {/* Example: NestJS Application */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example: NestJS Application</h2>
        <p className="text-white/70">
          To create a scalable backend app with NestJS:
        </p>

        <CodeBlockTabs
          singleCode={`boot create backend --template nestjs`}
          type="bash"
        />

        <p className="text-white/70">
          Boot runs <Badge label="npx @nestjs/cli new backend" /> internally, so you get a complete NestJS
          starter configured and ready.
        </p>
      </section>

      {/* Example: React Native App */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example: React Native App</h2>
        <p className="text-white/70">
          To start a mobile project using React Native:
        </p>

        <CodeBlockTabs
          singleCode={`boot create mobile --template react-native`}
          type="bash"
        />

        <p className="text-white/70">
          Boot uses <Badge label="npx react-native init mobile" /> under the hood and can also link
          optional dependencies like navigation and vector icons.
        </p>
      </section>

      {/* Optional Flags */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Optional Flags</h2>
        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>
            <Badge label="--template &lt;framework&gt;" /> — Choose a specific framework (e.g. nextjs, express, nestjs, react-native).
          </li>
          <li>
            <Badge label="--use &lt;manager&gt;" /> — Specify package manager (npm, yarn, pnpm, bun).
          </li>
          <li>
            <Badge label="--install" /> — Automatically install dependencies after creation.
          </li>
          <li>
            <Badge label="--git" /> — Initialize a Git repository in the project folder.
          </li>
          <li>
            <Badge label="--yes" /> — Skip all interactive prompts (use defaults).
          </li>
        </ul>
      </section>

      {/* Example: Full Command */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Full Example</h2>
        <p className="text-white/70">
          Create a new Next.js app, install dependencies, and initialize Git in one go:
        </p>

        <CodeBlockTabs
          singleCode={`boot create my-portfolio --template nextjs --use pnpm --install --git`}
          type="bash"
        />
      </section>

      {/* Interactive Setup */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Interactive Setup</h2>
        <p className="text-white/70">
          When run without flags, Boot will walk you through an interactive wizard:
        </p>

        <CodeBlockTabs
          singleCode={`? Choose a framework: (Use arrow keys)
> Next.js
  Express
  NestJS
  React Native

? Use TypeScript? (Y/n)
? Install dependencies now? (Y/n)
? Initialize a Git repo? (Y/n)`}
          type="text"
        />
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <ul className="list-decimal list-inside text-white/70 space-y-2">
          <li>Run <Badge label="boot save" /> to store your favorite creation commands.</li>
          <li>Use <Badge label="boot list" /> to view your saved templates.</li>
          <li>Sync your setup commands with <Badge label="GitHub Sync" /> for future use.</li>
        </ul>
      </section>
    </div>
  );
}
