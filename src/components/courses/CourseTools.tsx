// import React from 'react';

// export default function CourseTools() {
//   const tools = [
//     { name: "Google Ads", src: "/images/tools/google-ads.png" },
//     { name: "Meta", src: "/images/tools/meta.png" },
//     { name: "Google Analytics 4", src: "/images/tools/ga4.png" },
//     { name: "Google Search Console", src: "/images/tools/gsc.png" },
//     { name: "Power BI Desktop", src: "/images/tools/powerbi.png" },
//     { name: "Asana", src: "/images/tools/asana.png" },
//     { name: "WordPress", src: "/images/tools/wordpress.png" },
//     { name: "n8n", src: "/images/tools/n8n.png" },
//     { name: "GoDaddy", src: "/images/tools/godaddy.png" },
//     { name: "Buffer", src: "/images/tools/buffer.png" }
//   ];

//   return (
//     <div className="w-full bg-white py-12 lg:py-16">
//       <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
//         <h2 className="text-center text-[28px] md:text-[32px] font-bold text-[#1f2937] mb-10 md:mb-14">
//           35+ Tools Covered
//         </h2>
        
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-10 items-center justify-items-center">
//           {tools.map((tool, index) => (
//             <div 
//               key={index} 
//               className="w-full max-w-[160px] h-[50px] flex items-center justify-center transition-transform hover:scale-105"
//             >
//               <img 
//                 src={tool.src} 
//                 alt={tool.name} 
//                 className="max-w-full max-h-full object-contain" 
//               />
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }


'use client';

import React from 'react';

export default function CourseTools({ course }: { course?: any }) {
  if (!course) return null;

  const heading = course.toolsHeading || "Tools Covered";
  const tools = Array.isArray(course.toolsList) ? course.toolsList : [];

  if (tools.length === 0) return null;

  return (
    <div className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        <h2 className="text-center text-[28px] md:text-[32px] font-bold text-[#1f2937] mb-10 md:mb-14">
          {heading}
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-10 items-center justify-items-center">
          {tools.map((tool: any, index: number) => (
            <div 
              key={`tool-${index}`} 
              className="w-full max-w-[160px] h-[50px] flex items-center justify-center transition-transform hover:scale-105"
            >
              {tool.logo && (
                <img 
                  src={tool.logo} 
                  alt={tool.logoAlt || "Tool Logo"} 
                  title={tool.logoTitle || ""} 
                  className="max-w-full max-h-full object-contain" 
                />
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}