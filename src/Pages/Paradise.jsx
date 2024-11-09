import React from 'react'

const Paradise = () => {
  return (
    <div className='py-12'>
        <h1 className="font-bold text-blue-400 text-5xl">Own a slice of Paradise on Kenyas's Coast with Premium Plots</h1>
        <div className=" lg:hidden py-12 text-slate-500 text-lg px-2 mx-auto container"> Oceanic Horizon Realtors brings you an exclusive opportunity to own 1-acre parcels of prime land along Kenya’s breathtaking coast—a perfect choice for those looking to invest in tranquility and beauty.<br/>
                These exclusive plots offer direct access to the coast, providing an idyllic escape for those who crave peace, privacy, and a connection to nature.<br/>Whether you're envisioning a luxurious vacation home, a private sanctuary, or a long-term investment in Kenya’s thriving real estate market, these coastal plots are the perfect choice.
            </div>
        <div className="flex  ">
            {/* <img src="" alt="" className="w-[40%]" /> */}
            <div className="hidden lg:block text-slate-500 text-lg px-5 py-12 mx-auto container"> Oceanic Horizon Realtors brings you an exclusive opportunity to own 1-acre parcels of prime land along Kenya’s breathtaking coast—a perfect choice for those looking to invest in tranquility and beauty.<br/><br/>
                These exclusive plots offer direct access to the coast, providing an idyllic escape for those who crave peace, privacy, and a connection to nature.<br/><br/>Whether you're envisioning a luxurious vacation home, a private sanctuary, or a long-term investment in Kenya’s thriving real estate market, these coastal plots are the perfect choice.
            </div>
            <div className='w-[100vw] mb-10 bg-gray-100 rounded flex items-center justify-center'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kNxxtYyzXFc?si=pg188n7zcWR_nUqG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                {/* <iframe  src="https://www.youtube.com/embed/kNxxtYyzXFc?si=B5mopTSslEgxgP0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            </div>
        </div>
    </div>
  )
}

export default Paradise