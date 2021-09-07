import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { mediaQueries } from 'common/mediaQueries/mediaQueries.js';

const Nav = () => {
    return <NavStyled>
        <NavLink to="/" exact>Welcome</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>
    </NavStyled>
}

export default Nav;

const NavStyled = styled.nav `
    background-color: white;
    padding: 10px;
    text-align: center;
    border-top: solid 2px #cba54d;

    a {
        display:block;
        color: black;
        font-weight:600;
        padding: 10px;
        margin: 5px 0px;
        border-radius: 5px;
        text-decoration:none;
        text-transform:uppercase;

        &:hover {
            color: #cba54d;
        }

        &.active {
            color:#cba54d;
            font-weight:600;
        }
    }

    @media ${mediaQueries.mdUp} {
        a {
            display: inline-block;
            margin: 0px 10px;
            font-size: 16px;
            border-radius: 5px;
        }
    }
`;