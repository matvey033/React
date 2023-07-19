import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import { addPost } from './redux/state';
import { myRender } from './render';

myRender(state, addPost);


reportWebVitals();