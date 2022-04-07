import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { VideoCard } from '../../components';
import { Header, Sidebar, PlaylistCard } from '../../components/index';
import { usePlayList } from '../../contexts/PlayListContext';
import './PlayList.css'
export const PlaylistPage = () => {
    const params = useParams();
    const { playlistId } = params
    const { playList } = usePlayList();
    const currentPlayList = playList.find(playlist => playlist._id === playlistId);
    const { videos,title } = currentPlayList;
    return (
        <div className="playlist">
            <Header />
            <Sidebar />
            <div className='videoListing'>{title}
                <div className='videos'>
                    {videos.length > 0 ? videos.map(video => {

                        return (
                            <div>
                                <VideoCard video={video} />

                            </div>)
                    }) : null}
                   
                </div>
            </div>
        </div>)
}