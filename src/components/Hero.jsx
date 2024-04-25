import React from 'react'
import { discount } from '../assets'
import { arrowUp } from '../assets'
import { robot } from '../assets'
import { stats } from  '../constants'

const Hero = () => {
  return (
    <div id='home'>
    <div className='flex items-center flex-wrap sm:flex-nowrap gap-5'>
      <div className='sm:px-16 px-8'>
        <div className='flex items-center py-[20px] gap-4'>
          <div>
            <span className='flex items-center gap-[8px] w-max bg-discount-gradient p-[5px] mb-6 rounded-lg text-dimWhite'><img src={discount} /> 20% Discount For 1 Month Account</span>
            <h1 className='md:text-[60px] text-[48px] font-bold'>The Next <span className='text-gradient'>Generation </span>Payment Method.</h1>
          </div>
          <div className='hidden border border-secondary w-[100px] h-[100px] p-[20px] sm:flex justify-start items-center cursor-pointer rounded-full'>
            <span className='text-gradient'>Get <img className='inline' src={arrowUp} />Started</span>
          </div>
        </div>
        <p className='text-dimWhite'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
        </div>
      <div className='flex-1 flex justify-center items-center md:my-0 my-10 relative'>
        <img className='sm:max-w-[500px] md:max-w-[700px]' src={robot} alt="robot" />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40'></div>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
      </div>
    </div>
    <div className='border border-secondary w-[100px] h-[100px] p-[20px] sm:hidden flex justify-start items-center cursor-pointer rounded-full m-auto'>
      <span className='text-gradient'>Get <img className='inline' src={arrowUp} />Started</span>
    </div>
    <div className='px-8'>
      <ul className='flex flex-row flex-wrap items-center sm:gap-[80px] gap-[20px] my-[50px]'>
        {stats.map(item => {
          return (
            <li className='flex items-center gap-[10px]' key={item.id}>
              <h1 className='text-[38px] font-semibold'>{item.value}</h1>
              <span className='text-gradient text-[20px]'>{item.title}</span>
            </li>
          )
        })}
      </ul>
    </div>
    </div>
  )
}

export default Hero
