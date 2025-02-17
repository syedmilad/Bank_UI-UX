import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, navLinks } from '../constants'

const Footer = () => {
  return (
    <div className={`${styles.flexCenter} flex flex-col`} >
        <div className="flex sm:flex-row flex-col w-full justify-center items-center">
            <div className='flex flex-1 flex-col justify-start items-start md:mr-10 mr-0 sm:mb-0 mb-4'>
              <img src={logo} alt="logo" className='w-[184px] h-[51px] object-contain ' />
              <p className={`${styles.paragraph} max-w-[310px] mt-10`}>A new way to make the payments easy, reliable and secure.</p>
            </div>
            <div className='flex-[1.5] flex-wrap  flex flex-row'>
              {footerLinks.map((footer)=>(
                <div key={footer.id} className='flex flex-col flex-1 ss:my-0 my-4 min-w-[150px]'>
                    <h4 className='font-poppins font-normal text-[18px] leading-[24px] text-white '>{footer.title}</h4>
                    <ul>
                      {footer.links.map((link,index)=>(
                        <li 
                          className={`font-poppins font-normal text-[16px] text-dimWhite leading-[24px] ${index !== footer.links.length ? "mt-4"  : "mt-0"} `}
                          key={link.name+index}>
                          {link.name}
                        </li>
                      ))}
                    </ul>
                </div>
              ))}
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Footer