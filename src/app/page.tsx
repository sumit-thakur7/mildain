'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Sparkles, Star } from 'lucide-react';
import imagesData from '@/app/lib/placeholder-images.json';

export default function MildainTrainingsHome() {
  const studentImg = imagesData.find(img => img.id === 'hero-student');

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-blue-50/40 via-purple-50/50 to-pink-50/40 overflow-hidden flex flex-col">
      {/* Header Navbar */}
      <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-gray-100 px-6 lg:px-16 h-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
              Mildain<span className="text-primary">.</span>Trainings
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <Link href="/" className="text-primary hover:text-primary/80 transition-colors">Home</Link>
            <Link href="/courses" className="hover:text-primary transition-colors">Courses</Link>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          {/* Elegant Search Container */}
          <div className="relative hidden lg:block w-64">
            <Input 
              type="text" 
              placeholder="Search courses..." 
              className="pl-9 pr-4 h-9 text-xs rounded-full bg-slate-50 border-slate-200 focus:bg-white transition-all"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild className="font-semibold text-sm hover:text-primary">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold text-sm rounded-full px-5 transition-all shadow-sm shadow-primary/20">
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Hero Component */}
      <main className="flex-1 flex items-center px-6 lg:px-16 py-12 lg:py-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Text and Details Area */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start text-left space-y-6 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-100 rounded-full px-4 py-1.5 shadow-sm text-xs font-bold text-slate-800">
              <Sparkles className="h-4 w-4 text-primary fill-primary" />
              <span>Discover 20,000+ World-Class Courses</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
              Learn Smarter <br/>
              <span className="relative inline-block">
                Achieve knowledge
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-primary/40 rounded-full -z-10" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              Expand your knowledge and open doors to exciting careers with our online education platform.
            </p>

            <div className="pt-2">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white font-bold text-base px-8 h-14 rounded-xl shadow-lg shadow-primary/20 transform active:scale-95 transition-all">
                <Link href="/courses">Explore Course</Link>
              </Button>
            </div>
          </div>

          {/* Right Image Graphic Design Area */}
          <div className="lg:col-span-6 relative flex justify-center items-center w-full">
            {/* Emerald Abstract Background Circles style */}
            <div className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full border-[28px] border-primary/20 -z-10 animate-pulse duration-4000" />
            <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full bg-primary/10 -z-10" />

            {/* Custom visual decoration strings */}
            <svg className="absolute -top-6 -right-6 h-16 w-16 text-primary opacity-60 hidden sm:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M10,50 Q40,10 50,50 T90,50" />
            </svg>

            {/* Main Student Artwork Image */}
            <div className="relative rounded-2xl overflow-hidden max-w-[420px] w-full shadow-2xl bg-gradient-to-b from-white/10 to-white/80">
              <Image 
                src={studentImg?.url || "https://picsum.photos/seed/mildainstudent/600/700"}
                alt="Mildain Trainings Student"
                width={420}
                height={490}
                className="object-cover w-full h-auto rounded-2xl mix-blend-multiply"
                priority
                data-ai-hint="student girl"
              />
            </div>

            {/* Floating Instructor Rating Badge */}
            <div className="absolute bottom-8 left-0 sm:-left-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/60 flex items-center gap-4 max-w-xs transition-transform hover:-translate-y-1">
              <div className="text-3xl font-extrabold text-primary tracking-tight">
                4.6
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-amber-400 gap-0.5">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current text-amber-300/40" />
                </div>
                <span className="text-xs font-extrabold text-slate-800 mt-1">Instructor Rating</span>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}