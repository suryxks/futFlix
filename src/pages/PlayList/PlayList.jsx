import { Header, Sidebar, PlaylistCard } from '../../components/index';
import { usePlayList } from '../../contexts/PlayListContext';
import { Outlet } from 'react-router-dom';
import './PlayList.css'
export const PlayList = () => {
    const { playList } = usePlayList();
    return (
        <div className="playlist">
            <Header />
            <Sidebar />
            <div className='videoListing'>Playlist
                <div className='videos'>
                    {playList.map(list => {
                        const { videos, title, _id } = list
                        return (
                            <div key={_id}>
                                {
                                    videos.length === 0 ? null : (
                                        <PlaylistCard img={videos[0].thumbnail} name={title} numberOfvideos={videos.length} id={_id} />)
                                }
                            </div>)
                    })
                    }
                    <Outlet />
                </div>
            </div>
            
        </div>
    )
}