import { ReactNode } from "react"

export interface Movie {
    id: number
    poster_path: string
    title: string
    // overview: string
    popularity: number
    release_date: string
    vote_average: number
    vote_count: number
}

export interface WatchlistInterface {
    id: number
    poster_path: string
    title: string
    // overview: string
    popularity: number
    release_date: string
    vote_average: number
    vote_count: number
}

export interface MovieListInterface {
    movieData: Movie[]
}

export interface MovieLocalStorage {
    movie: string
}

export interface FormComponentProps {
    submit: (event: React.FormEvent<HTMLFormElement>) => void;
    // change: (event: React.ChangeEvent<HTMLInputElement>) => void;
    // name: string
    // value: any
    movieRef: any
}

export interface ContextProps {
    value: string
    checkArrayHasValue: (array: any[]) => boolean
}

export interface MovieItem {
    num: number
    movie: string
}

export interface MediaProviderProps {
    children: ReactNode
}

export interface WatchlistButtonComponentProps {
    data: any
}

export interface MovieList {
    getFromLocalStorage(key: string): any | null
}

export interface RemoveItemButtonProps {
    itemToRemove: number
}