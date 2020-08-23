import React from 'react';
import styled from 'styled-components';

/* Helmet names browser tab */
import Helmet from 'react-helmet';
/* Components ----------------- */
import Deets from './Contact/Deets.jsx';

import ReactPlayer from 'react-player';

const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            <Helmet>
                <title>Contact :: SPA App</title>
            </Helmet>
            <div className="nested-wrapper">
                <div className="column column1">
                    <Deets />
                </div>
                <div className="column column2">
                <ReactPlayer url='https://www.youtube.com/watch?v=0coLXVN5eT4' />
                </div>
            </div>
           
            
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
.nested-wrapper {
    display: flex;

    .column {
        padding: 20px;
    }

    .column1 {
        width: 35%;
        background-color: yellow;
    }
    .column2 {
        width: 65%;
        background-color: pink;
    }
}
`;