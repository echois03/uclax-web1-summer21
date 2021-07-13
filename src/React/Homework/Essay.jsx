import React from 'react';
import styled from 'styled-components';

const Essay = ({number, question, children}) => {
    return (
        <EssayStyled>
            <h3>ESSAY {number}</h3>
            <h4 className="question">{question}</h4>
            <div className="answer">{children}</div>
        </EssayStyled>
    );
}

export default Essay;

const EssayStyled = styled.div `
    padding:20px;
    border: solid 5px teal;
    margin: 20px;

    h3 {
        margin: 0px;
    }

    .question {
        font-size: 18px;
    }

    .answer {
        font-size: 18px;
    }
`;