"use client"
import { Menu, } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
const links = [
  { id: 1, title: "HOME", url: "/" },
  { id: 2, title: "SHOP", url: "/shop" },
  { id: 3, title: "ABOUT", url: "/about" },
  { id:4, title: "CONTACT", url: "/contact"},
];


export const MenueComponents = () => {
     const [open,setOpen] = useState(false)
  return (
        
        <div>
          {!open ? (
            <Menu className='text-black md:hidden'onClick={()=>setOpen(true)}/>
          ) : (
            <Image src="/close.png" alt="" width={20} height={20} onClick={()=>setOpen(false)}/>
       )}

       {open && ( 
    <div className='bg-white text-black absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-1xl z-5'>
         {links.map(item=>(
              <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>
                {item.title}</Link>
            ))}
       </div>)}
          
        </div>  
    
  )}
    
export default MenueComponents;
