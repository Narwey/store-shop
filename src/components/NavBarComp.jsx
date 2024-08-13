import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi"; 

export default function NavBarComp() {
  return (
    <section className="container mx-auto max-w-7xl px-4">
      <div className='flex justify-between'>
        <div className=''>
          <img src="images/Logo.png" alt="" />
        </div>
        <div className='flex bg-white h-8 m-14 pl-16 pr-16 border rounded-sm'>
            <ul className='flex gap-5 items-center text-black font-bold'>
                <li>HOME</li>
                <li>SHOW</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </div>
        <div className='flex gap-2 items-center'>
            <FaSearch/>
            <FiShoppingBag/>
        </div>
      </div>
    </section>
  );
}
