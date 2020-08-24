import React from 'react';
import styled from 'styled-components';


import ReactPlayer from 'react-player';


// to be same like StaffMember.jsx
const TrailerMovie = ({member}) => {

     // state, method
    

    return (
        <TrailerMovieStyled className='TrailerMovie'>
           
            <br />
            <div className="title"><h2>{ member.title } ({member.year})</h2></div>
            <br/>
            <ReactPlayer 
                url={ member.url } 
               
            /> 
            <br/>
        </TrailerMovieStyled>
    );
}

export default TrailerMovie;

const TrailerMovieStyled = styled.div`
        
        
    h2{
        color:white;
    }
        
    
`;