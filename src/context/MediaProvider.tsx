import Watchlist from '@/pages/watchlist/Watchlist'
import { ContextProps, MediaProviderProps } from '@/types/types'
import React, { createContext } from 'react'


const MediaContext = createContext<ContextProps | null>(null)


const MediaProvider = ({ children }: MediaProviderProps) => {

    const checkArrayHasValue = (array: any[]) => {
        let hasValue = array.some(value => value !== undefined &&
            value !== null && value !== "")
        return hasValue
    }

    const contextValues = { checkArrayHasValue, value: "" }

    return (
        <MediaContext.Provider value={contextValues}>
            {children}
        </MediaContext.Provider>
    )
}

export { MediaProvider, MediaContext }