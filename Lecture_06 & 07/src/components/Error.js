import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
    console.log(error)
  return (
    <div className='error'>
        <h1>Oops !! Page is not Found</h1>
        <p>{error.status} {error.statusText}</p>
        <p>{error.data}</p>
    </div>
  )
}

export default Error