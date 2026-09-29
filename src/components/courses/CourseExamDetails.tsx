import React from 'react';
import { MonitorPlay, Clock, ListChecks, FileQuestion, Globe2, ShieldCheck } from 'lucide-react';

export default function CourseExamDetails() {
  return (
    <div id="exam" className="w-full bg-white py-12 lg:py-20 border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        <div className="mb-10">
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-slate-900 mb-2">
            <span className="text-[#10b981]">PMP</span> Exam Details & Certifications
          </h2>
          <p className="text-slate-500 text-[15px] md:text-[16px] max-w-2xl">
            The CISM from ISACA is one of the World's most recognized cybersecurity certifications for Information security management professionals.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          
          <div className="flex-1 flex flex-col gap-3">
            {[
              { icon: MonitorPlay, title: "EXAM FORMAT", desc: "Computer-Based Test (CBT)" },
              { icon: Clock, title: "EXAM DURATION", desc: "4 Hours" },
              { icon: ListChecks, title: "NUMBER OF QUESTIONS", desc: "150 Questions (MCQ-Scenario Based)" },
              { icon: FileQuestion, title: "QUESTION TYPES", desc: "Multiple-Choice + Advanced Formats" },
              { icon: Globe2, title: "AVAILABLE LANGUAGES", desc: "English, Spanish, Chinese- Simplified Japanese, French, German" }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#10b981] rounded-lg p-4 flex items-center gap-4 text-white hover:bg-[#0ea5e9] transition-colors duration-300">
                <div className="w-12 h-12 border border-white/30 rounded-md flex items-center justify-center shrink-0">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-wider opacity-90 mb-0.5">{item.title}</div>
                  <div className="text-[16px] font-bold">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 flex flex-col gap-4">
            
            <div className="w-full rounded-xl overflow-hidden shadow-sm border border-slate-100 bg-[#f8fafc] flex items-center justify-center p-4">
              <img 
                src="/images/home/hero2.png" 
                alt="ISACA Certificate Example" 
                className="w-full max-h-[180px] object-contain opacity-80"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              
              <div className="bg-[#0f172a] rounded-xl p-6 flex flex-col items-center justify-center text-center">
                <div className="relative w-32 h-32 mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#1e293b" strokeWidth="8" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="8" strokeDasharray="283" strokeDashoffset="125" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-white">450</span>
                    <span className="text-[11px] text-slate-400">/800</span>
                    <span className="text-[10px] text-slate-400 mt-1">Passing Score</span>
                  </div>
                </div>
                <p className="text-[12px] text-slate-400 leading-relaxed">
                  To pass, you need at least 450 points. It tests real-world judgment through scenario-based Qs, not just theory.
                </p>
              </div>

              <div className="bg-[#0f172a] rounded-xl p-6 flex flex-col items-center justify-center text-center border border-slate-800">
                <ShieldCheck size={80} className="text-[#10b981] mb-4 opacity-90" strokeWidth={1} />
                <h3 className="text-2xl font-extrabold text-[#10b981] mb-1">100% exam-pass</h3>
                <p className="text-[18px] font-bold text-white mb-2">guarantee</p>
                <p className="text-[12px] text-slate-400">with every enrollment.</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}