import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='lg:w-[60%] sm:w-[80%] w-[90%] mt-5 flex justify-around align-middle border border-solid border-[#1d9bf0] rounded-md sm:rounded-lg'>
            <NavLink
                to='/'
                end
                className={({ isActive }) => {
                    return `w-full text-sm md:text-base text-center sm:my-auto font-nunito m-1.5 sm:m-2.5 
                    ${
                        isActive
                            ? 'bg-[#1d9bf0] text-[#15202b]'
                            : 'bg-[#192734] text-[#8899a6] hover:text-[#1d9bf0] active:bg-[#1d9bf0] active:text-[#15202b]'
                    }
                 border-0 cursor-pointer rounded capitalize font-semibold`;
                }}
            >
                Leader Board
            </NavLink>
            <NavLink
                to='/streamers'
                className={({ isActive }) => {
                    return `w-full text-sm md:text-base text-center font-nunito m-1.5 sm:m-2.5 
                    ${
                        isActive
                            ? 'bg-[#1d9bf0] text-[#15202b]'
                            : 'bg-[#192734] text-[#8899a6] hover:text-[#1d9bf0] active:bg-[#1d9bf0] active:text-[#15202b]'
                    }
                 border-0 cursor-pointer rounded capitalize
                 font-semibold`;
                }}
            >
                Streamers
            </NavLink>
            <NavLink
                to='/tournament'
                className={({ isActive }) => {
                    return `w-full text-sm md:text-base text-center font-nunito m-1.5 sm:m-2.5 
                    ${
                        isActive
                            ? 'bg-[#1d9bf0] text-[#15202b]'
                            : 'bg-[#192734] text-[#8899a6] hover:text-[#1d9bf0] active:bg-[#1d9bf0] active:text-[#15202b]'
                    }
                 border-0 cursor-pointer rounded capitalize
                 font-semibold`;
                }}
            >
                Tournaments
            </NavLink>
        </nav>
    );
};

export default Navbar;
