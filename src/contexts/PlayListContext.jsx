import axios from "axios";
import { useReducer, useContext, createContext, useState, useEffect } from "react";

const PlayListContext = createContext(null);

export const PlaylistProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [playList, setPlayList] = useState([]);
    const [videoTobeAdded, setVideoToBeAdded] = useState({});
    const encodedToken = localStorage.getItem('token');
    const getPlayList = async () => {
        try {
            const { data } = await axios.get('/api/user/playlists', {
                headers: {
                    authorization: encodedToken
                }
            });
            setPlayList(data.playlists)
            console.log(data);
        } catch (e) {
            console.error(e)
        }
    }
    const createPlayList = async (playListName) => {
        const { data } = await axios.post('/api/user/playlists', { playlist: { title: playListName } }, {
            headers: {
                authorization: encodedToken
            }
        });
        setPlayList(data.playlists)
        console.log(data, 'a');
    }
    const addToPlayList = async (playlistId, video) => {
        const { data } = await axios.post(`/api/user/playlists/${playlistId}`, { video }, {
            headers: {
                authorization: encodedToken
            }
        })
        setPlayList(prev => prev.map(playlist => {
            if (playlist._id === data.playlist._id) {
                return data.playlist;
            }
            return playlist;
        }))
        console.log(data)
    }
    const deleteFromPlaylist = async (playlistId, videoId) => {
        const { data } = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
            headers: {
                authorization: encodedToken
            }
        })
        setPlayList(prev => prev.map(playlist => {
            if (playlist._id === data.playlist._id) {
                return data.playlist;
            }
            return playlist;
        }))
    }
    const deletePlayList = async (playlistId) => {
        try {
            const { data } = await axios.delete(`/api/user/playlists/${playlistId}`, {
                headers: {
                    authorization: encodedToken
                }
            })
            setPlayList(data.playlists)
        } catch (error) {
            console.log(error)
        }
    }
    const getPlayListById = async (playlistId) => {
        try {
            const { data } = await axios.get(`/api/user/playlists/${playlistId}`, {
                headers: {
                    authorization: encodedToken
                }
            });
            console.log(data)
            return  data.playlist;
        } catch (error) {
            console.error(error)
            return { title: '', videos: [] }
        }
    }
    useEffect(() => {
        getPlayList();
    }, [])

    return (<PlayListContext.Provider value={{
        playList,
        isModalOpen,
        setIsModalOpen,
        setPlayList,
        createPlayList,
        addToPlayList,
        videoTobeAdded,
        setVideoToBeAdded,
        deleteFromPlaylist,
        deletePlayList,
        getPlayListById
    }}>
        {children}
    </PlayListContext.Provider>);
}

export const usePlayList = () => useContext(PlayListContext);