import React from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const Footer = ({ theme, showQuboAI }) => {
  if (showQuboAI) return null;

  return (
    <footer className='bg-[#000000] dark:bg-black text-white py-12 px-4 sm:px-12 lg:px-24 overflow-hidden relative'>

      {/* Top Section: Slogan & CTA */}
      <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20'>
        <div className='max-w-4xl'>
          <p className='text-sm font-bold mb-4 opacity-80'>© 2025</p>
          <h2 className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]'>
            LET'S BUILD SOMETHING<br />THAT MATTERS.
          </h2>
        </div>
        <div>
          <a href="#contact-us" className='inline-block bg-white dark:bg-white text-black dark:text-black px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:scale-105 transition-transform'>
            Work With Me
          </a>
        </div>
      </div>

      {/* Middle Section: Links Grid */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-10 mb-24 text-sm font-medium tracking-wide'>

        {/* Navigation */}
        <div className='flex flex-col gap-4'>
          <span className='opacity-50 uppercase mb-2 text-xs'>Menu</span>
          <a href="#hero" className='hover:opacity-70 transition-opacity'>HOME</a>
          <a href="#our-work" className='hover:opacity-70 transition-opacity'>WORKS</a>
          <a href="#who-we-are" className='hover:opacity-70 transition-opacity'>ABOUT</a>
          <a href="#contact-us" className='hover:opacity-70 transition-opacity'>CONTACT</a>
        </div>

        {/* Socials */}
        <div className='flex flex-col gap-4'>
          <span className='opacity-50 uppercase mb-2 text-xs'>Socials</span>
          <a href="#" className='hover:opacity-70 transition-opacity'>INSTAGRAM</a>
          <a href="#" className='hover:opacity-70 transition-opacity'>LINKEDIN</a>
          <a href="#" className='hover:opacity-70 transition-opacity'>TWITTER</a>
        </div>

        {/* Contact */}
        <div className='flex flex-col gap-4'>
          <span className='opacity-50 uppercase mb-2 text-xs'>Contact</span>
          <a href="mailto:alpherymail@gmail.com" className='hover:opacity-70 transition-opacity'>HELLO@ALPHERY.COM</a>
          <p className='opacity-80'>+91 88383 62439</p>
          <p className='opacity-80'>+91 97913 34944</p>
        </div>

        {/* Office */}
        <div className='flex flex-col gap-4'>
          <span className='opacity-50 uppercase mb-2 text-xs'>Office</span>
          <p className='opacity-80 leading-relaxed'>
            3, Bhagatsingh Road,<br />
            Saibaba Colony,<br />
            Coimbatore - 641025
          </p>
        </div>

      </div>

      {/* Bottom Section: Giant Brand Name */}
      <div className='border-t border-white/20 pt-4'>
        <h1 className='text-[18vw] leading-none font-black tracking-tighter text-center select-none bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>
          ALPHERY
        </h1>
      </div>

    </footer>
  )
}

export default Footer
