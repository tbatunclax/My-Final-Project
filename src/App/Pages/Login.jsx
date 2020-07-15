import React from 'react';
import styled from 'styled-components';

/* Helmet names browswer tab */
import Helmet from 'react-helmet';

const Login = () => {
    return (
        <LoginStyled className="Login">
            <Helmet>
                <title>Login :: Final Project App</title>
            </Helmet>
            Login
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`

`;