import { useState, useContext, createContext, useEffect } from 'react';
import axios from 'axios';
const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);
    const [history, setHistory] = useState([]);
    const [err, seterr] = useState('');
    const encodedToken = localStorage.getItem('token');
    const getVideos = async () => {
        try {
            const { data } = await axios.get('/api/videos');
            setVideos(data.videos);
        } catch (e) {
            seterr(e.message);
        }
    }
    const getVideo = (id) => {
        return videos.find(video => (video._id === id))
    }
    const getHistory = async () => {
        try {
            const { data } = await axios.get('/api/user/history', {
                headers: {
                    authorization: encodedToken
                }
            });
            setHistory(data.history)
        } catch (e) {
            console.error(e);
        }
    }
    const addToHistory=async (video)=>{
        try {
            const { data } = await axios.post('/api/user/history', { video }, {
                headers: {
                    authorization: encodedToken
                }
            });
            console.log(data)
            setHistory(data.history);
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getVideos();
    }, [])
    return (
        <DataContext.Provider value={{ videos, err, getVideos, getVideo,history,getHistory,addToHistory }}>
            {children}
        </DataContext.Provider>)
}
export const useData = () => useContext(DataContext);