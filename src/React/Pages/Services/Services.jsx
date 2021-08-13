import React from 'react';
import styled from 'styled-components';

import Container from './Container.jsx';

const Service = () => {

    return (
        <ServiceStyled className='Service'>
            <h1>Services</h1> 
            <Container />
        </ServiceStyled>
    );
}

export default Service;

const ServiceStyled = styled.div`
    
`;