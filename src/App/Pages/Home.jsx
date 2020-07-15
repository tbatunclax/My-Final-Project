import React from 'react';
import styled from 'styled-components';

/* Helmet names browswer tab*/
import Helmet from 'react-helmet';

const Home = () => {

    return (
        <HomeStyled className='Home'>
            <Helmet>
                <title>Home :: Final Project App</title>
            </Helmet>
            Home 
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`
    
`;