import "./App.css";
import logo from "./logo.png";
import { Home } from '../src/pages/Home/Home.jsx'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
      
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
