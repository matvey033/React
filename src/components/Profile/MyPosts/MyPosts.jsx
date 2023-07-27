import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postEls = props.postData.map(post => <Post message={post.message} count={post.likesCount} />)

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.MyPostBlock}>
            <h3>my post</h3>
            <textarea onChange={onPostChange} value={props.newPostText} />
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.post}>
                {postEls}
            </div>

        </div>
    );
}

export default MyPosts;