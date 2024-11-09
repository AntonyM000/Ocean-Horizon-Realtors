import React from 'react'
import { AiFillAlipayCircle, AiFillAmazonCircle, AiOutlineGoogle, AiOutlineHeatMap, AiOutlineX } from 'react-icons/ai'
import { SiAol } from 'react-icons/si'
import { AccordionCustomIcon } from '../components/accordion'

const Faq = () => {
  return (
    <div className='bg-gray-300 border-b-8  flex md:flex-col flex-col-reverse'>
            <div>
                <h1 className='text-2xl font-semibold '>Patners</h1>
        <div className="patners flex justify-around mb-5 text--400 ">
            <AiOutlineGoogle size={72} />
            <AiOutlineHeatMap size={72} />
            <AiOutlineX size={72} />
            <AiFillAlipayCircle size={72} />
            <AiFillAmazonCircle size={72} />
            <SiAol size={72} />
        </div>
                </div>

        <div className="faq pb-2 justify-around flex flex-wrap">
            <div  className='max-w-md'>
                <h1 className='text-3xl font-bold'>Frequently asked questions</h1>
                <p className='text-md'>Oceanic Horizon offers an unparalleled experence tailored to meet your needs and exceed your expectations</p>
            </div>
            <div className='bg-white rounded max-w-lg container'>
                {/* <p>Are you de? <br/><hr/>Mez mez Warega<br/><hr/></p> */}
            <AccordionCustomIcon/>
            </div>
        </div>
    </div>
  )
}

export default Faq