import React from 'react'
import NavBarComp from '../components/NavBarComp'
import PopularNow from '../components/PopularNow'
import JustDropped from '../components/JustDropped'
import narutoBanner from '../assets/tshirt-anime.png'
import Footer from '../components/Footer'
import NewCollection from '../components/NewCollection'

export default function store() {
  return (
    <>
      <NavBarComp />
      <NewCollection/>
      <PopularNow />
      <JustDropped />
      <section className='container mx-auto max-w-7xl px-4 mt-20'>
        <h2 className='font-acme text-4xl text-center tracking-wider mb-10'>T SHIRT ANIME</h2>
        <div className='mb-3'>
          <img src={narutoBanner} alt="naruto banner" />
        </div>
        <div className='mt-10'>
          <h3 className='font-abhayaLibre text-5xl tracking-wider text-center'>Our Approach to fashion design </h3>
          <p className='font-abhayaLibre text-center tracking-wider max-w-xl mx-auto mt-5'>at elegant vogue , we blend creativity with craftsmanship to create fashion that transcends trends and stands the test of time each design is meticulously crafted, ensuring the highest quelity exqulsite finish</p>
        </div>
      </section>
      <Footer />
    </>
  )
}
