import SearchForm from '@/components/SearchForm'
import TopLinks from '@/components/TopLinks'
import { MovieItem, PeopleInterface } from '@/types/types'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const People = () => {

    const movieItem = global?.window?.localStorage?.getItem("search")
    let getMovieFromLocalStorage: MovieItem | null = null

    if (movieItem) {
        try {
            getMovieFromLocalStorage = JSON.parse(movieItem) as MovieItem
        } catch (error) {
            console.error("Parsing error in getUserFromLocalStorage:", error)
        }
    }

    const [loading, setLoading] = useState(false)
    const [peopleData, setPeopleData] = useState<PeopleInterface[]>([])
    const [search, setSearch] = useState("")
    const [searchValue, setSearchValue] = useState(getMovieFromLocalStorage)


    useEffect(() => {
        setLoading(true)
        axios.get(`/api/people/people?query=${encodeURIComponent(search)}`)
            .then(response => {
                console.log(response.data.results)
                setPeopleData(response.data.results)
            })
            .catch(error => {
                console.error("There was an error", error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [search])

    const validPeople = peopleData.filter(person => person.profile_path);

    const peopleList = validPeople?.map(person => {
        return (
            <React.Fragment key={person.id}>
                {person.profile_path && (
                    <div
                        className='flex flex-col justify-between items-center bg-zinc-800 p-6 gap-y-8 text-center m-6
              rounded-3xl'>
                        <img className="h-64 w-full object-scale-down rounded-3xl"
                            src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
                            alt="Person"
                        ></img>
                        <h1 className='text-3xl font-bold'>{person.name}</h1>
                        <p><span className='font-semibold text-2xl'>Known for: </span>
                            <span className='font-normal text-xl'>{person.known_for_department}</span></p>
                        <p><span className='font-semibold text-2xl'>Popularity score: </span>
                            <span className='font-normal text-xl'>{person.popularity}</span></p>
                        <Link
                            href={`./people/${person.id}`}
                            className='flex justify-center items-center
                bg-neutral-400 hover:bg-zinc-500 active:bg-neutral-600
                  px-4 py-2 w-full rounded-3xl font-black'>
                            Details
                        </Link>
                    </div >
                )}
            </React.Fragment>
        )
    })

    const handleSubmit = (event: any) => {
        event.preventDefault()
        setSearch(event.target.searchValue.value)
    }

    const handleChange = (event: any) => {
        setSearchValue(event.target.value)
        localStorage.setItem("search", JSON.stringify(event.target.value))
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-svh">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                    fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
                    <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite"
                        type="rotate" values="0 12 12;360 12 12" /></path></svg>
            </div>
        )
    }

    return (
        <>
            <div className='flex flex-col lg:flex-row justify-between items-center
         py-9 lg:mx-16 gap-y-6 gap-x-8'>
                <h1 className='text-4xl mt-1 text-center px-1'>Media Finder - People</h1>
                <section className='flex flex-col lg:flex-row px-2 gap-8 '>
                    <TopLinks />
                    <SearchForm
                        submit={handleSubmit}
                        change={handleChange}
                        value={searchValue || ""}
                        placeholderText="Enter person's name..."
                        name="searchValue"
                    />
                </section>
            </div>
            <hr></hr>
            {peopleList.length > 0 ? <h1 className='text-4xl mt-12 text-center'>People</h1> :
                <h1 className='text-4xl mt-28 md:mt-48 text-center'>
                    No data currently...
                </h1>}
            <main
                className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 md:p-8'
            >
                {peopleList}
            </main>
        </>
    )
}

export default People