import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterStyled>My footer</FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`
        background-color: gray;
        padding: 10px;
`;