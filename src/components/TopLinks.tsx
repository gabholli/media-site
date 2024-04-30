import React from 'react'
import Link from 'next/link'

const TopLinks = () => {
    return (
        <nav className='lg:ml-auto flex flex-col md:flex-row justify-center 
            items-center gap-y-4 gap-x-8 text-center'>

            <Link
                className='underline text-xl'
                href="/">
                Home
            </Link>

            <Link
                className='underline text-xl'
                href="/watchlist/Watchlist"
            >
                Favorites
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
                className='underline text-xl text-center'
                href="/">
                TV
            </Link>
        </nav>
    )
}

export default TopLinks