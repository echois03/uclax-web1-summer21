import React from 'react';
import styled from 'styled-components';

import { mediaQueries } from 'common/mediaQueries/mediaQueries.js';

import Info from './Info/Info.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
import Map from './Map/Map.jsx';

const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            <h1>Contact</h1>
            <div className="row">
                <div className="col">
                <Info />
                </div>    
                <div className="col">        
                <ContactForm />
                </div>
             </div>   
            <Map />
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
    
    @media ${mediaQueries.mdUp} {
        .row {
        display: flex;

            .col {
                flex: 1;
            }
        }
    }




    background-color: #7ead70;

    @media (min-width: 800px) {
        background-color: #e4a32b;
    }

    @media (min-width: 1200px) {
        background-color: #b32c2c;
    }

    h1 {
        background-color: purple; 
        color: white; 

        @media ${mediaQueries.md} {
            background-color: black;
        }
    }



`;