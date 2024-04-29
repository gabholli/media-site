// import { WatchlistButtonComponentProps } from '@/types/types'
import { WatchlistButtonComponentProps } from '@/types/types'
import React, { useEffect, useState } from 'react'

const ToWatchlistButton: React.FC<WatchlistButtonComponentProps> = ({ data }) => {

    const [mediaData, setMediaData] = useState<any>([])

    useEffect(() => {
        const savedData = typeof window !== 'undefined' ? localStorage.getItem('watchlist') : null;
        if (savedData) {
            setMediaData(JSON.parse(savedData));
        }
    }, [])

    const addItem = (newItem: any) => {
        setMediaData((prevData: any) => {
            const dataIds = new Set(prevData.map((item: { id: any }) => item.id))
            if (!dataIds.has(newItem.id)) {
                const updatedData = [...prevData, newItem]
                localStorage.setItem("watchlist", JSON.stringify(updatedData))
                alert("Item added to watchlist.")
                return updatedData
            } else {
                alert("Item already in watchlist.")
            }
            return prevData
        })
    }

    return (
        <button
            onClick={() => addItem(data)}
            className='
            bg-neutral-400 hover:bg-zinc-500 active:bg-neutral-600
            px-4 py-2 rounded font-black
            md:w-48 block m-auto'>
            Add to watchlist
        </button>
    )
}

export default ToWatchlistButton