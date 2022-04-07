import { useEffect } from 'react'
import './Home.css';
import { Header, Sidebar, VideoCard } from '../../components';
import { useData } from '../../contexts/DataContext';
import { Outlet } from 'react-router-dom';
import { usePlayList } from '../../contexts/PlayListContext';
import { PlaylistModal } from '../../components/PlayListModal/PlayListModal'
export const Home = () => {
    const { videos, getVideos, addToHistory } = useData();
    const { isModalOpen, setIsModalOpen, videoTobeAdded, setVideoToBeAdded } = usePlayList();
    return (
        <div className={`home ${isModalOpen?'background-filter':''}`}>
            <Header />
            <Sidebar />
            <div className= 'videoListing'>Home page
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
                <PlaylistModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} video={videoTobeAdded} />
            </div>

        </div>
    )
}