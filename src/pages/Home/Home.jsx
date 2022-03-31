import { useState, useEffect } from 'react';
import './Home.css';
import { Header, Sidebar, VideoCard } from '../../components';
import axios from 'axios';
export const Home = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('/api/videos');
                setVideos(data.videos);
            } catch (e) {
                console.error(e.message);
            }

        })();
    }, [])
    return (
        <div className="home">
            <Header />
            <Sidebar />
            <div className='videoListing'>Home page
                <div className='videos'>
                    {videos.map(video => {
                        const { _id, creator, title, thumbnail } = video;
                        return (<VideoCard video={video} />)
                    })
                    }
                </div>
            </div>
        </div>
    )
}