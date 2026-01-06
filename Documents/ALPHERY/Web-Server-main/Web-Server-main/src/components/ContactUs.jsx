import React from 'react'
import toast from 'react-hot-toast'
import { motion } from 'motion/react'

const ContactUs = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "--- Enter Web3Forms key ---");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        toast.success('Message sent successfully!')
        event.target.reset();
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <section id='contact-us' className='bg-white dark:bg-black text-black dark:text-white py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden relative'>

      {/* Giant Title */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase mb-20 md:mb-32 select-none'
      >
        Contact
      </motion.h1>

      <div className='flex flex-col lg:flex-row justify-between gap-16 lg:gap-32'>

        {/* Left Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className='flex flex-col gap-10 lg:w-1/3'
        >
          <div>
            <h3 className='font-medium text-base sm:text-lg mb-2'>Address</h3>
            <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs'>
              3, Bhagatsingh Road,<br />
              Saibaba Colony, Coimbatore,<br />
              Tamil Nadu - 641025
            </p>
          </div>

          <div>
            <h3 className='font-medium text-base sm:text-lg mb-2'>Office Hours</h3>
            <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400'>Monday - Friday<br />10 AM - 6 PM</p>
          </div>

          <div>
            <h3 className='font-medium text-base sm:text-lg mb-2'>Contact</h3>
            <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400'>+91 88383 62439</p>
            <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400'>+91 97913 34944</p>
            <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400'>alpherymail@gmail.com</p>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className='lg:w-2/3 w-full'
        >
          <form onSubmit={onSubmit} className='flex flex-col gap-8'>

            <div className='flex flex-col md:flex-row gap-8'>
              <div className='flex-1 border-b border-gray-300 dark:border-gray-700 py-2'>
                <label className='block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500'>First Name</label>
                <input name="name" type="text" placeholder='John' className='w-full bg-transparent outline-none text-base sm:text-lg font-medium placeholder-gray-300 dark:placeholder-gray-700' required />
              </div>
              <div className='flex-1 border-b border-gray-300 dark:border-gray-700 py-2'>
                <label className='block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500'>Last Name</label>
                <input name="lastname" type="text" placeholder='Doe' className='w-full bg-transparent outline-none text-base sm:text-lg font-medium placeholder-gray-300 dark:placeholder-gray-700' />
              </div>
            </div>

            <div className='border-b border-gray-300 dark:border-gray-700 py-2'>
              <label className='block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500'>Email (Required)</label>
              <input name="email" type="email" placeholder='john@example.com' className='w-full bg-transparent outline-none text-base sm:text-lg font-medium placeholder-gray-300 dark:placeholder-gray-700' required />
            </div>

            <div className='border-b border-gray-300 dark:border-gray-700 py-2'>
              <label className='block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500'>Project Description</label>
              <textarea name="message" rows={1} placeholder='Tell us about your project...' className='w-full bg-transparent outline-none text-base sm:text-lg font-medium placeholder-gray-300 dark:placeholder-gray-700 resize-none min-h-[50px]' required />
            </div>

            <div className='pt-8'>
              <button type="submit" className='bg-black dark:bg-white text-white dark:text-black px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:scale-105 transition-transform duration-300'>
                Work With Me
              </button>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  )
}

export default ContactUs
