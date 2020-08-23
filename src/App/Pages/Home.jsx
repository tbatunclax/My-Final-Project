import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Slideshow from './Slideshow/Slideshow.jsx';


/* Components  --------*/
import Feature from './Featuredpick/Feature.jsx';/* to move tabbed*/
import LatestRelease from './LatestRelease/LatestRelease.jsx';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {

    return (
         <HomeStyled className='Home'>
             <Helmet>
                 <title>Home :: DC Marvel Movie App</title>
             </Helmet>



              <Slideshow className="nested-wrapper"/>

            <h1>Featured Review</h1>    
            <div className="nested-wrapper">
                <Feature/>
             </div>
             
             <div className="nested-wrapper">
                
                <LatestRelease /> 
             </div>
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`

    h1{
        color: white;
    }

    
`;