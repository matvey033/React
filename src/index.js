import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import store from './redux/redux-store';


const root = ReactDOM.createRoot(document.getElementById('root'));
export let myRender = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </React.StrictMode>
  );
}

myRender(store.getState());

store.subscribe(() => {
  let state = store.getState();
  myRender(state);
});

reportWebVitals();