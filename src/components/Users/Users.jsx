import s from './Users.module.css';

const Users = (props) => {
// console.log(props);
debugger;
    if (props.users.length === 0) {
        props.setUsers([
            {
              id: 1, photoUrl: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
              followed: true, fullName: 'Matvey', status: 'All okey!', location: { city: 'Belgorod', country: 'Russia' }
            },
            {
              id: 2, photoUrl: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
              followed: true, fullName: 'Oleg', status: 'All okey, too!', location: { city: 'Minsk', country: 'Belarus' }
            },
            {
              id: 3, photoUrl: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
              followed: false, fullName: 'Andrew', status: 'I`m okey!', location: { city: 'Piter', country: 'Russia' }
            },
            {
              id: 4, photoUrl: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
              followed: false, fullName: 'Katya', status: 'I`m okey!', location: { city: 'Moscow', country: 'Russia' }
            },
          ])
    }
    debugger;
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.usersPhoto} />
                        </div>
                        <div>
                            {u.followed
                            ? <button onClick={()=>{props.unfollow(u.id)}} >Unfollow</button>
                            : <button onClick={()=>{props.follow(u.id)}} >Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Users;