import React from 'react'
import { FaUserEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Dashboard() {
  const id = '1234567890'
  const balance = 1000

  return (
    <div className='w-full h-auto px-5 py-5'>
      <div className='flex flex-col h-auto bg-blue-400 p-6 md:p-12 rounded-2xl'>
        <div>
          <h1 className='text-xl mb-2 font-semibold md:text-2xl lg:text-3xl'>Your ID: {id}</h1>
          <button className='text-lg flex justify-center items-center p-3 bg-slate-200 border rounded-md border-black font-semibold md:text-xl lg:text-xl'>
            <FaUserEdit className='mr-2' />Edit Account Details
          </button>
        </div>
        <div className='flex flex-col mt-4 gap-10 md:flex-row items-center md:items-start justify-center flex-wrap md:flex-nowrap'>
          <div className='bg-slate-300  rounded-2xl py-5 px-5 w-full md:w-2/3'>
            <div className=''>
              <div className='flex items-center flex-wrap gap-2'>
                <h1 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Lorem, ipsum.</h1>
                <button className='text-lg ml-5 mt-2 flex justify-center text-blue-500 items-center p-3 bg-slate-200 border rounded-md border-black font-semibold md:text-xl lg:text-xl'>
                  AE Balance: ₹{balance}
                </button>
              </div>
              <div className='flex flex-row  justify-between  mt-6 flex-wrap'>
                <div className='flex  flex-col items-center'>
                  <div className='flex items-center gap-2 mt-10 mb-2 text-black'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" mx-1">
                      <circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                    </svg>
                    anmolgaur87@gmail.com
                  </div>
                  <div className='flex items-center gap-2 mb-2 text-black'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    +91-6230028359
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-3 cursor-pointer">
                  <span className="flex text-xl items-center gap-2" aria-label="Copy Code">
                    Affiliate Code :
                    <span className="flex text-xl items-center gap-2 font-bold" id="referral_code">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-black">
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                        <path d="M12 11h4"></path>
                        <path d="M12 16h4"></path>
                        <path d="M8 11h.01"></path>
                        <path d="M8 16h.01"></path>
                      </svg>
                      EAAG9650
                    </span>
                  </span>
                  <button className="flex items-center gap-2 justify-center mt-3 px-3 py-2 mb-3 text-lg font-semibold text-white bg-blue-400 rounded-lg md:w-auto md:mr-3 md:mb-0 focus:outline-none">View Affiliate</button>
                  <button className="flex items-center gap-2 justify-center mt-3 px-3 py-2 mb-3 text-lg font-semibold text-white bg-blue-400 rounded-lg md:w-auto md:mr-3 md:mb-0 focus:outline-none">View Referred Users</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-full h-auto md:h-auto md:w-1/2 max-w-full shadow-2xl rounded-lg lg:max-w-[20rem] lg:mt-6 lg:w-auto mt-10 xl:w-4/12">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                <div className="flex flex-wrap">
                  <div className="flex items-center w-full max-w-full px-3 md:w-full justify-between md:flex-none">
                    <h6 className="mb-0 text-xl font-semibold">Assignment Stats</h6>
                  </div>
                </div>
                <hr className="h-px my-4 bg-transparent bg-gradient-horizontal-light" />
              </div>
              <div className="flex flex-col justify-center items-center pt-9 pl-2 bg-white">
                <strong className="text-blue141 flex items-center justify-start">
                  <div className="flex items-center justify-start text-left px-3">
                    <span className="text-sm text-gray-500">Total Assignments</span>
                    <span className="text-sm text-blue141 px-2 py-4">0</span>
                  </div>
                </strong>
                <button className="flex items-center gap-2 justify-center mt-3 px-3 py-2 mb-3 text-lg font-semibold text-white bg-blue-400 rounded-lg md:w-auto md:mr-3 md:mb-0 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-1">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                  <Link to="/postreq">Post Your Requirement</Link>
                </button>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard



