import { useState, useContext, createContext, useEffect } from 'react';
import axios from 'axios';
const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [videos,setVideos]=useState([]);
    const [err,seterr]=useState('')
    const getVideos=async ()=>{
        try {
            const { data } = await axios.get('/api/videos');
            setVideos(data.videos);
        } catch (e) {
            seterr(e.message);
        }
    }
    const getVideo=(id)=>{
        return videos.find(video=>(video._id===id))
    }

    return (
        <DataContext.Provider value={{videos,err,getVideos,getVideo}}>
            {children}
        </DataContext.Provider>)
}
export const useData=()=>useContext(DataContext);