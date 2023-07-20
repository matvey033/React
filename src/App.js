import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { addPost } from './redux/state';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/" element={<Profile profilePage={props.state.profilePage}
              addPost={props.addPost}
              changeNewPostText={props.changeNewPostText}
            />}
            />
            <Route path="/profile/*" element={<Profile profilePage={props.state.profilePage}
              addPost={props.addPost}
              changeNewPostText={props.changeNewPostText}
            />}
            />
            <Route path="/messages/*" element={<Messages state={props.state.messagesPage}
              img={props.state.dialogImg}
            />}
            />

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
