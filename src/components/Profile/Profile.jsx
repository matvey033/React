import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts postData={props.profilePage.postData}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch} />
        </div>
    );
}

export default Profile;