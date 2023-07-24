const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_NEW_MESSAGE_BODY = 'CHANGE_NEW_MESSAGE_BODY';

export const messagesReducer = (state, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 4, message: state.newMessageBody, answer: 'Ok',
        img: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
      }
      state.messageData.push(newMessage);
      state.newMessageBody = '';
      return state;
    case CHANGE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.newBody;
      return state;
    default:
      return state;
  }
}

export const addNewMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const onMessageElChangeActionCreator = (body) =>
  ({ type: CHANGE_NEW_MESSAGE_BODY, newBody: body });

// export default messagesReducer;