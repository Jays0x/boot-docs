"use client";

import React from "react";
import { CodeBlockTabs } from "../CodeBlock";
import Badge from "../ui/Badge";

export default function EditTemplateCommandPage() {
  return (
    <div className="font-sans mt-12 w-[700px] space-y-12">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Edit Template Command</h1>
      <div className="text-white/70 mb-4">
        The <Badge label="boot edit-template" /> command lets you modify an existing Boot CLI template.
        This is useful if you want to update commands, change setups, or fix errors in a saved template.
      </div>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <div className="text-white/70">
          Editing templates allows you to keep your reusable commands up-to-date without
          creating a new template from scratch. Once edited, the updated template can be
          used immediately with <Badge label="boot create &lt;template-name&gt;" />.
        </div>
      </section>

      {/* Command Syntax */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Command Syntax</h2>
        <div className="text-white/70">
          The syntax is:
        </div>

        <CodeBlockTabs singleCode={`boot edit-template <name> <new-cmd>`} type="bash" />

        <div className="text-white/70">
          Replace <code className="text-gray-400">&lt;name&gt;</code> with the template you want to update,
          and <code className="text-gray-400">&lt;new-cmd&gt;</code> with the updated command string.
        </div>
      </section>

      {/* Example Use Cases */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example Use Cases</h2>
        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>Update a Next.js template with a new project structure: 
            <Badge label={`boot edit-template next "npx create-next-app@latest my-new-app"`} />
          </li>
          <li>Change an Express API template to include additional dependencies:
            <Badge label={`boot edit-template api "npx express-generator my-api --no-view"`} />
          </li>
          <li>Update a deployment template with a new Git command sequence:
            <Badge label={`boot edit-template deploy "git add . && git commit -m 'update' && git push origin main"`} />
          </li>
        </ul>
      </section>

      {/* Example Output */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example Output</h2>
        <CodeBlockTabs
          singleCode={`$ boot edit-template next "npx create-next-app@latest my-new-app"
✔ Template 'next' updated successfully!`}
          type="bash"
        />
      </section>

      {/* Notes & Tips */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Notes & Tips</h2>
        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>Ensure the template name exists before editing.</li>
          <li>Edits overwrite the previous command associated with the template.</li>
          <li>After editing, you can test the template with <Badge label="boot create &lt;template-name&gt;" />.</li>
          <li>Templates synced with GitHub will be updated when you push using <Badge label="boot sync --push" />.</li>
        </ul>
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <div className="text-white/70">
          After editing templates, you can:
        </div>
        <ul className="list-decimal list-inside text-white/70 space-y-2">
          <li>Create projects using the updated template: <Badge label="boot create &lt;template-name&gt;" /></li>
          <li>Sync changes across devices with <Badge label="boot sync --push" />.</li>
          <li>Remove templates using <Badge label="boot remove-template" />.</li>
        </ul>
      </section>
    </div>
  );
}
