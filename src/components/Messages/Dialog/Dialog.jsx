import { NavLink } from 'react-router-dom';
import s from './../Messages.module.css';

const Dialog = (props) => {
    let path = "/messages/" + props.id;
    return (
        <div className={`${s.dialogItem} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;