import axios from 'axios';
import { createContext, useContext, useState } from 'react';
import { useAuth } from './AuthContext';

const LikedContext = createContext(null);

export const LikedProvider = ({ children }) => {
    const [likedVideos, setLikedVideos] = useState([]);
    const encodedToken = localStorage.getItem('token');
    const addToLikedVideos = async (video, encodedToken) => {
        try {
            const { data } = await axios.post('/api/user/likes', { video }, {
                headers: {
                    authorization: encodedToken
                }
            });
            setLikedVideos(data.likes);
        } catch (error) {
            console.error(error)
        }
    }
    const getLikedVideos = async (encodedToken) => {
        try {
            const { data } = await axios.get('/api/user/likes', {
                headers: {
                    authorization: encodedToken
                }
            });

            setLikedVideos(data.likes)
        } catch (e) {
            console.log(e)
        }
    }
    const deleteLikedVideo = async ( videoId,encodedToken) => {
        try {
            const { data } = await axios.delete(`/api/user/likes/${videoId}`, {
                headers: {
                    authorization: encodedToken
                }
            })
            setLikedVideos(data.likes);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <LikedContext.Provider value={{ likedVideos, addToLikedVideos, getLikedVideos,deleteLikedVideo }}>
            {children}
        </LikedContext.Provider>
    )
}

export const useLiked = () => useContext(LikedContext);