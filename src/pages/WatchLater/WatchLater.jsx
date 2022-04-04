import { useEffect } from 'react';
import { Header, Sidebar,VideoCard } from '../../components/index';
import { useData } from '../../contexts/DataContext';
import './WatchLater.css'
export const WatchLater = () => {
    const { getWatchLater, watchLater } = useData();
    useEffect(() => {
        getWatchLater();
    },[watchLater])
    return (
        <div className="watchlater">
            <Header />
            <Sidebar />
            <div className='videoListing'>{`watch later(${watchLater.length})`}
                <div className='videos'>
                    {watchLater.map(video => {
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