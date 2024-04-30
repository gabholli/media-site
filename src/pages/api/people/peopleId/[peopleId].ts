// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"
import type { NextApiRequest, NextApiResponse } from "next"
import React from "react"

const PeopleDetails = async (req: NextApiRequest, res: NextApiResponse) => {
    const { peopleId } = req.query
    axios.get(`https://api.themoviedb.org/3/person/${peopleId}`, {
        params: {
            api_key: process.env.API_KEY,
        }
    })
        .then(response => {
            res.json(response.data)
        })
        .then(data => console.log(data))
        .catch(error => {
            console.error("Error fetching data:", error)
        })
}

export default PeopleDetails