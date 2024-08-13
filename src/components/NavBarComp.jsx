import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi"; 

export default function NavBarComp() {
  return (
    <section className="container mx-auto max-w-7xl px-4">
      <div className='flex justify-between items-center mt-6 mb-20'>
        <div className='flex flex-shrink-0 w-14'>
          <img src="images/Logo.png" alt="" />
        </div>
        <div className='flex justify-center bg-white h-8 md:w-2/3 border rounded-xl md:rounded-sm'>
            <ul className='flex gap-8 items-center text-black text-sm font-koulen'>
                <li>HOME</li>
                <li>SHOP</li>
                <li>ABOUT</li>
                <li>BLOG</li>
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
