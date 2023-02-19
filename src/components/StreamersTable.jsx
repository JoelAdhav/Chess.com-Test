import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StreamersContext } from '../context/StreamersContext';
import twitchSvg from '../assets/twitch.svg';
import logoSvg from '../assets/logo.svg';

const StreamersTable = () => {
    const { streamers } = useContext(StreamersContext);

    return (
        <div className='flex flex-col mt-9 border border-[#8899a6] rounded'>
            {streamers ? (
                <table className='w-full table-auto'>
                    <thead
                        className='capitalize text-[16px] text-[#8899a6] font-medium border-b 
                        border-[#8899a6]'
                    >
                        <tr>
                            <th className='py-1'>username</th>
                            <th className='py-1'>twitch</th>
                            <th className='py-1'>live</th>
                            <th className='py-1 md:table-cell hidden'>
                                chess.com
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {streamers?.streamers?.map(data => {
                            return (
                                <tr
                                    key={data.player_id}
                                    className='text-center text-[16px] border-b border-[#8899a6] 
                                        hover:bg-[#192734] last:border-b-0'
                                >
                                    <td className='py-4 flex items-center'>
                                        <img
                                            className='w-[1.8rem] h-[1.8rem] mx-1 md:mx-4 rounded-lg'
                                            src={data.avatar}
                                            alt={data.avatar}
                                        />
                                        <span className='ml-4 -mr-96'>
                                            <Link
                                                to={`/${data.username}`}
                                                className='cursor-pointer'
                                            >
                                                {data.username}
                                            </Link>
                                        </span>
                                    </td>
                                    <td className='py-4'>
                                        {data.twitch_url ? (
                                            <a
                                                href={data.twitch_url}
                                                target={'_blank'}
                                                className='flex items-center justify-center'
                                            >
                                                <img
                                                    className='w-[1.8rem] h-[1.8rem] ml-10 rounded-lg'
                                                    src={twitchSvg}
                                                    alt=''
                                                />
                                            </a>
                                        ) : null}
                                    </td>
                                    <td className='py-4'>
                                        <span>
                                            {data.is_live ? 'Yes' : 'No'}
                                        </span>
                                    </td>
                                    <td className='py-4 md:table-cell hidden'>
                                        {data.url ? (
                                            <a
                                                href={data.url}
                                                target={'_blank'}
                                                className='flex items-center justify-center'
                                            >
                                                <img
                                                    className='w-[1.8rem] h-[1.8rem] ml-10 rounded-lg'
                                                    src={logoSvg}
                                                    alt=''
                                                />
                                            </a>
                                        ) : null}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
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
    );
};

export default StreamersTable;
