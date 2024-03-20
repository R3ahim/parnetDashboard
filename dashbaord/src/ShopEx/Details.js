import React, { useEffect, useState } from 'react'
import { Link, useParams,Navigate, useLocation} from 'react-router-dom'

function Details() {
    const {id} = useParams()
    const [data,setData] = useState({})
    const location = useLocation();


    useEffect(()=>{
        fetch(`https://deltaserverer.onrender.com/totalSell/${id}`)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

  

console.log(data)
  return (
    <div>
  <Link className='btn btn-error btn-sm' to={'/dashboard'}>Go Back</Link>

<div class="grid mb-8 border text-white border-gray-200 rounded-lg shadow-sm  md:mb-12 md:grid-cols-2 ">
    <figure class="flex flex-col  p-8  border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
    <blockquote class="max-w-2xl mx-auto mb-4 text-white lg:mb-8 dark:text-gray-400">
            <h3 class="text-3xl font-semibold text-white dark:text-white">meet</h3>
        </blockquote>
        <div className="container">
            <h3 className="text-xl">meat: {data.meet}</h3>
            <h4 className="">Comment: {data.meetComment}</h4>
       { data.meetComment2 ?  <h4 className="">Comment2: {data.meetComment2}</h4> :<span> </span>}
        </div>
    </figure>
    <figure class="flex flex-col  p-8  border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
    <blockquote class="max-w-2xl mx-auto mb-4 text-white lg:mb-8 dark:text-gray-400">
            <h3 class="text-3xl font-semibold text-white dark:text-white">Fudi</h3>
        </blockquote>
        <div className="container">
            <h3 className="text-2xl">Fudi: {data.fudi}</h3>
            <h4 className="text-xl">Comment: {data.fuidComment}</h4>
            { data.fuidComment2 ?  <h4 className="">Comment2: {data.fuidComment2}</h4> :<span> </span>}

        </div>
    </figure>
    <figure class="flex flex-col  p-8  border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
    <blockquote class="max-w-2xl mx-auto mb-4 text-white lg:mb-8 dark:text-gray-400">
            <h3 class="text-3xl font-semibold text-white dark:text-white">Warzaya</h3>
        </blockquote>
        <div className="container">
            <h3 className="text-2xl">Warzaya: {data.warzaya}</h3>
            <h4 className="text-xl">Comment: {data.warzayaCommnet}</h4>
            { data.warzayaCommnet2 ?  <h4 className="">Comment2: {data.warzayaCommnet2}</h4> :<span> </span>}
        </div>
    </figure>
    <figure class="flex flex-col  p-8 border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
    <blockquote class="max-w-2xl mx-auto mb-4 text-white lg:mb-8 dark:text-gray-400">
            <h3 class="text-3xl font-semibold text-white dark:text-white">COLA</h3>
        </blockquote>
        <div className="container">
            <h3 className="text-2xl">Cola: {data.cola}</h3>
            <h4 className="text-xl">Comment: {data.colaComment}</h4>
            { data.colaComment2 ?  <h4 className="">Comment2: {data.colaComment2}</h4> :<span> </span>}
        </div>
    </figure>
    <figure class="flex flex-col  p-8  border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
    <blockquote class="max-w-2xl mx-auto mb-4 text-white lg:mb-8 dark:text-gray-400">
            <h3 class="text-3xl font-semibold text-white dark:text-white">Opakowania</h3>
        </blockquote>
        <div className="container">
            <h3 className="text-2xl">opakowania: {data.opakowania}</h3>
            <h4 className="text-xl">Comment: {data.opakowaniaComment}</h4>
            { data.opakowaniaComment2 ?  <h4 className="">Comment2: {data.opakowaniaComment2}</h4> :<span> </span>}
        </div>
    </figure>
    <figure class="flex flex-col  p-8  border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
    <blockquote class="max-w-2xl mx-auto mb-4 text-white lg:mb-8 dark:text-gray-400">
            <h3 class="text-3xl font-semibold text-white dark:text-white">Others</h3>
        </blockquote>
        <div className="container">
            <h3 className="text-2xl">Others: {data.others}</h3>
            <h4 className="text-xl">Comment: {data.otehrsComment}</h4>
            { data.otehrsComment2 ?  <h4 className="">Comment2: {data.otehrsComment2}</h4> :<span> </span>}
        </div>
    </figure>
    <figure class="flex flex-col  p-8  border-b border-gray-200 rounded-t-lg md:d-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
    <blockquote class="max-w-2xl mx-auto mb-4 text-white lg:mb-8 dark:text-gray-400">
            <h3 class="text-3xl font-semibold text-white dark:text-white">D cost</h3>
        </blockquote>
        <div className="container">
            <h3 className="text-2xl">d.cost: {data.dCost}</h3>
            <h4 className="text-xl">Comment: {data.dcostCommnet}</h4>
            { data.dcostCommnet2 ?  <h4 className="">Comment2: {data.dcostCommnet2}</h4> :<span> </span>}
        </div>
    </figure>
    <figure class="flex flex-col  p-8  border-b border-gray-200 rounded-t-lg md:d-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
    <blockquote class="max-w-2xl mx-auto mb-4 text-white lg:mb-8 dark:text-gray-400">
            <h3 class="text-3xl font-semibold text-white dark:text-white">Gaz</h3>
        </blockquote>
        <div className="container">
            <h3 className="text-2xl">d.cost: {data.gaz}</h3>
            <h4 className="text-xl">Comment: {data.gazComment}</h4>
            { data.gazComment2 ?  <h4 className="">Comment2: {data.gazComment2}</h4> :<span> </span>}
        </div>
    </figure>
</div>

    </div>
  )
}

export default Details