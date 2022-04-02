import { Home, Liked, History, PlayList, WatchLater } from '../src/pages/index';
import { Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/liked' element={<Liked />} />
      <Route path='/history' element={<History />} />
      <Route path='/playList' element={<PlayList />} />
      <Route path='/watchlater' element={<WatchLater />} />
      <Route path='*' element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>} />
    </Routes>
  );
};
