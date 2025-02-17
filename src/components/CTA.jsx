import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <div  className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} box-shadow bg-black-gradient rounded-[20px] sm:flex-row flex-col `}>
      <div className='flex flex-col flex-1'>
          <h4 className={`${styles.heading2}`}>Let’s try our service now!</h4>
          <p className={`${styles.paragraph} max-w-[470px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 `}>
        <Button />
      </div>
    </div>
  )
}

export default CTA