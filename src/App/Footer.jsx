import React from 'react';
import styled from 'styled-components';

import { mq } from '../common/mediaQueries';

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

        @media ${mq.tablet}{
            background-color: orange;
        }
        @media ${mq.desktop}{
            background-color: lavender;
        }
`;