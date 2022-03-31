import {Header,Sidebar} from '../../components/index';
import './PlayList.css'
export const PlayList = () => {
    return (
        <div className="playlist">
            <Header />
            <Sidebar />
            <div className='videoListing'>Playlist</div>
        </div>
    )
}