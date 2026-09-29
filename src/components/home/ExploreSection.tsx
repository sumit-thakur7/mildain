'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  "AI & Machine Learning",
  "Big Data Analytics",
  "Cyber Security",
  "DevOps",
  "Data Science & Business Analytics",
  "Quality Management",
  "Project Management"
];

const roles = [
  {
    id: 1,
    title: "Ethical Hacker",
    description: "Ethical hacking is one of the most sought-after roles within cybersecurity, with businesses investing heavily in offensive security testing. Ethical hacking offers a career path that combines technical depth, continuous learning, and strong earning potential.",
    salary: "₹4 - ₹24 LPA",
    image: "/images/home/hero.png"
  },
  {
    id: 2,
    title: "Cloud Architect",
    description: "Cloud Architects oversee a company's cloud computing strategy, including cloud adoption plans, cloud application design, and cloud management and monitoring. It requires deep technical knowledge and leadership.",
    salary: "₹12 - ₹35 LPA",
    image: "/images/home/hero1.png"
  },
  {
    id: 3,
    title: "Data Scientist",
    description: "Data Scientists utilize their analytical, statistical, and programming skills to collect, analyze, and interpret large data sets. They then use this information to develop data-driven solutions to difficult business challenges.",
    salary: "₹8 - ₹30 LPA",
    image: "/images/home/hero2.png"
  }
];

export default function ExploreSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === roles.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? roles.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === roles.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="w-full max-w-[1300px] mx-auto px-6 lg:px-16">

        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
            Explore by <span className="text-primary">Categories</span>
          </h2>
          <div className="flex flex-wrap gap-4 md:gap-5">
            {categories.map((cat, index) => (
              <Link
                key={index}
                href={`/categories/${cat.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                className="px-6 py-3 bg-[#F4F4F4] hover:text-primary  text-slate-900 text-base md:text-lg rounded-full transition-colors whitespace-nowrap"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Explore by Roles
            </h2>
            <p className="text-xl md:text-lg text-slate-600 leading-relaxed mb-8">
              Choose the path that suits you best from among the most in-demand roles in the industry
            </p>
            <Link
              href="/roles"
              className="text-primary font-bold text-xl md:text-xl hover:underline"
            >
              View All Roles
            </Link>
          </div>

          <div className="lg:col-span-8 flex flex-col w-full relative">
            
            <div className="w-full bg-[#F6E9C6] bg-gradient-to-r from-[#F9EDD0] to-[#EBDCA8] rounded-xl overflow-hidden relative shadow-sm min-h-[400px] sm:min-h-[320px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-full h-full flex flex-col sm:flex-row items-center absolute inset-0"
                >
                  <div className="relative w-full sm:w-[280px] md:w-[320px] h-[190px] sm:h-full shrink-0 flex items-end justify-center">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-t-full bg-[#F0D593] opacity-60"></div>
                    <Image
                      src={roles[currentIndex].image}
                      alt={roles[currentIndex].title}
                      width={280}
                      height={290}
                      className="relative z-10 object-contain object-bottom h-[95%] w-auto"
                    />
                  </div>

                  <div className="p-8 sm:p-10 sm:pl-6 flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                      {roles[currentIndex].title}
                    </h3>
                    <p className="text-base md:text-lg text-slate-800 leading-relaxed mb-6 line-clamp-4">
                      {roles[currentIndex].description}
                    </p>
                    <p className="text-lg md:text-xl font-extrabold text-slate-800">
                      {roles[currentIndex].salary}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center items-center gap-4 mt-8">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:border-slate-400 transition-colors bg-white shadow-sm"
              >
                <ChevronLeft size={20} strokeWidth={2} />
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:border-slate-400 transition-colors bg-white shadow-sm"
              >
                <ChevronRight size={20} strokeWidth={2} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}