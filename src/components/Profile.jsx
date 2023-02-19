import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LeaderboardContext } from '../context/LeaderBoard';
import ReactDOM from 'react-dom';
import axios from 'axios';

const Profile = () => {
    let { username } = useParams();
    let navigate = useNavigate();
    const { getProfileData, profileData, profile, setProfile } =
        useContext(LeaderboardContext);

    console.log(profile);

    const close = () => {
        navigate('..');
    };

    const dateConvert = datetime => {
        const res = new Date(datetime * 1000).toDateString();
        return res;
    };

    useEffect(() => {
        getProfileData(username);
    }, [username]);

    useEffect(() => {
        const getProfile = async () => {
            try {
                const data = await axios.get(profileData?.url);
                setProfile(data);
            } catch (error) {
                console.log(error);
            }
        };
        getProfile();
    }, [profileData]);

    return ReactDOM.createPortal(
        <div
            className='fixed z-20 top-0 w-full h-full bg-[#192734] bg-opacity-30 backdrop-blur-sm flex 
        items-center justify-center font-nunito '
            onClick={close}
        >
            <div
                className='xl:w-[65%] lg:w-[75%] md:w-[90%] sm:w-[75%] w-[90%] md:h-[90%] h-[90vh] lg:h-[85%]
                 scrollbar-thin md:overflow-hidden scrollbar-thumb-[#8899a6] scrollbar-track-[#192734] 
                 overflow-x-hidden bg-[#15202b] bg-opacity-75 rounded-lg text-white relative'
                onClick={e => e.stopPropagation()}
            >
                {profile ? (
                    <div
                        className='flex flex-col  h-auto 
                    w-full p-4 relative'
                    >
                        <div className='flex items-center justify-center'>
                            {profile.data.avatar ? (
                                <img
                                    src={profile.data.avatar}
                                    alt={profile.data.username}
                                    className='w-20 h-20 rounded-2xl mr-5'
                                />
                            ) : null}

                            <h1 className='text-5xl text-white '>
                                {profile.data.username}
                            </h1>
                        </div>

                        <div className='flex justify-evenly items-center mt-10'>
                            <div className='flex items-center justify-center'>
                                <p className='mr-3 text-xl text-[#8899a6]'>
                                    Followers
                                </p>
                                <span>{profile.data.followers}</span>
                            </div>
                            {profile.data.title ? (
                                <div className='flex items-center justify-center'>
                                    <p className='mr-3 text-xl text-[#8899a6]'>
                                        Title
                                    </p>
                                    <span>{profile.data.title}</span>
                                </div>
                            ) : null}
                            {profile.data.league ? (
                                <div className='flex items-center justify-center'>
                                    <p className='mr-3 text-xl text-[#8899a6]'>
                                        League
                                    </p>
                                    <span>{profile.data.league}</span>
                                </div>
                            ) : null}
                        </div>
                        <div className='absolute left-10 top-48 w-[90%] h-[100%] border-2 rounded-lg border-[#8899a6]'>
                            <div className='flex items-center justify-evenly mt-4 my-4'>
                                <div className='flex items-center justify-center'>
                                    <p className='mr-2 text-xl text-[#8899a6]'>
                                        Username -
                                    </p>
                                    <span>{profile.data.username}</span>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <p className='mr-2 text-xl text-[#8899a6]'>
                                        Player ID -
                                    </p>
                                    <span>{profile.data.player_id}</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-evenly'>
                                <div className='flex flex-col'>
                                    <div className=' flex items-center justify-center'>
                                        <p className='mr-2 text-xl text-[#8899a6]'>
                                            Joined -
                                        </p>
                                        <span>
                                            {dateConvert(profile.data.joined)}
                                        </span>
                                    </div>
                                    <div className='flex my-4 items-center justify-center'>
                                        <p className='mr-2 text-xl text-[#8899a6]'>
                                            Last Online
                                        </p>
                                        <span>
                                            {dateConvert(
                                                profile.data.last_online
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    {profile.data.location ? (
                                        <div className=' flex items-center justify-center'>
                                            <p className='mr-2 text-xl text-[#8899a6]'>
                                                Location
                                            </p>
                                            <span>{profile.data.location}</span>
                                        </div>
                                    ) : null}

                                    <div className='flex my-4 items-center justify-center'>
                                        <p className='mr-2 text-xl text-[#8899a6]'>
                                            Status
                                        </p>
                                        <span>{profile.data.status}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='w-full min-h-[60vh] h-full flex justify-center items-center'>
                        <div
                            className='w-8 h-8 border-4 border-blue rounded-full border-b-[#192734] 
                            animate-spin'
                            role='status'
                        />
                        <span className='ml-4'>Please Wait ...</span>
                    </div>
                )}
            </div>
        </div>,
        document.getElementById('model')
    );
};

export default Profile;
