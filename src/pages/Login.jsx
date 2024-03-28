import React, { useState } from 'react'
import { Fade } from "react-awesome-reveal";
import { useNavigate } from 'react-router-dom';


function Login() {
    const [data, setdata] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const handlesubmit = async (e) => {
        e.preventDefault()
        navigate('/dashboard');
    }
    return (
            <div className=' w-full h-full mt-6 flex justify-center items-center'>
                <Fade>
                    <form onSubmit={(e) => handlesubmit(e)} className=' m-3  md: bg-white flex-col flex justify-center items-center p-20 shadow-lg rounded-lg'>
                        <h1 className='text-4xl  font-bold'>Welcome Back</h1>
                        <h1 className='text-lg  font-normal mb-16'>Sign in to explore</h1>
                        <label className='text-lg  font-normal'>Email</label>
                        <input type="email" name='email' placeholder='Enter your email' onChange={(e) => setdata({ ...data, email: e.target.value })} className=' p-2 m-2  border bg-slate-100 border-black ' />
                        <label className='text-lg  font-normal'>Password</label>
                        <input type="password" name='password' placeholder='Enter you password' onChange={(e) => setdata({ ...data, password: e.target.value })} className=' p-2 m-2 border bg-slate-100 border-black' />
                        <button className='bg-blue-500 text-lg w-[6rem]  h-[3rem] p-1 font-bold text-white rounded-2xl mt-8 hover:bg-blue-400' type='submit'>Sign In</button>
                        <div className='mt-4 font-medium '>Did'nt have an account? <span className='text-blue-400'><a href="/signup">Sign Up</a></span></div>
                    </form>
                </Fade> 
            </div>
    )
}

export default Login
