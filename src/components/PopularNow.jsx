import React from 'react'
import Product from './shared/Product'
import hentail from '../assets/hentail.png'
import wampis from '../assets/wampis.png'
import wampis2 from '../assets/wampis2.png'
import wampis3 from '../assets/wampis3.png'
import wampis4 from '../assets/wampis4.png'
import guts from '../assets/guts.png'

import { IoIosArrowDroprightCircle } from "react-icons/io";


function PopularNow() {
    return (
        <section className='container mx-auto max-w-7xl px-4'>
            <div className='my-10 flex justify-between items-center'>
                <h2 className='font-anton text-4xl tracking-wider'>POPULAR NOW</h2>
                <p className='font-alatsi text-[#7C7C7C] cursor-pointer text-xl flex items-center gap-2'>View all
                    <IoIosArrowDroprightCircle size={28}/>
                </p>
            </div>

            <div className='grid grid-cols-[repeat(auto-fit,minmax(272px,1fr))] gap-x-3 gap-y-10'>
                <Product color='#BBBBBB' img={hentail}/>
                <Product color='#C85A7F' img={wampis}/>
                <Product color='#2E5922' img={wampis2}/>
                <Product color='#9433E4' img={wampis3}/>
                <Product color='#DB1F26' img={guts}/>
                <Product color='#4DBEF1' img={wampis4}/>
                <Product color='#BBBBBB' img={hentail}/>
                <Product color='#BBBBBB' img={hentail}/>
            </div>

        </section>
    )
}

export default PopularNow