import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div id='hero' className='relative w-full min-h-screen flex flex-col md:flex-row items-center bg-white dark:bg-[#0a0a0a] overflow-hidden'>

      {/* Left Content */}
      <div className='w-full md:w-[45%] flex flex-col justify-start md:justify-start px-6 sm:px-12 md:px-12 lg:px-16 xl:px-24 pt-24 pb-12 sm:pt-32 sm:pb-20 md:pt-28 z-20'>

        <motion.a
          href="https://www.linkedin.com/in/the-qubo-company-66701a393"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full mb-4 sm:mb-6 cursor-pointer hover:scale-105 transition-transform w-fit bg-white/50 backdrop-blur-sm dark:bg-white/5 dark:border-white/10'
        >
          <img className='w-20' src={assets.group_profile} alt="" />
          <p className='text-xs font-medium text-gray-800 dark:text-gray-200'>Join our community</p>
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-2xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 text-gray-900 dark:text-white text-left'
        >
          Turning imagination <br />
          into{' '}
          <span className='bg-clip-text text-transparent bg-[linear-gradient(to_right,#5044E5,#4d8cea,#8A84FF,#4d8cea,#5044E5)] bg-[length:400%_auto] animate-shimmer'>
            digital
          </span>{' '}
          impact.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className='text-sm sm:text-lg text-gray-600 dark:text-gray-400 max-w-lg mb-6 sm:mb-8 text-left'
        >
          Creating meaningful connections and turning big ideas into interactive digital experiences.
        </motion.p>

        <motion.button
          onClick={() => {
            const element = document.getElementById('our-work');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className='bg-black dark:bg-white text-white dark:text-black px-8 py-3 sm:px-10 sm:py-4 rounded-full font-bold uppercase tracking-wider hover:scale-105 transition-transform w-fit text-sm sm:text-base'
        >
          See Our Work
        </motion.button>


      </div>

      {/* Right Video - Blended */}
      <div className='absolute bottom-0 right-0 md:top-auto md:bottom-0 w-full md:w-[60%] h-[50vh] md:h-[75vh] lg:h-full lg:top-0 lg:w-3/5 z-10'>
        {/* Gradient Overlay for blending - Left to Right (Desktop) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent dark:from-[#0a0a0a] dark:via-[#0a0a0a]/40 dark:to-transparent z-20 pointer-events-none w-1/2"></div>

        {/* Top gradient for smooth transition on mobile - Top to Bottom */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white dark:from-[#0a0a0a] to-transparent md:hidden z-20 pointer-events-none"></div>

        <video
          className='w-full h-full object-cover'
          src={assets.hero}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  )
}

export default Hero
