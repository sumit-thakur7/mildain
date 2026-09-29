import React from 'react';

const pathData = [
  { id: '01', role: 'Information Security Consultant :', salary: '$110K–$170K' },
  { id: '02', role: 'Security Program Architect :', salary: '$140K–$220K' },
  { id: '03', role: 'Cloud Security Advisor :', salary: '$130K–$210K' },
  { id: '04', role: 'Information Security Manager :', salary: '$130K–$190K' },
  { id: '05', role: 'SOC Lead/ SOC Manager :', salary: '$120K–$180K' },
  { id: '06', role: 'IT Security Director :', salary: '$160K–$250K+' },
  { id: '07', role: 'IT GRC Manager :', salary: '$140K–$200K' },
  { id: '08', role: 'Information Assurance Lead/Auditor :', salary: '$110K–$170K' },
  { id: '09', role: 'Chief Information Security Officer (CISO) :', salary: '$220K–$500K+' },
];

export default function CoursePathSalaries() {
  return (
    <div className="w-full bg-[#1eab55] py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-white mb-4">
            Path & Salaries
          </h2>
          <p className="text-white/90 text-[15px] md:text-[16px] font-medium max-w-3xl mx-auto leading-relaxed">
            CISM opens the door to senior management and executive security roles across every major industry sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {pathData.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#dcfce7] rounded-md p-4 lg:p-5 flex items-start gap-4 shadow-sm"
            >
              <div className="bg-[#94a3b8] text-white font-bold text-[13px] rounded px-2 py-1 shrink-0 mt-0.5">
                {item.id}
              </div>
              <div className="flex flex-col">
                <span className="text-[#334155] text-[15px] mb-1">
                  {item.role}
                </span>
                <span className="text-[#0f172a] font-extrabold text-[15px]">
                  {item.salary}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}