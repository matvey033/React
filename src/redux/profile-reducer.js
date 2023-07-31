const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

let initialState = {
  postData: [
    { id: 1, message: 'Hi, how are you?', likesCount: '13' },
    { id: 2, message: 'What did you do in this week?', likesCount: '19' },
    { id: 3, message: 'I wait your answers', likesCount: '8' },
  ],
  newPostText: ''
};

export const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0
      }
      let stateCopy = {...state};
      stateCopy.postData = [...state.postData];
      stateCopy.postData.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case CHANGE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const onPostChangeActionCreator = (text) =>
  ({ type: CHANGE_NEW_POST_TEXT, newText: text });

// export default profileReducer;