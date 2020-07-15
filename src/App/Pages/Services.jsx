import React from 'react';
import styled from 'styled-components';

/* Helmet names browser tab*/
import Helmet from 'react-helmet';

const Services = () => {
    return(
        <ServicesStyled className="Services">
            <Helmet>
                <title>Services :: Final Project App</title>
            </Helmet>
            Services
        </ServicesStyled>
    );
}

export default Services;

const ServicesStyled = styled.div`

`;