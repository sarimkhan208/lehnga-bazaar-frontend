import React, { useState } from 'react'
import {FiUser} from 'react-icons/fi'
import {BsCart2} from 'react-icons/bs'
import {IoIosArrowForward} from 'react-icons/io'
import {CiMail} from 'react-icons/ci'
import {PiPhoneCallThin} from 'react-icons/pi'
// import {Link} from 'react-router-dom'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  return (
    <>
    <div className={`${menuOpen?'left-0':'-left-full'} md:hidden bg-mainpitch h-[100vh] w-[90%] absolute top-[60px] flex flex-col  font-mierb ease-in-out duration-500 px-1`} >
        
        <div className='px-2 py-6 border-b-[1px] border-linebrown' >
          <div className='font-playfair text-[32px] leading-[43px]' >
            Hello!
          </div>

          <div className='text-[14px]font-mierb leading-[18px] text-saffron mt-4' >
            SIGNIN/ SIGNUP <span className='text-gray text-[12px] leading-[16px]' > to access your profile </span>
          </div>
            
        </div>
        
        <div className='text-[14px] leading-[18px] py-4 border-b-[1px] border-linebrown '>
            
              <div className='flex mb-1 hover:bg-litemainpitch p-2 rounded-md '>
                  <div className='w-[100%] ' >Lehnga</div>
                  <div className='font-thin mt-1'>{<IoIosArrowForward/>}</div>
              </div>
            

            
              <div className='flex mb-1 hover:bg-litemainpitch p-2 rounded-md '>
                  <div className='w-[100%] ' >Saree</div>
                  <div className='font-thin mt-1'>{<IoIosArrowForward/>}</div>
              </div>
            

            
              <div className='flex mb-1 hover:bg-litemainpitch p-2 rounded-md '>
                  <div className='w-[100%] ' >Suit</div>
                  <div className='font-thin mt-1'>{<IoIosArrowForward/>}</div>
              </div>
            

            
              <div className='flex mb-1 hover:bg-litemainpitch p-2 rounded-md '>
                  <div className='w-[100%] ' >Garara</div>
                  <div className='font-thin mt-1'>{<IoIosArrowForward/>}</div>
              </div>
            
        </div>

        <div className='px-2 py-6 border-b-[1px] border-linebrown font-mierb text-gray' >
          <div className='text-[14px] leading-[18px]'>CONTACT</div>
          <div className='flex mt-2' >
            <div className='mt-1 mr-2' >{<CiMail/>}</div>
            <div className='text-[14px]'> lehngabazaar@gmail.com </div>
          </div>
          <div className='flex' >
            <div className='mt-1 mr-2' >{<PiPhoneCallThin/>}</div>
            <div className='text-[14px]'>7275784518 / 7845128956</div>
          </div>
        </div>

        <div className='flex justify-center mt-4 ' >
          <div className='p-2 text-saffron text-[20px]' >{<FaFacebook/>}</div>
          <div className='p-2 text-saffron text-[20px]' >{<BsInstagram/>}</div>
          <div className='p-2 text-saffron text-[20px]' >{<AiFillTwitterCircle/>}</div>
        </div>




    </div>
    
    
    <div className=' bg-mainpitch h-[60px] flex items-center px-3 md:pr-8 '>

    
        <div className='flex flex-col mr-[20px] md:mr-[20px] md:hidden' onClick={toggleMenu} > 
            <span className={`h-[3px] w-[15px] bg-black mb-1 ${menuOpen?'rotate-45 absolute':''} ease-in-out duration-300`}></span>
            <span className={`h-[3px] w-[15px] bg-black mb-1 ${menuOpen?'-rotate-45 absolute':''} ease-in-out duration-300`}></span>
            <span className={`h-[3px] w-[15px] bg-black ${menuOpen?'hidden':''}  `}></span>
        </div>
      <div className='font-mierb text-xl ' >Lehnga Bazaar</div>

      <ul className='hidden leading-5 text-[16px] md:flex ml-auto md:space-x-10 font-mierb'
      >
        <li>Lehnga</li>
        <li>Saree</li>
        <li>Suit</li>
        <li>Garara</li>
      </ul>

      <ul className='flex space-x-3 md:space-x-6 md:ml-6 ml-auto' >
        <li className='text-[17px] pt-[3px] ' >{<FiUser/>}</li>
        <li className='text-[17px] pt-[3px] ' >{<BsCart2/>}</li>
      </ul>

    

      


    </div>
    </>
  )
}

export default Navbar
