import React from 'react';
import styled from 'styled-components';

import TrailerMovie from './TrailerMovie.jsx';
import { movieData } from './trailerData.js';

const Trailer = () => {


    const renderTrailer = () => {
            return movieData.map ((member, idx) =>{
                return<TrailerMovie 
                        key= { idx }
                        member = {member}
                
                />;
            });

    }

    return (
        <TrailerStyled className='Trailer'>
             
            <div className="members">
                { renderTrailer() }
            </div>
        </TrailerStyled>
    );
}

export default Trailer;

const TrailerStyled = styled.div`

        .members { 
           display: flex;
           flex-wrap: wrap; 
           
    }
`;