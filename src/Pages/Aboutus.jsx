import React from 'react'

const Aboutus = () => {
  return (
    <div className='overflow-hidden relative'>
        <header ><img src="/logo.png" className='w-20' alt="" /></header>
        <h1 className='font-bold text-4xl  max-w-[200px] mx-auto pl-2 text-orange-400'>About us</h1>
        <h1 className='font-semibold text-2xl  max-w-[600px] pl-2 my-2 mx-auto text-gray-400'> We are a premier real estate company dedicated to property management and development</h1>

        <div className="small-screens max-w-[90%] space-y-3 mx-auto lg:hidden mambo">
            <div className='  container  py-12  px-4 flex flex-col justify-center rounded-lg bg-orange-300'><p className='text-2xl font-bold mx-auto'>Land Acquisition:</p><p className='text-gray-500'> We specialize in identifying and acquiring prime land for residential, commercial and industrial use.</p>
            </div>

            <div className='  container  py-12 px-4 rounded-lg flex flex-col justify-center'><p className='text-2xl font-bold text-blue-500 mx-auto'>Airbnb Management:</p><p className='text-gray-500 bg-white rounded '>We provide comprehensive management services for short term rental properties,ensuring a seamless experience for both propertyowners and guests</p>
            </div>
            
            <div className='container py-12 px-4 rounded-lg flex flex-col justify-center bg-orange-300'><p className='text-2xl font-bold m-auto'>Commercial Properties:</p><p className='  text-gray-500 mx-auto'> our portfolio includes office spaces, retail outlets and other commercial properties designed to support business growth.</p>
            </div>
            
            <div className='container py-12 px-4 flex flex-col justify-center rounded-lg'><p className='text-2xl font-bold text-blue-500 m-auto'>Residential Properties:</p><p className=' text-gray-500'>from luxurious homes to affordable housing, we offer a wide range of residential properties to meet diverse needs.</p>
            </div>

        </div>
        <div className="large-screens hidden lg:block mambo">
            <div className="juu flex max-w-5xl border-b border-black mx-auto">
                <div className='  container border-r-4 h-[50vh] max-h-64 border-black px-4 flex flex-col justify-center  bg-orange-300'><p className='mx-auto'>Land Acquisition:</p><p className='text-gray-500'> We specialize in identifying and acquiring prime land for residential, commercial and industrial use.</p>
                </div>
                <div className='  container  border-black [50vh] bg-whie flex flex-col justify-center'><p className='mx-auto'>Airbnb Management:</p><p className='text-gray-500 bg-white rounded '>We provide comprehensive management services for short term rental properties,ensuring a seamless experience for both propertyowners and guests</p>
                </div>
            </div>

            <div className="chini flex max-w-5xl  mx-auto">
                <div className=' container border-r-4 h-[50vh] max-h-64 flex flex-col  border-black px-4 '><p className='m-auto'>Commercial Properties:</p><p className='bg-white rounded m-auto text-gray-500'> our portfolio includes office spaces, retail outlets and other commercial properties designed to support business growth.</p>
                </div>
                <div className=' container  border-black [50vh] flex flex-col bg-orange-300'><p className='m-auto'>Residential Properties:</p><p className='m-auto text-gray-500'>from luxurious homes to affordable housing, we offer a wide range of residential properties to meet diverse needs.</p>
                </div>
            </div>
        </div>
         <img src="/ocean.jpg" alt="" className="absolute top-[22%] right-0 w-[18%]  -z-10 rounded" /> 
         <img src="/ocean_window.jpg" alt="" className="absolute top-[24%] -right-10 w-[12%] -z-10 rounded" /> 
        <img src="/Page-1img.jpg" alt="" className="absolute bottom-0 -left-24 w-[16%] -z-10 rounded" />
    </div>
  )
}

export default Aboutus