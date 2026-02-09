'use client'

import { useState } from 'react'
import CaseStudiesHero from '@/components/sections/case-studies/Hero'
import CaseStudiesGrid from '@/components/sections/case-studies/Grid'
import BrandSlider from '@/components/sections/BrandSlider'

export default function CaseStudiesContent() {
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <>
      {/* Hero Section with Filters */}
      <CaseStudiesHero 
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {/* Cases Grid */}
      <CaseStudiesGrid activeFilter={activeFilter} />

      {/* Brand Slider */}
      <BrandSlider />
    </>
  )
}
