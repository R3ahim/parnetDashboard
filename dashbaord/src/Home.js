import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>

<div className="hero min-h-screen bg-[#1f2b33] 
">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     <div className="flex items-center lg:flex-row md:flex-row justify-between  		">
     <Link to={'/dashboard'} className="btn btn-primary">Go To Dashboard</Link>
     <Link to={'/company'} className="btn btn-primary">Go to Company</Link>



     </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home