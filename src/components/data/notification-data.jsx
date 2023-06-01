import React, { useState, createContext } from 'react';
import { axiosBaseUrl } from "../../api/axios";
import { useFormik } from "formik";
import * as Yup from "yup";

// Data with Form-about-message
const NotificationData = createContext({});

// Regular Expressions
const emailRegExp = /^(([^<>()[\]\\.,;:\\"]+(\.[^<>()[\]\\.,;:\\"]+)*)|(\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// POST URL ABOUT
const ABOUT_URL = 'about/';

const NotificationDataProvider = ({ children }) => {

    // Response Notification backend onSend
    const [responseNotification, setResponseNotification] = useState(null);
    // Error Notification
    const [errMsgNotification, setErrMsgNotification] = useState('');

    // formikNotification logics
    const formikNotification = useFormik({
        initialValues: {
            email: "",
            subject: "",
            notification: "",
        },

        // Validate form notification
        validationSchema: Yup.object({
            email: Yup.string()
                .matches(emailRegExp, 'Invalid email address.')
                .required('Email is required'),
            subject: Yup.string()
                .min(2, 'Subject is short')
                .max(40, 'Subject must be 40 characters or less.')
                .required('Subject is required'),
            notification: Yup.string()
                .required('Notification is required'),
        }),

        // Submit form notification
        onSubmit: async (values) => {
            console.log(values)
            await axiosBaseUrl.post(ABOUT_URL, values)
                .then(response => {
                    console.log(response.data);
                    setResponseNotification(response.data);
                })
                .catch(error => {
                    console.log(error.message);
                    setErrMsgNotification(error.message);
                });

            cleanNotificationValue();
        }
    });

    const cleanNotificationValue = () => {
        formikNotification.values.email = "";
        formikNotification.values.subject = "";
        formikNotification.values.notification = "";
    };

    return (
        <NotificationData.Provider
            value={{
                formikNotification: formikNotification,
                responseNotification: responseNotification,
                errMsgNotification: errMsgNotification,
                cleanNotificationValue: cleanNotificationValue,
            }}
        >
            {children}
        </NotificationData.Provider>
    );
}

export { NotificationDataProvider, NotificationData };
