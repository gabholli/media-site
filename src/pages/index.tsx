import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Index = () => {
  return (
    <main className='flex flex-col items-center justify-center min-h-svh'>
      <nav className='grid grid-areas-homePageMobile lg:grid-areas-homePageLarge 
      lg:grid-cols-[1fr_100px_1fr_100px_1fr] place-items-center p-6 gap-y-10'>
        <h1 className='grid-in-greeting text-3xl lg:text-4xl text-center'>Welcome to the Media Site</h1>
        <h1 className='text-2xl lg:text-3xl grid-in-title text-center'>Select category of interest:</h1>
        <img
          className='h-64 w-full bg-cover object-cover md:size-96 grid-in-image1 rounded-3xl'
          src="/movie-theater.jpg"
          alt="Theater"
        ></img>
        <img
          className='h-64 w-full object-cover md:size-96 grid-in-image2 rounded-3xl'
          src="/people.jpg"
          alt="People"
        ></img>
        <img
          className='h-64 w-full object-cover md:size-96 grid-in-image3 rounded-3xl'
          src="/TV.jpg"
          alt="TV"
        ></img>
        <Link
          className="grid-in-link1 text-xl"
          href="/media/movie_files/Movies">
          Movies
        </Link>
        <Link
          className="grid-in-link2 text-xl"
          href="/media/peopleFiles/People">
          People
        </Link>
        <Link
          className="grid-in-link3 text-xl"
          href="/media/tvFiles/TV">
          TV Shows
        </Link>
      </nav>
    </main>
  )
}

export default Index