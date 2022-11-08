import data from './mockData'
import User from './User';

import './style.css';

const Users = () => (
    <div className="container">
        {data.map((user) => <User key={user.id} {...user} /> )}
    </div> 
)

export default Users;