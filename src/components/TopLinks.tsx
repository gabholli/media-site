import React from 'react'
import Link from 'next/link'

const TopLinks = () => {
    return (
        <nav className='lg:ml-auto flex flex-col md:flex-row justify-center 
            items-center gap-y-6 gap-x-8 mt-8'>
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