import axios from 'axios';
import { useState, createContext, useLayoutEffect, useEffect } from 'react';

export const StreamersContext = createContext({});

export const StreamersProvider = ({ children }) => {
    const [streamers, setStreamers] = useState();

    const getStreamersData = async () => {
        try {
            const data = await axios.get(`https://api.chess.com/pub/streamers`);
            setStreamers(data?.data);
        } catch (error) {
            console.log(error);
        }
    };

    useLayoutEffect(() => {
        getStreamersData();
    }, []);

    return (
        <StreamersContext.Provider value={{ streamers }}>
            {children}
        </StreamersContext.Provider>
    );
};
