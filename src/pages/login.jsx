import React, { useContext, Fragment } from "react";
import FormLogin from "../components/form-login";
import { AuthenticationData } from '../components/data/authentication-data';

const Login = () => {

    const { formikLogin, errMsgLogin } = useContext(AuthenticationData);

    return (
        <Fragment>
            <FormLogin formikLogin={formikLogin} errMsgLogin={errMsgLogin}/>
        </Fragment>
    )
}

export { Login };