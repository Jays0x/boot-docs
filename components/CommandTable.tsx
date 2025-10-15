// File: components/CommandTable.tsx
import React from "react"


export default function CommandTable({ data }: { data: { command: string; description: string }[] }) {
return (
<table className="w-full border-collapse border border-[#222] text-sm text-[#eaeaea]">
<thead>
<tr className="bg-[#1a1a1a]">
<th className="border border-[#222] px-3 py-2 text-left">Command</th>
<th className="border border-[#222] px-3 py-2 text-left">Description</th>
</tr>
</thead>
<tbody>
{data.map((row) => (
<tr key={row.command} className="hover:bg-[#151515]">
<td className="border border-[#222] px-3 py-2 font-mono text-[#9f9f9f]">{row.command}</td>
<td className="border border-[#222] px-3 py-2">{row.description}</td>
</tr>
))}
</tbody>
</table>
)
}