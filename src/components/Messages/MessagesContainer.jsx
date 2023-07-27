import { addNewMessageActionCreator, onMessageElChangeActionCreator } from '../../redux/messages-reducer';
import Messages from './Messages';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        newMessageBody: state.newMessageBody
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        messageChange: (body) => {
            dispatch(onMessageElChangeActionCreator(body));
        },
        addNewMessage: () => {
            dispatch(addNewMessageActionCreator());
        }
    }
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;