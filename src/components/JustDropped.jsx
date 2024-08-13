import React from 'react'
import Product from './shared/Product'
import wampis5 from '../assets/wampis5.png'
import wampis6 from '../assets/wampis6.png'
import demonSlayer from '../assets/demon-slayer.png'
import aot from '../assets/aot.png'
import gokuSon from '../assets/goku-son.png'
import love from '../assets/love.png'
import tokyoGhoul from '../assets/tokyo-ghoul.png'
import gogo from '../assets/gogo.png'


function JustDropped() {
    return (
        <section className='container mx-auto max-w-7xl px-4'>
            <div className='my-10 flex justify-between items-center'>
                <h2 className='font-anton text-4xl tracking-wider'>JUST DROPPED</h2>
            </div>

            <div className='grid grid-cols-[repeat(auto-fit,minmax(272px,1fr))] gap-x-3 gap-y-10'>
                <Product color='#FFE500' img={wampis5} />
                <Product color='#DE0010' img={demonSlayer} />
                <Product color='#0E6C93' img={gogo} />
                <Product color='#E3007B' img={wampis6} />
                <Product color='#A2A2A2' img={aot} />
                <Product color='#EF6F4C' img={gokuSon} />
                <Product color='#ABA5AB' img={love} />
                <Product color='#EC2027' img={tokyoGhoul} />
            </div>

        </section>
    )
}

export default JustDropped