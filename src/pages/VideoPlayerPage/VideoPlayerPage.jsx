import { useParams } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { Header,Sidebar } from "../../components";
import {VideoPlayer} from '../../components/videoPlayer/VideoPlayer';
import { useEffect } from "react";
export const VideoPlayerPage=()=>{
    let params=useParams();
    const {getVideo,getVideos}=useData();
    const videoId=params.videoId;
    console.log(videoId);
    const video=getVideo(videoId);
    console.log(video);
    useEffect(()=>{
      getVideos();
    },[])
    return(
        <div className='home'>
           <Header/>
           <Sidebar/>
           <div className='video'>
                 <VideoPlayer videoId={videoId} video={video}/>
           </div>
        </div>
    )
}