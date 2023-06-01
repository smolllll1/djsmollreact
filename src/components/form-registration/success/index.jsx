import React, { useState, useEffect } from "react";
import { motion as m } from 'framer-motion';
import Confetti from 'react-confetti';

const Success = ({ formikRegistration }) => {

    const [pieces, setPiaces] = useState(200);
    const stopConfetti = () => {
        setTimeout(() => {
            setPiaces(0);
        }, 3000)
    };

    useEffect(() => {
        stopConfetti();
    }, []);

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="vh-100 w-100 d-flex align-items-center justify-content-center wrapper-registration">
            <div className="d-flex row fs-5 text-center wrap-form-registration-text"
                style={{
                    maxWidth: "60%",
                    borderRadius: '0.5rem',
                    boxShadow: '4px 5px 5px -4px rgba(13, 37, 63)',
                    backgroundColor: 'floralwhite',
                }}>
                <h1 className="">Thanks for the Email {formikRegistration.values.name} ✨</h1>
                <p>We have send you an email over at {formikRegistration.values.email}.
                    Please confirm the registration!
                </p>
            </div>
            <Confetti gravity={0.2} numberOfPieces={pieces} style={{ width: "100%" }} />
        </m.div >
    )
}

export default Success;