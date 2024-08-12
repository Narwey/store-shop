import React from 'react'
import Product from './shared/Product'

function PopularNow() {
  return (
    <section className='container mx-auto max-w-7xl px-4'>
        <h2 className='font-anton bg-red-400'>POPULAR NOW</h2>

        <Product />
    </section>
  )
}

export default PopularNow