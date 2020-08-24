import React from 'react';
import styled from 'styled-components';

/* Helmet names browswer tab */
import Helmet from 'react-helmet';


import Hero from './Heros/Hero.jsx';

const Heros = () => {

    return (
        <HeroStyled className='Hero'>
            <Helmet>
                <title>Hero</title>
            </Helmet>
            <div className="nested-wrapper">
               
              <Hero />
                
            </div>
        </HeroStyled>
    );
}

export default Heros;

const HeroStyled = styled.div`
        
    
`;