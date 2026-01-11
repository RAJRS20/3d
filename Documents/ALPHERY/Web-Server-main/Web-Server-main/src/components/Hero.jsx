import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div id='hero' className='relative w-full min-h-screen flex flex-col md:flex-row items-center overflow-hidden'>

      {/* Background Video */}
      <div className='absolute inset-0 w-full h-full z-0'>
        <div className="absolute inset-0 bg-white/30 dark:bg-black/40 z-10" />
        <video
          className='w-full h-full object-cover'
          src='/hero_bg.mp4'
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Left Content */}
      <div className='w-full md:w-[45%] flex flex-col justify-start md:justify-start px-6 sm:px-12 md:px-12 lg:px-16 xl:px-24 pt-24 pb-12 sm:pt-32 sm:pb-20 md:pt-28 z-20 relative'>



        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 text-gray-900 dark:text-white text-left'
        >
          <span className="whitespace-nowrap">Turning ideas into</span><br />
          <span className="whitespace-nowrap"><span className='bg-clip-text text-transparent bg-[linear-gradient(to_right,#5044E5,#4d8cea,#8A84FF,#4d8cea,#5044E5)] bg-[length:400%_auto] animate-shimmer'>
            Technology
          </span></span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className='text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-lg mb-6 sm:mb-8 text-left'
        >
          Creating meaningful connections and turning big ideas into interactive digital experiences.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
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
            className='h-14 bg-black dark:bg-white text-white dark:text-black px-8 rounded-full font-bold uppercase tracking-wider hover:scale-105 transition-transform w-full sm:w-auto text-sm sm:text-base flex items-center justify-center'
          >
            Reach out to us
          </motion.button>

          <motion.a
            href="https://www.linkedin.com/in/the-qubo-company-66701a393"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className='h-14 inline-flex items-center gap-3 border border-gray-300 pl-2 pr-6 rounded-full cursor-pointer hover:scale-105 transition-transform w-full sm:w-auto bg-white/50 backdrop-blur-sm dark:bg-white/5 dark:border-white/10 justify-center sm:justify-start'
          >
            <img className='w-10 h-10 object-cover rounded-full' src={assets.group_profile} alt="" />
            <p className='text-sm font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap'>Join our community</p>
          </motion.a>
        </div>
      </div>

      {/* Right Video - Blended */}
      <div className='absolute bottom-0 right-0 md:top-auto md:bottom-0 w-full md:w-[60%] h-[50vh] md:h-[75vh] lg:h-full lg:top-0 lg:w-3/5 z-10 mix-blend-multiply dark:mix-blend-normal'>
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
