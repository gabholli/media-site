import BackToTopButton from '@/components/BackToTopButton'
import React from 'react'
import Link from 'next/link'

export default function Watchlist() {
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