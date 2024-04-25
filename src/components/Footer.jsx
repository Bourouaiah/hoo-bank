import React from 'react'
import { logo } from '../assets'
import { footerLinks } from '../constants'
import { socialMedia } from '../constants'

function Footer() {
  console.log(footerLinks)
  return (
    <footer className='sm:px-16 px-8'>
      <div className='flex justify-between pb-[30px] flex-wrap gap-[40px]'>
        <div>
          <img src={logo} alt="logo" />
          <p className='mt-[20px] text-[18px] text-dimWhite'>
            A new way to make the payments
            <br />
            easy, reliable and secure.
          </p>
        </div>
        {footerLinks.map((item) => (
          <ul key={item.title} className="flex flex-col gap-[25px]">
            <li className='text-white text-[18px] font-littleBold'>{item.title}</li>
            {item.links.map((el) => (
              <li className='text-dimWhite hover:text-dimBlueTwo'><a href={el.link}>{el.name}</a></li>
            ))}
          </ul>
        ))}
      </div>
      <hr />
      <div className='flex justify-center pt-[30px] pb-[50px] lg:flex-nowrap flex-wrap sm:justify-between gap-[25px]'>
        <p className='text-white text-[18px]'>Copyright &#169; 2022 HooBank. All Rights Reserved.</p>
        <ul className='flex gap-[25px]'>
          {socialMedia.map((el) => (
            <li key={el.id}><a href={el.link}><img src={el.icon} alt="" /></a></li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
