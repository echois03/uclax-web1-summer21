/*using react library*/
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { MediaQueryProvider } from 'common/mediaQueries/useMediaQuery.js';


import Header from './Layout/Header.jsx';
import Navigation from './Layout/Navigation/Navigation.jsx';
import Main from './Layout/Main.jsx';
import Footer from './Layout/Footer.jsx';

const App = () => {
    return (
        <MediaQueryProvider>
        <BrowserRouter>
            <AppStyled>
                <Header />
                <Navigation />
                <Main />
                <Footer />
            </AppStyled>
        </BrowserRouter>
        </MediaQueryProvider>
    )
}

export default App;

const AppStyled = styled.div `
    h1, h2, h3, h4, h5, h6, button, input, optgroup, select, textarea, html, body, p  {
        font-family: source-sans-pro;
    }

    .inset {
        border: solid 1px red;
        max-width:1600px;
        margin-right: auto;
        margin-left: auto;
    }
`