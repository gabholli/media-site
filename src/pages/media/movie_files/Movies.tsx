import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Movie } from '@/types/types'
import Link from 'next/link'
import BackToHome from '@/components/TopLinks';
import TopLinks from '@/components/TopLinks';

export default function Movies() {

  const [loading, setLoading] = useState(false)
  const [movieData, setMOvieData] = useState<Movie[]>([])

  useEffect(() => {
    setLoading(true)
    axios.get(`/api/movies/movie?query=${encodeURIComponent("basketball")}`)
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

      <div key={movie.id}
        className='flex flex-col justify-between items-center bg-zinc-800 p-6 gap-y-8 text-center m-6'>
        <img className="h-96 w-full object-cover"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="Movie"
        ></img>
        <h1 className='text-3xl font-bold'>{movie.title}</h1>
        {/* <p className='text-left text-sm'>{movie.overview}</p> */}
        <p><span className='font-semibold'>Popularity score: </span><span className='font-normal'>{movie.popularity}</span></p>
        <p><span className='font-semibold'>Release date: </span><span className='font-normal'>{movie.release_date}</span></p>
        <div className='flex gap-x-4'>
          <p><span className='font-semibold'>Average votes: </span><span className='font-normal'>{movie.vote_average}</span></p>
          <p><span className='font-semibold'>Vote count: </span><span className='font-normal'>{movie.vote_count}</span></p>
        </div>
        <div className='flex gap-x-4'>
          <Link
            href={`./MovieDetails?id=${movie.id}`}
            className='bg-zinc-500 px-4 py-2 rounded font-black'>Details</Link>
          <button className='bg-zinc-500 px-4 py-2 rounded font-black'>Add to watchlist</button>
        </div>
      </div >

    )
  })

  return (
    <>
      <TopLinks />
      <main className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3'>
        {movieList}
      </main>
    </>
  )
}