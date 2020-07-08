import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterStyled className='nested-wrapper'>
            My footer
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`
        background-color: teal;
        padding: 10px;
`;