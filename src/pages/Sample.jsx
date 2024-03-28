import React from 'react';
import Acad from "../Images/academic.png";
import Cod from "../Images/code.jpg";
import Prof from "../Images/prof.jpg";

const SampleComponent = () => {
    return (
        <div className="flex flex-col">
            <section className="block bg-blue-400  flex  justify-between flex-wrap p-20 items-center">
                <div className="layout-element layout-element--details pr-8">
                    <div className="text-box">
                        <h2 className="text-5xl text-gray-800 font-semibold">Academic Writing</h2>
                        <p className="text-lg text-gray-700">Topics include thesis, research papers, essays, etc.</p>
                        <button className='w-auto text-xl h-[3rem] p-3 mt-5 font-semibold rounded-2xl m-4 bg-yellow-500 hover:bg-yellow-600 '>
                            <a href="#" className="grid-button flex flex-wrap grid-button--primary h-10 ">Download</a>
                        </button>

                    </div>
                </div>
                <img src={Acad} alt="Academic Writing" className="w-[20rem] rounded-full h-auto" />
            </section>

            <section className="block bg-green-400  flex justify-between flex-wrap p-20 items-center">
                <div className="layout-element layout-element--details pr-8">
                    <div className="text-box">
                        <h2 className="text-5xl text-gray-800 font-semibold">Coding</h2>
                        <p className="text-lg text-gray-700">Domains include web development, data science, algorithms, etc.</p>
                        <button className='w-auto text-xl h-[3rem] p-3 mt-5 font-semibold rounded-2xl m-4 bg-red-500 hover:bg-red-600'>
                            <a href="#" className="grid-button flex flex-wrap grid-button--primary h-10 ">Download</a>

                        </button>

                    </div>
                </div>
                <img src={Cod} alt="Coding" className="w-[20rem] rounded-full h-auto" />
            </section>

            <section className="block bg-purple-400  flex justify-between flex-wrap p-20 items-center">
                <div className="layout-element layout-element--details pr-8">
                    <div className="text-box">
                        <h2 className="text-5xl text-gray-800 font-semibold">Professional Writing</h2>
                        <p className="text-lg text-gray-700">Includes resumes, cover letters, business proposals, etc.</p>
                        <button className='w-auto text-xl h-[3rem] p-3 mt-5 font-semibold rounded-2xl m-4   bg-blue-500 h-10 hover:bg-blue-600'>
                            <a href="#" className="grid-button flex flex-wrap grid-button--primary">Download</a>
                        </button>
                    </div>
                </div>
                <img src={Prof} alt="Professional Writing" className="w-[20rem] rounded-full h-auto" />
            </section>
        </div>
    );
}

export default SampleComponent