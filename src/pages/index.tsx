import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Index() {
  return (
    <div>
      <h1 className='text-5xl'>Select type of list wanted:</h1>
      <nav>
        <Link href="/media/movie_files/Movies">Movies</Link>
      </nav>
    </div>
  )
}
