import BackToTopButton from '@/components/BackToTopButton'
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import MediaContext from '@/context/MediaContext'
import TopLinks from '@/components/TopLinks'
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

    const watchlistDataMap = watchlistData?.map(item => {
        return (

            <div key={item.id}
                className='flex flex-col justify-between items-center bg-zinc-800 p-6 gap-y-8 text-center m-6'>
                <img className="h-64 w-full object-cover"
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
                        href={`./item/${item.id}`}
                        className='flex justify-center items-center
                        bg-neutral-400 hover:bg-zinc-500 active:bg-neutral-600
                        px-4 py-2 w-full rounded font-black'>
                        Details
                    </Link>
                </div>
            </div >

        )
    })

    return (
        <>
            <div className='flex flex-col md:flex-row justify-between items-center mt-9 md:mx-16 '>
                <h1 className='text-4xl mt-1'>Media Site</h1>
                <nav className='flex flex-col items-center md:flex-row gap-x-8'>
                    <Link
                        className='underline'
                        href="/">
                        Back to main page
                    </Link >
                    <Link
                        className="underline"
                        href="/media/movie_files/Movies">
                        Movies
                    </Link>
                    <Link
                        className="underline"
                        href="/media/peopleFiles/People">
                        People
                    </Link>
                    <button
                        className='underline'
                        onClick={clearWatchlist}>
                        Clear Watchlist
                    </button>
                </nav>
            </div>
            <h1 className='text-4xl mt-9 text-center'>Watchlist</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3'>
                {watchlistDataMap}
            </div>
            <BackToTopButton />

        </>
    )
}

export default Watchlist