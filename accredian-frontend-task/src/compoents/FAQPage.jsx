import React, { useState } from "react";

const FAQPage = () => {
  const [activeSection, setActiveSection] = useState("eligibility");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = {
    eligibility: [
      { question: "Who is eligible for the program?", answer: "Anyone above 18 years old can apply." },
      { question: "Do I need prior experience?", answer: "No, beginners can also apply." },
      { question: "Are there any prerequisites?", answer: "Basic knowledge of the subject is helpful but not mandatory." }
    ],
    howToUse: [
      { question: "How do I register?", answer: "Click on the signup button and fill in your details." },
      { question: "Where can I access the course?", answer: "You can access it on our website under 'My Courses'." },
      { question: "Can I use it on mobile?", answer: "Yes, our platform is mobile-friendly." }
    ],
    terms: [
      { question: "What is the refund policy?", answer: "You can request a refund within 7 days of purchase." },
      { question: "Are there any hidden charges?", answer: "No, everything is transparent." },
      { question: "Can I transfer my membership?", answer: "No, memberships are non-transferable." }
    ]
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold text-center py-5">
        Frequently Asked <span className="text-blue-500">Questions</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-5 mt-5">
        {/* Sidebar Buttons */}
        <div className="md:w-1/3 flex flex-col space-y-4 ">
          {Object.keys(faqData).map((key) => (
            <button
              key={key}
              className={`py-3 px-5 rounded-md text-left shadow-xl  max-w-72 text-blue-500  cursor-pointer${
                activeSection === key ? " border-blue-500 border " : "text-gray-800 border border-gray-400  "
              }`}
              onClick={() => {
                setActiveSection(key);
                setOpenIndex(null); // Reset open question when switching sections
              }}
            >
              {key === "eligibility" ? "Eligibility" : key === "howToUse" ? "How to Use?" : "Terms & Conditions"}
            </button>
          ))}
        </div>

        {/* FAQ Content with Dropdown */}
        <div className="md:w-2/3 bg-white shadow-md rounded-md p-5">
          {faqData[activeSection].map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-3">
              <button
                className="w-full text-left flex justify-between items-center p-3 font-semibold text-gray-800 hover:bg-gray-100 rounded-md"
                onClick={() => toggleAnswer(index)}
              >
                {faq.question}
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && (
                <p className="text-gray-600 mt-2 p-3 bg-gray-100 rounded-md">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
