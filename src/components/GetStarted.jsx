import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className='w-[124px] h-[124px] bg-blue-gradient rounded-full p-[2px]'>
        <div className={`w-[100%] h-[100%] cursor-pointer flex flex-col bg-primary rounded-full ${styles.flexCenter}`}>
          <div className='flex flex-row items-center'>
              <p className={`text-[18px] font-medium font-poppins leading-[23px] mr-2`}>
                <span className='text-gradient'>Get</span>
              </p>
              <img src={arrowUp} alt="arrow up" />
          </div>
          <p className={`text-[18px] mt-1 font-medium font-poppins leading-[23px] mr-2`}>
                <span className='text-gradient'>Started</span>
              </p>
        </div>
    </div>
  )
}

export default GetStarted