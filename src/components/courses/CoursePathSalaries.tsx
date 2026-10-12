// import React from 'react';

// const pathData = [
//   { id: '01', role: 'Information Security Consultant :', salary: '$110K–$170K' },
//   { id: '02', role: 'Security Program Architect :', salary: '$140K–$220K' },
//   { id: '03', role: 'Cloud Security Advisor :', salary: '$130K–$210K' },
//   { id: '04', role: 'Information Security Manager :', salary: '$130K–$190K' },
//   { id: '05', role: 'SOC Lead/ SOC Manager :', salary: '$120K–$180K' },
//   { id: '06', role: 'IT Security Director :', salary: '$160K–$250K+' },
//   { id: '07', role: 'IT GRC Manager :', salary: '$140K–$200K' },
//   { id: '08', role: 'Information Assurance Lead/Auditor :', salary: '$110K–$170K' },
//   { id: '09', role: 'Chief Information Security Officer (CISO) :', salary: '$220K–$500K+' },
// ];

// export default function CoursePathSalaries() {
//   return (
//     <div className="w-full bg-[#1eab55] py-16 lg:py-24">
//       <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
//         <div className="text-center mb-12">
//           <h2 className="text-[32px] md:text-[40px] font-extrabold text-white mb-4">
//             Path & Salaries
//           </h2>
//           <p className="text-white/90 text-[15px] md:text-[16px] font-medium max-w-3xl mx-auto leading-relaxed">
//             CISM opens the door to senior management and executive security roles across every major industry sector.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
//           {pathData.map((item) => (
//             <div 
//               key={item.id} 
//               className="bg-[#dcfce7] rounded-md p-4 lg:p-5 flex items-start gap-4 shadow-sm"
//             >
//               <div className="bg-[#94a3b8] text-white font-bold text-[13px] rounded px-2 py-1 shrink-0 mt-0.5">
//                 {item.id}
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-[#334155] text-[15px] mb-1">
//                   {item.role}
//                 </span>
//                 <span className="text-[#0f172a] font-extrabold text-[15px]">
//                   {item.salary}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useState, useEffect } from "react";

// export default function CoursePathSalaries({ course }: { course?: any }) {
//   const [categoryRoles, setCategoryRoles] = useState<any[]>([]);
//   const [isIndia, setIsIndia] = useState(false);

//   useEffect(() => {
//     const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
//     if (tz === "Asia/Calcutta" || tz === "Asia/Kolkata") {
//       setIsIndia(true);
//     }

//     if (course?.selectedCategory) {
//       fetch("/api/admin/categories")
//         .then(res => res.json())
//         .then(data => {
//           const matchedCategory = data.find((cat: any) => cat._id === course.selectedCategory);
//           if (matchedCategory && matchedCategory.roles) {
//             setCategoryRoles(matchedCategory.roles);
//           }
//         })
//         .catch(() => {});
//     }
//   }, [course?.selectedCategory]);

//   if (!course || (!course.pathSalariesDescription && categoryRoles.length === 0)) {
//     return null;
//   }

//   return (
//     <div className="w-full bg-[#1eab55] py-16 lg:py-24">
//       <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
//         <div className="text-center mb-12">
//           <h2 className="text-[32px] md:text-[40px] font-extrabold text-white mb-4">
//             Path & Salaries
//           </h2>
//           {course.pathSalariesDescription && (
//             <p className="text-white/90 text-[15px] md:text-[16px] font-medium max-w-3xl mx-auto leading-relaxed">
//               {course.pathSalariesDescription}
//             </p>
//           )}
//         </div>

//         {categoryRoles.length > 0 && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
//             {categoryRoles.map((item, index) => {
//               const numId = (index + 1).toString().padStart(2, '0');
//               return (
//                 <div 
//                   key={index} 
//                   className="bg-[#dcfce7] rounded-md p-4 lg:p-5 flex items-start gap-4 shadow-sm"
//                 >
//                   <div className="bg-[#94a3b8] text-white font-bold text-[13px] rounded px-2 py-1 shrink-0 mt-0.5">
//                     {numId}
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-[#334155] text-[15px] mb-1">
//                       {item.roleName} :
//                     </span>
//                     <span className="text-[#0f172a] font-extrabold text-[14px]">
//                       {isIndia ? item.salaryInr : item.salaryUsd}
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }"use client";


"use client";

import React from "react";

export default function CoursePathSalaries({ course, isIndia }: { course?: any, isIndia?: boolean }) {
  if (!course || !course.selectedPathRoles || course.selectedPathRoles.length === 0) {
    return (
      <div className="w-full bg-red-50 py-12 text-center border-y border-red-100">
        <p className="text-red-600 font-bold text-lg">Data Not Found</p>
        <p className="text-red-500 text-sm mt-1">Please select roles from Admin Panel checkboxes and click "Save Changes"</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#1b9a59] py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <span className="text-[18vw] font-black text-black tracking-widest uppercase select-none">
          Career
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="mb-14 text-center">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4">
            Path & Salaries
          </h2>
          {course.pathSalariesDescription && (
            <p className="text-white/90 text-[15px] md:text-[16px] max-w-4xl mx-auto leading-relaxed">
              {course.pathSalariesDescription}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {course.selectedPathRoles.map((role: any, index: number) => {
            const number = String(index + 1).padStart(2, '0');
            const salary = isIndia ? role.salaryInr : role.salaryUsd;

            return (
              <div 
                key={index} 
                className="bg-[#dbece1] rounded-md p-4 flex items-start gap-4 shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className="bg-[#8b9e94] text-white font-bold text-[14px] rounded w-10 h-10 flex items-center justify-center shrink-0">
                  {number}
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-[#374151] text-[15px] mb-1">
                    {role.roleName} :
                  </span>
                  <span className="text-[#111827] font-extrabold text-[16px]">
                    {salary}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}