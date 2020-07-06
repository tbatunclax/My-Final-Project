import React from 'react';
import styled from 'styled-components';

const Main = () => {
    return(
        <MainStyled>
                <h1>Page Title</h1>
                <h2>SubTitle</h2>
                <h3>Sub sub Title</h3>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`
            h1 {
               background-color: lavender; 
               font-size: 48px;
            }
            h2 {
                background-color: skyblue;
                font-size: 36px;
            }
            h3 {
                background-color: green;
                font-size: 16px;
                border: solid 6px purple; 
            }
`;
