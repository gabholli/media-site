import Watchlist from '@/pages/watchlist/Watchlist'
import { ContextProps } from '@/types/types'
import React from 'react'
import { createContext } from 'vm'

const AllMediaContext = createContext()


const MediaContext: React.FC<ContextProps> = ({ children }) => {


    return (
        <AllMediaContext.Provider value="">
            {children}
        </AllMediaContext.Provider>
    )
}

export default MediaContext