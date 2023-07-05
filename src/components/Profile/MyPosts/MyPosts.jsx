import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postEls = props.postData.map(post => <Post message={post.message} count={post.count} />)

    return (
        <div className={s.MyPostBlock}>
            <h3>my post</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.post}>
                {postEls}
            </div>

        </div>
    );
}

export default MyPosts;