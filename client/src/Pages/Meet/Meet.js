import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Meet() {



  return (
    <div>
     <Link to={'/addMeet'}>   <button className='btn bg-green-600'>Add Meet</button></Link>
      

    </div>
  )
}

export default Meet