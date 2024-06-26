import { RemoveItemButtonProps } from '@/types/types';
import React from 'react';
import toast from 'react-hot-toast';

const RemoveFromLocalStorageButton: React.FC<RemoveItemButtonProps> = ({ itemToRemove, onRemove }) => {
    const handleClick = () => {
        if (typeof window !== 'undefined') {
            const items = JSON.parse(localStorage.getItem('watchlist') || '[]')
            const filteredItems = items.filter((item: { id: number }) => item.id !== itemToRemove)
            localStorage.setItem('watchlist', JSON.stringify(filteredItems))
            onRemove(itemToRemove)
            toast.success("Item removed from favorites list")
        }
    }

    return <button
        className='flex justify-center items-center
                bg-neutral-400 hover:bg-zinc-500 active:bg-neutral-600
                px-4 py-2 w-full rounded-3xl font-black lg:w-44 md:w-72'
        onClick={handleClick}>
        Remove Item
    </button>
}

export default RemoveFromLocalStorageButton
