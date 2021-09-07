import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderStyled>
        <h2>Zeal Interiors & Design</h2>
        <h3>MINIMAL  |  FUNTIONAL  |  MODERN</h3>
        </HeaderStyled>
    ) 
}

export default Header;

const HeaderStyled = styled.header `
    background-color:white;
    padding: 20px;
    text-align: center;
`;