import React, { useState } from 'react';

function Faq() {
  const faqData = [
    {
      question: "What type of assignments can your freelancers help with?",
      answer: "Our freelancers can help with a wide range of assignments including writing, editing, graphic design, programming, and more."
    },
    {
      question: "How do I ensure the quality of the work delivered?",
      answer: "We have a rigorous vetting process for our freelancers and provide tools for tracking progress and communicating feedback. Additionally, we offer revisions to ensure satisfaction with the delivered work."
    },
    {
      question: "How do I make the payment for my assignment?",
      answer: "Payment for assignments is typically made through our platform using secure payment methods such as credit/debit cards or PayPal."
    },
    {
      question: "Is your service available 24/7?",
      answer: "Yes, our platform is accessible 24/7, but please note that freelancer availability may vary."
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleQuestion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div>
      <section className="text-gray-900 w-full md:mb-20 mb-10 px-4 pt-16 md:max-w-5xl mx-auto">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-2 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
          <h3 className="mb-10 mt-10 text-gray-700 md:max-w-2xl mx-auto text-center">Here are some of the most common questions we get asked by our students. If you have any other questions, feel free to reach out to us.</h3>
          <div className="grid gap-10 md:grid-cols-1">
            {faqData.map((faq, index) => (
              <div className="border border-gray-300 rounded-md shadow-sm" key={index}>
                <div className="p-5">
                  <button className="font-semibold flex items-center justify-between w-full" onClick={() => toggleQuestion(index)}>
                    <span>{faq.question}</span>
                    <span>
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d={expandedIndex === index ? "M1 1l7 7 7-7" : "M1 1l7 7 7-7"}></path>
                      </svg>
                    </span>
                  </button>
                  {expandedIndex === index && (
                    <p className="mt-2 text-gray-700">{faq.answer}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
