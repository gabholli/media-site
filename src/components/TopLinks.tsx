import React from 'react'
import Link from 'next/link'

const TopLinks = () => {
    return (
        <nav className='flex flex-col md:flex-row justify-center items-center mt-12 gap-x-12'>
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
        </nav>
    )
}

export default TopLinks