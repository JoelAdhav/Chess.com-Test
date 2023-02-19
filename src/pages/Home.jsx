import { Outlet } from 'react-router-dom';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';
import { LeaderboardProvider } from '../context/LeaderBoard';
import { StreamersProvider } from '../context/StreamersContext';

function Home() {
    return (
        <LeaderboardProvider>
            <StreamersProvider>
                <main
                    className='w-full h-full first-letter flex flex-col content-center items-center 
        font-nunito text-white relative'
                >
                    <div className='w-screen h-screen bg-[#15202b] fixed -z-10' />
                    <Logo />
                    <Navbar />
                    <Outlet />
                </main>
            </StreamersProvider>
        </LeaderboardProvider>
    );
}

export default Home;
