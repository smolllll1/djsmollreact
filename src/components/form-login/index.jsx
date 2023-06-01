import React from "react";
import { motion as m } from "framer-motion";

import './form-login.css';

const FormLogin = ({ formikLogin, errMsgLogin }) => {

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="d-flex w-100 align-items-center justify-content-center wrapper-login" >
            <form className="m-3 d-flex form-login"
                onSubmit={formikLogin.handleSubmit}
            >
                <div className="wrap-form-login-text">
                    <h2 className="login-text-title">Login to your account</h2>
                    <div className="wrap-form-login-input">
                        {/* Username input field */}
                        <div className="p-1">
                            <label className={`d-block pb-.5 lable-text-login
                            ${formikLogin.touched.name
                                    && formikLogin.errors.name
                                    ? "text-danger"
                                    : ""}`
                            }
                                htmlFor="name">
                                {formikLogin.touched.name
                                    && formikLogin.errors.name
                                    ? formikLogin.errors.name
                                    : "Username"
                                }
                            </label>
                            <input className="w-100 input-style-login"
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formikLogin.values.name}
                                onChange={formikLogin.handleChange}
                                onBlur={formikLogin.handleBlur}
                            />
                        </div>
                        {/* Password input field */}
                        <div className="p-1">
                            <label className={`d-block pb-.5 lable-text-login
                            ${formikLogin.touched.password
                                    && formikLogin.errors.password
                                    ? "text-danger"
                                    : ""}`
                            }
                                htmlFor="password">
                                {formikLogin.touched.password
                                    && formikLogin.errors.password
                                    ? formikLogin.errors.password
                                    : "Password"
                                }
                            </label>
                            <input className="w-100 input-style-login"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                autoComplete="off"
                                value={formikLogin.values.password}
                                onChange={formikLogin.handleChange}
                                onBlur={formikLogin.handleBlur}
                            />
                        </div>
                        {errMsgLogin ?
                            <p className="text-center text-danger mb-0">{errMsgLogin}</p>
                            :
                            null
                        }
                        <button className="w-50 submit-login" type="submit">
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </m.div >
    )
}

export default FormLogin;