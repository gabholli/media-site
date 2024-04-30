import SearchForm from '@/components/SearchForm'
import TopLinks from '@/components/TopLinks'
import { PeopleInterface } from '@/types/types'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const People = () => {

    const [loading, setLoading] = useState(false)
    const [peopleData, setPeopleData] = useState<PeopleInterface[]>([])
    const [search, setSearch] = useState("")

    const inputRef = useRef<HTMLInputElement>(null)

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

    const peopleList = peopleData?.map(person => {
        return (
            <>
                {person.profile_path && (
                    <div key={person.id}
                        className='flex flex-col justify-between items-center bg-zinc-800 p-6 gap-y-8 text-center m-6
              rounded-3xl'>
                        <img className="h-64 w-full object-cover rounded-3xl"
                            src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
                            alt="Person"
                        ></img>
                        <h1 className='text-3xl font-bold'>{person.name}</h1>
                        <p><span className='font-semibold'>Known for: </span><span className='font-normal'>{person.known_for_department}</span></p>
                        <p><span className='font-semibold'>Popularity score: </span><span className='font-normal'>{person.popularity}</span></p>
                        <Link
                            href={`./people/${person.id}`}
                            className='flex justify-center items-center
                bg-neutral-400 hover:bg-zinc-500 active:bg-neutral-600
                  px-4 py-2 w-full rounded font-black'>
                            Details
                        </Link>
                    </div >
                )}
            </>
        )
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (inputRef.current !== null) {
            const name: string = inputRef.current.value
            console.log(name)
            setSearch(name)
        } else {
            console.log("The input ref is null.")
        }
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
                <h1 className='text-4xl mt-1 text-center'>Media Site</h1>
                <div className='flex flex-col lg:flex-row px-2 gap-8 '>
                    <TopLinks />
                    <SearchForm
                        submit={handleSubmit}
                        movieRef={inputRef}
                        placeholderText="Enter person's name..."
                    />
                </div>
            </div>
            <hr></hr>
            <div
                className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3'
            >
                {peopleList}
            </div>
        </>
    )
}

export default People