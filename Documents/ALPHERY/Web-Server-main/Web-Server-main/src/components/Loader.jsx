import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import './Loader.css'

const Loader = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { src: '/alphery.png', alt: 'Alphery' },
    { src: '/alphery-ai.png', alt: 'Alphery AI' },
    { src: '/alphery-space.png', alt: 'Alphery Space' },
    { src: '/alphery-os.png', alt: 'Alphery OS' },
    { src: '/alphery-com.png', alt: 'Alphery.com' }
  ]

  useEffect(() => {
    // Preload images for smooth animation
    slides.forEach((slide) => {
      const img = new Image()
      img.src = slide.src
    })

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 800) // Change slide every 0.8 seconds

    return () => clearInterval(interval)
  }, [])

  // Alternate direction: even slides from left, odd slides from right
  const isFromLeft = currentSlide % 2 === 0

  return (
    <div className='loader-container'>
      {/* Slide container */}
      <div className='slide-wrapper'>
        <AnimatePresence>
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            initial={{
              x: isFromLeft ? '-100%' : '100%',
              opacity: 0,
              filter: 'blur(10px)',
              scale: 0.9
            }}
            animate={{
              x: 0,
              opacity: 1,
              filter: 'blur(0px)',
              scale: 1
            }}
            exit={{
              x: isFromLeft ? '100%' : '-100%',
              opacity: 0,
              filter: 'blur(10px)',
              scale: 1.1
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1] // Apple-style ease-out
            }}
            className='slide-image'
            width="1024"
            height="1024"
          />
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Loader
