import React from 'react';
import styled from 'styled-components';

import { mediaQueries } from 'common/mediaQueries/mediaQueries.js';

import Info from './Info/Info.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
import Map from './Map/Map.jsx';

const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            <ContactForm />
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
    width: 80%;
    max-width:500px;
    margin: 5rem auto 3rem auto;

    @media ${mediaQueries.mdUp} {
        .row {
        display: flex;

            .col {
                flex: 1;
            }
        }
    }


`;