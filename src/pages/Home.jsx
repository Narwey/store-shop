import React from 'react'
import NavBarComp from '../components/NavBarComp'
import PopularNow from '../components/PopularNow'
import JustDropped from '../components/JustDropped'
import NewCollection from '../components/NewCollection'

export default function store() {
  return (
    <>
      {/* <NavBarComp /> */}
      <NewCollection/>
      <PopularNow />
      <JustDropped />
    </>
  )
}
