import React, { Fragment, useContext } from "react";
import PersonAccount from "../components/person-account";
import { useParams } from 'react-router-dom';
import { AuthenticationData } from '../components/data/authentication-data';

const UsersAccount = () => {

    const { usersId } = useParams();
    const { responseLogin } = useContext(AuthenticationData);

    return (
        <Fragment>
            {usersId === responseLogin?.username ?
                <PersonAccount responseLogin={responseLogin} />
                :
                <div className="w-100 bg-white py-5 ps-5">
                    <h4>Oops! We can't find the page you're looking for</h4>
                    <p>You tried to request a page that doesn't exist.</p>
                </div>
            }
        </Fragment>
    )
}

export { UsersAccount };