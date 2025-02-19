import React from 'react'
import styles, {layout} from '../style'
import FeedbackCard from './FeedbackCard'
import { feedback } from '../constants'

const Testimonials = () => {
  return (
    <div className={`${styles.paddingY} flex flex-col relative`}>
      {/* TODO */}
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />
        <div className='w-full flex flex md:flex-row flex-col justify-between items-center sm:mb-16 mbn-6 relative z-[1]'>
            <h1 className={`${styles.heading2}`}>What people are <br className='sm:block hidden' /> saying about us</h1>
            <div className='w-full md:mt-0 mt-6 '>
              <p className={`max-w-[470px] ${styles.paragraph}`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
        </div>

        <div className={`flex flex-wrap sm:justify-start justify-center w-full feadback-container relative z-[1]`}>
          {feedback.map((card)=>(
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>
    </div>
  )
}

export default Testimonials 