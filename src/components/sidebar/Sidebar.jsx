import CottageIcon from '@mui/icons-material/Cottage';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import HistoryIcon from '@mui/icons-material/History';
import { Link ,useLocation} from 'react-router-dom';
import './Sidebar.css'
export const Sidebar = () => {
    const location=useLocation();
    const {pathname}=location;
   
    return (
        <nav className='side-bar'>
            <ol className='sidebar-items'>
                <li className={`sidebar-item ${pathname==='/'?'current-tab':''}`}>
                    <Link to='/' className='navigation-link'>
                        <CottageIcon className='icon' />
                        <span className='fw-bold heading-md'>Home</span>
                    </Link>
                </li>
                <li className={`sidebar-item ${pathname==='/playlist'?'current-tab':''}`}>
                    <Link to='/playlist' className='navigation-link'>
                        <VideoLibraryIcon className='icon' />
                        <span className='fw-bold heading-md'>PlayList</span>
                    </Link>
                </li>
                <li className={`sidebar-item ${pathname==='/liked'?'current-tab':''}`}>
                    <Link to='/liked' className='navigation-link'>
                        <FavoriteIcon className='icon' />
                        <span className='fw-bold heading-md'> Liked</span>
                    </Link>
                </li>
                <li className={`sidebar-item ${pathname==='/watchlater'?'current-tab':''}`}>
                    <Link to='/watchlater' className='navigation-link'>
                        <WatchLaterIcon className='icon' />
                        <span className='fw-bold heading-md'> Watch Later</span>
                    </Link>
                </li>
                <li className={`sidebar-item ${pathname==='/history'?'current-tab':''}`}>
                    <Link to='/history' className='navigation-link'>
                        <HistoryIcon className='icon' />
                        <span className='fw-bold heading-md'> History</span>
                    </Link>
                </li>
            </ol>

        </nav>
    )
}