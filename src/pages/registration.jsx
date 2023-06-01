import React, { useContext } from "react";
import FormRegiatration from "../components/form-registration";
import Success from "../components/form-registration/success";
import { AuthenticationData } from '../components/data/authentication-data';

const Registration = () => {

    const { formikRegistration, success } = useContext(AuthenticationData);

    return (
        <section className="d-flex m-0 p-0 w-100">
            {success === false ?
                <FormRegiatration formikRegistration={formikRegistration} />
                :
                <Success formikRegistration={formikRegistration} />
            }
        </section>
    )
}

export { Registration };