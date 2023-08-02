import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    debugger;
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        follow: (usersId) => {
            dispatch(followAC(usersId));
        },
        unfollow: (usersId) => {
            dispatch(unfollowAC(usersId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

// export default UsersContainer;