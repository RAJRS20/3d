import React, { useRef, useState } from 'react'
import { motion } from 'motion/react'

const ServiceCard = ({ service, index, isLastRow, isLastCol }) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`
                group relative p-8 sm:p-12
                transition-colors duration-300
                hover:bg-gray-50 dark:hover:bg-white/5
                ${!isLastRow ? 'border-b border-gray-200 dark:border-gray-800' : ''}
                ${index % 2 === 0 ? 'border-r border-gray-200 dark:border-gray-800 md:border-r' : ''}
            `}
        >
            <div className='flex flex-col items-start gap-6'>
                {/* Icon */}
                <div className='w-12 h-12 relative flex items-center justify-start'>
                    <img
                        src={service.icon}
                        alt={service.title}
                        className='w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 dark:invert'
                    />
                </div>

                {/* Content */}
                <div>
                    <h3 className='text-xl font-medium text-gray-900 dark:text-white mb-3 uppercase tracking-wide'>
                        {service.title}
                    </h3>
                    <p className='text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-sm'>
                        {service.description}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default ServiceCard
