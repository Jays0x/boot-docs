"use client";

import React from "react";
import { CodeBlockTabs } from "../CodeBlock";
import Badge from "../ui/Badge";

export default function RemoveTemplateCommandPage() {
  return (
    <div className="font-sans mt-12 w-[700px] space-y-12">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Remove Template Command</h1>
      <div className="text-white/70 mb-4">
        The <Badge label="boot remove-template" /> command lets you delete a previously created template from Boot CLI.
        This helps you clean up unused templates and keep your template list organized.
      </div>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <div className="text-white/70">
          Templates in Boot can be removed if they are no longer needed. 
          Removing a template only deletes the alias and the associated command; it does not affect your saved commands or projects.
        </div>
      </section>

      {/* Command Syntax */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Command Syntax</h2>
        <div className="text-white/70">
          Use the following syntax to remove a template:
        </div>

        <CodeBlockTabs
          singleCode={`boot remove-template <template-name>`}
          type="bash"
        />

        <div className="text-white/70">
          Replace <code className="text-gray-400">&lt;template-name&gt;</code> with the alias of the template you want to remove.
        </div>
      </section>

      {/* Example Use Cases */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example Use Cases</h2>
        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>Remove an old Next.js template: <Badge label={`boot remove-template next`} /></li>
          <li>Delete a template for an Express API project: <Badge label={`boot remove-template api`} /></li>
          <li>Clean up a deployment template: <Badge label={`boot remove-template deploy`} /></li>
        </ul>
      </section>

      {/* Example Output */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example Output</h2>
        <CodeBlockTabs
          singleCode={`$ boot remove-template next
✔ Template 'next' removed successfully!`}
          type="bash"
        />
      </section>

      {/* Notes & Tips */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Notes & Tips</h2>
        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>Make sure you type the exact template name to remove.</li>
          <li>Removed templates cannot be recovered unless re-added manually.</li>
          <li>Sync changes with GitHub using <Badge label="boot sync --push" /> to update cloud templates.</li>
          <li>Check your available templates before removing using <Badge label="boot list-templates" />.</li>
        </ul>
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <div className="text-white/70">
          After removing templates, you can:
        </div>
        <ul className="list-decimal list-inside text-white/70 space-y-2">
          <li>Add new templates using <Badge label="boot add-template" />.</li>
          <li>Sync your template changes across devices with <Badge label="boot sync --push" />.</li>
          {/* <li>Manage your templates with <Badge label="boot list-templates" /> to see remaining templates.</li> */}
        </ul>
      </section>
    </div>
  );
}
