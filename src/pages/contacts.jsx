import React from 'react';
import { motion as m } from "framer-motion";
import { OurContacts } from '../components/our-contacts';

const Contacts = () => {

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ backgroundColor: "#ffffff", width: "100%" }}
        >
            <OurContacts />
        </m.div>
    );
}

export { Contacts };