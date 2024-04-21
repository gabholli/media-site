export interface Movie {
    id: number
    poster_path: string
    title: string
    overview: string
    popularity: number
    release_date: string
    vote_average: number
    vote_count: number
}

export interface MovieListInterface {
    movieData: Movie[]
}