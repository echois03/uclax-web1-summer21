import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Homework from '../Homework/Homework.jsx'

const Main = () => {
    return <MainStyled>
        <h1>Main Content</h1>
        <Switch>
            <Route path='/services'>

            </Route>
            <Route path='/contact'>

            </Route>
            <Route path='/login'>

            </Route>
            <Route path='/homework'>
                <Homework />
            </Route>
            <Route path='/' exact>

            </Route>
        </Switch>
    </MainStyled>
}

export default Main;

const MainStyled = styled.main `
    background-color:#349e9e;
    color:white;
    padding: 10px;
`;