import React from 'react'
import { useRouter } from 'next/router'
import BackToHome from '@/components/TopLinks'
export default function MovieDetails() {

  const router = useRouter()
  const { query } = router

  return (
    <>
      <BackToHome />
      <div>
        Movie details here for ID: {query.id}
      </div>
    </>
  )
}

