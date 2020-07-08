import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderStyled className='nested-wrapper'>
            My header
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
        background-color: teal;
        font-size: 30px;
`;

