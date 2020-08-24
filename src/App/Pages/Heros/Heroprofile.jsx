import React from 'react';
import styled from 'styled-components';

import { mq } from '../../../common/mediaQueries';


// to be same like StaffMember.jsx
const HeroProfile = ({member}) => {

     // state, method
    

    return (
        <HeroProfileStyled className='HeroProfile'>
            
            <div className="column column1">
            <div className="title"><h2>{ member.title }</h2></div> 
            <img 
                src={ member.image } 
                alt ={ member.title } 
               
            /> 
            </div>
            
                    
            <div className="column column2">
            
            <div className="bio" dangerouslySetInnerHTML={{ __html: member.text }} />
            </div>

            <div className="column column3">
            <div className="funfacts" />
            <strong>Name</strong>: { member.name }<br/><br/>
            <strong>First Appearance</strong>: { member.year }<br/><br/>
            <strong>Publisher</strong>: { member.publisher }
            </div>
            
        </HeroProfileStyled>
    );
}

export default HeroProfile;

const HeroProfileStyled = styled.div`
        
        
        color: white;
        
        @media ${mq.tablet}{
            display: flex;
            
        }
        
        
        img {
            max-width: 100%;
            display: block;
            margin-top: 5px;
            
        }
        .title {
            background-color: auto;
            color: white;
            padding: 5px;
            text-align: center;

        }

    }
    column{
        padding: 2px;

    }
    .column1 {
        min-width:250px; 
        @media ${mq.tablet}{
        width: 25%;
        
        img {
            max-width: 100%;
        }
    } 
        padding: 20px;
    }
    
      .column2 {
            
        @media ${mq.tablet }{
            
            max-width: 580px;
            width: 50%;
            margin-top: 50px;
            color: white;
            
        }
         
        } 
        .column3 {
            color: white;
            margin-top: 80px;
            padding-left: 20px;
            @media ${mq.tablet }{
                   
                width: 25%;
                
            }
             
            } 
    
`;