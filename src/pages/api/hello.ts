// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};


export default async function handler(req: any, res: any) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/551?api_key=${process.env.API_KEY}`)
  const data = await response.json();
  console.log(data)
  res.status(200).json(data);
}
