import { Outlet } from 'react-router-dom';
import LeaderBoardTable from '../components/LeaderBoardTable';

const LeaderBoard = () => {
    return (
        <div className='w-[80%] h-full flex flex-col lg:mt-16 mt-8 mb-24 relative'>
            <LeaderBoardTable />
            <Outlet />
        </div>
    );
};

export default LeaderBoard;
