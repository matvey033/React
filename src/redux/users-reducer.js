const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    // {
    //   id: 1, photoUrl: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
    //   followed: true, fullName: 'Matvey', status: 'All okey!', location: { city: 'Belgorod', country: 'Russia' }
    // },
    // {
    //   id: 2, photoUrl: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
    //   followed: true, fullName: 'Oleg', status: 'All okey, too!', location: { city: 'Minsk', country: 'Belarus' }
    // },
    // {
    //   id: 3, photoUrl: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
    //   followed: false, fullName: 'Andrew', status: 'I`m okey!', location: { city: 'Piter', country: 'Russia' }
    // },
    // {
    //   id: 4, photoUrl: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
    //   followed: false, fullName: 'Katya', status: 'I`m okey!', location: { city: 'Moscow', country: 'Russia' }
    // },
  ]
};

export const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u;
        })
      }
    case SET_USERS:
      debugger;
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    default:
      return state;
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

// export default UsersReducer;