import "./App.css";
import logo from "./logo.png";
import {Home,Liked,History,PlayList,WatchLater} from '../src/pages/index'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/liked' element={<Liked/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/playList' element={<PlayList/>}/>
          <Route path='/watchlater' element={<WatchLater/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
