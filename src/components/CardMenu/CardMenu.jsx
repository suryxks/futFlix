import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import './CardMenu.css'
import { useData } from '../../contexts/DataContext';
import {PlaylistModal} from '../PlayListModal/PlayListModal'
import { usePlayList } from '../../contexts/PlayListContext';
export const CardMenu = ({ isMenuOpen, setIsMenuOpen, id, video}) => {
    const ref = useRef();
    const location = useLocation();
    const { pathname } = location;
    const { deleteFromHistory, addToWatchLater, watchLater, deleteFromWatchLater } = useData();
    const { setIsModalOpen,videoTobeAdded,setVideoToBeAdded } = usePlayList();
    useOnClickOutside(ref, () => setIsMenuOpen(false));
    let isWatchLater = watchLater.find(video => video._id === id);
    return (
        <div>{
            isMenuOpen ? (
                <div className='card-menu' ref={ref}>
                    <button className='card-menu-btn fw-semibold' onClick={(event) => {
                        event.preventDefault();
                        setIsModalOpen(true);
                        setVideoToBeAdded(video);
                    }}>
                        <PlaylistAddIcon className='icon' />Add to Playlist</button>

                    {isWatchLater ? (<button className='card-menu-btn fw-semibold delete' onClick={(event) => {
                        event.preventDefault();
                        deleteFromWatchLater(id);

                    }}> <DeleteIcon className='delete' />Remove from watch later</button>) :
                        (<button className='card-menu-btn fw-semibold ' onClick={(event) => {
                            event.preventDefault();
                            addToWatchLater(video);
                        }}> <WatchLaterIcon className='icon' />Add to watch Later</button>)}
                    {pathname === '/history' ? (<button className='card-menu-btn fw-semibold delete' onClick={(event) => {
                        event.preventDefault();
                        deleteFromHistory(id);
                    }}> <DeleteIcon className='delete' />Remove from History</button>) : null}
                </div>
            ) : null
        }
        {/* <PlaylistModal isModalOpen={isModalOpen}setIsModalOpen={setIsModalOpen} video={video}/> */}
        </div>

    );
}
