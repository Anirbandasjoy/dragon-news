import React from 'react'
import { FaGoogle } from 'react-icons/fa6'
import { AiFillGithub } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'
import { BiLogoInstagram } from 'react-icons/bi'
import image1 from '../../assets/qZone1.png'
import image2 from '../../assets/qZone2.png'
import image3 from '../../assets/qZone3.png'

const RightNavbar = () => {
    return (
        <div>
            <div>
                <h1 className='text-xl font-bold'>Login with</h1>
                <div className='mt-7 px-2 space-y-2'>
                    <div className='relative'>
                        <button className='border-2 rounded-md text-lime-500 w-full p-3 border-lime-500'>
                            Login with Google
                        </button>
                        <FaGoogle size={16} className='absolute text-lime-500 bottom-4 left-6' />
                    </div>

                    <div className='relative'>
                        <button className='border-2 rounded-md text-black w-full p-3 border-black'>
                            Login with Google
                        </button>
                        <AiFillGithub size={16} className='absolute text-black bottom-4 left-6' />
                    </div>
                </div>
            </div>

            {/* find us section */}
            <div>
                <h1 className='text-xl font-bold mt-14'>Find Us On</h1>
                <div className='mt-7 px-2 '>
                    <div className='relative'>
                        <button className='border rounded-t-md text-lime-500 w-full p-3 border-gray-300'>
                            Facebook
                        </button>
                        <BsFacebook size={16} className='absolute text-lime-600 bottom-4 left-10' />
                    </div>

                    <div className='relative'>
                        <button className=' border-x-2 text-teal-300 border-gray-300  w-full p-3 '>
                            Twitter
                        </button>
                        <FiTwitter size={16} className='absolute text-teal-300 bottom-4 left-10' />
                    </div>
                    <div className='relative'>
                        <button className='border rounded-b-md text-black w-full p-3 border-gray-300'>
                            Instagram
                        </button>
                        <BiLogoInstagram size={16} className='absolute text-black bottom-4 left-10' />
                    </div>
                </div>
            </div>

            <div className='mt-10'>
                <h2 className='text-xl font-bold'>Q-Zone</h2>
                <div className='space-y-4'>
                    <img src={image1} alt="image" />
                    <img src={image2} alt="image" />
                    <img src={image3} alt="image" />
                </div>
            </div>
        </div>
    )
}

export default RightNavbar