import { ReactNode } from "react"

export interface Movie {
    id: number
    poster_path: string
    title: string
    popularity: number
    release_date: string
    vote_average: number
    vote_count: number
}

export interface MovieItem {
    num: number
    movie: string
}

export interface MovieListInterface {
    movieData: Movie[]
}

export interface MovieLocalStorage {
    movie: string
}

export interface People {
    id: number
    known_for: any
    known_for_department: string
    name: string
    popularity: number
    profile_path: string
}

export interface WatchlistInterface {
    id: number
    poster_path: string
    title: string
    popularity: number
    release_date: string
    vote_average: number
    vote_count: number
}



export interface FormComponentProps {
    submit: (event: React.FormEvent<HTMLFormElement>) => void;
    movieRef: any
    placeholderText: string
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