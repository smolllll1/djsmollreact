import React from 'react';
import { motion as m } from 'framer-motion';

const NotFound = () => {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='text-center'
            style={{
                width:"100%",
                height: '100vh',
                backgroundColor: "white"
            }}
        >
            <h1 className='fw-light'
                style={{
                    fontSize: '4rem',
                    color: 'BlackText',
                    paddingTop: '20px'
                }}
            >Not Found 404</h1>
            <p className='fs-1'>🙁</p>
        </m.div>

    );
}

export {NotFound};
