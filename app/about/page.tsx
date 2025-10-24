import AboutPageComponent from '@/components/AboutPageComponent'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Te.M Architecture | About',
  description: 'We are Mica and Flor, lifelong friends united by a shared passion: design and architecture. We studied together at the National University of Córdoba, Argentina, and since then, we have shared the desire to create spaces that truly adapt to the people who inhabit them',
}

function AboutPage() {
  return (
    <div>
        <AboutPageComponent />
    </div>
  )
}

export default AboutPage