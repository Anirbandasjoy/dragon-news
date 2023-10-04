import React, { useState, useEffect } from 'react';
import moment from 'moment/moment';
import logo from '../assets/logo.png';

const Header = () => {
    const [currentTime, setCurrentTime] = useState(moment().format("dddd, MMMM D YYYY, h:mm:ss a"));

    useEffect(() => {
        // Update the current time every second
        const intervalId = setInterval(() => {
            setCurrentTime(moment().format("dddd, MMMM D YYYY, h:mm:ss a"));
        }, 1000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='text-center mt-3'>
            <img src={logo} className='mx-auto w-44 sm:w-72' alt="logo" />
            <p className="sm:text-lg mt-3 text-gray-500">Journalism Without Fear or Favour</p>
            <h1 className='sm:text-sm text-xs'>{currentTime}</h1>
        </div>
    );
};

export default Header;
