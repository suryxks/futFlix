import { useParams } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { Header, Sidebar } from "../../components";
import { VideoPlayer } from '../../components/videoPlayer/VideoPlayer';
import { useEffect, useState } from "react";
import axios from 'axios';
export const VideoPlayerPage = () => {
  let params = useParams();
  const [video, setVideo] = useState({});
  const videoId = params.videoId;
  const getVideo = async (id) => {
    const { data } = await axios.get(`/api/video/${videoId}`);
    setVideo(data.video)
  }
  useEffect(() => {
    getVideo();
  }, [videoId])
  return (
    <div className='home'>
      <Header />
      <Sidebar />
      <div className='video'>
        <VideoPlayer videoId={videoId} video={video} />
      </div>
    </div>
  )
}