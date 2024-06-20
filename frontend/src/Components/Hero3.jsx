import React from 'react'

const Hero3 = () => {
  return (
    <div className='w-full lg:px-10'>
        <div className='max-w-7xl mx-auto grid lg:grid-cols-2 lg:px-2 lg:gap-2 mt-8 px-12 md:px-16'>
            {/* Text div */}
            <div className='flex-col mt-2 sm:text-center lg:text-left'>
                <h1 className='text-4xl text-gray-900 sm:text-5xl md:text-6xl font-bold'>Data to enrich your <span className='text-blue-600 block'>online business</span></h1>
                <p className='text-lg md:text-xl sm:max-w-xl mx-auto lg:mx-0 lg:mt-8 text-gray-700 mt-3'>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.</p>
                <div className='grid sm:grid-cols-2 sm:mx-auto lg:mx-0 gap-3 mt-4 lg:mt-8 sm:w-[50%] lg:w-[66%]'>
                    <p 
                    className='bg-gray-900 text-white text-center font-medium border rounded-md p-3 text-lg sm:text-xl hover:shadow-lg hover:drop-shadow  hover:opacity-90 transition duration-200 cursor-pointer'
                    >Get Started</p>

                    <p className='bg-blue-600 text-white font-medium text-center border rounded-md p-3 text-lg sm:text-xl hover:shadow-lg hover:drop-shadow hover:opacity-90 transition duration-200 cursor-pointer'>Live Demo</p>
                </div>
            </div>
            {/* Image Div */}
            <div className='mt-8 lg:mt-0 flex justify-end '>
                <img
                className='h-56 sm:h-72 md:h-96 lg:h-full w-full object-cover xl:w-3/4 lg:w-[90%]'
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero3