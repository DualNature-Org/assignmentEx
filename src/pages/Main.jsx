import React, { useState } from 'react';
import Marquee from "react-fast-marquee";
import F1 from '../Images/uk-3051b9d5.png';
import F2 from '../Images/australia-425a01f3.png';
import F3 from '../Images/canada-8f04c71b.png';
import F4 from '../Images/download.png';
import F5 from '../Images/ind-68a9f7e3.png';
import Section from "../Components/Section";
import TestimonialsSlider from '../Components/TestimonialsSlider';
import Faq from '../Components/Faq';

function Main() {
  return (
    <div className='gap-10'>
      <div className='px-8'>
        <div className='flex flex-col px-0 md:flex-row justify-center items-center md:px-10'>
          <div className='flex flex-col justify-center items-center w-full md:w-full'>
            <h1 className='text-center block text-black md:text-[3.5rem] text-[3rem] font-bold md:pt-3 md:pb-1 leading-none tracking-wider md:tracking-normal'>We help you do your <br /><span className='text-orange-500'>Assignments</span></h1>
            <p className='text-black md:text-[1.6rem] mt-10 text-[1.5rem] max-w-xl md:py-10 leading-none md:mt-0 mt-5 md:tracking-normal tracking-wide text-center md:text-left'>
              Never worry about not knowing your assignments. Find experts to help you with your assignments and projects.
            </p>
            <button className='bg-[#2956A8] text-[#ffff] font-semibold text-center md:font-bold py-2 px-5 rounded-full w-[280px] md:py-3 md:px-3 text-[1.2rem] md:text-[1.5rem] md:rounded-lg md:mt-1 md:my-0 my-5 hover:transform hover:scale-105 transition duration-300 ease-in-out'>
              Post your Assignment
            </button>
          </div>
          <div className='flex justify-center items-center mt-8 w-full lg:w-auto md:flex-row flex-col md:flex gap-0 lg:gap-5 md:gap-5'>
            <div className='flex flex-col w-full md:w-1/2 justify-center items-center'>
              <div className='flex flex-col gap-5 md:flex-row'>
                <div className='bg-white w-full h-auto text-center text-2xl hover:transform hover:scale-105 transition duration-300 ease-in-out font-semibold pr-[4rem] pl-[4rem] pt-6 pb-6 mb-3'>
                  <h1>More than</h1>
                  <br />
                  <h1 className='text-3xl text-orange-400'>1000</h1>
                  <br />
                  <h1>Genuine & Writers</h1>
                </div>
                <div className='bg-white w-full h-auto text-center text-2xl hover:transform hover:scale-105 transition duration-300 ease-in-out font-semibold pr-[4rem] pl-[4rem] pt-6 pb-6 mb-3'>
                  <h1>Trusted by </h1>
                  <br />
                  <h1 className='text-3xl text-orange-400'>3000+</h1>
                  <br />
                  <h1>Students</h1>
                </div>
                <div className='bg-white w-full h-auto text-center text-2xl hover:transform hover:scale-105 transition duration-300 ease-in-out font-semibold pr-[4rem] pl-[4rem] pt-6 pb-6 mb-3'>
                  <h1>More than</h1>
                  <br />
                  <h1 className='text-3xl text-orange-400'>1000</h1>
                  <br />
                  <h1>Domains & Subject <br />Covered</h1>
                </div>
              </div>
              <div className='w-full lg:w-[45rem] flex-flex-col gap-3 justify-center items-center'>
                <h1 className="text-[#2956A8] text-[1.4rem] mt-2 text-center font-semibold md:text-[1.8rem] md:font-bold mb-2">Present in Universities of </h1>
                <Marquee>
                  <img src={F1} alt="F1" className='w-20 h-20 m-[1.5rem] md:w-24 md:h-24 rounded-full' />
                  <img src={F2} alt="F2" className='w-20 h-20 m-[1.5rem] md:w-24 md:h-24 rounded-full' />
                  <img src={F3} alt="F3" className='w-20 h-20 m-[1.5rem] md:w-24 md:h-24 rounded-full' />
                  <img src={F4} alt="F4" className='w-20 h-20 m-[1.5rem] md:w-24 md:h-24 rounded-full' />
                  <img src={F5} alt="F5" className='w-20 h-20 m-[1.5rem] md:w-24 md:h-24 rounded-full' />
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center px-3 py-3'>
        <div className=" w-full md:ml-10 flex flex-col md:w-1/2 px-10 py-10 shadow-2xl backdrop-blur-3xl rounded-3xl h-fit">
          <div className="flex flex-col opacity-1 transform-none text-justify md:block md:py-0">
            <h1 className="md:text-[3rem] tracking-tighter text-[2rem] font-bold py-2 uppercase">Dissertations & Thesis</h1>
            <h1 className="text-lg md:text-[1.5rem] tracking-normal  text-left">Get expert help with your dissertation or thesis and take the first step towards achieving your academic goals.</h1>
            <button className="w-32 py-1 px-1 mt-5 text-lg text-white rounded-full bg-[#2956A8] font-Regular md:text-xl md:py-3 md:w-64">Learn More</button>
          </div>
        </div>
      </div>
      <Section />
      <div className="flex flex-col items-center px-4 py-4  m-4  justify-center text-xl font-semibold md:text-5xl">
        <span className="max-w-5xl px-5 md:pb-4 font-bold text-center break-words">
          Assignments By Top 5% of Experts
        </span>
        <button className="w-32 py-1  text-lg text-white rounded-full bg-[#2956A8] md:font-SemiBold md:text-2xl md:py-3 md:w-48">Join Them</button>
      </div>
      <TestimonialsSlider />
      <Faq />
    </div>
  );
}

export default Main;
