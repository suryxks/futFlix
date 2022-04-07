import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardMenu } from '../CardMenu/CardMenu';
import { PlaylistModal } from '../PlayListModal/PlayListModal'
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './videoCard.css'
import { useData } from '../../contexts/DataContext';
import { usePlayList } from '../../contexts/PlayListContext';
export const VideoCard = ({ video }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { _id, creator, title, thumbnail } = video;
    const { addToHistory } = useData();
    const { isModalOpen, setIsModalOpen } = usePlayList();
    return (

        <Link key={_id} className='video-card' to={`/${_id}`} onClick={() => { addToHistory(video) }}>
            <img src={thumbnail} alt={title} className='thumbnail' />
            <div className='video-details'>
                <h5 className='heading-sm video-title'>{title}</h5>
                <MoreVertIcon className='icon more-icon' onClick={(event) => {
                    event.preventDefault();
                    setIsMenuOpen(prev => !prev)
                }} />
            </div>
            <CardMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} id={_id} video={video} />
            
        </Link>


    )

}