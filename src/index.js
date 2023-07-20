import reportWebVitals from './reportWebVitals';
import state, { addPost, changeNewPostText } from './redux/state';
import { myRender } from './render';

myRender(state);


reportWebVitals();