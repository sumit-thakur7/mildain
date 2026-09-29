import React from 'react';
import Image from 'next/image';
import { CalendarDays, BookOpen, CheckCircle2 } from 'lucide-react';

export default function RelatedPrograms() {
  const programs = [
    {
      id: 1,
      title: "Digital Marketing Specialist",
      duration: "8 month",
      courses: "14 Courses",
      points: [
        "Learn 35+ digital marketing tools",
        "Learn 35+ digital marketing tools",
        "Learn 35+ digital marketing tools",
        "Learn 35+ digital marketing tools"
      ]
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      duration: "8 month",
      courses: "14 Courses",
      points: [
        "Learn 35+ digital marketing tools",
        "Learn 35+ digital marketing tools",
        "Learn 35+ digital marketing tools",
        "Learn 35+ digital marketing tools"
      ]
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      duration: "8 month",
      courses: "14 Courses",
      points: [
        "Learn 35+ digital marketing tools",
        "Learn 35+ digital marketing tools",
        "Learn 35+ digital marketing tools",
        "Learn 35+ digital marketing tools"
      ]
    }
  ];

  return (
    <div className="w-full bg-[#f4faf7] py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        <h2 className="text-center text-[28px] md:text-[32px] font-bold text-[#1f2937] mb-12">
          Related Programs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden relative flex flex-col transition-transform hover:-translate-y-1">
              
              <div className="h-[80px] bg-[#16a34a] w-full shrink-0"></div>
              
              <div className="absolute top-[40px] left-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md border border-slate-50 overflow-hidden">
                <div className="relative w-10 h-10">
                  <Image
                    src="/images/home/hero1.png"
                    alt="Program Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="pt-10 p-6 flex flex-col flex-grow">
                <h3 className="text-[20px] font-bold text-[#1f2937] mb-4">
                  {program.title}
                </h3>
                
                <div className="flex items-center gap-4 text-[14px] text-slate-500 mb-6 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CalendarDays size={16} className="text-slate-400" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="w-[1px] h-4 bg-slate-300"></div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen size={16} className="text-slate-400" />
                    <span>{program.courses}</span>
                  </div>
                </div>
                
                <ul className="flex flex-col gap-3">
                  {program.points.map((point, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#16a34a] flex items-center justify-center shrink-0">
                        <CheckCircle2 size={14} className="text-white" strokeWidth={3} />
                      </div>
                      <span className="text-[14px] text-slate-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          ))}
        </div>
        
        <div className="text-center mt-2">
          <a href="/programs" className="text-[#16a34a] font-bold text-[16px] hover:underline transition-all">
            View all Related Programs
          </a>
        </div>
        
      </div>
    </div>
  );
}