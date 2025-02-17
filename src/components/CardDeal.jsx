import React from 'react'
import { card } from '../assets'
import styles, {layout} from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <div className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h4 className={`${styles.heading2}`}>Find a better card <br className='sm:block hidden' /> deal in few easy steps.</h4>
        <p className={`${styles.paragraph} max-w-[470px]`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button styles="mt-6" />
      </div>
      <div className={`${layout.sectionImg}`}>
          <img src={card} alt="card__image" className='w-[100%] h-[100%] object-contain' />
      </div>
    </div>
  )
}

export default CardDeal