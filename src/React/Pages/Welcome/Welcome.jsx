import React from 'react';
import styled from 'styled-components';

import Slideshow from './Slideshow/Slideshow.jsx';
import Staff from './Staff/Staff.jsx';
import Tabs from './Tabs/Tabs.jsx';

const Welcome = () => {

    return (
        <WelcomeStyled className='Welcome'>
            <h1>Welcome</h1>
            <Slideshow/>
            <Tabs/>
            <Staff/>
        </WelcomeStyled>
    );
}

export default Welcome;

const WelcomeStyled = styled.div`
    
`;