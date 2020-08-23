import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

/*--- components -----*/
import ServicesContainer from './Gallery/ServicesContainer.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';

const Services = () => {

    return (
        <ServicesStyled className='Services'>
            <Helmet>
                <title>Gallery</title>
            </Helmet>
            <div className="nested-wrapper">    
                <Tabbed /> 
            </div> 
            <div className="nested-wrapper">    
                <ServicesContainer /> 
            </div>    
        </ServicesStyled>
    );
}

export default Services;

const ServicesStyled = styled.div`
         
`;