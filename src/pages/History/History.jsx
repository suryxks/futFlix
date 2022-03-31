import { Header, Sidebar } from '../../components/index';
import './History.css'
export const History = () => {
    return (
        <div className="history">
            <Header />
            <Sidebar />
            <div className='videoListing'>Watch history</div>
        </div>
    )
}