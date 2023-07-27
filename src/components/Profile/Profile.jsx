import ProfileInfo from './ProfileInfo/ProfileInfo';
// import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;