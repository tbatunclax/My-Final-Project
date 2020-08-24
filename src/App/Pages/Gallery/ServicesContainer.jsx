import React from 'react';
import styled from 'styled-components';

/* Scripts ----------------*/
import { services } from './galleryData.js';

/* Componets---------------*/
//import FilterNav from './FilterNav/FilterNav.jsx';
import Gallery from './Gallery/Gallery.jsx';

const ServicesContainer = () => {

    
    return (
        <ServicesContainerStyled className='ServicesContainer'>
            <Gallery services={ services } /> 
        </ServicesContainerStyled>
    );
}

export default ServicesContainer;

const ServicesContainerStyled = styled.div`
    
`;