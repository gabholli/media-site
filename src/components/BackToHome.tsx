import React from 'react'
import Link from 'next/link'

export default function BackToHome() {
    return (
        <div className='flex justify-center items-center'>
            <Link
                className='mt-6 underline'
                href="/">Back to main page</Link>
        </div>
    )
}

