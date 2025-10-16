"use client";

import React from "react";
import { CodeBlockTabs } from "../CodeBlock";

export default function VersionPage() {
  return (
    <div className="font-sans mt-12 space-y-12 w-full">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-6">Version Management</h1>
      <p className="text-white/70 mb-6">
        Keeping your <strong>Boot CLI</strong> up to date ensures you get the latest
        features, performance improvements, and bug fixes.
      </p>
      <p className="text-white/70">
        This page guides you through checking your current Boot version, upgrading to
        the latest release, and managing multiple versions when necessary.
      </p>

      {/* Check Current Version */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Check Current Version</h2>
        <p className="text-white/70">
          To verify which version of Boot you currently have installed, run:
        </p>
        <CodeBlockTabs singleCode={`boot --version`} type="bash" />
        <p className="text-white/70">
          You&apos;ll see output like <code className="text-white/40">v1.4.0</code>.
        </p>
      </section>

      {/* Upgrade Boot CLI */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Upgrade Boot CLI</h2>
        <p className="text-white/70">
          Keeping Boot up to date ensures compatibility with new templates and GitHub sync.
          To update via npm or yarn:
        </p>
        <CodeBlockTabs
          enabledTabs={{ npm: true, yarn: true }}
          codes={{
            npm: "npm install -g boot-cli@latest",
            yarn: "yarn global add boot-cli@latest"
          }}
        />
      </section>

      {/* Rollback to Previous Version */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Rollback to Previous Version</h2>
        <p className="text-white/70">
          If you encounter issues after updating, you can roll back to a specific version:
        </p>
        <CodeBlockTabs singleCode={`npm install -g boot-cli@1.3.2`} type="bash" />
        <p className="text-white/70">
          Replace <code className="text-gray-400">1.3.2</code> with the desired version number.
        </p>
      </section>

      {/* View Version History */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">View Version History</h2>
        <p className="text-white/70">
          You can view Boot&apos;s release history on GitHub to check what&apos;s new or fixed in each release:
        </p>
        <CodeBlockTabs singleCode={`boot changelog`} type="bash" />
        <p className="text-white/70">
          Or visit the official repository at{" "}
          <a
            href="https://github.com/boot-cli/releases"
            target="_blank"
            className="text-blue-400 underline"
          >
            github.com/boot-cli/releases
          </a>
        </p>
      </section>

      {/* Using Beta Releases */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Using Beta Releases</h2>
        <p className="text-white/70">
          To test experimental or upcoming Boot features, install the beta version:
        </p>
        <CodeBlockTabs singleCode={`npm install -g boot-cli@beta`} type="bash" />
        <p className="text-white/70">
          Beta releases may include early access features and are not recommended for
          production environments.
        </p>
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <ul className="list-decimal list-inside text-white/70 space-y-2">
          <li>Learn about Boot&apos;s configuration system.</li>
          <li>Explore how to scaffold custom templates.</li>
          <li>Connect your Boot CLI with GitHub for syncing.</li>
        </ul>
      </section>
    </div>
  );
}
