"use client";

import React from "react";
import { CodeBlockTabs } from "../CodeBlock";
import Badge from "../ui/Badge";

export default function LoginCommandPage() {
  return (
    <div className="font-sans mt-12 w-[700px] space-y-12">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Login Command</h1>
      <p className="text-white/70 mb-4">
        The <strong>boot login</strong> command lets you authenticate your Boot CLI session and
        link it to your GitHub account. Once logged in, you can sync saved commands,
        manage templates, and access your Boot workspace securely from any device.
      </p>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-white/70">
          The login process ensures that all your commands and configurations are tied to your
          identity. Boot uses OAuth to connect with GitHub and store an authentication token
          locally for seamless access across sessions.
        </p>
      </section>

      {/* Login Command Syntax */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Login Command Syntax</h2>
        <div className="text-white/70">
          To log in to Boot, simply run:
        </div>

        <CodeBlockTabs singleCode={`boot login`} type="bash" />

        <div className="text-white/70">
          When you run this command, Boot will open a browser window prompting you to authorize
          your GitHub account.
        </div>
      </section>

      {/* Authenticate with GitHub */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Authenticate with GitHub</h2>
        <div className="text-white/70">
          Boot uses GitHub authentication to verify your identity. After running
          <Badge label="boot login" />, your browser will open the GitHub login page.
          Once authorized, Boot retrieves a secure OAuth token and saves it locally.
        </div>

        <CodeBlockTabs
          singleCode={`✔ Opening GitHub login page...
✔ Authentication successful
✔ Connected as @yourusername`}
          type="bash"
        />

        <div className="text-white/70">
          Your CLI will now be authenticated, allowing you to sync saved commands and manage
          your Boot projects linked to GitHub repositories.
        </div>
      </section>

      {/* Token Storage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Token Storage</h2>
        <div className="text-white/70">
          Boot securely stores your access token in your local configuration folder (for example:
          <code className="text-gray-400"> ~/.boot/config.json </code>). This token is encrypted
          and only accessible by the Boot CLI.
        </div>

        <CodeBlockTabs
          singleCode={`{
  "auth": {
    "user": "@yourusername",
    "token": "gho_**************************",
    "expires_at": "2025-10-15T10:00:00Z"
  }
}`}
          type="json"
        />
      </section>

      {/* Handling Login Errors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Handling Login Errors</h2>
        <div className="text-white/70">
          If you encounter login issues (e.g., expired token, revoked permission, or network
          error), Boot will prompt you to re-authenticate using <Badge label="boot login" /> again.
        </div>

        <CodeBlockTabs
          singleCode={`✖ Authentication failed: token expired
→ Run "boot login" to reauthenticate.`}
          type="bash"
        />
      </section>

      {/* Example Output */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example Output</h2>
        <CodeBlockTabs
          singleCode={`$ boot login
✔ Redirecting to GitHub...
✔ Authentication successful!
✔ Welcome, @devmaster! Your account is now linked.`}
          type="bash"
        />
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <div className="text-white/70">
          Once logged in, you can:
        </div>

        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>Sync saved commands to your GitHub account using <Badge label="boot sync" />.</li>
          <li>Access your Boot dashboard online.</li>
          <li>Share and collaborate on saved templates with your team.</li>
        </ul>
      </section>
    </div>
  );
}
