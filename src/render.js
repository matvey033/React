import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { addPost, changeNewPostText } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let myRender = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} changeNewPostText={changeNewPostText} />
    </React.StrictMode>
  );
}