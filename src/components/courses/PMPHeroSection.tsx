'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Star, Shield, Users, ChevronRight } from 'lucide-react';

export default function PMPHeroSection({ formattedCategory = "Digital Marketing" }: { formattedCategory?: string }) {
  return (
    <div className="relative w-full flex flex-col bg-transparent">
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 flex items-center relative z-10 pt-4 lg:pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-8 items-center w-full">

          <div className="flex flex-col justify-center items-start text-left w-full max-w-2xl mx-auto lg:mx-0 order-1 lg:order-1 relative z-30">
            
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 mb-4 sm:mb-8">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={16} />
              <Link href="/courses" className="hover:text-primary transition-colors">Courses</Link>
              <ChevronRight size={16} />
              <span className="text-primary">{formattedCategory}</span>
            </div>

            <h1 className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[56px] font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-4 sm:mb-6">
              PMP<sup className="text-xl sm:text-3xl font-medium">®</sup> Certification<br />Training
            </h1>

            <ul className="flex flex-col gap-2.5 sm:gap-3 mb-6 sm:mb-8 w-full">
              {["15+ Years of Learning Excellence", "150+ Industry-Focused Courses", "500+ Live Classes Every Month"].map((bullet, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" strokeWidth={2.5} />
                  <span className="text-[14px] sm:text-[18px] text-slate-700 font-medium">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full mb-4 sm:mb-6">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-[14px] sm:text-[15px] px-8 h-[44px] sm:h-[48px] rounded-md shadow-sm transition-all cursor-pointer w-full sm:w-auto">
                <Link href="/enroll">View Training Options</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-[2px] border-primary text-primary hover:bg-primary/5 font-bold text-[14px] sm:text-[15px] px-8 h-[44px] sm:h-[48px] rounded-md transition-all cursor-pointer w-full sm:w-auto">
                <Link href="/contact">Talk to Advisor</Link>
              </Button>
            </div>

            <div className="text-[12px] sm:text-[14px] text-slate-600 font-medium text-center sm:text-left w-full sm:w-auto">
              Group Enrollment with Friends or Colleagues | <Link href="/quote" className="text-primary hover:underline">Get a quote</Link>
            </div>
          </div>

          <div className="relative flex justify-center items-end w-full min-h-[180px] h-[180px] sm:h-auto sm:min-h-[400px] lg:min-h-[500px] order-2 lg:order-2 ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] sm:w-[380px] sm:h-[380px] lg:w-[460px] lg:h-[460px] rounded-full bg-[#dcf3e8] -z-20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px] rounded-full bg-primary -z-10"></div>

            <div className="relative w-full max-w-[130px] sm:max-w-[340px] lg:max-w-[420px] z-10 flex justify-center">
              <img
                src="/images/home/hero1.png"
                alt="PMP Certification Student"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>

        </div>
      </main>

      <div className="w-full bg-white border-y border-slate-200 py-4 lg:py-5 shadow-sm relative z-20 mt-2 sm:mt-0">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 flex flex-wrap items-center justify-between gap-6">
          
          <div className="flex items-center hidden sm:flex">
            <span className="font-extrabold text-2xl tracking-tighter text-slate-900">PMI<span className="text-primary text-3xl leading-none">.</span></span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-12 flex-1 sm:flex-none">
            
            <div className="flex items-center gap-2 border border-slate-200 rounded-full px-4 py-1.5 sm:py-2">
              <Shield className="w-4 h-4 text-blue-500" />
              <span className="text-[11px] sm:text-[13px] font-semibold text-slate-700">Earn 40 CPE Course Credits</span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-[13px] font-medium text-slate-600">
              <span>Rated the best</span>
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFB800] fill-current" />
              <span className="font-bold text-slate-800">Trustpilot 4.9/5</span>
              <Link href="/reviews" className="text-primary hover:underline hidden sm:inline-block">Read Reviews</Link>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-slate-100 border-2 border-white overflow-hidden flex items-center justify-center">
                    <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-400" />
                  </div>
                ))}
              </div>
              <span className="text-[11px] sm:text-[13px] font-bold text-slate-700 flex items-center gap-1">
                <span className="text-[#FFB800]">🏆</span> 1200+ Learners
              </span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}