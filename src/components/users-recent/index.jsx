import React, { Fragment, useContext, useEffect } from 'react';
import { useState } from 'react';
import { AuthenticationData } from '../data/authentication-data';

const UsersRecent = () => {

    const { responseLogin } = useContext(AuthenticationData);
    const [lastLogins, setLastLogins] = useState([]);

    useEffect(() => {
        setLastLogins(responseLogin.last_login)
    }, [responseLogin]);

    return (
        <Fragment>
            <h2>Recent</h2>
            <h6>{lastLogins.length} Logins</h6>
            <ul className='mb-2 list-unstyled'>
                {lastLogins.map((item, i) => {
                    return <li key={i * 5 + "f"} className="mb-2 text-secondary">
                        {item}
                    </li>
                })
                }
            </ul>
        </Fragment >
    );
}

export { UsersRecent };