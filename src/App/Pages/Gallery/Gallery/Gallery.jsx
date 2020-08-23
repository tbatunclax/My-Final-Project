import React from 'react';
import styled from 'styled-components';

/* Components --------*/
import GalleryItem from './GalleryItem.jsx';

const Gallery = ({services}) => {
    
    // console.log('Gallery clog: ', services, currCategory);
    
    /* render package title */
    const renderGallery = () =>{
        return services.packages
                
                .map((item,idx) => {
                    return <GalleryItem key={idx} item={ item } />
                });

    }
    return (
        <GalleryStyled className='Gallery'>
            { renderGallery() }
        </GalleryStyled>
    );
}

export default Gallery;

const GalleryStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;