import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { mq } from '../common/mediaQueries.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars,
} from '@fortawesome/free-solid-svg-icons';


const Nav = () => {

    const [showMenu, showMenuSet] = useState(false);

    const toggleMenu = () => {
        // console.log('You clicked the hamburger', showMenu);
        showMenuSet(!showMenu);    
    }
    // useEffect is for lifecycle events, like components mounted
    // When we pass empty [] it triggers component mounted
    useEffect(()=>{
        // console.log('I have mounted');

        const handleWindowSizeChage = () => {
            const isItMobile = window.matchMedia(`(max-width:499px)`);
            // console.log(isItMobile.matches);


            showMenuSet(!isItMobile.matches);
        }
        //On Load / component mounts
        handleWindowSizeChage();
        //Everytime window is resized
        window.addEventListener('resize', handleWindowSizeChage);

        //Clean Up our Listeners on dismount
        return () => {
            window.removeEventListener('resize', handleWindowSizeChage);
        }

    },[]);  // straight braces empty = component mounted  

    return (
        <NavStyled>
            <div className="nested-wrapper">
                <div 
                    className="hamburger"
                    onClick= { toggleMenu }
                >
                    <FontAwesomeIcon icon={ faBars } />
                </div>

                {
                    showMenu &&
                    <div className="links">
                        <NavLink to="/" exact>Home</NavLink>
                        <NavLink to="/trailers">Trailers</NavLink>
                        <NavLink to="/heros">Heros</NavLink>
                        <NavLink to="/gallery">Gallery</NavLink>
                    </div>
                }    
            </div>        
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
        background-color: black;
        color : white;
        text-align: center;
        
       
        .hamburger {
            position: absolute;
            right: 20px;
            top: 20px;
            cursor: pointer;
           

          
                @media ${mq.tablet}{
                    display: none;
                }

                

                
                
        }

        a {
            display: inline-block;

            text-align: center;
            line-height: 40px;
            font-size: 20px;
            /*background-color: #105050;*/
            color: white;
            border-bottom: 2px solid transparent;

            text-decoration: none;

            margin-bottom: 10px;

                /* border-radius: 5px;*/

                width: 100%;
                line-height: 40px;

            @media ${mq.tablet}{
                width:100px;
                line-height: 50px;
                margin-left: 10px;
                margin-right: 10px;
            }

            @media ${mq.desktop}{
                width:150px;
            }    

            &:hover {
                color: gray;
                border-bottom-color: red;
            }

            &.active {
                color: gray;
                
            }
        }
`;