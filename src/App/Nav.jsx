import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return (
        <NavStyled>
            <div className="nested-wrapper">
               <a href="/">Home</a>
               <a href="/services">Services</a>
               <a href="/contact">Contact</a>
               <a href="/login">Login</a>
            </div>
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
        background-color: teal;
        color: white;
        text-align: center;

        a {
            display: inline-block;
            text-align: center;
            line-height: 50px;
            font-size: 20px;
            background-color: #1c544f;
            color: white;

            text-decoration: none;
            width: 150px;
            margin-left: 10px;
            margin-right: 10px;
            border-radius: 5px;

          &:hover {
              background-color: #1e3130;
          }  
        }





`;