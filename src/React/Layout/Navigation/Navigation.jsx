import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Nav from './Nav.jsx';
import Hamburger from './Hamburger.jsx';

import { useMediaQuery } from 'common/mediaQueries/useMediaQuery.js';

const Navigation = () => {

    const [showMenu, showMenuUpdate] = useState(false);
    const { media } = useMediaQuery();

    useEffect(() => {
        
        showMenuUpdate(media.mdUp);

    }, [media.mdUp]);

    const handleToggle = () => {
        showMenuUpdate(!showMenu);
    }

    return (
        <NavigationStyled className='Navigation'>
            {!media.mdUp && <Hamburger onClick={handleToggle}/>}
            { showMenu && <Nav /> }
        </NavigationStyled>
    );
}

export default Navigation;

const NavigationStyled = styled.div`
  .Hamburger {
      position: absolute;
      top: 20px;
      right: 20px;
      color: #8c9dad;
      width: .7em;
  }  

`;