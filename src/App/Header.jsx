import React from 'react';
import styled from 'styled-components';

import { mq } from '../common/mediaQueries.js';

const Header = () => {
    return (
        <HeaderStyled>
            <div className="nested-wrapper">
                <div className="row-container">
                <img className="logo" src="assets/img/logo.jpg" alt="logo"/>
                    <div className="text">
                        <h1> Superhero Movies</h1>
                    </div>
                    
                </div>   
            </div>
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
        

        @media ${ mq.mobile } {
            background-color: skyblue;
        }

        @media ${mq.tablet} {
            background-color: orange;
        }

        @media ${mq.desktop} {
            background-color: #231f20;
        }

        font-size: 30px;

        .row-container {
            display: flex;
            justify-content: left;
        }

        .logo {
            
            height: 100px;
            @media ${mq.mobile}{
                img {
                    width: 10%;
                    height: auto;
                }
            }   

        }
        .text {
            
            h1 {
                color: #fff;
                margin-top: auto;
                padding-top: 20px;
                padding-bottom: 0px;
            }
            
            h3 {
                font-size: 30px;
                margin: 0px;
            }
            @media ${mq.mobile}{
                display: none;
            }
        }
`;

