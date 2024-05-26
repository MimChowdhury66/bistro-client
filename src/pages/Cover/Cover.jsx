import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({img, title,description}) => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url('${img}')` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title }</h1>
                        <p className="mb-5">{description }</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;