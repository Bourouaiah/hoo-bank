import React from 'react'
import { clients } from '../constants'

function Clients() {
  return (
    <div id='clients' className='sm:px-16 px-8 pb-[80px] flex items-center justify-center sm:justify-between flex-wrap gap-[50px] md:gap-0'>
      {clients.map((client) => {
        return (
          <img className='w-[192.25px]' src={client.logo} />
        )
      })}
    </div>
  )
}

export default Clients
