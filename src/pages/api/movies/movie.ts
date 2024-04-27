// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query
  axios.get("https://api.themoviedb.org/3/search/movie", {
    params: {
      api_key: process.env.API_KEY,
      query: query
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

export default handler