'use client';

import Hero from './Hero';
import ServicesMatrix from './ServicesMatrix';
import Process from './Process';
import CTA from './CTA';
import BrandSlider from '@/components/sections/BrandSlider';

export default function Content() {
  return (
    <>
      <Hero />
      <ServicesMatrix />
      <Process />
      <CTA />
      <BrandSlider />
    </>
  );
}
