const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_NEW_MESSAGE_BODY = 'CHANGE_NEW_MESSAGE_BODY';

let initialState = {
  dialogsData: [
    {
      id: 1, name: 'Igor',
      img: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
    },
    {
      id: 2, name: 'Sveta',
      img: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-devushek.jpg'
    },
    {
      id: 3, name: 'Dima',
      img: 'https://vraki.net/sites/default/files/inline/images/1_149.jpg'
    },
    {
      id: 4, name: 'Lera',
      img: 'https://shop-cdn1-2.vigbo.tech/shops/19661/products/21612973/images/3-2e7445062f6dbcbde00cb3deee691548.jpg'
    },
  ],

  messageData: [
    {
      id: 1, message: 'Hi', answer: 'Ok',
      img: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
    },
    {
      id: 2, message: 'Hello', answer: 'Ok`s',
      img: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
    },
    {
      id: 3, message: 'How are you?', answer: 'Okay',
      img: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
    },
  ],
  newMessageBody: ''
};

export const messagesReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 4, message: state.newMessageBody, answer: 'Ok',
        img: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
      }
      let stateCopy = {...state};
      stateCopy.messageData = [...state.messageData];
      stateCopy.messageData.push(newMessage);
      stateCopy.newMessageBody = '';
      return stateCopy;
    }
    case CHANGE_NEW_MESSAGE_BODY: {
      let stateCopy = {...state};
      stateCopy.newMessageBody = action.newBody;
      return stateCopy;
    }
    default:
      return state;
  }
}

export const addNewMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const onMessageElChangeActionCreator = (body) =>
  ({ type: CHANGE_NEW_MESSAGE_BODY, newBody: body });

// export default messagesReducer;