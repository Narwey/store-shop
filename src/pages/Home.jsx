import React from 'react'
import Navbar from '../components/navbar'
import PopularNow from '../components/PopularNow'
import JustDropped from '../components/JustDropped'

export default function store() {
  return (
    <>
      {/* <Navbar /> */}
      <PopularNow />
      <JustDropped />
    </>
  )
}
