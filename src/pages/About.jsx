import React from 'react';
import aboutlogo from "../Images/about.png";
import Mission from "../Images/mission-0d5488bf.png";
import Thesis from "../Images/thesis.png";
import Check from "../Images/check.png";
import Coding from "../Images/coding.png";

function About() {
    return (
        <div>
            <div className="h-1/2  flex items-center justify-center px-5">
                <img src={aboutlogo} className=" top-0 w-1/2 h-[33rem] rounded-full object-contain opacity-100" />
            </div>
            <section className="backdrop-filter backdrop-blur-sm bg-opacity-50 rounded-xl">
                <div className="flex flex-col items-center justify-center py-3">
                    <span className="text-6xl font-bold text-gray-800">Our Story</span>
                    <span className="px-5 text-xl md:text-2xl tracking-normal text-gray-800 max-w-5xl text-justify pt-1">
                        First things first, we're just a group of folks rocking shorts and T-shirts, brainstorming ways to make your life easier. Ever noticed how EarPods and Bluetooth headphones gained popularity? It's because who wants to waste time untangling wires? That's the inspiration behind our mission and tagline.
                    </span>
                    <span className="mt-5 text-2xl md:text-4xl md:bg-transparent bg-orange-500 backdrop-filter md:backdrop-blur-0 backdrop-blur-md bg-opacity-80 md:text-orange-500 text-gray-100 p-2 px-5 rounded-3xl flex items-center max-w-5xl text-center font-semibold md:mt-5">
                        <span>Leave your assignments to us</span>
                    </span>
                </div>
            </section>
            <section class="p-8 rounded-lg">
                <div class="flex flex-col items-center justify-center pt-3">
                    <span class="text-[42pt] font-bold text-gray-800">Our Mission</span>
                </div>
                <div class="grid grid-cols-1 gap-x-12 md:grid-cols-3 sm:items-center">
                    <img alt="Mission Statement" src={Mission} class="object-cover w-full h-full rounded-lg"/>
                        <blockquote class="sm:col-span-2">
                            <p class="text-[12pt] tracking-wide sm:text-2xl">
                            At Addmission Experts, our mission is to empower students in their academic journey by providing comprehensive support and guidance. We understand the challenges students face and aim to alleviate their burden, allowing them to focus on their educational goals. Our team of dedicated student experts offers assistance across various academic domains, ensuring high-quality support tailored to each student's needs. Join us in redefining academic support and unlocking new possibilities for a brighter future.         
                            </p>
                        </blockquote>
                </div>
            </section>
             <div className='flex flex-col justify-center items-center'>
              <h1 className='text-[42pt] font-bold text-gray-800'>Our Services</h1>
              <p className='text-[12pt] px-16 py-5 bg-white text-black bg-opacity-20 tracking-wide sm:text-2xl'>At our freelance hub, we prioritize the academic triumph of students, understanding its pivotal role in shaping future success. With our comprehensive suite of professional offerings, we're dedicated to empowering you on your educational journey. Whether it's refining your writing skills, mastering coding concepts, or perfecting personal statements, our platform is your one-stop destination for expert assistance tailored to your needs.</p>

              <div className='flex flex-col px-5 py-5 p-5 justify center gap-6 items-center md:flex-row flex-wrap'>
               <div className='flex flex-col bg-white bg-opacity-20  w-[25rem] justify-center items-center px-8 py-4 hover:shadow-2xl'>
                <img src={Thesis} alt="" />
                <h1 className='text-xl font-semibold mt-[1rem] mb-[1rem] md:text-2xl lg:text-3xl'>Dissertation & Thesis</h1>
                <p p-5>From research proposals to complete dissertations, our expert writers can help you with every aspect of the dissertation and thesis writing process, ensuring you achieve the best results possible.</p>
               </div>
               <div className='flex flex-col bg-white bg-opacity-20  w-[25rem] justify-center items-center px-8 py-4 hover:shadow-2xl'>
                <img src={Check} alt="" />
                <h1 className='text-xl font-semibold mt-[1rem] mb-[1rem] md:text-2xl lg:text-3xl'>Statement of purpose</h1>
                <p p-5>Our statement of purpose writing service is designed to help students create a compelling narrative that showcases their skills, experience, and goals, while meeting the requirements of their chosen academic program.</p>
               </div>
               <div className='flex flex-col bg-white bg-opacity-20  w-[25rem] justify-center items-center px-8 py-4 hover:shadow-2xl'>
                <img src={Coding} alt="" />
                <h1 className='text-xl font-semibold mt-[1rem] mb-[1rem] md:text-2xl lg:text-3xl'>Coding Assignments</h1>
                <p p-5>From basic programming concepts to complex algorithms, our experienced programmers can provide comprehensive solutions to your coding assignments, delivering high-quality work that meets your requirements and exceeds your expectations.</p>
               </div>

              </div>
             </div>
        </div>
    );
}

export default About;
