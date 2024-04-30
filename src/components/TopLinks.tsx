import React from 'react'
import Link from 'next/link'

const TopLinks = () => {
    return (
        <nav className='grid grid-areas-topLinksMobile
            items-center gap-y-4 gap-x-8 text-center md:flex'>

            <Link
                className='grid-in-home underline text-xl'
                href="/">
                Home
            </Link>

            <Link
                className='grid-in-favorites underline text-xl'
                href="/watchlist/Watchlist"
            >
                Favorites
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
                className='grid-in-tv underline text-xl text-center'
                href="/">
                TV
            </Link>
        </nav>
    )
}

export default TopLinks