import React from 'react';
import styled from 'styled-components';

/* Helmet names browser tab */
import Helmet from 'react-helmet';

const Contact = () => {
    return (
        <ContactStyle className="Contact">
            <Helmet>
                <title>Contact :: Final Project App</title>
            </Helmet>
            Contact
        </ContactStyle>
    );
}

export default Contact;

const ContactStyle = styled.div`

`;