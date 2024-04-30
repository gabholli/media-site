import BackToTopButton from '@/components/BackToTopButton'
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import RemoveFromLocalStorageButton from '@/components/RemoveFromLocalStorageButton'
import { WatchlistInterface } from '@/types/types'

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
        localStorage.clear()
        window.location.reload()
    }

    const watchlistMovieData = watchlistData?.map(item => {
        return (
            <>
                {!item.name && (
                    <div key={item.id}
                        className='flex flex-col justify-between items-center bg-zinc-800 p-6 gap-y-8 
                rounded-3xl text-center m-6'>
                        <img className="h-64 w-full object-cover rounded-3xl"
                            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                            alt="item"
                        ></img>
                        <h1 className='text-3xl font-bold'>{item.title}</h1>
                        {/* <p className='text-left text-sm'>{item.overview}</p> */}
                        <p><span className='font-semibold'>Popularity score: </span><span className='font-normal'>{item.popularity}</span></p>
                        <p><span className='font-semibold'>Release date: </span><span className='font-normal'>{item.release_date}</span></p>
                        <div className='flex gap-x-4'>
                            <p><span className='font-semibold'>Average votes: </span><span className='font-normal'>{item.vote_average}</span></p>
                            <p><span className='font-semibold'>Vote count: </span><span className='font-normal'>{item.vote_count}</span></p>
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
                )
                }
            </>
        )
    })

    const watchlistPeopleData = watchlistData?.map(person => {
        return (
            <>
                {person.name && (
                    <div key={person.id}
                        className='flex flex-col justify-between items-center bg-zinc-800 p-6 gap-y-8 
                rounded-3xl text-center m-6'>
                        <img className="h-64 w-full object-cover rounded-3xl"
                            src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
                            alt="item"
                        ></img>
                        <h1 className='text-3xl font-bold'>{person.name}</h1>
                        <p><span className='font-semibold'>Popularity score: </span><span className='font-normal'>{person.popularity}</span></p>
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
                )
                }
            </>
        )
    })

    return (
        <>
            <div className='flex flex-col md:flex-row justify-between items-center py-9 md:mx-16 gap-y-4
                '>
                <h1 className='text-4xl mt-1 text-center'>Media Site</h1>
                <nav className='flex flex-col items-center md:flex-row gap-x-8 gap-y-4'>

                    <Link
                        className='underline text-xl text-center'
                        href="/">
                        Home
                    </Link>

                    <Link
                        className="underline text-xl"
                        href="/media/movie_files/Movies">
                        Movies
                    </Link>

                    <Link
                        className="underline text-xl"
                        href="/media/peopleFiles/People">
                        People
                    </Link>

                    <Link
                        className='underline text-xl'
                        href="/">
                        TV
                    </Link>

                    <button
                        className='underline text-xl'
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
                ) : null
            }
            <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3'>
                {watchlistMovieData}
                {watchlistPeopleData}
            </div>
            <BackToTopButton />

        </>
    )
}

export default Watchlist