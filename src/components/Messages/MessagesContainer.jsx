import React from 'react';
import { addNewMessageActionCreator, onMessageElChangeActionCreator } from '../../redux/messages-reducer';
import Messages from './Messages';

const MessagesContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let addNewMessage = () => {
        props.store.dispatch(addNewMessageActionCreator());
    }

    let messageChange = (body) => {
        props.store.dispatch(onMessageElChangeActionCreator(body));
    }

    return (<Messages messageChange={messageChange} addNewMessage={addNewMessage}
        newMessageBody={state.newMessageBody} messagesPage={state} />);
}

export default MessagesContainer;