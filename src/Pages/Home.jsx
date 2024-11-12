import React, { useRef } from "react";
import { FaArrowDown, FaRegMap } from "react-icons/fa";
import { LuHome } from "react-icons/lu";
import { RiMenu4Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-screen mb-24  ">
      <div className="container-lg flex-col hidden lg:flex">
        <header className="flex pt-1  mt-3">
          <img
            src="/logo.png"
            alt="Oceanic Horizon Realtors"
            className="ml-1 max-w-20"
          />
          <a href="#map"
          onClick={(e) => {
                           e.preventDefault();
                           document.querySelector("#map").scrollIntoView({ behavior: "smooth" });
                         }}
          className="bg-orange-400 min-w-10 mx-1 max-h-11 justify-center flex  ml-auto items-center max-w-60 rounded">
            <FaRegMap size={22} />
          </a>
          <button className="bg-orange-400 min-w-10 mx-1 max-h-11 justify-center flex items-center max-w-60 rounded">
            <RiMenu4Fill size={25} />
          </button>
        </header>
        <div className="flex my-auto flex-col items-center justify-items-center">
          <p className="text-3xl">Real estate at the coast</p>
          <p className="text-5xl text-center font-medium">
            Own a piece of Kenya's stunning shoreline.
          </p>
          <a
            href="#properties"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#properties").scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-blue-600 text-xl mt-[7%] p-2 text-white rounded-full"
          >
            View our Properties
          </a>
        </div>
      </div>

      {/* <div className='side-2 w-[50vw]'>
      <img src="/Page-1img.jpg" alt="Kenya's stunning coastline" className=' h-full object-cover rounded'/>
      <div className=' absolute inset-5 right-32'><p>Properties all along the coast of Kenya</p>
      <p className='ml-10'>Ready title deeds</p>
      <button className='bg-orange-400 ml-[27%] min-w-10 mx-1 max-h-11 relative justify-center flex items-center max-w-60 rounded'><LuHome size={25}/></button>
      </div>
    </div> */}
      <div className="side-2 mt-3 hidden lg:flex relative">
        <img
          src="/Page-1img.jpg"
          alt="Kenya's stunning coastline"
          className="h-full object-cover rounded-lg"
        />

        {/* Overlay Container */}
        <div className="absolute top-0  left-0 w-full flex justify-between items-center p-2 text-white bg-opacity-50">
          <p>Properties all along the coast of Kenya</p>
          <p className="ml-10">Ready title deeds</p>
          <button className="bg-orange-400 ml-10 px-4 py-2  flex items-center rounded">
            <LuHome className="text-black" size={25} />
          </button>
        </div>
        <button className="rounded bg-gray-500 py-1 px-2 absolute bottom-10 right-10  gap-x-2 flex items-center">
          Catalog <FaArrowDown className="bg-white rounded-full" />
        </button>
      </div>

      <div className="phone flex flex-col mx-auto  lg:hidden">
        <header className="flex pt-1">
          <img src="/logo.png" alt="" className="  ml-1 max-w-20" />
          <a href="#map"
           onClick={(e) => {
                            e.preventDefault();
                            document.querySelector("#map").scrollIntoView({ behavior: "smooth" });
                          }}
   className="bg-orange-400 min-w-10 mx-1 max-h-11 justify-center flex  ml-auto items-center max-w-60 rounded">
            <FaRegMap size={22} />
          </a>
          <button className="bg-orange-400 min-w-10 mx-1 max-h-11 justify-center flex items-center max-w-60 rounded">
            <RiMenu4Fill size={25} />
          </button>
        </header>
        <div className="container text-white relative  min-h-screen bg-no-repeat bg-cover ">
          <img
            src="/Page-1img.jpg"
            alt="Kenya's stunning coastline"
            className=" h-full object-cover  rounded"
          />

          <div className="lg:hidden flex my-auto flex-col items-center justify-center absolute w-full h-full inset-0 bg-black/50  ">
            <p className="text-2xl">Real estate at the coast</p>
            <p className="text-4xl text-center font-semibold">
              Own a piece of Kenya's stunning shoreline.
            </p>
            <div className="bg-blue-600 m-6 text-xl mt-[7%] p-2 text-white rounded-full">
              <a href="#properties" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#properties").scrollIntoView({ behavior: "smooth" });
              }}>              
                View our Properties
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
