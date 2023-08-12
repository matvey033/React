import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={({ isActive }) =>
                    isActive ? s.activeLink : s.item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/messages" className={({ isActive }) =>
                    isActive ? s.activeLink : s.item}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={({ isActive }) =>
                    isActive ? s.activeLink : s.item}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={({ isActive }) =>
                    isActive ? s.activeLink : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={({ isActive }) =>
                    isActive ? s.activeLink : s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/setting' className={({ isActive }) =>
                    isActive ? s.activeLink : s.item}>Setting</NavLink>
            </div>
            <div className={s.friend}>
                Friend
            </div>
        </nav>
    );
}

export default Navbar;