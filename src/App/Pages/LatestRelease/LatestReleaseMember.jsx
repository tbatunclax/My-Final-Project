import React, { useState }  from 'react';
import styled from 'styled-components';

import { mq } from '../../../common/mediaQueries';

import Lightbox from '../../../common/Lightbox.jsx';


const LatestReleaseMember = ({member}) => {

     // state, method
    const [ showLBox, showLBoxUpdate ] = useState(false);

    const turnOn = () => {
        showLBoxUpdate(true);
    }

    const turnOff = () => {
        showLBoxUpdate(false);
    }

    return (
        <LatestReleaseStyled className='LatestReleaseMember'>
            <img 
                src={ member.image } 
                alt ={ member.title } 
                onClick={ turnOn }
            /> 
            <div className="title">{ member.year }</div>

            <Lightbox show={ showLBox } hideAction={ turnOff } width={ 200 }>
                <img src={ member.image } alt ={ member.title } /> 
                <div className="title">
                { member.year }
                </div>
            </Lightbox>
        </LatestReleaseStyled>
    );
}

export default LatestReleaseMember;

const LatestReleaseStyled = styled.div`
        
        outline: solid 1px white;
        margin: 20px;
        width: 200px;
        cursor: pointer;
        
        
        @media ${mq.mobile}{
            width: 80px;
        }

        @media ${mq.tablet}{
            width: 130px;
        }
        @media ${mq.desktop}{
            width: 200px;
        }

        img {
            max-width: 100%;
            display: block;
            
        }
        .title {
            background-color:  #ed1d24;
            color: white;
            padding: 8px 0px;
            text-align: center;
            font-family: Bangers;
        }

        .Lightbox {
            .title {
                background-color: red;
            }
        }
        &:hover{
            outline: solid 5px white;
        }
    
`;