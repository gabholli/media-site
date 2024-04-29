import React from 'react'
import Link from 'next/link'

const TopLinks = () => {
    return (
        <nav className='lg:ml-auto flex flex-col md:flex-row justify-center 
            items-center gap-y-4 gap-x-8'>
            <Link
                className='underline text-xl'
                href="/">
                Back to main page
            </Link>
            <Link
                className='underline text-xl'
                href="/watchlist/Watchlist"
            >
                Watchlist
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
        </nav>
    )
}

export default TopLinks