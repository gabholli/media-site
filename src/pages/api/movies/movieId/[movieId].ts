// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"
import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
    name: string;
};


const movieDetails = async (req: NextApiRequest, res: NextApiResponse) => {
    const { movieId } = req.query
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
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

export default movieDetails