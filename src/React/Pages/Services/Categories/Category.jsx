import React from 'react';
import styled from 'styled-components';

const Category = ({cat, curCat, curCatUpdate}) => {

    const handleClick = () => {
        curCatUpdate(cat);
    }

    const className=(curCat === cat) ? 'Category chosen': 'Category';

    return (
        <CategoryStyled className={className} onClick={handleClick}>
            {cat} 
        </CategoryStyled>
    );
}

export default Category;

const CategoryStyled = styled.button`
    padding: 15px;
    background-color: white;
    width: 150px;
    text-align: center;
    margin-right: 16px;
    border-radius: 50px;
    border: solid 1px #cba54d;
    cursor: pointer;
    

    &.chosen, &:hover {
        background-color: #cba54d;
        color: white;
    }
`;