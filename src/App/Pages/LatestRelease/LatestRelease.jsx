import React from 'react';
import styled from 'styled-components';


import LatestReleaseMember from './LatestReleaseMember.jsx';
import { movieData } from './latestreleaseData.js';

const LatestRelease = () => {


    const renderMembers = () => {
            return movieData.map ((member, idx) =>{
                return<LatestReleaseMember 
                        key= { idx }
                        member = {member}
                
                />;
            });

    }



    return (
        <LatestReleaseStyled className='Staff'>
            <h1>Latest Releases</h1> 
            <div className="members">
                { renderMembers() }
            </div>
        </LatestReleaseStyled>
    );
}

export default LatestRelease;

const LatestReleaseStyled = styled.div`
    h1{
        color: white;
    } 
    
    

    padding: 20px 0px;
        /*background-color: teal;*/
        .members { 
           display: flex;
           flex-wrap: wrap; 
           justify-content: space-between;
           justify-content: center;
           
    }
`;