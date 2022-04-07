import './VideoPlayer.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useLiked } from '../../contexts/LikedContext';
import { usePlayList } from '../../contexts/PlayListContext';
import { useData } from '../../contexts/DataContext';
export const VideoPlayer = ({ videoId, video }) => {
    const { creator, title } = video;
    const { likedVideos,addToLikedVideos } = useLiked();
    const { setIsModalOpen,videoTobeAdded,setVideoToBeAdded } = usePlayList();
    const {  addToWatchLater, watchLater, deleteFromWatchLater } = useData();
    const isLiked=likedVideos.find(item=>video._id===item._id);
    const isWatchLater=watchLater.find(item=>video._id===item._id);
    const encodedToken=localStorage.getItem('token');
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
                <button className='videoPlayer-btn' onClick={() => { addToLikedVideos(video) }}><FavoriteBorderIcon className={`${isLiked?'added':'icon'}`} /><span className='fw-semibold text-sm'>Like</span></button>
                <button className='videoPlayer-btn' onClick={()=>{
                    if(isWatchLater){
                        deleteFromWatchLater(video._id,encodedToken)
                    }else{
                    addToWatchLater(video,encodedToken)
                    }
                }}><WatchLaterIcon className={`${isWatchLater?'added':'icon'}`} /><span className='fw-semibold text-sm'>Watch later</span></button>
                <button className='videoPlayer-btn' onClick={(event) => {
                    event.preventDefault();
                    setIsModalOpen(true);
                    setVideoToBeAdded(video);
                }
                }><PlaylistAddIcon className='icon' /><span className='fw-semibold text-sm'>Save</span></button>
            </div>
        </div>
    )
}