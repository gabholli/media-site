import Watchlist from '@/pages/watchlist/Watchlist'
import { ContextProps, MediaProviderProps } from '@/types/types'
import React, { createContext } from 'react'


const MediaContext = createContext<ContextProps | null>(null)


const MediaProvider = ({ children }: MediaProviderProps) => {

    const contextValue: ContextProps = {
        value: ""
    }

    return (
        <MediaContext.Provider value={contextValue}>
            {children}
        </MediaContext.Provider>
    )
}

export { MediaProvider, MediaContext }