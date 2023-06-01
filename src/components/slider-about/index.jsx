import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const SliderAbout = () => {
    return (
        <section className='d-flex row w-100 mx-0 justify-content-center bg-white'>
            <Carousel variant="dark" className='w-50 px-0 my-5 bg-white'>
                <Carousel.Item interval={5000}>
                    <img
                        src={`https://www.themoviedb.org/assets/2/v4/marketing/logos/plex_pms_icon_300-ca5eafe435c01b120e3a0bbe1ee0ff27d3d87ac91f023d3cba6d09406151d692.png`}
                        alt="First slide"
                        style={{ width: "40%", objectFit: "cover" }}
                    />
                    <Carousel.Caption>
                        <p className='text-secondary'>The TMDB product, service, attitude and support are truly top notch. We love how they support their community and the passion with which they have built an amazing asset that our users can enjoy!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block"
                        src="https://www.themoviedb.org/assets/2/v4/marketing/logos/infuse_300-2f13210f57e1abb7dbc093fada9b0453845b9f11fbce370a2948c1b74dad68f7.png"
                        alt="Second slide"
                        style={{ width: "40%", objectFit: "cover" }}
                    />
                    <Carousel.Caption>
                        <p className='text-secondary'>Our experience working with TMDB has been positively fantastic! The powerful API coupled with its excellent availability and uptime is simply a great combo. I can't imagine ever using anything else!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block"
                        src="https://www.themoviedb.org/assets/2/v4/marketing/logos/letterboxd_300-d0f099eb261b7fcd9cbc8ba9af2acac683c4863fe89bdb392142b9bfee8d1467.png"
                        alt="Third slide"
                        style={{ width: "40%", objectFit: "cover" }}
                    />
                    <Carousel.Caption>
                        <p className='text-secondary'>We love it. From day one we've found the API to be pragmatic, reliable, well structured and well documented. In any engineering project, it's immensely satisfying when you can just plug and play, and that's been the case all the way along. I can't recall a single outage in over five years of use, and we also enjoy having a voice when it comes to the design of new approaches.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block"
                        src="https://www.themoviedb.org/assets/2/v4/marketing/logos/todomovies_300-8bf7104db05feefc8be5190ff8b8cd31c7491caf9ad80c61e0815b7aac7966ae.png"
                        alt="Fourth slide"
                        style={{ width: "40%", objectFit: "cover" }}
                    />
                    <Carousel.Caption>
                        <p className='text-secondary'>The API has been amazing and of course, we love the localization of data. It's awesome to be able to add and edit movie information on our own.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}

export { SliderAbout };