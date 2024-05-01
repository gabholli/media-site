import BackToTopButton from '@/components/BackToTopButton'
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import RemoveFromLocalStorageButton from '@/components/RemoveFromLocalStorageButton'
import { WatchlistInterface } from '@/types/types'
import toast from 'react-hot-toast'

const Watchlist = () => {

    const [watchlistData, setWatchlistData] = useState<WatchlistInterface[]>([])

    useEffect(() => {
        const savedData = typeof window !== 'undefined' ? localStorage.getItem('watchlist') : null;
        if (savedData) {
            setWatchlistData(JSON.parse(savedData))
        }
    }, [])

    console.log(watchlistData)

    const clearWatchlist = () => {
        const value = localStorage.getItem('watchlist')
        if (value === null || value === '') {
            toast.error("Your favorites list is already clear")
        } else {
            toast.success("Your favorites list is now clear")
            localStorage.clear()
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        }

    }

    const watchlistMovieData = watchlistData?.map(item => {
        if ("revenue" in item) {
            return (
                <React.Fragment key={item.id}>
                    <div
                        className='flex flex-col justify-between items-center bg-zinc-800 p-6 gap-y-8 
                rounded-3xl text-center m-6'>
                        <img className="h-64 w-full object-scale-down rounded-3xl"
                            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                            alt="Movie"
                        ></img>
                        <h1 className='text-3xl font-bold'>{item.title}</h1>
                        <p><span className='font-semibold text-2xl'>Popularity score: </span>
                            <span className='font-normal text-xl'>{item.popularity}</span></p>
                        <p><span className='font-semibold text-2xl'>Release date: </span>
                            <span className='font-normal text-xl'>{item.release_date}</span></p>
                        <div className='flex gap-x-4'>
                            <p><span className='font-semibold text-2xl'>Average votes: </span>
                                <span className='font-normal text-xl'>{item.vote_average}</span></p>
                            <p><span className='font-semibold text-2xl'>Vote count: </span>
                                <span className='font-normal text-xl'>{item.vote_count}</span></p>
                        </div>
                        <div className='flex gap-x-12'>
                            <RemoveFromLocalStorageButton
                                itemToRemove={item.id}
                            />
                            <Link
                                href={`/media/movie_files/movie/${item.id}`}
                                className='flex justify-center items-center
                        bg-neutral-400 hover:bg-zinc-500 active:bg-neutral-600
                        px-4 py-2 w-full rounded font-black lg:w-44 md:w-72'>
                                Details
                            </Link>
                        </div>
                    </div >
                </React.Fragment>
            )
        }
        return null
    })

    const watchlistPeopleData = watchlistData?.map(person => {
        if ("place_of_birth" in person) {
            return (
                <React.Fragment key={person.id}>
                    <div
                        className='flex flex-col justify-between items-center bg-zinc-800 p-6 gap-y-8 
                rounded-3xl text-center m-6'>
                        <img className="h-64 w-full object-scale-down rounded-3xl"
                            src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
                            alt="Person"
                        ></img>
                        <h1 className='text-3xl font-bold'>{person.name}</h1>
                        <p><span className='font-semibold text-2xl'>Popularity score: </span>
                            <span className='font-normal text-xl'>{person.popularity}</span></p>
                        <div className='flex gap-x-12'>
                            <RemoveFromLocalStorageButton
                                itemToRemove={person.id}
                            />
                            <Link
                                href={`/media/peopleFiles/people/${person.id}`}
                                className='flex justify-center items-center
                        bg-neutral-400 hover:bg-zinc-500 active:bg-neutral-600
                        px-4 py-2 w-full rounded font-black lg:w-44 md:w-72'>
                                Details
                            </Link>
                        </div>
                    </div >
                </React.Fragment>
            )
        }
        return null
    })

    const watchlistTVData = watchlistData?.map(show => {
        if ("first_air_date" in show) {
            return (
                <React.Fragment key={show.id}>
                    <div
                        className='flex flex-col justify-between items-center bg-zinc-800 p-6 gap-y-8 text-center m-6
              rounded-3xl'>
                        <img className="h-64 w-full object-scale-down rounded-3xl"
                            src={`https://image.tmdb.org/t/p/original${show.poster_path}`}
                            alt="TV Show"
                        ></img>
                        <h1 className='text-3xl font-bold'>{show.name}</h1>
                        <p><span className='font-semibold text-2xl'>Popularity score: </span>
                            <span className='font-normal text-xl'>{show.popularity}</span></p>
                        <p><span className='font-semibold text-2xl'>First airing date: </span>
                            <span className='font-normal text-xl'>{show.first_air_date}</span></p>
                        <div className='flex gap-x-4'>
                            <p><span className='font-semibold text-2xl'>Average votes: </span>
                                <span className='font-normal text-xl'>{show.vote_average}</span></p>
                            <p><span className='font-semibold text-2xl'>Vote count: </span>
                                <span className='font-normal text-xl'>{show.vote_count}</span></p>
                        </div>
                        <div className='flex gap-x-12'>
                            <RemoveFromLocalStorageButton
                                itemToRemove={show.id}
                            />
                            <Link
                                href={`/media/tvFiles/tv/${show.id}`}
                                className='flex justify-center items-center
                        bg-neutral-400 hover:bg-zinc-500 active:bg-neutral-600
                        px-4 py-2 w-full rounded font-black lg:w-44 md:w-72'>
                                Details
                            </Link>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
        return null
    })

    return (
        <>
            <div className='flex flex-col md:flex-row justify-between items-center py-9 md:mx-16 gap-y-4
                '>
                <h1 className='text-4xl mt-1 text-center'>Media Site</h1>
                <nav className='md:flex flex-col place-items-center md:flex-row md:gap-x-4 md:gap-y-4
                    grid grid-areas-topLinksMobileFavorites gap-y-8'>

                    <Link
                        className='grid-in-home underline text-xl text-center'
                        href="/">
                        Home
                    </Link>

                    <Link
                        className="grid-in-movies underline text-xl"
                        href="/media/movie_files/Movies">
                        Movies
                    </Link>

                    <Link
                        className="grid-in-people underline text-xl"
                        href="/media/peopleFiles/People">
                        People
                    </Link>

                    <Link
                        className='grid-in-tv underline text-xl'
                        href="/media/tvFiles/TV">
                        TV
                    </Link>

                    <button
                        className='grid-in-clear underline text-xl'
                        onClick={clearWatchlist}>
                        Clear Favorites
                    </button>
                </nav>
            </div>
            <hr></hr>
            {
                watchlistData.length > 0 ? (
                    <h1 className='text-4xl mt-9 text-center'
                    >Favorites
                    </h1>
                ) : <h1 className='text-4xl mt-28 md:mt-48 text-center'>
                    No data currently...
                </h1>
            }
            <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 md:p-8'>
                {watchlistMovieData}
                {watchlistPeopleData}
                {watchlistTVData}
            </div>
            <BackToTopButton />

        </>
    )
}

export default Watchlist