import BackToTopButton from '@/components/BackToTopButton'
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import MediaContext from '@/context/MediaContext'

const Watchlist = () => {

    const [watchlistData, setWatchlistData] = useState([])

    useEffect(() => {
        const savedData = typeof window !== 'undefined' ? localStorage.getItem('watchlist') : null;
        if (savedData) {
            setWatchlistData(JSON.parse(savedData))
        }
    }, [])
    console.log(watchlistData)
    return (
        <>
            <Link
                className='underline'
                href="/">
                Back to main page
            </Link >
            <div>Watchlist</div>
            <BackToTopButton />

        </>
    )
}

export default Watchlist