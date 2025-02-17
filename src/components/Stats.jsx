import React from 'react'
import styles from '../style'
import { stats } from '../constants'

const Stats = () => {
  return (
    <div className={`${styles.flexCenter} flex-row sm:mb-20 mb-6 flex-wrap justify-center items-center`}>
      {stats.map((stat)=>(
        <div className='flex flex-row justify-center items-center flex-1 m-2'>
          <h4 className='font-poppins font-semibold xs:text-[40px] mr-2 text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
          <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase'>{stat.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Stats