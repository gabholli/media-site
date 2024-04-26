import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import TopLinks from '@/components/TopLinks'

export default function MovieDetails() {

  const router = useRouter()
  const { query } = router
  const [loading, setLoading] = useState(false)
  const [moviesData, setMoviesData] = useState<any>([])
  console.log(router)
  useEffect(() => {
    setLoading(true)
    if (router.isReady) {
      axios.get(`/api/movies/movieId/${query.movieId}`)
        .then(response => {
          console.log(response.data)
          setMoviesData(response.data)
        })
        .catch(error => {
          console.error("There was an error", error)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [router.isReady])

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


  return (
    <>
      <TopLinks />
      <div className='p-6 flex flex-col gap-y-8'>
        Movie details here for ID: {query.movieId}
        <img className="h-96 w-full object-cover"
          src={`https://image.tmdb.org/t/p/original${moviesData.poster_path}`}
          alt="Movie">
        </img>
        <h1
          className='text-center'>
          {moviesData.original_title}
        </h1>
      </div>
    </>
  )
}

