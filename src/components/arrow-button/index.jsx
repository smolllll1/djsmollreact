import React from 'react';

const ArrowButton = () => {

    return (
        <div className='position-fixed rounded-circle'
            style={{
                backgroundColor: "rgba(144, 206, 161, .5)",
                display: "grid",
                justifyContent: "center",
                alignContent:"center",
                width: "40px",
                height: "40px",
                bottom: "3%",
                right: "2%"
            }}
        >
            <a href="#top" target="_self"
                style={{
                    color: "rgb(13, 37, 63)",
                    textDecoration: "none",
                }}
            >
                <p className='m-0 fs-3'>&#8593;</p>
            </a>
        </div>
    );
}

export default ArrowButton;