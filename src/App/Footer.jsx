import React from 'react';
import styled from 'styled-components';

import { mq } from '../common/mediaQueries';



const Footer = () => {

    const getYear = new Date();
    

    return (
        <FooterStyled className='nested-wrapper'>
             
             <h3>@ { getYear.getFullYear() }  </h3>
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`
        background-color: gray;
        padding: 50 0px;

        @media ${mq.tablet}{
            background-color: #ed1d24;
        }
        @media ${mq.desktop}{
            background-color: #ed1d24;
        }
`;