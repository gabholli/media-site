import { WatchlistButtonComponentProps } from '@/types/types'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const ToWatchlistButton: React.FC<WatchlistButtonComponentProps> = ({ data }) => {

    const [mediaData, setMediaData] = useState<any>([])

    const addToast = () => {
        toast.success("You have added this item to the favorites list")
    }

    const alreadyThereToast = () => {
        toast.error("This item is already in the favorites list")
    }

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
                // alert("Item added to watchlist.")
                addToast()
                return updatedData
            } else {
                // alert("Item already in watchlist.")
                alreadyThereToast()
            }
            return prevData
        })
    }

    return (
        <>
            <button
                onClick={() => addItem(data)}
                className='
                bg-cyan-500 hover:bg-teal-200 active:bg-cyan-100
            px-4 py-2 rounded font-black
            md:w-48 block m-auto'>
                Add to Favorites
            </button>
        </>
    )
}

export default ToWatchlistButton