import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from "next/legacy/image"

const Index = () => {
  return (
    <main className='flex flex-col items-center justify-center min-h-svh'>
      <nav className='grid grid-areas-homePageMobile py-10 lg:grid-areas-homePageLarge 
      lg:grid-cols-[1fr_25px_1fr_25px_1fr] min-[1440px]:grid-cols-[1fr_100px_1fr_100px_1fr] 
        place-items-center p-6 gap-y-10'>
        <h1 className='grid-in-greeting text-3xl lg:text-4xl text-center'>Welcome to Media Finder</h1>
        <h1 className='text-2xl lg:text-3xl grid-in-title text-center'>Select category of interest:</h1>
        <div className='h-64 w-full md:size-96 lg:size-72 xl:size-96 grid-in-image1 relative'>
          <Image
            className='rounded-3xl'
            src="/movie-theater.jpg"
            alt="Theater"
            objectFit='cover'
            objectPosition='center'
            layout='fill'
            priority
          />
        </div>
        <div className='h-64 w-full md:size-96 lg:size-72 xl:size-96 grid-in-image2 relative'>
          <Image
            className=' rounded-3xl'
            src="/people.jpg"
            alt="People"
            objectFit='cover'
            objectPosition='center'
            layout='fill'
          />
        </div>
        <div className='h-64 w-full md:size-96 lg:size-72 xl:size-96 grid-in-image3 relative'>
          <Image
            className='rounded-3xl'
            src="/TV.jpg"
            alt="TV"
            objectFit='cover'
            objectPosition='center'
            layout='fill'
          />
        </div>
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