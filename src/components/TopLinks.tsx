import React from 'react'
import Link from 'next/link'

export default function TopLinks() {
    return (
        <div className='flex justify-center items-center mt-6 gap-x-8 '>
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
        </div>
    )
}

