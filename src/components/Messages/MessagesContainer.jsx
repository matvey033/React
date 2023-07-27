import React from 'react';
import { addNewMessageActionCreator, onMessageElChangeActionCreator } from '../../redux/messages-reducer';
import Messages from './Messages';
import StoreContext from '../../storeContext';

const MessagesContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().messagesPage;

                    let addNewMessage = () => {
                        store.dispatch(addNewMessageActionCreator());
                    }

                    let messageChange = (body) => {
                        store.dispatch(onMessageElChangeActionCreator(body));
                    }
                    return (
                        <Messages messageChange={messageChange} addNewMessage={addNewMessage}
                            newMessageBody={state.newMessageBody} messagesPage={state} />
                    )
                }
            }
        </StoreContext.Consumer>
    );
}

export default MessagesContainer;