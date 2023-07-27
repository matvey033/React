import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../storeContext';

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().profilePage;

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    let action = onPostChangeActionCreator(text);
                    store.dispatch(action);
                }
                return (
                    <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                        postData={state.postData} newPostText={state.newPostText} />
                )
            }}
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;