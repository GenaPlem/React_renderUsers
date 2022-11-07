import data from './mockData'

import './style.css';

const Users = () => {
    console.log(data);
    return (
        <div className="container">
            {data.map(({id, name, email, address: {city}, phone, website}) => (
                <div className = 'card elem' key={id}>
                <div className = 'box'>
                    <div className = 'content'>
                        <h3>{name}</h3>
                        <p>Email: {email}</p>
                        <p>Adress: {city}</p>
                        <p>Phone: {phone}</p>
                        <a href = {website}>Website</a>
                    </div>
                </div>
            </div>
            ))}
        </div> 
    )
}

export default Users;