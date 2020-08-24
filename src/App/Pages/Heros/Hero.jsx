import React from 'react';
import styled from 'styled-components';

import HeroProfile from './Heroprofile.jsx';
import { heroData } from './heroData.js';

const Hero = () => {


    const renderHero = () => {
            return heroData.map ((member, idx) =>{
                return<HeroProfile 
                        key= { idx }
                        member = {member}
                
                />;
            });

    }



    return (
        <HeroStyled className='Hero'>
             
            <div className="members">
                { renderHero() }
            </div>
        </HeroStyled>
    );
}

export default Hero;

const HeroStyled = styled.div`

        .members { 
           display: flex;
           flex-wrap: wrap; 
           
    }
`;