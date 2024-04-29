import BackToTopButton from '@/components/BackToTopButton'
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import MediaContext from '@/context/MediaProvider'

const Watchlist = () => {

    const [watchlistData, setWatchlistData] = useState([])

    useEffect(() => {
        const savedData = typeof window !== 'undefined' ? localStorage.getItem('watchlist') : null;
        if (savedData) {
            setWatchlistData(JSON.parse(savedData))
        }
    }, [])
    console.log(watchlistData)

    const clearWatchlist = () => {
        localStorage.clear()
    }

    return (
        <>
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
            <div>Watchlist</div>
            <button onClick={clearWatchlist}>Clear Watchlist</button>
            <BackToTopButton />

        </>
    )
}

export default Watchlist