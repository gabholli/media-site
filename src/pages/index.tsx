import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Index = () => {
  return (
    <main className='flex flex-col items-center justify-center min-h-svh'>
      <nav className='grid grid-areas-homePageMobile lg:grid-areas-homePageMedium 
      lg:grid-cols-[1fr_100px_1fr] place-items-center px-4 gap-y-10'>
        <h1 className='grid-in-greeting text-3xl lg:text-4xl text-center'>Welcome to the Media Site</h1>
        <h1 className='text-2xl lg:text-3xl grid-in-title text-center'>Select category of interest:</h1>
        <img
          className='h-64 w-full bg-cover object-cover md:size-96 grid-in-image1'
          src="/movie-theater.jpg"></img>
        <img
          className='h-64 w-full object-cover md:size-96 grid-in-image2'
          src="/people.jpg"></img>
        <Link
          className="grid-in-link1"
          href="/media/movie_files/Movies">
          Movies
        </Link>
        <Link
          className="grid-in-link2"
          href=" /media/peopleFiles/People">
          People
        </Link>
      </nav>
    </main>
  )
}

export default Index