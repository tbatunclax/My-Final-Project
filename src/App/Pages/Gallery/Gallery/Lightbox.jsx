import React from 'react';
import styled from 'styled-components';


//fawsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faWindowClose,
} from '@fortawesome/free-solid-svg-icons';

//{props}
const Lightbox = ({hideAction, show=false, children}) => {

    const handleHide = () => {
        hideAction();
    }
    // isolate lightbox
    const stopBubbleUp = (event) => {
        event.stopPropagation();
    }
    
    return (
        show &&
        <LightboxStyled
            className='Lightbox'
            onClick={ handleHide }
        >
            <div className="light" onClick={ stopBubbleUp }>
                <FontAwesomeIcon 
                    className='close' 
                    icon={ faWindowClose } 
                    onClick ={ handleHide }
                />
                {children}
            </div>
        </LightboxStyled>
    );
}

export default Lightbox;

const LightboxStyled = styled.div`
    background-color: rgba(0,0,0,.7);
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;

    z-index: 1000;

    .light{
        width: 500px;
        padding: 20px;
        background-color: #fff;

        position: absolute;
        left: 50%;
        top: 50%;

        transform: translate(-50%, -50%);

        .close {
            position: absolute;
            right: 2px;
            top: 5px;

            cursor: pointer;
    }
    
    
`;