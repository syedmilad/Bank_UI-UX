import React from 'react'
import { quotes } from '../assets'

const FeedbackCard = ({img,name,title,content}) => {
  return (
    <div className="flex justify-between flex-col max-w-[370px] feedback-card px-10 py-12 rounded-[20px] md:mr-10 sm:mr-5 mr-0 my-10 relative">
        <img src={quotes} alt="quotes" className='w-[42px] h-[28px] object-contain' />
        <p className='my-10 text-white font-poppins font-normal text-[18px] leading-[32px]'>{content}</p>
        <div className='flex flex-row items-center'>
            <img src={img} alt={name} className='w-[64px] h-[64px] rounded-full' />
            <div className='flex flex-col ml-4'>
                <h3 className='font-poppins font-semibold text-white text-[20px] leading-[32px]'>{name}</h3>
                <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>{title}</p>
            </div>
        </div>
    </div>
  )
}

export default FeedbackCard