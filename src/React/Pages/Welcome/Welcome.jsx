import React from 'react';
import styled from 'styled-components';

import Slideshow from './Slideshow/Slideshow.jsx';
import Tabbed from './Tabs/Tabbed.jsx';

const Welcome = () => {

    return (
        <WelcomeStyled className='Welcome'>
            <Slideshow/>
            <Tabbed/>
        </WelcomeStyled>
    );
}

export default Welcome;

const WelcomeStyled = styled.div`
    
`;