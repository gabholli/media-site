import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import TopLinks from '@/components/TopLinks'
import SearchForm from '@/components/SearchForm'
import BackToTopButton from '@/components/BackToTopButton'
import ToWatchlistButton from '@/components/ToWatchlistButton'
import { MovieItem, MovieLocalStorage } from '@/types/types'
import { getFromLocalStorage, saveToLocalStorage } from '@/utils/lcoalStorageFunctions'

const MovieDetails = () => {

  const movieItem = global?.window?.localStorage?.getItem("movie")
  let getMovieFromLocalStorage: MovieItem | null = null

  if (movieItem) {
    try {
      getMovieFromLocalStorage = JSON.parse(movieItem) as MovieItem
    } catch (error) {
      console.error("Parsing error in getUserFromLocalStorage:", error)
    }
  }

  const router = useRouter()
  const { query } = router
  const [loading, setLoading] = useState(false)
  const [moviesData, setMoviesData] = useState<any>({})
  const [watchlistValues, setWatchlistValues] = useState([])
  const [search, setSearch] = useState<any>({
    movie: getMovieFromLocalStorage
  })

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

  const handleSubmit = (event: any) => {
    event.preventDefault()
    setSearch(event.target.movie.value)
    console.log(search)
  }

  const handleChange = (event: any) => {
    setSearch({ [event.target.name]: event.target.value })
    localStorage.setItem("movie", JSON.stringify(event.target.value))
  }

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
      <div className='flex justify-center items-center mt-6 gap-x-12'>
        <TopLinks />
        <SearchForm
          submit={handleSubmit}
          name="movie"
          value={getMovieFromLocalStorage || ""}
          change={handleChange} />
      </div>
      <main className='p-6 flex flex-col gap-y-8 items-center justify-center min-h-svh'>
        <img className="h-96 w-full lg:w-1/2 object-scale-down lg:float-left"
          src={`https://image.tmdb.org/t/p/original${moviesData.poster_path}`}
          alt="Movie">
        </img>
        <h1
          className='text-center text-3xl font-bold'>
          {moviesData.title}
        </h1>
        <p className='text-2xl'><span className='font-semibold'>
          Popularity score: </span>{moviesData.popularity}</p>
        <p className='text-2xl'><span className='font-semibold'>
          Release date:
        </span> {moviesData.release_date}</p>
        {moviesData.origin_country && <p className='text-2xl'>
          <span className='font-semibold'>
            Country of origin: </span>
          {moviesData.origin_country[0]}
        </p>}
        <p className='text-lg'>{moviesData.overview}</p>
        <ToWatchlistButton
          handleClick={() => saveToLocalStorage("watchlist", moviesData)}
        />
      </main>
      <BackToTopButton />
    </>
  )
}

export default MovieDetails