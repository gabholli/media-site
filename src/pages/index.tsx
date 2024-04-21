import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Movie } from '@/types/types'
import Image from 'next/image';

function Index() {

  const [loading, setLoading] = useState(false)
  const [movieData, setMOvieData] = useState<Movie[]>([])

  useEffect(() => {
    setLoading(true)
    axios.get(`/api/movie?query=${encodeURIComponent("basketball")}`)
      .then(response => {
        console.log(response.data.results)
        setMOvieData(response.data.results)
      })
      .catch(error => {
        console.error("There was an error", error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-svh">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
          fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
          <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite"
            type="rotate" values="0 12 12;360 12 12" /></path></svg>
      </div>
    )
  }

  const movieList = movieData?.map(movie => {
    return (
      <section
        className="p-6"
        key={movie.id}>
        <div
          className='grid grid-areas-card bg-zinc-800 p-6 gap-y-4 text-center'>
          <Image className="grid-in-image"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="Movie"
            width={500}
            height={500} />
          <h1 className='grid-in-title text-3xl'>{movie.title}</h1>
          <p className='grid-in-overview text-left text-sm'>{movie.overview}</p>
        </div>
      </section>
    )
  })

  return (
    <div>
      {movieList}
    </div>
  )
}

export default Index