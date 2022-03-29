import {Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import './Header.css'
export const Header=()=>{
    return(
        <nav className='header align-center'>
          <Link className='navigation-link'to='/'><h4 className='brand heading-lg'>FutFlix</h4></Link>
          <div className='search-bar'>
              <SearchIcon className='icon'/>
              <input type='text' placeholder='Search'/>
          </div>
          <Link className='navigation-link'to='/'><PersonIcon className='icon text-lg'/></Link>
        </nav>
    )
}