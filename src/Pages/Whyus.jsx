import React from 'react'
import { FaPeopleGroup } from 'react-icons/fa6'
import { LiaHandshake } from 'react-icons/lia'
import { TbAward, TbBulb } from 'react-icons/tb'

const Whyus = () => {
  return (
    <div className='mb-12'>
      
        <h1 className='font-bold text-4xl  max-w-md mx-auto pl-2 text-orange-400'>Why choose us</h1>
        <h1 className='font-semibold text-2xl  max-w-6xl pl-2 my-2 mx-auto text-gray-400'>Oceanic Horizon Realtors is a fresh and dynamic real estate company in Kenya, dedicated to helping individuals and investors secure prime land along the coast. We are committed to building a reputation as a reliable partner for clients locally and in the diaspora. We combine a love for coastal properties with a commitment to integrity and customer satisfaction. At Oceanic Horizon Realtors, we focus on delivering value and making every client’s investment journey a seamless and rewarding experience. Trust us to guide you in owning a piece of Kenya’s beautiful coastline.</h1>
        <div className="flex flex-wrap gap-3 lg:space-x-24 justify-center lg:mb-24 mb-4 mx-4">
            <div className="container-sm rounded w-64 flex flex-col  items-center bg-blue-500 drop-shadow-xl">
            <p className='text-2xl font-bold text-white mx-auto py-3'>Customer-Centric Approach</p><p className='text-gray-500 px-3'> We prioritize our clients' needs and work tirelessly to deliver personalized solutions.</p>
            <LiaHandshake className='text-gray-600 my-3' size={64} />
            </div> 

            <div className="container-sm rounded w-64  flex flex-col items-center bg-white drop-shadow-xl">
            <p className='text-2xl font-bold text-blue-500 mx-auto py-3'>Integrity</p><p className='text-gray-500 px-3 '> We uphold the highest standards of honesty and transparency in all our dealings.</p>
            <FaPeopleGroup className='text-gray-600 my-3' size={64} />

            </div>
            </div>
        <div className="flex flex-wrap gap-3 lg:space-x-24 justify-center mx-4">

            <div className="container-sm rounded w-64  flex flex-col items-center bg-blue-500 drop-shadow-xl">
            <p className='text-2xl font-bold text-white mx-auto py-3'>Premium Properties</p><p className='text-gray-500 px-3'> We carefully select the quality, location, and potential of our land, providing  valuable investment opportunities.</p>
            <TbAward className='text-gray-600 my-3 ' size={64}/>
            </div> 

            <div className="container-sm rounded w-64  flex flex-col items-center bg-white drop-shadow-xl">
            <p className='text-2xl font-bold text-blue-500 mx-auto py-3'>Innovation</p><p className='text-gray-500 px-3'> We leverage the latest technology and industry trends to provide cutting-edge services</p>
            <TbBulb className='text-gray-600 my-3' size={64}/>
            </div>
        </div>
    </div>
  )
}

export default Whyus