import React, { useState, useEffect } from 'react';


const TestimonialsSlider = () => {
  const testimonials = [
    { content: "The essay I received from Bluepen was outstanding! Their team of writers not only understood the requirements but also went above and beyond to deliver a high-quality essay that exceeded my expectations.", author: "Lavanya Ganesan" },
    { content: "I had a tight deadline, required assistance with completing my college assignment, and had tests. Bluepen came to my aid and helped me out of the predicament by completing the project on schedule. Throughout the process, Saurav, the project manager, was always available for consultation. I heartily endorse them for assignment assistance.", author: "Kartik Mittal" },
    { content: "The services provided by Bluepen were fantastic. I was struggling with my dissertation, and their team provided me with exceptional support and guidance throughout the process. They were professional, prompt, and delivered high-quality work. I highly recommend their services to anyone in need of academic assistance.", author: "Emily Johnson" },
    { content: "I was hesitant at first to use an online service for my assignments, but Bluepen exceeded my expectations. Their writers are highly skilled and deliver exceptional work. They helped me improve my grades and reduce my stress levels. I'm grateful for their assistance and would recommend them to anyone in need of academic support.", author: "Michael Smith" },
    { content: "I've been using Bluepen for my assignments for the past year, and they've consistently delivered high-quality work. Their writers are knowledgeable, and their customer service is excellent. I've recommended them to several friends, and they've all had positive experiences. If you're looking for reliable academic assistance, look no further than Bluepen.", author: "Sophia Patel" }
    // Add more testimonials here as needed
  ];
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((currentReview + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentReview]);

  return (
    <div className='flex flex-col my-10 py-5 md:py-20  px-10  mx-auto md:max-w-[95rem] md:flex-row justify-center items-center bg-white rounded-xl shadow-lg  bg-opacity-20  drop-shadow-lg'>
      <div class="max-w-3xl text-center sm:text-left md:w-[30rem] md:px-12 md:py-12 h-auto lg:w-[30rem]">
        <h2 class="py-8 text-3xl font-bold md:text-[2rem]  text-gray-800">What our students are saying about us</h2>
        <p class="mb-5 md:mt-4 text-gray-800 ">Discover how our expert freelancers have helped students from a range of academic backgrounds achieve success in their assignments and projects, through their feedback and&nbsp;testimonials.</p>
        </div>
      <div className='md:w-[40rem] h-[] md:h-[20rem] flex  justify-center  rounded-2xl items-center text-center shadow-lg bg-white shadow-[#0B3F67]'>
        <p className='p-6 my-3 text-black  md:text-xl m-4'>
          <strong>{testimonials[currentReview].content}</strong>: {testimonials[currentReview].author}
        </p>
      </div>
    </div>
  );
}

export default TestimonialsSlider;
