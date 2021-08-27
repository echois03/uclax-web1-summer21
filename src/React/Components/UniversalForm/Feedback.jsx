import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';

import Context from './Context/index.js';

const Feedback = () => {

    const {state} = useContext(Context);

    const message = state.message;

    if (message.length < 1) {return '';}

    return (
        <FeedbackStyled className='Feedback'>
            <h2>Response</h2>
            {message} 
        </FeedbackStyled>
    );
}

export default Feedback;

const FeedbackStyled = styled.div`
    background-color:orange;
    margin-bottom: 30px;
    padding: 20px;

    h2 {
        margin: 0px;
    }
`;