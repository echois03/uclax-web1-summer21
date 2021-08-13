import React from 'react';
import styled from 'styled-components';

import {mediaQueries} from 'common/mediaQueries/mediaQueries.js';

import Item from './Item.jsx';

const Gallery = () => {

    return (
        <GalleryStyled className='Gallery'>
            <Item />
            <Item /> 
            <Item />
            <Item />
            <Item />
            <Item />
        </GalleryStyled>
    );
}

export default Gallery;

const GalleryStyled = styled.div`
    margin: 25px 0px;
    display: grid;

    grid-column-gap: 2%;
    grid-row-gap: 20px;
    grid-template-columns: repeat(auto-fill, 48%);

    @media ${mediaQueries.lgUp} {
        grid-template-columns: repeat(auto-fill, 23%);
    }
`;