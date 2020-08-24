import React from 'react';
import styled from 'styled-components';

import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home.jsx';
import Services from './Pages/Gallery.jsx'; 
import Heros from './Pages/Heros.jsx'; // Heros
import Trailers from './Pages/Trailers.jsx';

const Main = () => {
    return (
        <MainStyled className="nested-wrapper">
                <Switch>
                    <Route path='/trailers' component={ Trailers } />
                    <Route path='/heros' component={ Heros } />
                    <Route path='/gallery' component={ Services } />
                    <Route path='/' component={ Home } /> 
                </Switch>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`
               
`;