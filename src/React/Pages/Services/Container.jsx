import React, {useState} from 'react';
import styled from 'styled-components';

import Gallery from './Gallery/Gallery.jsx';
import Categories from './Categories/Categories.jsx';

import {servicesData} from './servicesData.js';

const Container = () => {

    const { categories, services } = servicesData;

    const [curCat, curCatUpdate] = useState(categories[0]);

    return (
        <ContainerStyled className='Container'>
            <Categories 
                categories={categories}
                curCat={curCat}
                curCatUpdate={curCatUpdate}
                />
            <Gallery services={services} curCat={curCat}/> 
        </ContainerStyled>
    );
}

export default Container;

const ContainerStyled = styled.div`
    
`;