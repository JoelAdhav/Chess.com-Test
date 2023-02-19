import axios from 'axios';
import { useState, createContext, useLayoutEffect } from 'react';

export const LeaderboardContext = createContext({});

export const LeaderboardProvider = ({ children }) => {
    const [leaderBoard, setLeaderBoard] = useState();
    const [profileData, setProfileData] = useState();
    const [profile, setProfile] = useState();

    const getLeaderBoardData = async () => {
        try {
            const data = await axios.get(
                'https://api.chess.com/pub/leaderboards'
            );

            setLeaderBoard(data.data.daily);
        } catch (error) {
            console.log(error);
        }
    };

    const getProfileData = async username => {
        try {
            const data = await fetch(
                `https://api.chess.com/pub/player/${username}`
            );
            setProfileData(data);
        } catch (error) {
            console.log(error);
        }
    };

    useLayoutEffect(() => {
        getLeaderBoardData();
        getProfileData();
    }, []);

    return (
        <LeaderboardContext.Provider
            value={{
                leaderBoard,
                profileData,
                getProfileData,
                profile,
                setProfile,
            }}
        >
            {children}
        </LeaderboardContext.Provider>
    );
};
