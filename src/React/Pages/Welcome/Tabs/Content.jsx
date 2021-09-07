import React from 'react';
import styled from 'styled-components';

const Content = ({chosenTab}) => {

    return (
        <ContentStyled className='Content'>
            <div className="image">
                <img src={ chosenTab.image } alt="{chosenTab.image}"/>
            </div> 
            <div className="info">
                <h3>{ chosenTab.title }</h3>
                <div dangerouslySetInnerHTML={ { __html: chosenTab.text }} />
            </div>
        </ContentStyled>
    );
}

export default Content;

const ContentStyled = styled.div`
    display:flex;
    padding: 20px;
    min-height:200px;

    .image {
        flex: 2;
        img {
                max-width: 100%
        }
    }

    .info {
        flex: 4;
        padding: 0 20px;
    }
    
`;