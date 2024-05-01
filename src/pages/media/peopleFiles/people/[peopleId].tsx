import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import TopLinks from '@/components/TopLinks'
import BackToTopButton from '@/components/BackToTopButton'
import ToWatchlistButton from '@/components/ToWatchlistButton'

const PeopleDetails = () => {

    const router = useRouter()
    const { query } = router
    const [loading, setLoading] = useState(false)
    const [peopleData, setPeopleData] = useState<any>({})
    const [watchlistData, setWatchlistData] = useState([])

    useEffect(() => {
        // Access localStorage only on the client side
        const savedData = localStorage.getItem('watchlist')
        if (savedData) {
            setWatchlistData(JSON.parse(savedData))
        }
    }, [])

    useEffect(() => {
        setLoading(true)
        if (router.isReady) {
            axios.get(`/api/people/peopleId/${query.peopleId}`)
                .then(response => {
                    console.log(response.data)
                    setPeopleData(response.data)
                })
                .catch(error => {
                    console.error("There was an error", error)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [router.isReady, query.peopleId])

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
            <div className='p-6'>
                <div className='flex flex-col justify-between items-center 
                    lg:grid lg:grid-areas-topLinksDetails
                    pb-9 pt-2 lg:mx-16 gap-y-6 gap-x-8'>
                    <h1 className='grid-in-title text-4xl mt-1 text-center'>Media Site</h1>
                    <TopLinks />
                </div>
                <hr></hr>
                <main className='p-6 flex flex-col gap-y-8 items-center justify-center min-h-svh'>
                    <div className='flex lg:flex-row justify-center items-center lg:mx-44 lg:gap-x-12 gap-y-10'>
                        <div className='flex flex-col justify-center items-center gap-y-6 text-center'>
                            <img className="size-1/3 object-scale-dwon rounded-3xl"
                                src={`https://image.tmdb.org/t/p/original${peopleData.profile_path}`}
                                alt="Movie">
                            </img>
                            <h1
                                className='text-center text-3xl font-bold'>
                                {peopleData.name}
                            </h1>
                            <p className='text-xl'><span className='font-semibold text-2xl'>
                                Known for: </span>{peopleData.known_for_department}</p>
                            <p className='text-xl'><span className='font-semibold text-2xl'>
                                Birthplace: </span>{peopleData.place_of_birth}</p>
                            <p className='text-xl'><span className='font-semibold text-2xl'>
                                Popularity score: </span>{peopleData.popularity}</p>
                            <p className='text-xl text-left'><span className='font-semibold text-2xl'>
                                Biography: </span>{peopleData.biography}</p>
                            <ToWatchlistButton
                                data={peopleData}
                            />
                        </div>
                    </div>
                </main>
                <BackToTopButton />
            </div>
        </>
    )
}

export default PeopleDetails