import { Home, Liked, History, PlayList, WatchLater, VideoPlayerPage } from '../src/pages/index';
import { Route, Routes } from 'react-router-dom';
import { Signup } from './pages/Authentication/Signup';
import { Login } from './pages/Authentication/Login';
import Mockman from "mockman-js";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path=':videoId' element={<VideoPlayerPage />} />
      <Route path='/liked' element={<Liked />} />
      <Route path='/history' element={<History />} />
      <Route path='/playList' element={<PlayList />} />
      <Route path='/watchlater' element={<WatchLater />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>} />
        <Route path='/mock' element={<Mockman/>}/>
    </Routes>
  );
};
