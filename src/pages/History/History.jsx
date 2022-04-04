import { useEffect } from 'react';
import { Header, Sidebar,VideoCard } from '../../components/index';
import { useData } from '../../contexts/DataContext';
import './History.css'
export const History = () => {
    const {history,getHistory}=useData();
    useEffect(()=>{
        getHistory();
    },[])
    return (
        <div className="history">
            <Header />
            <Sidebar />
            <div className='videoListing'>{`History (${history.length}) videos`}
                <div className='videos'>
                    {history.map(video => {
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