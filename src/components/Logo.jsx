import React from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../assets/logo.svg';
const Logo = () => {
    return (
        <div>
            <Link
                to='/'
                className='mt-6 [text-decoration:none] text-2xl text-[#8899a6]
    flex flex-row items-center'
            >
                <img src={logoSvg} className='h-10 w-10' alt='' />
                <span>Chess.com</span>
            </Link>
        </div>
    );
};

export default Logo;
