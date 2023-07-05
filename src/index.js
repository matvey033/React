import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let postData = [
  { message: 'Hi, how are you?', count: '13' },
  { message: 'What did you do in this week?', count: '19' },
  { message: 'I wait your answers', count: '8' },
]

let dialogsData = [
  { id: 1, name: 'Igor' },
  { id: 2, name: 'Sveta' },
  { id: 3, name: 'Dima' },
  { id: 4, name: 'Lera' }
]

let messageData = [
  { message: 'Hi' },
  { message: 'Hello' },
  { message: 'How are you?' }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messageData={messageData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
