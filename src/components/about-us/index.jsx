import React from 'react';
import { motion as m } from "framer-motion";
import Figure from 'react-bootstrap/Figure';
import { SliderAbout } from '../slider-about';
import { FormNotification } from "../form-notification";

import "./about-us.css";

const AboutUs = () => {

    const advantages = [
        {
            id: 1, titleTop: `Let's talk about Us`,
            paragraphFirst: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repellat, libero atque mollitia impedit blanditiis ipsa pariatur? Exercitationem amet, ut aliquam quod qui tempora dolorem? Itaque quod repellendus totam perspiciatis?
            Consectetur recusandae itaque ex suscipit quasi assumenda, quae qui omnis corporis impedit ab voluptates labore vitae sit doloremque molestias. Adipisci velit recusandae consequuntur. Unde repellat nam necessitatibus numquam deleniti aut?`,
            titleBottom: `The TMDB advantage`,
            itemFirst: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt debitis praesentium optio ipsum id saepe, rem ipsam, magnam nostrum impedit tempore iste dolores repudiandae qui vero fugiat nam quibusdam voluptas!`,
            itemSecond: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda vero nulla quibusdam tempora adipisci. Saepe magnam dolorem sed assumenda temporibus error iste dolore enim. Ducimus cum vitae voluptatibus quas laudantium!`,
            itemThird: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore id quidem, eum sint quam autem et deserunt iusto veniam omnis quibusdam, soluta repellendus aut totam explicabo! Quaerat, iusto numquam?`,
            itemFourth: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi minus aliquid quisquam blanditiis voluptatem perferendis unde veritatis soluta sint perspiciatis quasi magni esse delectus pariatur beatae aspernatur deleniti, obcaecati vero!`,
            itemFifth: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis adipisci rem quisquam omnis alias ducimus, earum optio porro quibusdam quaerat. Tempora recusandae error harum maiores consequuntur praesentium magni dicta commodi?`,
        }
    ];

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <section className='w-100 m-0 d-flex row top-about justify-content-center align-items-center'>
                <Figure className='w-75 px-0 mx-0 position-relative'
                    style={{ width: "800px" }}
                >
                    <p className='top-greeting text-white fst-italic text-center fw-bold'>
                        Hi there,
                    </p>
                    <Figure.Image src="https://www.themoviedb.org/assets/2/v4/marketing/deadpool-06f2a06d7a418ec887300397b6861383bf1e3b72f604ddd5f75bce170e81dce9.png"
                        width="100%" height="100%" alt='deadpool'
                        style={{ zIndex: "1", marginTop: "-120px" }}
                    ></Figure.Image>
                </Figure>
            </section>
            <section className='w-100 m-0 d-flex row justify-content-center align-items-center'>
                {advantages.map((item) => {
                    return <div key={item.id} className='w-50'>
                        <h1 className='text-center text-white fst-italic fw-bold fs-1'>{item.titleTop}</h1>
                        <p className='text-white text-center'>{item.paragraphFirst}</p>
                        <h3 className='text-white text-center'>{item.titleBottom}</h3>
                        <ol className='advantage-item'>
                            <li>{item.itemFirst}</li>
                            <li>{item.itemSecond}</li>
                            <li>{item.itemThird}</li>
                            <li>{item.itemFourth}</li>
                            <li>{item.itemFifth}</li>
                        </ol>
                    </div>
                })
                }
                <FormNotification />
            </section>
            <SliderAbout />
        </m.div >
    );
}

export default AboutUs;