import DeleteIcon from '@mui/icons-material/Delete';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import {Link} from 'react-router-dom'
import { usePlayList } from '../../contexts/PlayListContext';
import './PlaylistCard.css'
export const PlaylistCard = ({ img, name, numberOfvideos ,id}) => {
    const {deletePlayList}=usePlayList();
    return (
        <Link to={`/playlist/${id}`} className="playlistCard">
            <img src={img} alt='playlistimage' />
            <div className="overlay">
                <div className='fw-bold heading-lg'>{numberOfvideos}</div>
                <PlaylistAddIcon className='icon'/>
            </div>
            <div className='details'> 
                <div className='heading-md'>{name}</div>
                <button className='delete' onClick={(e)=>{
                    e.preventDefault();
                    deletePlayList(id)}}><DeleteIcon/></button>
            </div>
        </Link>
    )
}