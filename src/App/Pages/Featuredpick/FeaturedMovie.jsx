import React from 'react';
import styled from 'styled-components';

import { mq } from '../../../common/mediaQueries';


// to be same like StaffMember.jsx
const FeaturedMovie = ({member}) => {

     // state, method
    

    return (
        <FeaturedMovieStyled className='FeaturedMovie'>
           
            <div className="column column1">
            <div className="title"><h2>{ member.title }</h2></div>
            
            <div className="title" dangerouslySetInnerHTML={{ __html: member.text }} />
            </div>
            <div className="column column2">
            <img 
                src={ member.image } 
                alt ={ member.title } 
               
            /> 
            </div>
        </FeaturedMovieStyled>
    );
}

export default FeaturedMovie;

const FeaturedMovieStyled = styled.div`
        

    
        
        @media ${mq.tablet}{
            display: flex;
            
        }
        
        
        img {
            max-width: 100%;
            display: block;
            margin-top: 80px;
            
        }
        .title {
            background-color: auto;
            color: white;
            padding: 5px;
        }

    }
    column{
        padding: 10px;

    }
    .column1 {
        @media ${mq.tablet}{
        width: 40%;
    } 
        padding: 20px;
    }
    
        .column2 {
            
            @media ${mq.tablet }{
               
            width: 60%;
            
            }
            
    
            img {
                max-width: 100%;
            }
        
    
`;