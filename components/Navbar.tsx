import Image from 'next/image'
import React from 'react'
import Badge from './ui/Badge'
import Search from './ui/Search'
import Link from 'next/link'


function Navbar() {
  return (
    <div className='flex items-center justify-between w-full'>
      <div className='flex gap-4 items-center'>
          <Image src='boot-logo.svg' alt='boot logo' width={40} height={40} />

          <div className='flex gap-3 items-center'>
               <Badge label="Docs" />
               <p>v1.0.0</p>
          </div>       

      </div>

      <div>
        <Search />
      </div>

      <div className='flex gap-3 items-center'>
         <div className='flex gap-3 items-center'>
          <Link href='#' className='flex items-center justify-center bg-[#0F0F0F] h-[35px] px-3 rounded-[10px] border border-white/10 hover:bg-[#121212] font-medium'>Report Issue</Link>

          <Link href='#' className='flex items-center justify-center bg-[#0F0F0F] h-[35px] px-3 rounded-[10px] border border-white/10 hover:bg-[#121212] font-medium'>Contribute</Link>
          
          <Link href='#' className='flex items-center justify-center bg-[#181818] h-[35px] px-3 rounded-[10px] border border-white/10 hover:bg-[#121212] font-medium'>Become a Sponsor</Link>
         </div>

         <div className='flex gap-3 items-center'>
            <Link href='#' className='flex items-center justify-center bg-[#181818] rounded-[10px] border border-white/10 hover:bg-[#121212] w-[35px] h-[35px]'>
             <Image src='github.svg' alt='github icon' width={20} height={20} />
            </Link>

            <Link href='#' className='flex items-center justify-center bg-[#181818] rounded-[10px] border border-white/10 hover:bg-[#121212] w-[35px] h-[35px]'>
             <Image src='x.svg' alt='github icon' width={20} height={20} />
            </Link>

            <Link href='#' className='flex items-center justify-center bg-[#181818] rounded-[10px] border border-white/10 hover:bg-[#121212] w-[35px] h-[35px]'>
             <Image src='discord.svg' alt='github icon' width={20} height={20} />
            </Link>
         </div>
      </div>
    </div>
  )
}

export default Navbar