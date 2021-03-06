import React from 'react';
import styled from 'styled-components';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { slidesData } from './slidesData.js';
import Slide from './Slide.jsx';

const Slideshow = () => {

    return (
        <SlideshowStyled className='Slideshow'>
            <Carousel
                showThumbs={ false }
                showIndicators={ false }
                autoPlay={ true }
                infiniteLoop={ true }
                showArrows={ true }
                interval='4000'
            >
                {
                    slidesData.map((slide, idx) => {
                        return <Slide slide={ slide } key={ idx }/>
                    })
                }
            </Carousel> 
        </SlideshowStyled>
    );
}

export default Slideshow;

const SlideshowStyled = styled.div`

    margin-bottom: 50px;

    .carousel .slide .legend {
        width:30%;
        margin: auto;
        position: relative;
        left: 0;
    }
`;