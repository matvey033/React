import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postEls = props.postData.map(post => <Post message={post.message} count={post.likesCount} />)

    let newPostEl = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    }

    let onPostChange = () => {
        let text = newPostEl.current.value;
        props.dispatch({ type: 'CHANGE-NEW-POST-TEXT', newText: text });
    }

    return (
        <div className={s.MyPostBlock}>
            <h3>my post</h3>
                <textarea ref={newPostEl} onChange={onPostChange} value={props.newPostText} />
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={s.post}>
                {postEls}
            </div>

        </div>
    );
}

export default MyPosts;