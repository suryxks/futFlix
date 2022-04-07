import { useParams } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { Header, Sidebar ,PlaylistModal} from "../../components";
import { VideoPlayer } from '../../components/videoPlayer/VideoPlayer';
import { useEffect, useState } from "react";
import axios from 'axios';
import './VideoPlayerPage.css'
import { usePlayList } from "../../contexts/PlayListContext";
// import '../Home/Home.css';
export const VideoPlayerPage = () => {
  let params = useParams();
  const [video, setVideo] = useState({});
  const { isModalOpen, setIsModalOpen, videoTobeAdded, setVideoToBeAdded } = usePlayList();
  const videoId = params.videoId;
  const getVideo = async (id) => {
    const { data } = await axios.get(`/api/video/${videoId}`);
    setVideo(data.video)
  }
  useEffect(() => {
    getVideo();
  }, [videoId])
  return (
    <div className={`home ${isModalOpen?'background-filter':''}`}>
      <Header />
      <Sidebar />
      <div className="videoListing">
        <div className='videos'>
          <VideoPlayer videoId={videoId} video={video} />
        </div>
      </div>
      <PlaylistModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} video={videoTobeAdded} />
    </div>
  )
}