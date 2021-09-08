import React from 'react';
import styled from 'styled-components';

import { useMediaQuery } from 'common/mediaQueries/useMediaQuery';

import Lightbox from 'React/Components/Lightbox/Lightbox.jsx'

const Item = ({service}) => {

    const {media} = useMediaQuery();
    
    const LightboxContent = () => {
        return (
            <div>
                <img src={service.image} alt={service.title}/>
                <div className="lightboxInfo">
                    <h3>{service.title}</h3>
                    <p>{service.location}</p> 
                    <p>{service.description}</p>
                </div>
 
            </div>
        );
    }

    const width =(media.mdUp) ? '400px' : '200px';
    return (
        <ItemStyled className='Item'>
            <Lightbox LightboxContent={LightboxContent} width={width}>   
                <img src={service.image} alt={service.title}/>
                <h4>{service.title}</h4>
            </Lightbox>    
        </ItemStyled>
    );
}

export default Item;

const ItemStyled = styled.div`
    img {
        width: 100%;
        display: block;
    }

    h4 {
        background-color: rgba(245,245,245,0.8);
        padding: 10px;
        text-align: center;
        margin-top: 0px;
    }

    .lightboxInfo {
        padding: 0.5rem 2rem;
    }
`;