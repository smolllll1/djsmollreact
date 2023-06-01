import React, { useContext } from "react";
import { motion as m } from "framer-motion";
import { HomeRandom } from "../components/home-random";
import { SliderHomePage } from "../components/slider-home";
import { AuthenticationData } from "../components/data/authentication-data";
import { SearchData } from "../components/data/search-data";
import FormSearch from "../components/form-search";

const Home = () => {
    const { formikSearch } = useContext(SearchData);
    const { responseLogout, deleteAccount, setDeleteAccount } = useContext(AuthenticationData);

    setTimeout(() => {
        setDeleteAccount(false);
    }, 10000);

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-100">
            {responseLogout ?
                <div className="w-100 text-white text-center py-4"
                    style={{ backgroundColor: 'rgb(1, 180, 228)' }}
                >
                    <h2>Logged Out!</h2>
                    <h4>You have been successfully logged out.</h4>
                </div>
                :
                null
            }
            {deleteAccount === true ?
                <div className="w-100 text-white text-center py-4"
                    style={{ backgroundColor: '#90cea1' }}
                >
                    <h2>Account Deleted!</h2>
                    <h4>You have been successfully account deleted.</h4>
                </div>
                :
                null
            }
            <HomeRandom />
            <div className='my-0 home-random-bottom' />
            <FormSearch formikSearch={formikSearch} />
            <SliderHomePage />
        </m.div>
    )
}

export { Home };