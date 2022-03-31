import MoreVertIcon from '@mui/icons-material/MoreVert';
import './videoCard.css'
export const VideoCard = ({ video }) => {
    const { _id, creator, title, thumbnail } = video;
    return (
        <div key={_id} className='video-card'>
            <img src={thumbnail} alt={title} className='thumbnail' />
            <div className='video-details'>
                <h5 className='heading-sm video-title'>{title}</h5>
                <MoreVertIcon className='icon' />
            </div>
        </div>
    )

}