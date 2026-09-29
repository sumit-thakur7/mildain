import React from 'react';
import Link from 'next/link';
import { CheckCircle2, PhoneCall } from 'lucide-react';

export default function CourseOverview() {
  return (
    <div id="overview" className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-12">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        <div className="w-full lg:w-[65%] xl:w-[70%] bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          
          <div className="bg-[#f8fcfb] p-5 md:p-6 border-b border-slate-100">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800">
              About the PMP Course in Noida.
            </h2>
          </div>
          
          <div className="p-6 md:p-8 space-y-8">
            <p className="text-slate-600 leading-relaxed text-[15px] md:text-[16px]">
              The PMP Course in Noida is designed for professionals who want to build strong project management skills and prepare for the PMP certification exam. The course covers important project management concepts, planning methods, team management, risk handling, budgeting, and project delivery. Training is suitable for both experienced professionals and individuals looking to move into project management roles. Learners can understand practical project management approaches through case studies, examples, and project-based learning.
            </p>

            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-4">
                Key Points:
              </h3>
              <ul className="space-y-3">
                {[
                  "Covers essential project management concepts",
                  "Helps prepare for the PMP certification exam",
                  "Practical learning with real-world examples",
                  "Suitable for working professionals and beginners",
                  "Improves project planning and management skills",
                  "Supports career growth in project management"
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-slate-600 text-[15px]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full rounded-xl overflow-hidden">
              <img 
                src="/images/home/hero1.png" 
                alt="Course Training Session" 
                className="w-full h-auto max-h-[400px] object-cover"
              />
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-4">
                Skills Covered
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                {[
                  "Work breakdown structure",
                  "Project cost estimation",
                  "Resource allocation planning",
                  "Cost and budget management",
                  "Gantt chart development",
                  "Schedule modeling techniques",
                  "Risk and issue management",
                  "Stakeholder engagement strategy",
                  "Project governance framework",
                  "Agile and hybrid delivery",
                  "Value-based project delivery",
                  "Financial planning & control",
                  "Sustainability integration",
                  "Leadership and team dynamics"
                ].map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-3 list-none">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-slate-600 text-[15px]">{skill}</span>
                  </li>
                ))}
              </div>
            </div>
            
          </div>
        </div>

        <div className="w-full lg:w-[35%] xl:w-[30%] relative">
          <div className="sticky top-[160px] bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden flex flex-col">
            
            <div className="bg-primary text-white p-5 flex items-center justify-between">
              <div>
                <p className="text-[13px] font-medium text-white/90 mb-1">Get Free Career Guidance</p>
                <p className="text-2xl lg:text-3xl font-bold text-white tracking-tight">+91 8929199704</p>
              </div>
              <PhoneCall className="w-8 h-8 text-white opacity-90" strokeWidth={2} />
            </div>
            
            <form className="p-6 flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="Full Name*" 
                className="w-full border border-slate-200 p-3.5 rounded-md text-[14px] outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                required
              />
              
              <input 
                type="email" 
                placeholder="Email Address*" 
                className="w-full border border-slate-200 p-3.5 rounded-md text-[14px] outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                required
              />
              
              <div className="flex gap-3">
                <select className="border border-slate-200 p-3.5 rounded-md text-[14px] outline-none bg-white w-[110px] shrink-0 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all">
                  <option value="+91">🇮🇳 (+91)</option>
                  <option value="+1">🇺🇸 (+1)</option>
                  <option value="+44">🇬🇧 (+44)</option>
                </select>
                <input 
                  type="tel" 
                  placeholder="Phone No*" 
                  className="w-full border border-slate-200 p-3.5 rounded-md text-[14px] outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                  required
                />
              </div>
              
              <textarea 
                placeholder="Message Details" 
                className="w-full border border-slate-200 p-3.5 rounded-md text-[14px] outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all h-[100px] resize-none"
              ></textarea>
              
              <button 
                type="submit"
                className="w-full mt-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-[14px] py-3.5 rounded-md transition-all tracking-wide"
              >
                SUBMIT
              </button>
              
              <p className="text-[11px] text-slate-500 mt-2 leading-relaxed text-center">
                By registering here, I agree to Mildain Trainings 
                <Link href="/terms" className="text-primary hover:underline ml-1">Terms & Condition</Link> and 
                <Link href="/privacy" className="text-primary hover:underline ml-1">Privacy Policy</Link>
              </p>
            </form>
            
          </div>
        </div>

      </div>
    </div>
  );
}