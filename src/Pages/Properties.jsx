import React, { forwardRef, useRef } from 'react'
import properties from '../Properties.json'
import { Link } from 'react-router-dom'

const Properties = forwardRef((props,ref) => {
//   const propertiesSectionRef = forwardRef((props,ref)=>{})

  return (
    <div className=' '>
        <div>
            <h1 className="text-4xl font-bold text-blue-500">Properties</h1>
            <p className='text-slate-500 font-sm mb-2'> We offer a diverse selection of quality properties along the coast with ready title deeds. </p>  
        </div>
        <div className='flex flex-wrap mt-12 *:p-x-3'>
        {properties.map((property,index)=>{return (<div  className="  mx-auto container min-w-44 max-w-sm m-4 flex flex-col  bg-gray-100 rounded-md" key={index}>
            {/* {property.Title} */}
            <div className="relative  h-fit">
            <img
                src={property.imagesrc}
                alt="Background"
                className="w-full h-44 rounded-md object-cover"
            />
            <div className="absolute inset-0 flex justify-center rounded-md bg-gradient-to-b from-black/40 to-black/0  ">
                <h1 className="text-white text-3xl font-bold">{property.Title}</h1>
            </div>
        </div>
            <p className='font-semibold text-lg mx-1'>{property.PropertyName}</p>
            <p className='font-medium text-base text-gray-500 mx-1'>{property.Location}</p>
            <div className='border-b border-  border-gray-400 flex justify-between  mx-3'> <p className='font-normal inline text-lg text-gray-600'>Size</p><p className="inline">{property.Size}</p></div>
            <div className='border-b  border-gray-400 flex justify-between  mx-3'> <p className='font-normal inline text-lg text-gray-600'>Price</p><p className="inline">{property.Price}</p></div>
            <div className='border-b  border-gray-400 flex justify-between mx-3'> <p className='font-normal inline text-lg text-gray-600'>Size</p><p className="inline">1 Acre</p></div>
            <Link to={`/property/${property.Title}`} className="bg-blue-700 p-1 flex  mt-1 justify-center text-white text-lg rounded-md ">View Details</Link>

            </div>
        )})}</div>
        {/* <div className="flex flex-col w-[20%] mx-auto container min-w-44  bg-gray-100 rounded-md">

        <div className="relative  h-[64%]">
            <img
                src="/public/Page-1img.jpg"
                alt="Background"
                className="w-full h-[20%] rounded-md object-cover"
            />
            <div className="absolute inset-0 flex justify-center rounded-md bg-gradient-to-b from-black/40 to-black/0  ">
                <h1 className="text-white text-3xl font-bold">Kilifi</h1>
            </div>
        </div>
            <p className='font-semibold text-lg mx-1'>KILIFI WATER FRONT LAND</p>
            <p className='font-medium text-base text-gray-500 mx-1'>Kilifi Road,Kilifi, Kenya</p>
            <div className='border-b border-  border-gray-400 flex justify-between  mx-3'> <p className='font-normal inline text-lg text-gray-600'>Size</p><p className="inline">1 Acre</p></div>
            <div className='border-b  border-gray-400 flex justify-between  mx-3'> <p className='font-normal inline text-lg text-gray-600'>Price</p><p className="inline">KES 12,000,000</p></div>
            <div className='border-b  border-gray-400 flex justify-between mx-3'> <p className='font-normal inline text-lg text-gray-600'>Size</p><p className="inline">1 Acre</p></div>
            <button className="bg-blue-700 p-1 flex mx-auto mt-1 text-white text-lg rounded-md ">View Details</button>


        </div> */}
    </div>
  )
})

export default Properties