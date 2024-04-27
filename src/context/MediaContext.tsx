import { ContextProps } from '@/types/types'
import React from 'react'
import { createContext } from 'vm'

const AllMediaContext = createContext()
const getMovieFromLocalStorage = localStorage.getItem("movie")


const MediaContext: React.FC<ContextProps> = ({ children }) => {

    const contextValues = { getMovieFromLocalStorage }

    return (
        <AllMediaContext.Provider value={contextValues}>
            <Watchlist />
        </AllMediaContext.Provider>
    )
}

export default MediaContext