import React ,{useState} from 'react'

function Section() {
    const [Login, setLogin] = useState(true)
    const [color, setColor] = useState(''); // Initial color state
    const [Upload, setUpload] = useState(false)
    const [Relax, setRelax] = useState(false)
  
  return (
    <div className='px-3 py-3 bg-white bg-opacity-20'>
    <ul className="flex flex-row items-center justify-between border-b m-2 border-gray-100 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 rounded-3xl">
      <li className="flex-1 cursor-pointer">
        <div className="relative block p-4">
          <span className={`absolute inset-x-0 -bottom-px h-1 ml-3 w-full rounded-xl bg-[${color}]`}
            onClick={() => {
              if (Login) {
                setUpload(false);
                setLogin(false);
                setRelax(false);
              } else {
                setLogin(true);
                setUpload(false);
                setRelax(false);
              }
            }}></span>
          <div className="flex items-center justify-center">

            <span
              className={`text-lg md:text-2xl font-medium text-[${color}]`}
              onClick={() => {
                if (Login) {
                  setUpload(false);
                  setLogin(false);
                  setRelax(false);
                } else {
                  setLogin(true);
                  setUpload(false);
                  setRelax(false);
                }
              }
              }
            >
              Login
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={`${color}`} className="w-5 h-5 mx-2 md:w-8 md:h-8">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
      </li>
      <li className="flex-1 cursor-pointer" >
        <div className="relative block p-4">
          <span className="absolute inset-x-0 -bottom-px h-1 w-full rounded-xl bg-transparent" onClick={
            () => {
              if (Upload) {
                setUpload(false);
                setLogin(false);
                setRelax(false);
              }
              else {
                setLogin(false);
                setRelax(false);
                setUpload(true);
              }
            }
          }></span>
          <div className="flex items-center justify-center">
            <span className="ml-3 text-lg md:text-2xl font-medium text-gray-500"
              onClick={
                () => {
                  if (Upload) {
                    setUpload(false);
                    setLogin(false);
                    setRelax(false);
                  }
                  else {
                    setLogin(false);
                    setRelax(false);
                    setUpload(true);
                  }
                }
              }>Upload</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={`${color}`} className="w-5 h-5 mx-2 md:w-8 md:h-8">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
      </li>
      <li className="flex-1 cursor-pointer">
        <div className="relative block p-4">
          <span className="absolute inset-x-0 -bottom-px h-1  w-full rounded-xl bg-transparent" onClick={
            () => {
              if (Relax) {
                setRelax(false);
                setLogin(false);
                setUpload(false);
              } else {
                setRelax(true);
                setLogin(false);
                setUpload(false);
              }
            }
          }></span>
          <div className="flex items-center justify-center">
            <span className="ml-3 text-lg md:text-2xl font-medium text-gray-500" onClick={
              () => {
                if (Relax) {
                  setRelax(false);
                  setLogin(false);
                  setUpload(false);
                } else {
                  setRelax(true);
                  setLogin(false);
                  setUpload(false);
                }
              }
            }>Relax</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mx-2 md:w-8 md:h-8">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
      </li>
    </ul>
    {Login && (
      <div className="flex flex-col items-center justify-center transition-all ease-in-out m-2 opacity-1">
        <svg version="1.1" width="256" height="356" viewBox="0 0 24 24" fill="none">
          <path d="M17 12L10.5 12" stroke-linecap="round" stroke="#2956A8" fill="none" stroke-width="2" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path>
          <path d="M13 9L10.5 12" stroke-linecap="round" stroke="#2956A8" fill="none" stroke-width="2" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path>
          <path d="M13 15L10.5 12" stroke-linecap="round" stroke="#2956A8" fill="none" stroke-width="2" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path>
          <path d="M17 17C17 19.2091 15.2091 20 13 20H10C7.79086 20 6 18.2091 6 16V8C6 5.79086 7.79086 4 10 4H13C15.2091 4 17 4.79086 17 7" stroke-linecap="round" stroke="#2956A8" fill="none" stroke-width="1.5" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path>
        </svg>
        <p className="text-center px-3 py-3 text-lg ">Logging in is quick and easy. Simply enter your credentials to access our platform and start exploring our range of services.</p>
      </div>
    )}
    {
      Upload && (
        <div class="flex flex-col items-center justify-center">
          <svg version="1.1" width="240" height="356" viewBox="0 0 24 24" fill="none">
            <path d="M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 16L12 12M12 12L16 16M12 12V21" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="#2956A8" fill="none" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path>
          </svg>
          <p class="text-center px-3 py-3 text-lg ">Once you're logged in, you can upload your requirements and any necessary files. Our expert project managers will look into it personally and make sure that the correct freelancer works on your assignment</p>
        </div>
      )
    }
    {
      Relax && (<div class="flex flex-col items-center justify-center">
        <svg version="1.1" width="256" height="356" viewBox="-30 0 550 550">
          <g>
            <g>
              <path d="M467.251,111.359c-28.582-41.669-68.35-73.705-115.002-92.647c-5.12-2.078-10.957,0.387-13.038,5.508
              c-2.079,5.121,0.387,10.957,5.508,13.038c43.005,17.461,79.669,47,106.025,85.423c26.978,39.332,41.24,85.432,41.24,133.319
              c0,130.124-105.862,235.985-235.985,235.985S20.015,386.122,20.015,256S125.876,20.015,256,20.015
              c5.527,0,10.007-4.481,10.007-10.007C266.007,4.481,261.527,0,256,0C114.84,0,0,114.84,0,256s114.84,256,256,256
              s256-114.84,256-256C512,204.053,496.526,154.037,467.251,111.359z" stroke-width="15" stroke-linejoin="round" stroke-linecap="round" stroke="#2956A8" fill="#2956A8" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path>
            </g>
          </g>
          <g>
            <g>
              <path d="M212.878,136.432c-23.944,0-43.424,19.48-43.424,43.424c0,5.527,4.481,10.007,10.007,10.007
              c5.527,0,10.007-4.481,10.007-10.007c0-12.908,10.502-23.409,23.409-23.409s23.409,10.502,23.409,23.409
              c0,5.527,4.481,10.007,10.007,10.007c5.527,0,10.007-4.481,10.007-10.007C256.302,155.912,236.822,136.432,212.878,136.432z" stroke-width="15" stroke-linejoin="round" stroke-linecap="round" stroke="#2956A8" fill="#2956A8" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path>
            </g>
          </g>
          <g>
            <g>
              <path d="M381.9,136.432c-23.944,0-43.424,19.48-43.424,43.424c0,5.527,4.481,10.007,10.007,10.007
              c5.527,0,10.007-4.481,10.007-10.007c0-12.908,10.502-23.409,23.409-23.409c12.907,0,23.409,10.502,23.409,23.409
              c0,5.527,4.481,10.007,10.007,10.007s10.007-4.481,10.007-10.007C425.324,155.912,405.845,136.432,381.9,136.432z" stroke-width="15" stroke-linejoin="round" stroke-linecap="round" stroke="#2956A8" fill="#2956A8" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path>
            </g>
          </g>
          <g>
            <g>
              <path d="M391.365,311.594H192.219c-5.527,0-10.007,4.481-10.007,10.007c0,60.423,49.157,109.581,109.581,109.581
              s109.58-49.157,109.58-109.581C401.372,316.075,396.891,311.594,391.365,311.594z M380.802,331.609
              c-4.992,44.695-43.006,79.558-89.011,79.558s-84.019-34.863-89.011-79.558L380.802,331.609L380.802,331.609z" stroke-width="15" stroke-linejoin="round" stroke-linecap="round" stroke="#2956A8" fill="#2956A8" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path>
            </g>
          </g>
          <g>
            <g>
              <circle cx="310.868" cy="17.167" r="10.007" stroke-width="15" stroke-linejoin="round" stroke-linecap="round" stroke="#2956A8" fill="#2956A8" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></circle>
            </g>
          </g>
        </svg>
        <p class="text-center px-3 py-3 text-lg ">Once you've uploaded your requirements, you can sit back and relax while our expert freelancers take care of your project. You can monitor their progress and communicate with the project manager throughout the process, ensuring that the final submission meets your expectations.</p>
      </div>
      )
    }
  </div>
  )
}

export default Section
