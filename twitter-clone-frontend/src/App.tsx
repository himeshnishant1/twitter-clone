import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './screens/HomePage/HomePage';
import Authentication from './screens/Authentication/Authentication';
import HomeSection from './components/HomeSection/HomeSection';
import ProfilePage from './screens/ProfilePage/ProfilePage';
import TweetDetails from './components/TweetDetails/TweetDetails';

function App() {

  return (
    <>
      <Routes>
        <Route element={true?<HomePage/>:<Authentication/>}>
          <Route index element={<HomeSection/>}/>
          <Route path='/home' element={<HomeSection/>}/>
          <Route path='profile/:id' element={<ProfilePage/>}/>
          <Route path='tweet/:id' element={<TweetDetails/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
