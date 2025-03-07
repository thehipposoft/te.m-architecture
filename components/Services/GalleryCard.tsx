import React from 'react'

type GalleryCardTypes = {
    width: string,
    height: string,
    title: string,
    expandColor: string,
}

const GalleryCard = ({width, height, title, expandColor}:GalleryCardTypes) => {
  return (
    <div style={{width: width, height: height}} className={`group flex items-end`}>
        <h2>{title}</h2>
    </div>
  )
}

export default GalleryCard