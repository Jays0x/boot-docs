import React from 'react'

function Badge({ label }: { label: string }) {
  return (
    <div className='inline-flex items-center bg-[#2C2C2C] h-[25px] px-3 rounded-[5px] border border-white/10'>
      {label}
    </div>
  )
}

export default Badge
