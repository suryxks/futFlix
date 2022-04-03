import './VideoPlayer.css'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
export const VideoPlayer = ({videoId,video}) => {
    const { creator, title, thumbnail } = video;
    return (
        <div className="video-responsive">
            <iframe width='800' height='400' src={`https://www.youtube.com/embed/${videoId}`} className='video'
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; " 
            allowfullscreen></iframe>
            <div>
                <h1 className='fw-semibold'>{title}</h1>
                <h3 className='fw-light'>{creator}</h3>
            </div>
        </div>
    )
}