import React from 'react';
import styled from 'styled-components';

import LoginForm from './LoginForm/LoginForm.jsx';

const Login = () => {

    return (
        <LoginStyled className='Login'>
            <LoginForm/> 
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`
    
`;