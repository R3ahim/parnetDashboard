import React from 'react'
import { Link } from 'react-router-dom'

function FouroFour() {
  return (
    <div>
        <h1 className='text-center text-4xl'>Page Not Found</h1>
        <h1 className='text-center text-5xl text-red-700'>404</h1>
        <div className='justify-center content-center items-center flex'>
            <Link to={'/'} className="btn btn-accent">Go Home</Link>
        </div>
    </div>
  )
}

export default FouroFour