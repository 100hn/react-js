import React from 'react'

const Career = () => {
  return (
    <section className='bg-[#F4F5F6] w-full'>
      <div className='max-w-[1300px] m-auto '>
        <div className='p-4 pt-6 mb-6 md:p-6 lg:p-12  bg-[#0E4669] text-white'>
          <h2 className="text-4xl uppercase font-bold mb-5 text-center">Career</h2>
          <h4 className="text-center text-2xl mb-1 pb-1 font-semibold">Join our team of innovators and make a difference in the world!</h4>
          <p className='text-center'>We're always looking for talented individuals to help us drive our mission forward.</p>
          <div className='text-center items-center justify-center py-4'>
            <a href="/opportunities" target="_blank" rel="noopener noreferrer">
              <button 
                className='py-2 px-4 bg-[#ec3e64] text-white hover:bg-[#036071e3] hover:text-[#F7F7F7] transition duration-300 ease-in-out'
              >
                Explore the Opportunities
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Career