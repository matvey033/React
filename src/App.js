import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { Route, Routes } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>

            {/* <Route path="/" element={<Profile />} /> */}
            <Route path="/profile/*" element={<Profile />} />

            <Route path="/messages/*" element={<MessagesContainer />} />

            <Route path="/users/*" element={<UsersContainer />} />

            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/setting/*" element={<Setting />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
