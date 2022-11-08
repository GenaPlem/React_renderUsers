import Link from '../../shared/Link';

import './style.css';

const User = ({id, name, email, city, phone, website}) => (
    <div className = 'card elem' key={id}>
            <div className = 'box'>
                <div className = 'content'>
                    <h3>{name}</h3>
                    <p>Email: {email}</p>
                    <p>Address: {city}</p>
                    <p>Phone: {phone}</p>
                    <Link 
                    website={website}
                    text='Website'
                    />
                </div>
            </div>
        </div>
)

export default User;