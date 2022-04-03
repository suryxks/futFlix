import './VideoPlayer.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
export const VideoPlayer = ({videoId,video}) => {
    const { creator, title, thumbnail } = video;
    return (
        <div className="video-responsive">
            <iframe width='800' height='400' src={`https://www.youtube.com/embed/${videoId}`} className='video'
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; " 
            allowFullScreen></iframe>
            <div>
                <h1 className='fw-semibold'>{title}</h1>
                <h3 className='fw-light'>{creator}</h3>
            </div>
            <div className='video-player-actions'>
                <button className='videoPlayer-btn'><FavoriteBorderIcon className='icon'/><span className='fw-semibold text-sm'>Like</span></button>
            <button className='videoPlayer-btn'><WatchLaterIcon className='icon'/><span className='fw-semibold text-sm'>Watch later</span></button>
            <button className='videoPlayer-btn'><PlaylistAddIcon className='icon'/><span className='fw-semibold text-sm'>Save</span></button>
            </div>
        </div>
    )
}