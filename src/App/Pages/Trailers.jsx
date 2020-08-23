import React from 'react';
import styled from 'styled-components';

/* Helmet names browser tab */
import Helmet from 'react-helmet';
/* Components ----------------- */
import Trailer from './Trailers/Trailers.jsx';



const Trailers = () => {

    return (
        <TrailersStyled className='Contact'>
            <Helmet>
                <title>Trailers :: </title>
            </Helmet>
            <div className="nested-wrapper">
                <Trailer />
            </div>
            
        </TrailersStyled>
    );
}

export default Trailers;

const TrailersStyled = styled.div`
.nested-wrapper {
    display: flex;
    justify-content: center;

    
}
`;