import React from 'react';
import styled from 'styled-components';

import Slideshow from './Slideshow/Slideshow.jsx';
import Tabbed from './Tabs/Tabbed.jsx';
import Video from './Video/Video.jsx';

const Welcome = () => {

    return (
        <WelcomeStyled className='Welcome'>
            <Video/>
            <Tabbed/>
            <Slideshow/>
        </WelcomeStyled>
    );
}

export default Welcome;

const WelcomeStyled = styled.div`
    
`;