import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const GalleryLayout = ({children}:Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className=''>
        <header>
            <Header />
        </header>
        {children}
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default GalleryLayout