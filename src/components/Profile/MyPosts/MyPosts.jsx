import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postEls = props.postData.map(post => <Post message={post.message} count={post.likesCount} />)

    let newPostEl = React.createRef();

    let addPost = () => {
        let text = newPostEl.current.value;
        props.addPost(text);
        newPostEl.current.value = '';
    }

    return (
        <div className={s.MyPostBlock}>
            <h3>my post</h3>
                <textarea ref={newPostEl}></textarea>
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