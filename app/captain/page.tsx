import React from 'react'
import Hero from '../components/hero-captain/Hero'
import SponsorsSection from '../components/Sponsors'
import JoiningRequirements from '../components/JoiningRequirements-captain/JoiningRequirements'
import IncreaseIncome from '../components/increase-income/IncreaseIncome'
import JoinSteps from '../components/joinsteps/JoinSteps'
import FairExperience from '../components/fair-experience/FairExperience'
import DownloadAppSection from '../components/download-app/DownloadAppSection'

import { Metadata } from "next";

/**
 * Captain Page Metadata
 * Customizes the SEO for the driver recruitment funnel.
 * The title will automatically become: "انضم ككابتن | دروبي"
 */
export const metadata: Metadata = {
  title: "انضم ككابتن في دروبي - التسجيل كسائق توصيل في السعودية",
  description:
    "سجل الآن ككابتن في دروبي وابدأ العمل كسائق توصيل في المملكة العربية السعودية مع مرونة في الوقت وزيادة فرص الدخل.",
  keywords: [
    "التسجيل ككابتن توصيل السعودية",
    "العمل كسائق توصيل",
    "التسجيل في دروبي كابتن",
    "زيادة دخل سائق توصيل",
    "وظائف توصيل السعودية",
  ],
};

export default function page() {
  return (
    <main className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <Hero />
      {/* <SponsorsSection /> */}
      <JoiningRequirements />
      <IncreaseIncome />
      <JoinSteps />
      <FairExperience />
      <DownloadAppSection/>
    </main>
  );
}
