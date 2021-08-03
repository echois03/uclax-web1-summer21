import React from 'react';
import styled from 'styled-components';

const Tab = ({tab, chosenTab, chosenTabUpdate}) => {

    const handleClick  = () => {
        chosenTabUpdate(tab);
    }

    const theClassName = (tab.title === chosenTab.title) ? 'Tab chosen': 'Tab';

    return (
        <TabStyled className={ theClassName } onClick={ handleClick }>
            { tab.title } 
        </TabStyled>
    );
}

export default Tab;

const TabStyled = styled.div`
    padding: 20px;
    background-color: #004646;
    width: 150px;
    text-align: center;
    color: white;
    margin-right: 5px;
    border-radius: 5px 5px 0 0;

    cursor: pointer;

    &.chosen {
        background-color: teal;
    }
`;