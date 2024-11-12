import React from 'react'
import { CiMail } from 'react-icons/ci'
import { FaFacebookSquare } from 'react-icons/fa'
import { LuInstagram } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-gray-300 h-full w-full'>
        <div>
            <img src="/logo.png" alt="Oceanic Horizon" className='w-[40%] max-w-40 ' />
            <p className='text-gray-600 font-semibold '>Transforming the Landscape of Real Estate</p>
        </div>

        <div className='md:justify-self-center mt-3 flex flex-col'>
            <h1>Quick Navigation</h1>
            <Link className='font-semibold'>Home</Link>
            <Link className='font-semibold'>Our Properties</Link>
            <Link className='font-semibold'>Our Advantages</Link>
            <Link className='font-semibold'>Our Services</Link>
        </div>

        <div className='justify-self-end mt-3'>
            <h1>Contact us on:</h1>
            <p className='text-gray-600 text-xs'>+254708951079/254723648282</p>
            <p className='text-blue-700 text-sm'>oceanichorizon9@gmail.com</p>
            <div className='flex flex-col md:flex-row mt-2 gap-x-3 pb-2'>
                <button className='bg-black text-white py-1 w-[70%] rounded-full'>Contact us</button>
                <CiMail size={32}/>
                <LuInstagram size={32}/>
                <FaFacebookSquare size={32}/>
            </div>
        </div>

        <div className="flex flex-wrap mt-3 lg:justify-center">
            <label className='text-sm px-1'><iframe id='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1013.6461880448626!2d39.8484564622511!3d-3.6333647070456543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183fe7879c169d95%3A0xa80d41643190c77f!2sG4S%20Kilifi%20Office!5e1!3m2!1sen!2ske!4v1731130799700!5m2!1sen!2ske"  className="border-0 w-[80%] " allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <p>P.O. Box 998-80108 Kilifi</p><p>Kilifi, Kenya</p></label>
            <label className='text-sm mt-auto' ><p className='text-gray-500'>Copyright 2024 Oceanic Horizon Realtors</p>
            <p className='text-xs'>Terms of Service | Privacy Policy</p>
            </label>
        </div>
        
    </div>
  )
}

export default Footer