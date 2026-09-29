'use client';

import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const faqData = [
  {
    question: "Who should take the CISM certification?",
    answer: "CISM is best suited for experienced IT and cybersecurity professionals who want to move into management and leadership roles."
  },
  {
    question: "Is the course aligned with the latest ISACA syllabus?",
    answer: "Yes, our training program is fully updated and structured according to the latest official ISACA guidelines and domain weightages."
  },
  {
    question: "Will I get access to recordings?",
    answer: "Yes, all enrolled participants receive lifetime access to class recordings and continuous updates to learning materials."
  },
  {
    question: "Do you provide corporate training?",
    answer: "We offer customized corporate training solutions tailored to enterprise requirements, team schedules, and group volume pricing."
  }
];

export default function CourseFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="w-full bg-white py-12 lg:py-20 border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        <div className="mb-10">
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-slate-900">
            Frequently Asked Questions <span className="text-[#10b981]">(FAQ)</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className={`rounded-lg overflow-hidden transition-all duration-300 border ${
                openIndex === index ? 'border-[#10b981]' : 'border-slate-100'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                  openIndex === index ? 'bg-[#10b981] text-white' : 'bg-[#f0f6ff] text-slate-900 hover:bg-[#e2e8f0]'
                }`}
              >
                <span className="font-bold text-[15px] md:text-[16px]">{item.question}</span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ml-4 ${
                  openIndex === index ? 'bg-white text-[#10b981]' : 'bg-[#10b981] text-white'
                }`}>
                  {openIndex === index ? <X size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                </div>
              </button>

              {openIndex === index && (
                <div className="bg-[#10b981] text-white p-5 pt-0 text-[14px] md:text-[15px] leading-relaxed font-medium">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}