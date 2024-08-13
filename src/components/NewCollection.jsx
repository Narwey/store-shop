import React from 'react'

export default function NewCollection() {
  return (
    <section className="container mx-auto max-w-7xl px-3">
      <div className='flex flex-col items-center gap-4'>
        <h1 className="text-xl font-bold">WHERE STYLE SPEAKS,TRENDS RESONATE,</h1>
        <h1 className='text-3xl font-bold'>Fadhion Flourishes</h1>
        <p className='text-xs'>
          at draks , we blend creativity with craftsmanship to create fashion
          that transcends trends and stands the test of time each design is
          meticulously crafted, ensuring the highest quelity exqulsite finish
        </p>
        <div className="flex justify-center">
          <button className="bg-white text-black py-1.5 px-3 text-sm">
            New collection
          </button>
        </div>
      </div>
    </section>
  );
}
