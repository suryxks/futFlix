import { Link, Navigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom'
import './Header.css'
export const Header = () => {
    const { isAuthenticated, logoutHandler } = useAuth();
    const navigate = useNavigate();
    return (
        <nav className='header align-center'>
            <Link className='navigation-link' to='/'><h4 className='brand heading-lg'>FutFlix</h4></Link>
            <div className='search-bar'>
                <SearchIcon className='icon' />
                <input type='text' placeholder='Search' />
            </div>
            <div className='header-actions'>
                <button className='btn-cta-header' onClick={() => {
                    if (isAuthenticated()) {
                        logoutHandler();
                        navigate('/')
                    } else {
                        navigate('/login');
                    }
                }}>{isAuthenticated()? 'Logout' : 'Login'}</button>
                <Link className='navigation-link' to='/'><PersonIcon className='icon text-lg' /></Link>
            </div>
        </nav>
    )
}