import React from 'react'
import { quotes } from '../assets'
import { feedback } from '../constants'

function Testimonials() {
  return (
    <div className='sm:px-16 px-8 pb-[80px] relative overflow-hidden'>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40' />
      <div className='flex items-center justify-center gap-[30px] md:gap-0 md:justify-between md:max-w-[80%] flex-wrap lg:flex-nowrap'>
        <h1 className='text-white sm:text-[50px] text-[30px] font-semibold'>
        What People are
        <br />
        saying about us
        </h1>
        <p className='text-dimWhite text-[18px]'>
          Everything you need to accept card payments
          <br />
          and grow your business anywhere on the planet.
        </p>
      </div>
      <div className='grid-auto-three gap-[68px] mt-[40px]'>
        {feedback.map((item) => {
          return (
            <div key={item.id} className="feedback-card flex flex-col justify-between items-center md:items-start p-[40px] rounded-lg">
              <img src={quotes} alt="" className='w-[45px] h-[45px]' />
              <p className='text-white leading-[2] text-[18px] my-[20px] text-center md:text-start'>{item.content}</p>
              <div className='flex gap-[20px] items-center'>
                <img src={item.img} alt="" className='w-[45px] h-[45px]' />
                <div>
                  <h1 className='text-white font-semibold text-[18px] tracking-wider'>{item.name}</h1>
                  <p className='text-dimWhite'>{item.title}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Testimonials
