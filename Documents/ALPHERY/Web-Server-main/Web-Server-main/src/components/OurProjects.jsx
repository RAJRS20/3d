import React, { useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion, AnimatePresence } from 'motion/react'

const OurProjects = () => {

    const [activeCategory, setActiveCategory] = useState('Website')
    const [selectedProject, setSelectedProject] = useState(null)

    const categories = ["Website", "Apps", "Web Apps", "ERP Softwares", "AI"]

    const allProjects = [
        {
            title: 'Fork&Knife',
            description: 'A cutting-edge solution that transforms how businesses interact with their customers digitally.',
            image: assets.work_fork_knife,
            url: 'https://forkandknife-1.vercel.app/',
            category: 'Web Apps'
        },
        {
            title: 'Ride Infinity',
            description: 'Innovative platform designed to streamline operations and enhance user experience.',
            image: assets.work_ride_infinity,
            url: 'https://ride-infinity.vercel.app/',
            category: 'Website'
        },
        {
            title: 'Agrozy Foods',
            description: 'Revolutionary app that bridges the gap between technology and everyday life.',
            image: assets.work_agrozy,
            url: 'https://agrozy-foods.vercel.app/',
            category: 'Website'
        },
        {
            title: 'FarmPick',
            description: 'An elegantly designed e-commerce platform that inspires people to embrace and enjoy natural foods.',
            image: assets.work_mobile_app,
            url: 'http://farmpickshope.vercel.app/',
            category: 'Apps'
        },
        {
            title: 'FiberFlow',
            description: 'We created a revolution among the ISP providers and people that made the connectivity a short bridge.',
            image: assets.work_fiberflow,
            url: 'https://fiberflow-react.vercel.app/',
            category: 'Web Apps'
        },
        {
            title: 'Dots nd Decimals',
            description: 'We improvise the unique structure of the IT Infrastructure that made this company a partner for us.',
            image: assets.work_fitness_app,
            url: 'https://dot-decimals-1.onrender.com/',
            category: 'AI'
        },
    ]

    const filteredProjects = allProjects.filter(project => project.category === activeCategory)

    return (
        <div id="our-projects" className='py-24 px-4 sm:px-12 lg:px-24 xl:px-40 bg-gray-50 dark:bg-black/50 transition-colors duration-300'>

            <div className='flex flex-col items-center gap-12 max-w-7xl mx-auto'>
                <Title title='Our Projects' desc='Explore our diverse portfolio across different domains.' />

                {/* Categories */}
                <div className='flex flex-wrap justify-center gap-3 mb-4'>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`
                                px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                                ${activeCategory === cat
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }
                            `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full'
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project, index) => (
                                <motion.div
                                    layout
                                    key={project.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className='group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col cursor-pointer'
                                    onClick={() => setSelectedProject(project)}
                                >
                                    {/* Image Container */}
                                    <div className='relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800'>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                        />
                                        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300' />
                                    </div>

                                    {/* Content */}
                                    <div className='p-6 flex flex-col flex-grow'>
                                        <div className='mb-2'>
                                            <span className='text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider'>
                                                {project.category}
                                            </span>
                                        </div>
                                        <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                                            {project.title}
                                        </h3>
                                        <p className='text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4'>
                                            {project.description}
                                        </p>

                                        <div className='mt-auto flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline decoration-2 underline-offset-4'>
                                            View Details
                                            <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className='col-span-full py-20 text-center'
                            >
                                <p className='text-gray-500 dark:text-gray-400 text-lg'>No projects found in this category.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Modern Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative h-64 sm:h-80 bg-gray-100 dark:bg-gray-800">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-md transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="p-8">
                                <span className='inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4'>
                                    {selectedProject.category}
                                </span>
                                <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                                    {selectedProject.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                                    {selectedProject.description}
                                </p>

                                <div className="flex justify-end gap-3">
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="px-6 py-2.5 rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                    >
                                        Close
                                    </button>
                                    <a
                                        href={selectedProject.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2"
                                    >
                                        Visit Project
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default OurProjects
