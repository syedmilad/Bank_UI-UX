import React from 'react'
import { clients } from '../constants'

const Clients = () => {
  return (
    <div className='flex flex-row justify-center items-center'>
      <div className='flex w-full flex-wrap flex-row flex justify-center items-center'>
        {clients.map((client)=>(
          <div key={client.id}  className='flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px]' >
            <img src={client.logo} alt={client.id+1} className='sm:min-w-[192px] w-[100px] object-contain' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clients