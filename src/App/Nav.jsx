import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return (
        <NavStyled className="nested-wrapper">
            My navigation
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
        background-color: teal;
        color: white;
`;