import React from 'react';
import styled from 'styled-components';

import UniversalForm from 'React/Components/UniversalForm/UniversalForm.jsx';

const LoginForm = () => {

    const defaultFormData = {
        apiUrl: '/user/login',
        hasSubmitted: false,
        request: {},
        response: {},
        message: '',
        
        controls: [
            {
                id: 'username',
                label: 'Username or Email',
                value: 'test@gmail.com',
                type: 'text',
                validation: {
                    isValid: true, 
                    rules: ['required', 'email'],
                    message: '',
                }
            },
            {
                id: 'password',
                label: 'Password',
                value: 'test',
                type: 'password',
                validation: {
                    isValid: true, 
                    rules: ['required'],
                    message: '',
                }
            },
        ]
    }

    return (
        <LoginFormStyled className='LoginForm'>
            <UniversalForm defaultFormData={defaultFormData} /> 
        </LoginFormStyled>
    );
}

export default LoginForm;

const LoginFormStyled = styled.div`
    
`;