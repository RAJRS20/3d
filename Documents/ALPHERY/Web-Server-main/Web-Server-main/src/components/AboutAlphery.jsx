import React from 'react'
import { motion } from 'motion/react'
import Title from './Title'
import assets from '../assets/assets'

const AboutAlphery = () => {
    return (
        <div id='about-alphery' className='flex flex-col items-center justify-center gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-gray-50 dark:bg-zinc-900 text-gray-700 dark:text-white overflow-hidden relative'>

            {/* Background Decorative Blob */}
            <div className='absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-1'></div>

            <Title title='About Alphery' desc='A journey of passion, innovation, and digital craftsmanship.' />

            <div className='flex flex-col lg:flex-row items-center gap-12 w-full mt-8'>

                {/* Left Content - Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='flex-1 flex flex-col gap-6'
                >
                    <h3 className='text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight'>
                        Driving digital transformation with a human touch.
                    </h3>

                    <p className='text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed'>
                        Alphery was born from a simple idea: that technology should serve people. What started as a small team has grown into a full-scale <strong className="font-medium text-gray-900 dark:text-white">AI & Web Development Agency</strong> trusted by forward-thinking brands worldwide.
                    </p>

                    <p className='text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed'>
                        We believe in the power of code to solve real-world problems. Our philosophy is rooted in "Quality Dribble"—a commitment to constant iteration. Whether it's a <strong className="font-medium text-gray-900 dark:text-white">complex SaaS platform</strong>, a <strong className="font-medium text-gray-900 dark:text-white">custom mobile app</strong>, or a high-performance landing page, we pour the same level of dedication into every pixel.
                    </p>

                    <div className='flex gap-8 mt-4 pt-4 border-t border-gray-200 dark:border-white/10'>
                        <div>
                            <span className='block text-3xl font-bold text-primary'>2025</span>
                            <span className='text-sm text-gray-500 uppercase tracking-wide'>Founded</span>
                        </div>
                        <div>
                            <span className='block text-3xl font-bold text-primary'>Global</span>
                            <span className='text-sm text-gray-500 uppercase tracking-wide'>Presence</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Content - Visual/Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='flex-1 relative w-full max-w-lg'
                >
                    <div className='relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500'>
                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10'></div>
                        <img src={assets.group_profile} alt="Our Team" className='w-full h-auto object-cover' />

                        <div className='absolute bottom-6 left-6 z-20 text-white'>
                            <p className='font-semibold text-lg'>The Alpha Team</p>
                            <p className='text-white/80 text-sm'>Building the future, together.</p>
                        </div>
                    </div>

                    {/* Decorative floating element */}
                    <div className='absolute -bottom-6 -right-6 w-32 h-32 bg-white dark:bg-black rounded-lg shadow-xl p-4 flex flex-col justify-center items-center z-30 animate-float'>
                        <span className='text-3xl mb-1'>❤️</span>
                        <p className='text-xs font-bold text-center'>Loved by Clients</p>
                        <div className='flex -space-x-1 mt-2'>
                            {[1, 2, 3].map(i => (
                                <div key={i} className='w-6 h-6 rounded-full bg-gray-300 border border-white dark:border-black'></div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default AboutAlphery
