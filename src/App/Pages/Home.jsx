import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Carousel } from "react-responsive-carousel";



/* Components  --------*/
import Tabbed from './Tabbed/Tabbed.jsx';
import Staff from './Staff/Staff.jsx';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {

    return (
         <HomeStyled className='Home'>
             <Helmet>
                 <title>Home :: SPA App</title>
             </Helmet>



  <Carousel showThumbs={false} 
            infiniteLoop={ true }
            autoPlay                
  >
    <div>
      <img alt="" src="/assets/img/Staff/staff-1.jpeg" />
      
    </div>
    <div>
      <img alt="" src="/assets/img/Staff/staff-2.jpeg" />
      
    </div>
    <div>
      <img alt="" src="/assets/img/Staff/staff-3.jpeg" />
      
    </div>
   
  </Carousel>



             <div className="nested-wrapper">
                <Tabbed /> 
             </div>
             <div className="nested-wrapper">
                <Staff /> 
             </div>
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`



.carousel .slide img {
    max-height: 300px;  /* change this to whatever you want */
    width: auto;
}
    
`;