// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"
import type { NextApiRequest, NextApiResponse } from "next"
import React from "react"

const TvDetails = async (req: NextApiRequest, res: NextApiResponse) => {
    const { tvId } = req.query
    axios.get(`https://api.themoviedb.org/3/tv/${tvId}`, {
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

export default TvDetails