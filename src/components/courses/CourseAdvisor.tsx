'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const advisors = [
  {
    id: 1,
    title: "Tim Jerome",
    description: "International project management expert with over 20+ years of experience at companies like Intel and Digital Network Services. A former president of the PMI Rio Grande Chapter.",
    salary: "15+ Years Experience",
    image: "/images/home/hero.png"
  },
  {
    id: 2,
    title: "John Doe",
    description: "Senior Agile Coach and Project Management Professional with deep expertise in hybrid methodologies. Has guided Fortune 500 companies in digital transformation.",
    salary: "10+ Years Experience",
    image: "/images/home/hero1.png"
  }
];

export default function CourseAdvisor() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === advisors.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? advisors.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === advisors.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="advisor" className="py-4 md:py-6 bg-white overflow-hidden border-t border-slate-100">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-4 flex flex-col items-start lg:pr-8 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
              <span className="text-[#10b981]">PMP®</span> Training<br />Course Advisor
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col w-full relative">
            
            <div className="w-full bg-[#fdf8ed] rounded-xl overflow-hidden relative shadow-sm min-h-[400px] sm:min-h-[320px] border border-[#fceec4]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-full h-full flex flex-col sm:flex-row items-center absolute inset-0"
                >
                  <div className="relative w-full sm:w-[280px] md:w-[320px] h-[200px] sm:h-full shrink-0 flex items-end justify-center bg-gradient-to-r from-[#fae7b1] to-[#fdf8ed] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                       <div className="w-40 h-40 border-[20px] border-[#fceec4] rounded-full transform -translate-x-12 -translate-y-12"></div>
                       <div className="w-60 h-60 border-[20px] border-[#fceec4] rounded-full absolute transform translate-x-20 translate-y-20"></div>
                    </div>
                    
                    <Image
                      src={advisors[currentIndex].image}
                      alt={advisors[currentIndex].title}
                      width={280}
                      height={300}
                      className="relative z-10 object-cover object-bottom h-full w-auto max-w-[85%]"
                    />
                  </div>

                  <div className="p-6 sm:p-8 flex-1">
                    <h3 className="text-2xl md:text-[28px] font-bold text-slate-800 mb-4">
                      {advisors[currentIndex].title}
                    </h3>
                    <p className="text-[14px] md:text-[15px] text-slate-700 leading-relaxed mb-6 font-medium">
                      {advisors[currentIndex].description}
                    </p>
                    <p className="text-lg md:text-xl font-extrabold text-slate-800">
                      {advisors[currentIndex].salary}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center items-center gap-4 mt-8">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:border-slate-300 transition-colors bg-white shadow-sm"
              >
                <ChevronLeft size={20} strokeWidth={1.5} />
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:border-slate-300 transition-colors bg-white shadow-sm"
              >
                <ChevronRight size={20} strokeWidth={1.5} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}