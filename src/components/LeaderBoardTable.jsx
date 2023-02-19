import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LeaderboardContext } from '../context/LeaderBoard';

const LeaderBoardTable = () => {
    const { leaderBoard } = useContext(LeaderboardContext);

    return (
        <div className='flex flex-col mt-9 border border-[#8899a6] rounded'>
            {leaderBoard ? (
                <table className='w-full table-auto'>
                    <thead
                        className='capitalize text-[16px] text-[#8899a6] font-medium border-b 
                        border-[#8899a6]'
                    >
                        <tr>
                            <th className='py-1'>rank</th>
                            <th className='py-1'>username</th>
                            <th className='py-1 md:table-cell hidden'>name</th>
                            <th className='py-1'>score</th>
                            <th className='py-1 md:table-cell hidden'>title</th>
                            <th className='py-1 md:table-cell hidden'>
                                status
                            </th>
                            <th className='py-1 md:table-cell hidden'>w</th>
                            <th className='py-1 md:table-cell hidden'>l</th>
                            <th className='py-1 md:table-cell hidden'>d</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderBoard?.map(data => {
                            return (
                                <tr
                                    key={data.player_id}
                                    className='text-center text-[16px] border-b border-[#8899a6] 
                                        hover:bg-[#192734] last:border-b-0'
                                >
                                    <td className='py-4'>
                                        <span>{data.rank}</span>
                                    </td>
                                    <td className='py-4 flex items-center'>
                                        <img
                                            className='w-[1.8rem] h-[1.8rem] rounded-lg'
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
                                    <td className='py-4 md:table-cell hidden'>
                                        <span>{data.name}</span>
                                    </td>
                                    <td className='py-4'>
                                        <span>{data.score}</span>
                                    </td>
                                    <td className='py-4 md:table-cell hidden'>
                                        <span>{data.title}</span>
                                    </td>
                                    <td className='py-4 md:table-cell hidden'>
                                        <span>{data.status}</span>
                                    </td>
                                    <td className='py-4 md:table-cell hidden'>
                                        <span>{data.win_count}</span>
                                    </td>
                                    <td className='py-4 md:table-cell hidden'>
                                        <span>{data.loss_count}</span>
                                    </td>
                                    <td className='py-4 md:table-cell hidden'>
                                        <span>{data.draw_count}</span>
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

export default LeaderBoardTable;
