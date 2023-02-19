import React from 'react';
import { Outlet } from 'react-router-dom';
import StreamersTable from '../components/StreamersTable';

const Streamers = () => {
    return (
        <div className='w-[80%] h-full flex flex-col lg:mt-16 mt-8 mb-24 relative'>
            <StreamersTable />
            <Outlet />
        </div>
    );
};

export default Streamers;
