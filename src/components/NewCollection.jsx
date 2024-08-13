import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";


export default function NewCollection() {
  return (
    <section className="container mx-auto max-w-7xl px-3">
      <div className='flex flex-col items-center gap-2'>
        <h1 className="text-lg md:text-6xl font-koulen mt-8">WHERE STYLE SPEAKS,TRENDS RESONATE,</h1>
        <h1 className='text-xl md:text-7xl font-bold font-inter '>Fashion Flourishes</h1>
        <p className='text-sm font-abhayaLibre text-center max-w-2xl mt-2'>
          at DRAKS , we blend creativity with craftsmanship to create fashion
          that transcends trends and stands the test of time each design is
          meticulously crafted, ensuring the highest quality exclusive finish
        </p>
        <div className="flex justify-center mt-4">
          <button className="bg-white text-black font-inter py-1.5 px-3 text-xs flex items-center gap-2">
            New collection
            <BsArrowRightCircleFill size="20px" />
          </button>
          
        </div>
      </div>
    </section>
  );
}
