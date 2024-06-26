import React, { useEffect, useState } from 'react';
import { ReactTyped } from "react-typed";
import { ImCross } from 'react-icons/im';
import { SlOptions } from "react-icons/sl";
import { Link } from 'react-router-dom';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  
  return (
    <div>
      {/* Navbar for larger devices */}
      <nav className='hidden sm:flex justify-between shadow-xl bg-fixed text-black backdrop-blur-xl '>
        <div className='flex justify-center items-center'>
          <Link to='/'>
          <img src="" alt="" className='w-16 h-16 bg-black mt-3 mb-3 mr-6  ml-3 md:w-18 md:h-18 rounded-full' />
          </Link>
          <h1 className='text-2xl md:text-2xl font-extrabold text-orange-500 font-mono'>GET AN EXPERT FOR</h1>
          <h1 className='text-2xl ml-[2rem] md:text-2xl font-bold text-blue-500 font-mono transition ease-in-out'>
            <ReactTyped
              strings={[
                'JAVA/C++', 'FINANCE', 'MANAGEMENT', 'MARKETING', 'DESIGN', 'PROGRAMMING', 'WRITING', 'ENGINEERING', 'LAW', 'IT', 'DATA SCIENCE', 'OTHERS'
              ]}
              typeSpeed={70}
              backSpeed={40}
              loop
            />
          </h1>
        </div>
        <ul className="flex justify-center items-center ">
          <li className='text-xl md:text-xl font-bold font-mono mr-[4rem]  text-black cursor-pointer hover:text-orange-500'>
            <Link to="/about">About</Link>
          </li>
          <li className='text-xl md:text-xl font-bold font-mono mr-[4rem]  text-black cursor-pointer hover:text-orange-500'>
            <Link to="/login">Login</Link>
          </li>
          <li className='text-xl md:text-xl font-bold font-mono mr-[4rem]  text-black cursor-pointer hover:text-orange-500'>
            <Link to="/sample">
              Samples
            </Link>
          </li>
        </ul>
      </nav>

      {/* Navbar for smaller devices */}
      <nav className='sm:hidden flex justify-between items-center shadow-xl text-black backdrop-blur-xl py-2 px-2'>
        <Link to="/">
          <div className='flex justify-center items-center mr-3'>
            <img src='' alt="logo" className='w-20 h-20 md:w-32 md:h-32 rounded-full' />
          </div>
        </Link>
        <div>
          <button onClick={() => setShowLinks(!showLinks)} className="p-4 focus:outline-none hover:text-blue-500">
            {showLinks ? <ImCross className="text-4xl" /> : <SlOptions className="text-4xl" />}
          </button>
        </div>
      </nav>

      {/* Overlay for smaller devices when Navbar is open */}
      {showLinks && (
        <div className="fixed inset-0 bg-white backdrop-blur-lg flex flex-col justify-center items-center z-50">
          <ImCross className="text-black text-3xl cursor-pointer mb-[6rem] border border-slate-400 rounded-full" onClick={() => setShowLinks(false)} />
          <ul className="text-black text-3xl flex flex-col justify-between space-y-10 ">
            <li className='text-3xl font-semibold border-b-2 p-3 border-slate-400 text-center   hover:text-blue-500' onClick={() => setShowLinks(false)}>
              <Link to="/about">About</Link>
            </li>
            <li className='text-3xl font-semibold border-b-2 p-3 border-slate-400 text-center  hover:text-blue-500' onClick={() => setShowLinks(false)}>
              <Link to="/login">Login</Link>
            </li>
            <li className='text-3xl font-semibold border-b-2 p-3 border-slate-400 text-center  hover:text-blue-500' onClick={() => setShowLinks(false)}>
              <Link to="/sample">
                Samples
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
