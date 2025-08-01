import React from 'react'
import FadeSlider from './FadeSlider'
import { ProyectosData } from '@/src/types'

const Hero = ({ proyectosData }:ProyectosData ) => {
  return (
    <div>
        <FadeSlider proyectosData={proyectosData} />
    </div>
  )
}

export default Hero