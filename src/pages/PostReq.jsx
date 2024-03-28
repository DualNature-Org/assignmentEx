import React from 'react';
import Acad from "../Images/academic.png";
import Cod from "../Images/code.jpg";
import Prof from "../Images/prof.jpg";
import { Link } from 'react-router-dom';

function PostReq() {
    return (
        <div className='px-4 py-4'>
            <div className="flex flex-col items-center justify-center px-5 py-5 md:py-5">
                <h1 className="md:pt-0 pt-1 text-2xl md:text-4xl font-bold text-gray-800">Choose your domain</h1>
                <p className="text-gray-500 text-sm md:text-lg font-medium text-center max-w-[20rem] pt-2 md:max-w-xl mx-auto">
                    Choose your domain from the below given options and fill out the corresponding form for our team to look into your requirements
                </p>
            </div>

            <div className='pt-2 pb-5 gap-5   max-w-[90rem] mx-auto flex md:flex-row flex-col sm:flex md:flex-wrap lg:flex-nowrap px-5 md:px-0 justify-between items-center transform-none'>
                <Link to="/postreq/academic">
                <button className="mb-5 hover:bg-slate-100 md:mb-0 md:h-auto md:w-[50rem] mx-auto flex-col  px-5 shadow-2xl border border-gray-200 rounded-lg max-w-sm hover:bg-blue111 lg:h-auto">
                    <h5 className="text-gray-900 uppercase text-center font-bold text-2xl mt-4 mb-2">Academic Writing</h5>
                    <div className='flex justify-center items-center m-[1rem]'>
                        <img className="rounded-full h-[250px] bg-black p-2 object-cover  md:block" src={Acad} alt="Academic Writing" />
                    </div>
                    <div className="pt-2">
                        <p className="font-normal mb-3 text-left">Our expert freelancers are well-versed in various academic disciplines, providing custom solutions for essays, research papers, case studies, and more. Whether you need help with scientific writing or literature review, our team is here to assist you.</p>
                    </div>
                </button>
                </Link>
                <Link to="/postreq/coding">
                <button className="mb-5 hover:bg-slate-100 md:mb-0 md:h-auto md:w-[50rem] mx-auto flex-col  px-5 shadow-2xl border border-gray-200 rounded-lg max-w-sm hover:bg-blue111 lg:h-auto">
                    <h5 className="text-gray-900 uppercase text-center font-bold text-2xl mt-4 mb-2">Coding Work</h5>
                    <div className='flex justify-center items-center m-[1rem]'>
                        <img className="rounded-full h-[250px] bg-black p-2 object-cover  md:block" src={Cod} alt="Academic Writing" />
                    </div>
                    <div className="pt-2">
                        <p className="font-normal mb-3 text-left">From troubleshooting to enhancement, our freelance experts can assist you in understanding intricate programming principles and delivering streamlined, well-organized code. Utilize our programming proficiency to elevate your projects.</p>
                    </div>
                </button>
                </Link>
                <Link to="/postreq/professional">
                <button className="mb-5 hover:bg-slate-100 md:mb-0 md:h-auto md:w-[50rem] mx-auto flex-col  px-5 shadow-2xl border border-gray-200 rounded-lg max-w-sm hover:bg-blue111 lg:h-auto">
                    <h5 className="text-gray-900 uppercase text-center font-bold text-2xl mt-4 mb-2">Professional Writing</h5>
                    <div className='flex justify-center items-center m-[1rem]'>
                        <img className="rounded-full h-[250px] bg-black p-2 object-cover  md:block" src={Prof} alt="Academic Writing" />
                    </div>
                    <div className="pt-2">
                        <p className="font-normal mb-8 text-left">Our writers excel in crafting concise statements of purpose, recommendation letters, and other documents to support your academic and career goals. Whether for university applications or job opportunities.</p>
                    </div>
                </button>
                </Link>
            </div>
        </div>
    );
}

export default PostReq;
