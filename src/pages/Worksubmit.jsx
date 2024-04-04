import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Worksubmit(props) {
    console.log(props.type);
    const [files, setFiles] = useState([]);

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFiles = Array.from(event.dataTransfer.files);
        setFiles(droppedFiles);
    };

    const handleInputChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(selectedFiles);
    };

    const handleClear = () => {
        setFiles([]);
    };
    const navigate = useNavigate()

    return (
        <div>
            <div class="flex flex-col bg-sky-300 bg-opacity-65 border-black border  items-center justify-center gap-2 p-10 md:flex-row">
                <div class="py-5 max-w-screen-xl mx-auto flex md:flex-row flex-col justify-between items-center">
                    <button class="flex-col max-w-sm px-10 bg-white border border-gray-200 rounded-lg shadow-2xl backdrop-blur-3xl">
                        <div class="p-5">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props.type}</h5>
                        </div>
                    </button>
                </div>
                <section id="generalothers">
                    <label class="block mt-4 mb-2 text-center text-2xl font-semibold">General Details Section</label>
                    <div class="flex flex-col md:w-[45rem] w-[20rem]">
                        <br />
                        <span class="text-lg font-semibold text-gray-700">Assignment Type (Select Your Type)</span>
                        {
                            props.type === "Academic Writing" && <fieldset class="flex flex-wrap items-center justify-center w-full gap-3 py-8">
                                <div>
                                    <label for="ResearchProposal" class="flex items-center justify-center gap-2 px-3 py-2 text-gray-900 border border-gray-100 rounded-md cursor-pointer hover:border-gray-200 ">
                                        <input type="checkbox" name="ResearchProposal" id="ResearchProposal" value="Research Proposal" className="p-4 " />
                                        <p class="text-sm font-medium">Research Proposal</p>
                                    </label>

                                </div>
                                <div>
                                    <label for="ThesisEditing" class="flex items-center justify-center gap-2 px-3 py-2 text-gray-900 border border-gray-100 rounded-md cursor-pointer hover:border-gray-200 ">
                                        <input type="checkbox" name="ThesisEditing" id="ThesisEditing" value="Thesis Editing" className="p-4 " />
                                        <p class="text-sm font-medium">Thesis Editing</p>
                                    </label>
                                </div>
                                <div>
                                    <label for="PaperProofreading" class="flex items-center justify-center gap-2 px-3 py-2 text-gray-900 border border-gray-100 rounded-md cursor-pointer hover:border-gray-200 ">
                                        <input type="checkbox" name="PaperProofreading" id="PaperProofreading" value="Academic Paper Proofreading" className="p-4 " />
                                        <p class="text-sm font-medium">Academic Paper Proofreading</p>
                                    </label>
                                </div>
                                <div>
                                    <label for="TermPaperWriting" class="flex items-center justify-center gap-2 px-3 py-2 text-gray-900 border border-gray-100 rounded-md cursor-pointer hover:border-gray-200 ">
                                        <input type="checkbox" name="TermPaperWriting" id="TermPaperWriting" value="Term Paper Writing" className="p-4 " />

                                        <p class="text-sm font-medium">Term Paper Writing</p>
                                    </label>
                                </div>
                                <div>
                                    <label for="DissertationEditing" class="flex items-center justify-center gap-2 px-3 py-2 text-gray-900 border border-gray-100 rounded-md cursor-pointer hover:border-gray-200 ">
                                        <input type="checkbox" name="DissertationEditing" id="DissertationEditing" value="Dissertation Editing" className="p-4 " />

                                        <p class="text-sm font-medium">Dissertation Editing</p>
                                    </label>
                                </div>
                            </fieldset>
                        }
                        {
                            props.type === "Coding" && <fieldset class="flex flex-wrap items-center justify-center w-full gap-3 py-8">
                                <div>
                                    <label for="TermPaperWriting" class="flex items-center justify-center gap-2 px-3 py-2 text-gray-900 border border-gray-100 rounded-md cursor-pointer hover:border-gray-200 ">
                                        <input type="checkbox" name="TermPaperWriting" id="TermPaperWriting" value="Term Paper Writing" className="p-4 " />

                                        <p class="text-sm font-medium">Software</p>
                                    </label>
                                </div>
                                <div>
                                    <label for="DissertationEditing" class="flex items-center justify-center gap-2 px-3 py-2 text-gray-900 border border-gray-100 rounded-md cursor-pointer hover:border-gray-200 ">
                                        <input type="checkbox" name="DissertationEditing" id="DissertationEditing" value="Dissertation Editing" className="p-4 " />

                                        <p class="text-sm font-medium">Hardware</p>
                                    </label>
                                </div>
                            </fieldset>
                        }
                        {
                            props.type === "Professional Writing" && <fieldset class="flex flex-wrap items-center justify-center w-full gap-3 py-8">
                                <div>
                                    <label for="TermPaperWriting" class="flex items-center justify-center gap-2 px-3 py-2 text-gray-900 border border-gray-100 rounded-md cursor-pointer hover:border-gray-200 ">
                                        <input type="checkbox" name="TermPaperWriting" id="TermPaperWriting" value="Term Paper Writing" className="p-4 " />
                                        <p class="text-sm font-medium">Resume</p>
                                    </label>
                                </div>
                                <div>
                                    <label for="DissertationEditing" class="flex items-center justify-center gap-2 px-3 py-2 text-gray-900 border border-gray-100 rounded-md cursor-pointer hover:border-gray-200 ">
                                        <input type="checkbox" name="DissertationEditing" id="DissertationEditing" value="Dissertation Editing" className="p-4 " />

                                        <p class="text-sm font-medium">CV</p>
                                    </label>
                                </div>
                                <div>
                                    <label for="TermPaperWriting" class="flex items-center justify-center gap-2 px-3 py-2 text-gray-900 border border-gray-100 rounded-md cursor-pointer hover:border-gray-200 ">
                                        <input type="checkbox" name="TermPaperWriting" id="TermPaperWriting" value="Term Paper Writing" className="p-4 " />

                                        <p class="text-sm font-medium">Marketing Quotes</p>
                                    </label>
                                </div>
                                <div>
                                    <label for="DissertationEditing" class="flex items-center justify-center gap-2 px-3 py-2 text-gray-900 border border-gray-100 rounded-md cursor-pointer hover:border-gray-200 ">
                                        <input type="checkbox" name="DissertationEditing" id="DissertationEditing" value="Dissertation Editing" className="p-4" />

                                        <p class="text-sm font-medium">Formal letters</p>
                                    </label>
                                </div>
                            </fieldset>
                        }
                        <label class="text-lg font-semibold text-gray-700">Level of Assignment</label>
                        <div class="flex flex-wrap items-center justify-center w-full gap-3 py-3">
                            <div className='flex  justify-center items-center'>
                                <label for="diploma" class="flex items-center justify-center gap-2 px-3 py-2 mx-1 my-1 text-gray-900 border rounded-md cursor-pointer hover:border-gray-200 hover:bg-white transition-colors">
                                    <input type="radio" name="level" id="diploma" value="Diploma" />
                                    Diploma
                                </label>
                            </div>
                            <div className='flex  justify-center items-center'>
                                <label for="bachelors" class="flex items-center justify-center gap-2 px-3 py-2 mx-1 my-1 text-gray-900 border rounded-md cursor-pointer hover:border-gray-200 hover:bg-white transition-colors">
                                    <input type="radio" name="level" id="bachelors" value="Bachelors" />

                                    Bachelors
                                </label>
                            </div>
                            <div className='flex  justify-center items-center'>
                                <label for="masters" class="flex items-center justify-center gap-2 px-3 py-2 mx-1 my-1 text-gray-900 border rounded-md cursor-pointer hover:border-gray-200 hover:bg-white transition-colors">
                                    <input type="radio" name="level" id="masters" value="Masters" />

                                    Masters
                                </label>
                            </div>
                            <div className='flex  justify-center items-center'>
                                <label for="phd" class="flex items-center justify-center gap-2 px-3 py-2 mx-1 my-1 text-gray-900 border rounded-md cursor-pointer hover:border-gray-200 hover:bg-white transition-colors">
                                    <input type="radio" name="level" id="phd" value="PhD" />
                                    PhD
                                </label>
                            </div>
                        </div>

                        <label class="text-lg font-semibold text-gray-700">Assignment Title</label>
                        <div class="w-full mb-3">
                            <input type="text" id="title" name="title" placeholder="Enter the title of your Assignment" required
                                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded-md shadow-sm appearance-none focus:outline-none focus:shadow-outline" />
                        </div>
                        <label class="text-lg font-semibold text-gray-700">Assignment Description</label>
                        <div class="w-full mb-3">
                            <textarea id="description" name="description" rows="5"
                                placeholder="Describe in more than 100 words about detailed requirements and what is to be done in the assignment."
                                required class="w-full px-3 py-2 leading-tight text-gray-700 border rounded-md shadow-sm appearance-none focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                    </div>
                    <div className="border border-dashed w-[22rem] bg-slate-100 border-gray-300 rounded-md p-4 flex flex-col items-center justify-center gap-4"
                        onDrop={handleDrop}
                        onDragOver={(event) => event.preventDefault()}
                    >
                        <div className='mx-5 my-5'>
                            <div className="text-gray-500 text-center">
                                <p>Drag and drop your files here</p>
                                <p>or</p>
                                <label htmlFor="fileInput" className="cursor-pointer text-blue-600 font-semibold">click to browse</label>
                                <input
                                    type="file"
                                    id="fileInput"
                                    className="hidden"
                                    multiple
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        {files.length > 0 && (
                            <div>
                                <h3>Selected Files:</h3>
                                <ul>
                                    {files.map((file, index) => (
                                        <li key={index}>{file.name}</li>
                                    ))}
                                </ul>
                                <button onClick={handleClear}>Clear</button>
                            </div>
                        )}
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white text-center font-semibold py-2 px-4 rounded-md w-[15rem] mt-4" onClick={() => { navigate('/dashboard') }}>  Submit</button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Worksubmit
