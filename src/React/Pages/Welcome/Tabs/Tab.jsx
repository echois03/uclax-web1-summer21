import React from 'react';
import styled from 'styled-components';

const Tab = ({tab, chosenTab, chosenTabUpdate}) => {

    const handleClick  = () => {
        chosenTabUpdate(tab);
    }

    const theClassName = (tab.title === chosenTab.title) ? 'Tab chosen': 'Tab';

    return (
        <TabStyled 
            className={ theClassName } 
            onClick={ handleClick }
        >
            { tab.title } 
        </TabStyled>
    );
}

export default Tab;

const TabStyled = styled.div`
    padding: 15px;
    background-color: white;
    width: 150px;
    text-align: center;
    margin-right: 5px;
    border-radius: 50px;
    border: solid 1px #cba54d;
    cursor: pointer;
    

    &.chosen, &:hover {
        background-color: #cba54d;
        color: white;
    }
`;