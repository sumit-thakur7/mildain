import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { connectToDatabase } from "@/lib/db";
import Course from "@/models/Course";
import PMPHeroSection from "@/components/courses/PMPHeroSection";
import Navbar from "@/components/layout/Navbar"; 
import Footer from "@/components/layout/Footer";
import CourseStickyNav from '@/components/courses/CourseStickyNav';
import CourseOverview from '@/components/courses/CourseOverview';
import CourseCurriculum from '@/components/courses/CourseCurriculum';
import CourseTrainingOptions from '@/components/courses/CourseTrainingOptions';
import CourseExamDetails from '@/components/courses/CourseExamDetails';
import CoursePathSalaries from '@/components/courses/CoursePathSalaries';
import CourseFAQ from '@/components/courses/CourseFAQ';
import InsightsCarousel from '@/components/home/InsightsCarousel';
import CourseBenefits from '@/components/courses/CourseBenefits';
import CourseAdvisor from '@/components/courses/CourseAdvisor';
import CourseReviews from '@/components/courses/CourseReviews';
import CourseTools from '@/components/courses/CourseTools';
import RelatedPrograms from '@/components/courses/RelatedPrograms';
import CourseCareerSupport from '@/components/courses/CourseCareerSupport';
import { ScrollButton } from '@/components/layout/ScrollButton';

export default async function CourseDetailPage({ 
  params 
}: { 
  params: Promise<{ category: string, slug: string }> 
}) {
  const { category, slug } = await params;

  await connectToDatabase();
  const course = await Course.findOne({ slug: slug });

  if (!course) {
    return notFound();
  }

  const formattedCategory = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gradient-to-r from-[#ebf7f3] to-white pt-[64px] lg:pt-[76px]">
        <PMPHeroSection />
        <CourseStickyNav />
        <CourseOverview />
        <CourseCurriculum />
        <CourseTrainingOptions />
        <CourseExamDetails />
        <CourseBenefits />
        <CourseAdvisor />
        <CourseReviews />
        <CourseTools />
        <CoursePathSalaries />
        <RelatedPrograms />
        <CourseCareerSupport />
        <CourseFAQ />
        {/* <StickyBottomBar /> */}
        <InsightsCarousel />
        <ScrollButton />

      </div>
      <Footer />
    </div>
  );
}