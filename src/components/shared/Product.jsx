import React from 'react'
import { CiHeart } from "react-icons/ci";

function Product({color, img}) {
    return (
        <div>
            <div className='relative flex justify-center items-center rounded-2xl h-[270px]' style={{backgroundColor: color}}>
                <img src={img} alt="" />

                <div className='rounded-full p-2 absolute right-3 top-3 bg-white cursor-pointer'>
                    <CiHeart color='black' size={19} />
                </div>
            </div>
            <h3 className='font-aBeeZee text-base mt-1' style={{color: color}}>Hental</h3>
            <h4 className='font-alatsi text-xl mt-1'>Hental T-Shirt</h4>
            <p className='font-alatsi text-[#666666] text-sm'>€30,95</p>  
        </div>
  )
}

export default Product