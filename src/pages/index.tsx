import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const Index = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-svh'>
      <h1 className='text-5xl'>Select category of interest:</h1>
      <nav>
        <ul className='list-disc'>
          <li>
            <Link href="/media/movie_files/Movies">Movies</Link>
          </li>
          <li>
            <Link href="/media/peopleFiles/People">People</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Index