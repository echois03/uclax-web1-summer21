import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube'


const Video = () => {

    return (
        <VideoStyled className='player-wrapper'>
            <div>
                <ReactPlayer 
                    url='https://www.youtube.com/watch?v=BJeg2Kta2wY'
                    className='react-player'
                    width='100%'
                    height='100%'
                    playing={true} 
                /> 
            </div>
        </VideoStyled>
    );
}

export default Video;

const VideoStyled = styled.div`
        position: relative;
        padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
        margin-bottom: 5rem;

    .react-player {
        position: absolute;
        top: 0;
        left: 0;
    }
`;