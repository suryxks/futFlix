import { KeyboardReturnSharp } from '@mui/icons-material';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { useRef } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import './CardMenu.css'
export const CardMenu = ({ isMenuOpen, setIsMenuOpen }) => {
    const ref = useRef();
    useOnClickOutside(ref, () => setIsMenuOpen(false))
    return (
        <div>{
            isMenuOpen ? (
                <div className='card-menu' ref={ref}>
                    <button className='card-menu-btn fw-semibold' onClick={(event) => {
                        event.preventDefault();
                    }}>
                        <PlaylistAddIcon className='icon' />Add to Playlist</button>
                    <button className='card-menu-btn fw-semibold ' onClick={(event) => {
                        event.preventDefault();
                    }}> <WatchLaterIcon className='icon' />Add to watch Later</button>
                </div>
            ) : null
        }</div>

    );
}
