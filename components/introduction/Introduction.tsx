"use client";

import React from "react";
import Badge from "../ui/Badge";
import { CodeBlockTabs } from "../CodeBlock";

function IntroductionPage() {
  const steps = [
    {
      title: "Save and Run Commands",
      code: `boot save serve "npm run dev"\nboot run serve`,
    },
    {
      title: "Scaffold a Project",
      code: `boot create express my-api`,
      description: "This generates a new Express.js project in seconds — preconfigured and ready to go.",
    },
    {
      title: "Automate Workflows",
      code: `boot save deploy "git add . && git commit -m 'deploy' && git push origin main"\nboot run deploy`,
    },
    {
      title: "Sync Commands with GitHub",
      code: `boot sync github`,
      description: "This ensures your setup is always available — whether you're on your laptop, desktop, or a remote server.",
    },
  ];

  return (
    <div className="font-sans mt-12 space-y-12 w-full">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-6">Introduction</h1>
      <p className="text-white/70 mb-8">
        Welcome to <strong>Boot CLI</strong> — your personal command-line companion built to{" "}
        <strong>save your most-used commands</strong>, <strong>scaffold projects instantly</strong>, and{" "}
        <strong>sync your development setup across devices</strong>.
      </p>
      <p className="text-white/70 mb-8">
        Whether you&apos;re building with <strong>Next.js</strong>, <strong>Express.js</strong>, <strong>NestJS</strong>, or any other framework,{" "}
        <strong>Boot</strong> helps you save time by remembering your favorite commands and automating your project setup — all from your terminal.
      </p>

      {/* What Is Boot */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mb-3">What Is Boot?</h2>
        <p className="text-white/70 mb-3">
          <strong>Boot</strong> is a lightweight yet powerful <strong>command-line interface (CLI)</strong> tool that helps developers:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>💾 <strong>Save and reuse commands</strong> — so you don’t have to remember or retype them.</li>
          <li>🧰 <strong>Scaffold projects instantly</strong> — using predefined or custom templates.</li>
          <li>☁️ <strong>Sync commands with GitHub</strong> — so your saved commands travel with you anywhere.</li>
          <li>⚡ <strong>Automate repetitive workflows</strong> — like deployments, installations, or repo setups.</li>
        </ul>
        <p className="text-white/70 mb-3">Example:</p>
        <CodeBlockTabs
          singleCode={`# Save a command\nboot save next "npx create-next-app@latest my-app"\n\n# Run it anytime\nboot run next`}
          type="bash"
        />
        <p className="text-white/70 mt-3">Boom — your Next.js app is up and running in seconds.</p>
      </section>

      {/* Why Boot */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mb-3">Why Boot?</h2>
        <p className="text-white/70 mb-4">
          Developers often switch between frameworks, projects, and devices — which means retyping the same commands or reconfiguring environments. Boot eliminates that friction by letting you <strong>save</strong>, <strong>reuse</strong>, and <strong>sync</strong> your development commands effortlessly.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>🚀 <strong>Save time:</strong> No more retyping long terminal commands.</li>
          <li>🧠 <strong>Stay organized:</strong> Store all commands in one place.</li>
          <li>🌍 <strong>Sync with GitHub:</strong> Access your saved commands anywhere, anytime.</li>
          <li>🧰 <strong>Scaffold projects:</strong> Bootstrap new projects in seconds.</li>
          <li>⚡ <strong>Boost productivity:</strong> Automate your setup and deployment routines.</li>
        </ul>
      </section>

      {/* Key Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
        <table className="table-auto text-left text-gray-300 border-collapse border border-white/70 w-full rounded-lg overflow-hidden mb-4">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-3 py-3">Feature</th>
              <th className="px-3 py-3">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/10">
              <td className="pl-3 pr-8 py-3"><Badge label="Command Saver" /></td>
              <td className="pl-3 pr-8 py-3">Save and reuse frequently used commands with short aliases.</td>
            </tr>
            <tr className="border-b border-white/10 ">
              <td className="pl-3 pr-8 py-3"><Badge label="Quick Runner" /></td>
              <td className="pl-3 pr-8 py-3">Run saved commands instantly from anywhere.</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="pl-3 pr-8 py-3 w-[220px]"><Badge label="Project Scaffolding" /></td>
              <td className="pl-3 pr-8 py-3">Generate templates for frameworks like Next.js, Express.js, NestJS, and more.</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="pl-3 pr-8 py-3 w-[220px]"><Badge label="Custom Templates" /></td>
              <td className="pl-3 pr-8 py-3">Create and reuse your own custom scaffolding setups.</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="pl-3 pr-8 py-3"><Badge label="GitHub Sync" /></td>
              <td className="pl-3 pr-8 py-3">Sync your saved commands and templates with GitHub to use across devices.</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="pl-3 pr-8 py-3"><Badge label="Local Storage" /></td>
              <td className="pl-3 pr-8 py-3">All saved data is securely stored locally and synced when enabled.</td>
            </tr>
            <tr>
              <td className="pl-3 pr-8 py-3"><Badge label="Cross-Platform" /></td>
              <td className="pl-3 pr-8 py-3">Works smoothly on macOS, Linux, and Windows.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Example Use Cases - Stepper Style */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold mb-4">Example Use Cases</h2>

        {steps.map((step, idx) => (
          <div key={idx} className="flex border-l border-white/20 pl-6 relative">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#2C2C2C] flex items-center justify-center border border-white/20 text-sm font-semibold">
              {idx + 1}
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-semibold text-white/80">{step.title}</h3>
              <CodeBlockTabs singleCode={step.code} type="bash" />
              {step.description && <p className="text-white/70 mt-2">{step.description}</p>}
            </div>
          </div>
        ))}
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-2">What&apos;s Next</h2>
        <ul className="list-decimal list-inside text-white/70 space-y-2">
          <li>Install Boot on your system</li>
          <li>Save and manage commands</li>
          <li>Scaffold new projects</li>
          <li>Connect and sync with GitHub</li>
          <li>Customize Boot&apos;s configuration</li>
        </ul>
      </section>

      {/* Call to action */}
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold mb-2">Ready to Supercharge Your CLI?</h1>
        <p className="text-white/70">
          Start your journey with Boot and experience a faster, smarter, and more connected way to manage your terminal workflows.
        </p>
      </section>
    </div>
  );
}

export default IntroductionPage;
