import React from 'react'
import Link from 'next/link'

const Custom404 = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-svh gap-y-6">
            <h1 className='text-4xl'>404 - Page Not Found</h1>
            <p className='text-2xl'>The page you are looking for might have been removed,
                had its name changed, or is temporarily unavailable.</p>
            <Link className="underline text-xl" href="/">
                Back to main page
            </Link>
        </div>
    )
}

export default Custom404