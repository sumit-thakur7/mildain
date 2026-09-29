import React from 'react';
import Image from 'next/image';
import { Download } from 'lucide-react';

export default function CourseCareerSupport() {
  const supportItems = [
      { title: "Interview Prep & Assessment", img: "/images/home/hero2.png" },
      { title: "AI-Powered Profile Optimization", img: "/images/home/hero2.png" },
      { title: "Mock Interviews & Mentoring", img: "/images/home/hero2.png" },
      { title: "Group Mentoring & Networking", img: "/images/home/hero2.png" },
  ];

  return (
    <div className="w-full bg-white py-12 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        <h2 className="text-[28px] md:text-[32px] font-bold text-[#1f2937] mb-8">
          Career Support
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          <div className="bg-[#15803d] rounded-xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-between min-h-[400px]">
            <div className="relative z-10 space-y-6">
              <h3 className="text-[28px] md:text-[32px] font-bold leading-tight">
                Power Up Your Professional Journey With Job Assist Plus
              </h3>
              <p className="text-white/90 text-[15px] md:text-[16px] leading-relaxed">
                The user-friendly interface and well-structured course drew me in. The high-quality content, delivered by industry experts, was practical and engaging. Completing projects and case studies reinforced my learning with valuable real-world insights.
              </p>
            </div>

            <div className="relative z-10 pt-8 mt-auto">
              <button className="bg-white hover:bg-slate-50 text-[#15803d] font-bold px-6 py-3.5 rounded flex items-center justify-center gap-2 transition-colors w-max">
                <Download size={18} strokeWidth={2.5} />
                <span>Download Brochure</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6 md:gap-8">
            {supportItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-5 md:gap-6">
                <div className="relative w-[120px] md:w-[140px] h-[70px] md:h-[80px] rounded-lg overflow-hidden shrink-0 bg-slate-100 shadow-sm border border-slate-200">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <span className="text-[15px] md:text-[17px] font-medium text-[#1f2937]">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}