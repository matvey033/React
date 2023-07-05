import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/" element={<Profile postData={props.postData} />} />
            <Route path="/profile/*" element={<Profile postData={props.postData} />} />
            <Route path="/messages/*" element={<Messages dialogsData={props.dialogsData} messageData={props.messageData}/>} />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/setting/*" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
