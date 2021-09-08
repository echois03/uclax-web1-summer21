import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return <FooterStyled> &copy; Zeal Interiors & Design 2021</FooterStyled>
}

export default Footer;

const FooterStyled = styled.footer `
    padding: 1rem 0;
    text-align: center;
    font-size: .6rem;
`;