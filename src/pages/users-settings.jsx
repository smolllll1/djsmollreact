import React, { Fragment, useContext } from "react";
import { PersonSettings } from "../components/person-settings";
import { useParams } from 'react-router-dom';
import { AuthenticationData } from '../components/data/authentication-data';

const UsersSettings = () => {

    const { usersId } = useParams();
    const { responseLogin } = useContext(AuthenticationData);

    return (
        <Fragment>
            {usersId === responseLogin?.username ?
                <PersonSettings responseLogin={responseLogin} />
                :
                <div className="w-100 bg-white py-5 ps-5">
                    <h4>Oops! We can't find the page you're looking for</h4>
                    <p>You tried to request a page that doesn't exist.</p>
                </div>
            }
        </Fragment>
    )
}

export { UsersSettings };