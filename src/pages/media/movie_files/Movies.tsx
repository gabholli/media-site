import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Movie, MovieItem } from '@/types/types'
import Link from 'next/link'
import TopLinks from '@/components/TopLinks';
import SearchForm from '@/components/SearchForm';

const Movies = () => {

  const movieItem = global?.window?.localStorage?.getItem("search")
  let getMovieFromLocalStorage: MovieItem | null = null

  if (movieItem) {
    try {
      getMovieFromLocalStorage = JSON.parse(movieItem) as MovieItem
    } catch (error) {
      console.error("Parsing error in getUserFromLocalStorage:", error)
    }
  }
  const [loading, setLoading] = useState(false)
  const [movieData, setMovieData] = useState<Movie[]>([])
  const [search, setSearch] = useState("")
  const [searchValue, setSearchValue] = useState(getMovieFromLocalStorage)

  useEffect(() => {
    setLoading(true)
    axios.get(`/api/movies/movie?query=${encodeURIComponent(search)}`)
      .then(response => {
        console.log(response.data.results)
        setMovieData(response.data.results)
      })
      .catch(error => {
        console.error("There was an error", error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [search])

  const handleSubmit = (event: any) => {
    event.preventDefault()
    setSearch(event.target.searchValue.value)
  }

  const handleChange = (event: any) => {
    setSearchValue(event.target.value)
    localStorage.setItem("search", JSON.stringify(event.target.value))
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

  const validMovie = movieData?.filter(movie => movie.poster_path)

  const movieList = validMovie?.map(movie => {
    return (
      <React.Fragment key={movie.id}>
        {movie.poster_path && (
          <div
            className='flex flex-col justify-between items-center bg-zinc-800 p-6 gap-y-8 text-center m-6
          rounded-3xl'>
            <img className="h-64 w-full object-scale-down rounded-3xl"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="Movie"
            ></img>
            {movie.title && <h1 className='text-3xl font-bold'>{movie.title}</h1>}
            {/* <p className='text-left text-sm'>{movie.overview}</p> */}
            <p><span className='font-semibold text-2xl'>Popularity score: </span>
              <span className='font-normal text-xl'>{movie.popularity}</span></p>
            {movie.release_date && <p><span className='font-semibold text-2xl'>Release date: </span>
              <span className='font-normal text-xl'>{movie.release_date}</span></p>}
            <div className='flex gap-x-4'>
              {"vote_average" in movie && <p><span className='font-semibold text-2xl'>Average votes: </span>
                <span className='font-normal text-xl'>{movie.vote_average}</span></p>}
              {"vote_count" in movie && <p><span className='font-semibold text-2xl'>Vote count: </span>
                <span className='font-normal text-xl'>{movie.vote_count}</span></p>}
            </div>
            <Link
              href={`./movie/${movie.id}`}
              className='flex justify-center items-center
            bg-neutral-400 hover:bg-zinc-500 active:bg-neutral-600
              px-4 py-2 w-full rounded-3xl font-black'>
              Details
            </Link>
          </div>
        )
        }
      </React.Fragment>
    )
  })

  return (
    <>
      <div className='flex flex-col lg:flex-row justify-between items-center
         py-9 lg:mx-16 gap-y-6 gap-x-8'>
        <h1 className='text-4xl mt-1 text-center'>Media Finder - Movies</h1>
        <section className='flex flex-col lg:flex-row px-2 gap-8 '>
          <TopLinks />
          <SearchForm
            submit={handleSubmit}
            change={handleChange}
            value={searchValue || ""}
            placeholderText="Enter movie name..."
            name="searchValue"
          />
        </section>
      </div>
      <hr></hr>
      {movieList.length > 0 ? <h1 className='text-4xl mt-12 text-center'>Movies</h1> :
        <h1 className='text-4xl mt-28 md:mt-48 text-center'>
          No data currently...
        </h1>}
      <main className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 md:p-8'>
        {movieList}
      </main>
    </>
  )
}

export default Movies