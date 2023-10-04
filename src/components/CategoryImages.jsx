import React, { useEffect, useState } from 'react'
import { AiTwotoneCalendar } from 'react-icons/ai'
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import moment from 'moment'

const CategoryImages = () => {
    const [currentTime, setCurrentTime] = useState(moment().format("dddd, MMM  YYYY"));

    useEffect(() => {
        // Update the current time every second
        const intervalId = setInterval(() => {
            setCurrentTime(moment().format("dddd, MMM  YYYY"));
        }, 1000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className='space-y-4'>
            <div className="card bg-base-100 ">
                <figure><img src={image1} alt="image" /></figure>
                <div className='p-3 text-lg font-semibold'>
                    <h1>If a dog chews shoes whose shoes does he choose?</h1>
                </div>
                <div className='flex items-center gap-4 p-2'>
                    <div>
                        <h1>Sports</h1>
                    </div>
                    <div>
                        <AiTwotoneCalendar />
                    </div>
                    <div>
                        <p className=' text-xs'>{currentTime}</p>
                    </div>

                </div>
            </div>
            <div className="card bg-base-100 ">
                <figure><img src={image1} alt="image" /></figure>
                <div className='p-3 text-lg font-semibold'>
                    <h1>If a dog chews shoes whose shoes does he choose?</h1>
                </div>
                <div className='flex items-center gap-4 p-2'>
                    <div>
                        <h1>Sports</h1>
                    </div>
                    <div>
                        <AiTwotoneCalendar />
                    </div>
                    <div>
                        <p className=' text-xs'>{currentTime}</p>
                    </div>

                </div>
            </div>
            <div className="card bg-base-100 ">
                <figure><img src={image1} alt="image" /></figure>
                <div className='p-3 text-lg font-semibold'>
                    <h1>If a dog chews shoes whose shoes does he choose?</h1>
                </div>
                <div className='flex items-center gap-4 p-2'>
                    <div>
                        <h1>Sports</h1>
                    </div>
                    <div>
                        <AiTwotoneCalendar />
                    </div>
                    <div>
                        <p className=' text-xs'>{currentTime}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CategoryImages