import { useState, useContext, createContext, useEffect } from 'react';
import axios from 'axios';
const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);
    const [history, setHistory] = useState([]);
    const [watchLater, setWatchLater] = useState([]);
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
    const addToHistory = async (video) => {
        try {
            const { data } = await axios.post('/api/user/history', { video }, {
                headers: {
                    authorization: encodedToken
                }
            });
            setHistory(data.history);
        } catch (error) {
            console.error(error)
        }
    }
    const deleteFromHistory = async (videoId) => {
        try {
            const { data } = await axios.delete(`/api/user/history/${videoId}`, {
                headers: {
                    authorization: encodedToken,
                },
            });
            console.log(data)
            setHistory(data.history);
        } catch (error) {
            console.error(error)
        }

    }
    const getWatchLater = async () => {
        try {
            const { data } = await axios.get('/api/user/watchlater', {
                headers: {
                    authorization: encodedToken
                }
            });
            setWatchLater(data.watchlater);
        } catch (e) {
            console.error(e);
        }
    }
    const addToWatchLater = async (video) => {
        try {
            const { data } = await axios.post('/api/user/watchlater', { video }, {
                headers: {
                    authorization: encodedToken
                }
            });
            setWatchLater(data.watchlater);
        } catch (error) {
            console.error(error)
        }
    }
    const deleteFromWatchLater = async (id) => {
        try {
            const { data } = await axios.delete(`/api/user/watchlater/${id}`, {
                headers: {
                    authorization: encodedToken,
                },
            })
            setWatchLater(data.watchlater);
        } catch (e) {
            console.error(e);
        }
    }
    useEffect(() => {
        getVideos();
    }, [])
    return (
        <DataContext.Provider value={{ videos, err, getVideos, getVideo, history, getHistory, addToHistory, watchLater, deleteFromHistory, getWatchLater, addToWatchLater, deleteFromWatchLater }}>
            {children}
        </DataContext.Provider>)
}
export const useData = () => useContext(DataContext);