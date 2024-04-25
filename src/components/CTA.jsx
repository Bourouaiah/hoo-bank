import React from 'react'

function CTA() {
  return (
    <div className='sm:px-16 px-8 pb-[80px]'>
      <div className='bg-black-gradient-2 p-14 rounded-[20px] flex items-center md:justify-between justify-center flex-wrap md:flex-nowrap'>
        <div>
          <h1 className='text-white sm:text-[50px] text-[30px] font-semibold'>Let’s try our service now!</h1>
          <p className='text-dimWhite text-[18px] md:max-w-[500px] text-center md:text-start my-[20px]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <button className='bg-blue-gradient text-primary py-[20px] px-[36px] mt-[17px] rounded-lg'>Get Started</button>
      </div>
    </div>
  )
}

export default CTA
