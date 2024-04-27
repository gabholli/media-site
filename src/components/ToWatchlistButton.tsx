import { WatchlistButtonComponentProps } from '@/types/types'
import React from 'react'

const ToWatchlistButton: React.FC<WatchlistButtonComponentProps> = ({ handleClick }) => {
    return (
        <button
            onClick={handleClick}
            className='
            bg-neutral-400 hover:bg-zinc-500 active:bg-neutral-600
            px-4 py-2 rounded font-black
            md:w-48 block m-auto'>
            Add to watchlist
        </button>
    )
}

export default ToWatchlistButton