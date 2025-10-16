import React from 'react'
import { CodeBlockTabs } from '../CodeBlock'
import Badge from '../ui/Badge'

function InstallationPage() {
  return (
    <div className='font-sans mt-12 space-y-12 w-full'>
      {/* Page Title */}
      <h1 className='text-4xl font-bold mb-6'>Installation</h1>
      <p className='text-white/70 mb-8'>
        Welcome to the installation guide for <strong>Boot CLI</strong>! Follow this guide to install Boot, verify your setup, and optionally connect your GitHub account for syncing saved commands across devices.
      </p>

      <div className=''>
        {/* Prerequisites */}
        <section className='pb-6 rounded-lg shadow-md space-y-4'>
          <h2 className='text-2xl font-semibold mb-2'>Prerequisites</h2>
          <p className='text-white/70'>
            Before installing Boot, ensure your system meets the following requirements:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2'>
            <li><Badge label="Node.js" /> (v16 or higher)</li>
            <li><Badge label="npm" /> or <Badge label="yarn" /> package manager</li>
            <li><Badge label="Git" /> (required for GitHub sync)</li>
            <li><Badge label="GitHub account" /> (optional, for syncing commands)</li>
          </ul>

          <p className='text-white/70 mt-2'>Verify Node.js and npm:</p>
          <CodeBlockTabs singleCode={`node -v\nnpm -v`} type="bash" />

          <p className='text-white/70 mt-2'>
            If Node.js is not installed, download it from: <a href="https://nodejs.org" className='text-blue-500 underline'>https://nodejs.org</a>
          </p>
        </section>

        {/* Installation Methods */}
        <section className='py-6 rounded-lg shadow-md space-y-6'>
          <h2 className='text-2xl font-semibold mb-2'>Installation Methods</h2>
          <CodeBlockTabs
            codes={{
              npm: `npm install -g boot-cli`,
              yarn: `yarn global add boot-cli`,
              bun: `bun add -g boot-cli`,
              pnpm: `pnpm add -g boot-cli`,
            }}
            enabledTabs={{ npm: true, yarn: true, bun: true, pnpm: true }}
          />

          <p className='text-white/70 mt-2'>Verify installation:</p>
          <CodeBlockTabs singleCode={`boot --version`} type="bash" />

          <p className='text-white/70 mt-1'>Expected output: <code>Boot CLI v1.0.0</code></p>
        </section>

        {/* Updating Boot */}
        <section className='py-6 rounded-lg shadow-md space-y-4'>
          <h2 className='text-2xl font-semibold mb-2'>Updating Boot</h2>
          <p className='text-white/70'>Keep Boot up-to-date with the latest features:</p>
          <CodeBlockTabs
            codes={{
              npm: `npm update -g boot-cli`,
              yarn: `yarn global upgrade boot-cli`,
            }}
            enabledTabs={{ npm: true, yarn: true }}
          />
        </section>

        {/* GitHub Sync */}
        <section className='py-6 rounded-lg shadow-md space-y-4 '>
          <h2 className='text-2xl font-semibold mb-2'>Enable GitHub Sync</h2>
          <p className='text-white/70'>Sync your saved commands across devices:</p>
          <CodeBlockTabs singleCode={`boot sync github`} type="bash" />
          <div className='text-white/70 mt-2'>
            Boot will create/use a private repository <Badge label="boot-sync" /> for your commands. Pull on other devices using <code>boot sync pull</code>.
          </div>

          <Badge label="Tip" />
          <table className='table-auto text-left text-gray-300 border-collapse border border-white/70 mt-4 w-full rounded-lg overflow-hidden'>
            <thead>
              <tr className='border-b border-white/10'>
                <th className='px-3 py-3'>Command</th>
                <th className='px-3 py-3'>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b border-white/10'>
                <td className='pl-3 pr-8 py-3 w-[280px]'><code><Badge label='boot sync login'/></code></td>
                <td className='px-3 py-3'>Connect Boot to your GitHub account</td>
              </tr>
              <tr className='border-b border-white/10'>
                <td className='pl-3 pr-8 py-3 w-[280px]'><code><Badge label='boot sync --push'/></code></td>
                <td className='px-3 py-3'>Upload saved commands/templates to GitHub</td>
              </tr>
              <tr className='border-b border-white/10'>
                <td className='pl-3 pr-8 py-3 w-[280px]'><code><Badge label='boot sync --pull'/></code></td>
                <td className='px-3 py-3'>Download latest setup from GitHub</td>
              </tr>
              <tr>
                <td className='pl-3 pr-8 py-3 w-[280px]'><code><Badge label='boot sync logout'/></code></td>
                <td className='px-3 py-3'>Log out from your GitHub account</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Verification */}
        <section className='py-6 rounded-lg shadow-md space-y-4'>
          <h2 className='text-2xl font-semibold mb-2'>Verify Installation</h2>
          <CodeBlockTabs singleCode={`boot help`} type="bash" />
          <p className='text-white/70 mt-2'>Expected output:</p>
          <CodeBlockTabs singleCode={`Available Commands:
  save        Save a new command
  run         Run a saved command
  create      Scaffold a new project
  list        Show all saved commands
  sync        Sync commands with GitHub
  delete      Remove a saved command`} 
            type="bash"
          />
          <p className='text-green-400 font-semibold mt-2'>🎉 Congratulations! Boot CLI is installed successfully.</p>
        </section>

        {/* Next Steps */}
        <section className='py-6 rounded-lg shadow-md space-y-4'>
          <h2 className='text-2xl font-semibold mb-2'>Next Steps</h2>
          <ul className='list-decimal list-inside text-white/70 space-y-2'>
            <li><a href="#" className='text-blue-500 underline'>Getting Started</a> — Learn to save, list, and run commands</li>
            <li><a href="#" className='text-blue-500 underline'>Command Management</a> — Organize your saved commands</li>
            <li><a href="#" className='text-blue-500 underline'>Project Scaffolding</a> — Generate full project templates</li>
            <li><a href="#" className='text-blue-500 underline'>GitHub Sync</a> — Keep your setup consistent across devices</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default InstallationPage
