"use client";

import React from "react";
import { CodeBlockTabs } from "../CodeBlock";
import Badge from "../ui/Badge";

export default function AddTemplateCommandPage() {
  return (
    <div className="font-sans mt-12 space-y-12 w-full">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Add Template Command</h1>
      <div className="text-white/70 mb-4">
        The <Badge label="boot add-template" /> command lets you create a custom template for
        Boot CLI. This allows you to reuse complex commands or project setups with a simple alias.
      </div>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <div className="text-white/70">
          Templates in Boot help you quickly scaffold projects or run recurring commands.
          Once added, a template can be used with <Badge label="boot create &lt;template-name&gt;" />.
        </div>
      </section>

      {/* Command Syntax */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Command Syntax</h2>
        <div className="text-white/70">
          The syntax is:
        </div>

        <CodeBlockTabs singleCode={`boot add-template <name> <cmd>`} type="bash" />

        <div className="text-white/70">
          Replace <code className="text-gray-400">&lt;name&gt;</code> with the template alias,
          and <code className="text-gray-400">&lt;cmd&gt;</code> with the full command you want to save.
        </div>
      </section>

      {/* Example Use Cases */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example Use Cases</h2>
        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>Create a Next.js template: <Badge label={`boot add-template next "npx create-next-app@latest my-app"`} /></li>
          <li>Create an Express API template: <Badge label={`boot add-template api "npx express-generator my-api"`} /></li>
          <li>Create a deployment template: <Badge label={`boot add-template deploy "git add . && git commit -m 'deploy' && git push origin main"`} /></li>
        </ul>
      </section>

      {/* Example Output */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example Output</h2>
        <CodeBlockTabs
          singleCode={`$ boot add-template next "npx create-next-app@latest my-app"
✔ Template 'next' added successfully!`}
          type="bash"
        />
      </section>

      {/* Notes & Tips */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Notes & Tips</h2>
        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>Use descriptive template names to easily remember their purpose.</li>
          <li>Templates can be synced across devices if GitHub Sync is enabled.</li>
          <li>Update templates by re-running <Badge label="boot add-template" /> with the same name.</li>
          <li>Check all available templates using <Badge label="boot list-templates" />.</li>
        </ul>
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <div className="text-white/70">
          After adding templates, you can:
        </div>
        <ul className="list-decimal list-inside text-white/70 space-y-2">
          <li>Create projects using your templates: <Badge label="boot create &lt;template-name&gt;" /></li>
          <li>Sync your templates across devices with <Badge label="boot sync --push" />.</li>
          <li>Manage templates with <Badge label="boot list-templates" /> and <Badge label="boot remove-template" />.</li>
        </ul>
      </section>
    </div>
  );
}
