import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from 'motion/react'

const Services = () => {

  const servicesData = [
    {
      title: 'Web & Mobile App Development',
      description: 'We build fast, responsive, and scalable web and mobile applications that work seamlessly across all devices.',
      icon: assets.ads_icon // Using existing icon for now, ideally simplify
    },
    {
      title: 'Custom Software Solutions',
      description: 'Tailor-made software designed to solve real business challenges and improve efficiency.',
      icon: assets.marketing_icon
    },
    {
      title: 'UI/UX Design',
      description: 'Clean, modern, and user-friendly designs focused on great user experience and conversion.',
      icon: assets.content_icon,
    },
    {
      title: 'IT & Hardware Solutions',
      description: 'Custom PC builds, system setup, and reliable hardware solutions for individuals and businesses.',
      icon: assets.social_icon,
    },
  ]

  return (
    <section id='services' className='relative py-24 overflow-hidden bg-white dark:bg-black'>

      <div className='max-w-7xl 2xl:max-w-[1872px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-24'>
        <div className='flex flex-col lg:flex-row'>

          {/* Left Column: Heading */}
          <div className='w-full lg:w-1/3 lg:pr-12 mb-12 lg:mb-0 lg:border-r border-gray-200 dark:border-gray-800'>
            <div className='relative py-8 sm:py-12'>
              <h2 className='text-2xl sm:text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-6 leading-tight'>
                How can we help?
              </h2>
              <p className='text-sm sm:text-lg text-gray-600 dark:text-gray-400 max-w-sm'>
                We build digital experiences that drive results.
              </p>
              {/* Optional bigger heading or description if needed, keeping it minimal as per reference image */}
            </div>
          </div>

          {/* Right Column: Grid */}
          <div className='w-full lg:w-2/3'>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
              className='grid grid-cols-1 md:grid-cols-2'
            >
              {servicesData.map((service, index) => (
                <ServiceCard
                  key={index}
                  service={service}
                  index={index}
                  isLastRow={index >= servicesData.length - 2} // Logic for bottom border
                  isLastCol={(index + 1) % 2 === 0} // Logic for right border
                />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services
