import s from './../Messages.module.css';

const Message = (props) => {

    return (
        <div>
            <div className={s.messageItem}>
                <div className={s.messageImg}>
                    <img src={props.img} />
                </div>
                {props.message}
            </div>
            <div className={s.answerItem}>
                <div className={s.messageImg}>
                    <img src={props.img} />
                </div>
                {props.answer}
            </div>
        </div>
    )
}

export default Message;
