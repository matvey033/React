import s from './Like.module.css';

const Like = (props) => {
    return (
        <div className={s.item}>
            <span>Like {props.count}</span>
        </div>
    );
}

export default Like;