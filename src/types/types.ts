import { ReactNode } from "react"

export interface Movie {
    original_title(original_title: any): unknown
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

export interface PeopleInterface {
    place_of_birth(place_of_birth: any): unknown
    id: number
    known_for: any
    known_for_department: string
    name: string
    popularity: number
    profile_path: string
}

export interface TVInterface {
    name: ReactNode
    id: number
    poster_path: string
    title: string
    popularity: number
    first_air_date: string
    vote_average: number
    vote_count: number
}

export interface WatchlistInterface {
    original_title: any
    overview: any
    place_of_birth: any
    revenue: any
    first_air_date: any
    name: any
    id: number
    poster_path: string
    profile_path: string
    title: string
    popularity: number
    release_date: string
    vote_average: number
    vote_count: number
}



export interface FormComponentProps {
    submit: (event: React.FormEvent<HTMLFormElement>) => void;
    change: any
    value: any
    name: any
    placeholderText: string
}

export interface ContextProps {
    value: string
    checkArrayHasValue: (array: any[]) => boolean
    children: React.ReactNode
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
    onRemove: (itemId: number) => void
}