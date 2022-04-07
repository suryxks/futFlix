import { useEffect } from 'react';
import { Header, Sidebar, VideoCard } from '../../components/index';
import { useAuth } from '../../contexts/AuthContext';
import { useLiked } from '../../contexts/LikedContext';
import './Liked.css';
export const Liked = () => {
    const { likedVideos, getLikedVideos } = useLiked();
    const { isAuthenticated } = useAuth();
    const encodedToken=localStorage.getItem('token');
    useEffect(() => {
        if (isAuthenticated()) {
            getLikedVideos(encodedToken);
        }
    }, []);
    return (
        <div className="liked">
            <Header />
            <Sidebar />
            <div className='videoListing'>{`Liked videos(${likedVideos.length})`}
                <div className='videos'>
                    {likedVideos.map(video => {
                        const { _id} = video;
                        return (
                            <div key={_id}>
                                <VideoCard video={video} />
                            </div>)
                    })
                    }
                </div>
            </div>
        </div>)
}