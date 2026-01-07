import React, { useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion, AnimatePresence } from 'motion/react'

const OurWork = ({ setShowOurProjects }) => {

    const [selectedProject, setSelectedProject] = useState(null)

    const workData = [
        {
            title: 'FarmPick',
            tags: ['Mobile App', 'UI/UX'],
            image: assets.farmpick_n,
            url: 'http://farmpickshope.vercel.app/'
        },
        {
            title: 'FiberFlow',
            tags: ['Web App', 'Branding'],
            image: assets.fiberflow_n,
            url: 'https://fiberflow-react.vercel.app/'
        },
        {
            title: 'Dots nd Decimals',
            tags: ['Enterprise', 'Dev'],
            image: assets.dotsanddecimal_n,
            url: 'https://dot-decimals-1.onrender.com/'
        },
    ]

    return (
        <section id='our-work' className='py-24 bg-white dark:bg-black overflow-hidden'>

            {/* Header */}
            <div className='flex justify-between items-end mb-12 px-4 sm:px-12 lg:px-24 2xl:px-24'>
                <h2 className='text-2xl sm:text-4xl md:text-5xl text-black dark:text-white font-medium tracking-tight'>
                    Selected Works
                </h2>
                <button
                    onClick={() => {
                        setShowOurProjects(true)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    className='hidden sm:flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:scale-105 transition-transform'
                >
                    VIEW ALL
                </button>
            </div>

            {/* Horizontal Scroll Layout */}
            <div className='flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide w-full'>
                {workData.map((work, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`
                            min-w-[85vw] sm:min-w-[45vw] lg:min-w-[30vw] 
                            snap-center flex flex-col gap-4 cursor-pointer group
                            ${index === 0 ? 'ml-4 sm:ml-12 lg:ml-24 2xl:ml-24' : ''}
                            ${index === workData.length - 1 ? 'mr-4 sm:mr-12 lg:mr-24 2xl:mr-24' : ''}
                        `}
                        onClick={() => setSelectedProject(work)}
                    >
                        {/* Image Card */}
                        <div className='relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 dark:bg-zinc-900'>

                            {/* Tags */}
                            <div className='absolute top-4 left-4 z-10 flex gap-2'>
                                {work.tags.map((tag, i) => (
                                    <span key={i} className={`
                                        bg-white/90 dark:bg-black/90 backdrop-blur-md 
                                        px-3 py-1 rounded-md text-xs font-semibold
                                        ${i === 0 ? 'text-purple-600' : 'text-blue-600'}
                                    `}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <img
                                src={work.image}
                                alt={work.title}
                                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                            />

                            {/* Hover Overlay */}
                            <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500' />
                        </div>

                        {/* Title */}
                        <h3 className='text-lg sm:text-xl md:text-2xl font-medium text-gray-900 dark:text-white'>
                            {work.title}
                        </h3>

                    </motion.div>
                ))}
            </div>

            {/* Mobile View All Button */}
            <div className='mt-8 flex justify-center sm:hidden'>
                <button
                    onClick={() => {
                        setShowOurProjects(true)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    className='bg-black dark:bg-white text-white dark:text-black px-10 py-4 rounded-full font-bold uppercase tracking-wider'
                >
                    View All Projects
                </button>
            </div>

            {/* Modal Support (Keeping existing logic) */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div /* Using same modal structure but cleaner */
                            className="bg-white dark:bg-zinc-900 w-full max-w-3xl rounded-3xl overflow-hidden relative"
                            onClick={(e) => e.stopPropagation()}
                            layoutId={`card-${selectedProject.title}`}
                        >
                            <div className="relative h-[400px]">
                                <img src={selectedProject.image} className="w-full h-full object-cover" />
                                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full backdrop-blur-md">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <div className="p-8">
                                <h3 className="text-3xl font-bold mb-4 dark:text-white">{selectedProject.title}</h3>
                                <div className="flex gap-2 mb-6">
                                    {selectedProject.tags.map(tag => <span key={tag} className="border border-gray-200 dark:border-gray-700 px-3 py-1 rounded-full text-sm dark:text-gray-300">{tag}</span>)}
                                </div>
                                <div className="flex justify-end">
                                    <a href={selectedProject.url} target="_blank" className="inline-block bg-black dark:bg-white text-white dark:text-black px-10 py-4 rounded-full font-bold uppercase tracking-wider">Visit Site</a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    )
}

export default OurWork
