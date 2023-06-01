import React from 'react';
import { motion as m } from 'framer-motion';

const PrivacyPolicy = () => {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="d-flex w-100 bg-white justify-content-center">
            <section className="d-flex row w-100 bg-white my-3 m-0">
                <h4>Privacy Policy</h4>
                <h6>Paragraph</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eveniet cumque ipsa sequi facilis cum cupiditate, sed, velit optio est voluptates! Iusto nam illo voluptas voluptates, recusandae nihil quod suscipit.</p>
                <h6>Paragraph</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eveniet cumque ipsa sequi facilis cum cupiditate, sed, velit optio est voluptates! Iusto nam illo voluptas voluptates, recusandae nihil quod suscipit.</p>
                <h6>Paragraph</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eveniet cumque ipsa sequi facilis cum cupiditate, sed, velit optio est voluptates! Iusto nam illo voluptas voluptates, recusandae nihil quod suscipit.</p>
                <h6>Paragraph</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eveniet cumque ipsa sequi facilis cum cupiditate, sed, velit optio est voluptates! Iusto nam illo voluptas voluptates, recusandae nihil quod suscipit.</p>
                <h6>Paragraph</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eveniet cumque ipsa sequi facilis cum cupiditate, sed, velit optio est voluptates! Iusto nam illo voluptas voluptates, recusandae nihil quod suscipit.</p>
            </section>
        </m.div>
    );
}

export { PrivacyPolicy };
