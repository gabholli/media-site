import React from 'react'
import Link from 'next/link'
import SearchForm from './SearchForm'

export default function TopLinks() {
    return (
        <nav className='flex flex-col md:flex-row justify-center items-center mt-6 gap-x-12'>
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
            <SearchForm />
        </nav>
    )
}

