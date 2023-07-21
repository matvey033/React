let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: 'Hi, how are you?', likesCount: '13' },
        { id: 2, message: 'What did you do in this week?', likesCount: '19' },
        { id: 3, message: 'I wait your answers', likesCount: '8' },
      ],
      newPostText: ''
    },

    messagesPage: {
      dialogsData: [
        { id: 1, name: 'Igor', img: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg' },
        { id: 2, name: 'Sveta', img: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-devushek.jpg' },
        { id: 3, name: 'Dima', img: 'https://vraki.net/sites/default/files/inline/images/1_149.jpg' },
        { id: 4, name: 'Lera', img: 'https://shop-cdn1-2.vigbo.tech/shops/19661/products/21612973/images/3-2e7445062f6dbcbde00cb3deee691548.jpg' },
      ],

      messageData: [
        { message: 'Hi', answer: 'Ok', img: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg' },
        { message: 'Hello', answer: 'Ok`s', img: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg' },
        { message: 'How are you?', answer: 'Okay', img: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg' },
      ]
    },

    sidebar: {}
  },
  _callSubscriber() { },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }

      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }
    else if (action.type === 'CHANGE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export default store;
window.store = store;