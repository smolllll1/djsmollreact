import React, { useContext } from "react";
import { motion as m } from "framer-motion";
import { AuthenticationData } from "../data/authentication-data";

import './form-registration.css';

const FormRegiatration = ({ formikRegistration }) => {

    const { errMsgRegistration } = useContext(AuthenticationData)

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="d-flex w-100 align-items-center justify-content-center wrapper-registration">
            <form className="m-3 d-flex form-registration"
                onSubmit={formikRegistration.handleSubmit}
            >
                <div className="wrap-form-registration-text">
                    <h2 className="registration-text-title">Let's get started 👋</h2>
                    <div className="wrap-form-registration-input">
                        {/* Name input field */}
                        <div className="p-1">
                            <label className={`d-block pb-.5 lable-text-registration
                             ${formikRegistration.touched.name
                                    && formikRegistration.errors.name
                                    ? "text-danger"
                                    : ""}`
                            }
                                htmlFor="name">
                                {formikRegistration.touched.name
                                    && formikRegistration.errors.name
                                    ? formikRegistration.errors.name
                                    : "Username"
                                }
                            </label>
                            <input className="input-style-registration"
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formikRegistration.values.name}
                                onChange={formikRegistration.handleChange}
                                onBlur={formikRegistration.handleBlur}
                            />
                        </div>
                        {/* Phone input field */}
                        <div className="p-1">
                            <label className={`d-block pb-.5 lable-text-registration
                            ${formikRegistration.touched.phone
                                    && formikRegistration.errors.phone
                                    ? "text-danger"
                                    : ""}`
                            }
                                htmlFor="phone">
                                {formikRegistration.touched.phone
                                    && formikRegistration.errors.phone
                                    ? formikRegistration.errors.phone
                                    : "Phone"
                                }
                            </label>
                            <input className="input-style-registration"
                                id="phone"
                                type="tel"
                                name="phone"
                                placeholder="Enter your phone"
                                value={formikRegistration.values.phone}
                                onChange={formikRegistration.handleChange}
                                onBlur={formikRegistration.handleBlur}
                            />
                        </div>
                        {/* Email input field */}
                        <div className="p-1">
                            <label className={`d-block pb-.5 lable-text-registration
                            ${formikRegistration.touched.email
                                    && formikRegistration.errors.email
                                    ? "text-danger"
                                    : ""}`
                            }
                                htmlFor="email">
                                {formikRegistration.touched.email
                                    && formikRegistration.errors.email
                                    ? formikRegistration.errors.email
                                    : "Email"
                                }
                            </label>
                            <input className="input-style-registration"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formikRegistration.values.email}
                                onChange={formikRegistration.handleChange}
                                onBlur={formikRegistration.handleBlur}
                            />
                        </div>
                        {/* Country input field */}
                        <div className="p-1">
                            <label className="d-block pb-.5 lable-text-registration"
                                htmlFor="country">
                                Country
                            </label>
                            <select className="input-style-registration w-25"
                                id="country"
                                name="country"
                                value={formikRegistration.values.country}
                                onChange={formikRegistration.handleChange}
                            >
                                <option>Unitet States</option>
                                <option>Unitet Kingdom</option>
                                <option>Germany</option>
                                <option>France</option>
                                <option>Ukraine</option>
                                <option>Poland</option>
                                <option>Italy</option>
                                <option>France</option>
                                <option>Norway</option>
                            </select>
                        </div>
                        {/* Password input field */}
                        <div className="p-1">
                            <label className={`d-block pb-.5 lable-text-registration
                            ${formikRegistration.touched.password
                                    && formikRegistration.errors.password
                                    ? "text-danger"
                                    : ""}`
                            }
                                htmlFor="password">
                                {formikRegistration.touched.password
                                    && formikRegistration.errors.password
                                    ? formikRegistration.errors.password
                                    : "Password"
                                }
                            </label>
                            <input className="input-style-registration"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                autoComplete="off"
                                value={formikRegistration.values.password}
                                onChange={formikRegistration.handleChange}
                                onBlur={formikRegistration.handleBlur}
                            />
                        </div>
                        {/* Confirm password input field */}
                        <div className="p-1">
                            <label className={`d-block pb-.5 lable-text-registration
                            ${formikRegistration.touched.confirmPassword
                                    && formikRegistration.errors.confirmPassword
                                    ? "text-danger"
                                    : ""}`
                            }
                                htmlFor="confirmPassword">
                                {formikRegistration.touched.confirmPassword
                                    && formikRegistration.errors.confirmPassword
                                    ? formikRegistration.errors.confirmPassword
                                    : "Confirm password"
                                }
                            </label>
                            <input className="input-style-registration"
                                id="confirmPassword"
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                autoComplete="off"
                                value={formikRegistration.values.confirmPassword}
                                onChange={formikRegistration.handleChange}
                                onBlur={formikRegistration.handleBlur}
                            />
                        </div>
                        {/* Terms of service */}
                        <div className="p-1">
                            <label className={`d-block pb-.5 lable-text-registration
                            ${formikRegistration.touched.terms
                                    && formikRegistration.errors.terms
                                    ? "text-danger"
                                    : ""}`
                            }
                                htmlFor="terms">
                                {formikRegistration.touched.terms
                                    && formikRegistration.errors.terms
                                    ? formikRegistration.errors.terms
                                    : "Terms of service"
                                }
                            </label>
                            <div className="d-flex gap-2">
                                <input className="input-checkbox-registration"
                                    id="terms"
                                    type="checkbox"
                                    name="terms"
                                    value="checked"
                                    onChange={formikRegistration.handleChange}
                                    onBlur={formikRegistration.handleBlur}
                                />
                                <p className="m-1 registration-text-checked">
                                    I agree to the Terms and Service that my data will be taken and sold.
                                </p>
                            </div>
                        </div>
                        {errMsgRegistration ?
                            <p className="text-center text-warning">
                                {errMsgRegistration}
                            </p>
                            :
                            null
                        }
                        <button type="submit" className="w-100 submit-register">
                            Start watching today!
                        </button>
                    </div>
                </div>
            </form>
        </m.div>
    )
}

export default FormRegiatration;