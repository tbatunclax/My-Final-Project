import React from 'react';
import styled from 'styled-components';

import FeaturedMovie from './FeaturedMovie.jsx';
import { movieData } from './reviewData.js';

const Feature = () => {


    const renderReview = () => {
            return movieData.map ((member, idx) =>{
                return<FeaturedMovie 
                        key= { idx }
                        member = {member}
                
                />;
            });

    }



    return (
        <FeatureStyled className='Feature'>
             
            <div className="members">
                { renderReview() }
            </div>
        </FeatureStyled>
    );
}

export default Feature;

const FeatureStyled = styled.div`

        .members { 
           display: flex;
           flex-wrap: wrap; 
           
    }
`;