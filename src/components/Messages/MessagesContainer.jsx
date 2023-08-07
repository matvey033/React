import { addNewMessageActionCreator, onMessageElChangeActionCreator } from '../../redux/messages-reducer';
import Messages from './Messages';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        newMessageBody: state.messagesPage.newMessageBody
    }
};

const mapDispatchToProps = (dispatch) => {
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