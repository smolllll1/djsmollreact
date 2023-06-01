import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import ArrowButton from "../arrow-button";

const Layout = () => {

    return (
        <Fragment>
            <Header />
            <main className="d-flex flex-grow-1 w-100 justify-content-center"
                style={{ backgroundColor: "rgba(13, 37, 63, 0.9)" }}>
                <Outlet />
            </main>
            <Footer />
            <ArrowButton />
        </Fragment>
    )
}

export {Layout};