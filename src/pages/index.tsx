import axios from 'axios'
import React, { useEffect } from 'react'

function index() {

  useEffect(() => {
    axios.get(`/api/movie?query=${encodeURIComponent("basketball")}`)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error("There was an error", error)
      })
  }, [])


  return (
    <div></div>
  )
}

export default index