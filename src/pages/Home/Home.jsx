import { useEffect} from 'react'
import './Home.css';
import { Header, Sidebar, VideoCard } from '../../components';
import { useData } from '../../contexts/DataContext';
import {Outlet} from 'react-router-dom'
export const Home = () => {
    const { videos, getVideos } = useData();

    useEffect(() => {
        getVideos();
    }, [])
    return (
        <div className="home">
            <Header />
            <Sidebar />
            <div className='videoListing'>Home page
                <div className='videos'>
                    {videos.map(video => {
                        const { _id, creator, title, thumbnail } = video;
                        return (
                            <div>
                                <VideoCard video={video} />
                                
                            </div>)
                    })
                    }
                </div>
            </div>
        </div>
    )
}