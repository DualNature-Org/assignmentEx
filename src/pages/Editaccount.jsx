import React from 'react';
import {useNavigate} from "react-router-dom";
function Editaccount() {
    const navigate = useNavigate()

  return (
    <div>
      <div className='bg-white p-8'>
        <h1 className='text-3xl text-blue-400 font-semibold mb-6'>Update Account Details</h1>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="Firstname" className="text-lg mb-2">First Name</label>
            <input type="text" id="Firstname" className="border border-gray-300 rounded-md py-2 px-3" placeholder="Enter your first name" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Lastname" className="text-lg mb-2">Last Name</label>
            <input type="text" id="Lastname" className="border border-gray-300 rounded-md py-2 px-3" placeholder="Enter your last name" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="birthday" className="text-lg mb-2">Birthday</label>
            <input type="date" id="birthday" className="border border-gray-300 rounded-md py-2 px-3" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="newpass" className="text-lg mb-2">New Password</label>
            <input type="password" id="newpass" className="border border-gray-300 rounded-md py-2 px-3" placeholder="Enter your new password" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmpass" className="text-lg mb-2">Confirm Password</label>
            <input type="password" id="confirmpass" className="border border-gray-300 rounded-md py-2 px-3" placeholder="Confirm your new password" />
          </div>
          <div className="col-span-2">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-full" onClick={()=>{navigate('/dashboard')}}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Editaccount;
