import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

export default function NavBarComp() {
    const [navOpen ,setNavOpen] = useState(false);

    const openMenu = () => {
        setNavOpen(!navOpen);
        document.body.classList.toggle('overflow-hidden');
    }
  return (
    <section className="container mx-auto max-w-7xl px-4">
      <div className="flex justify-between items-center mt-6">
        <div className="hidden md:flex md:flex-shrink-0 md:w-14">
          <img src="images/Logo.png" alt="" />
        </div>
        <div className=" hidden md:flex md:justify-center md: bg-white md:h-8 md:w-2/3 md:border md:rounded-sm">
          <ul className="md:flex gap-8 items-center text-black text-sm font-koulen">
            <li>HOME</li>
            <li>SHOP</li>
            <li>ABOUT</li>
            <li>BLOG</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="lg:hidden md:hidden flex-col">
          <button onClick={openMenu}>
            {navOpen ? <IoMdClose size="20px" /> : <CiMenuBurger size="20px" />}
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <FaSearch />
          <FiShoppingBag />
        </div>
      </div>
      {navOpen && (
          <div className="absolute z-20 bg-black w-full h-screen flex flex-col items-center md:hidden">
            <ul className="items-center flex flex-col gap-4 text-white text-sm font-koulen">
              <li>HOME</li>
              <li>SHOP</li>
              <li>ABOUT</li>
              <li>BLOG</li>
              <li>CONTACT</li>
            </ul>
          </div>
        )}
    </section>
  );
}
