import React, { useState } from 'react';
import styled from 'styled-components';
import { mq } from '../../../../common/mediaQueries.js'
import Lightbox from './Lightbox.jsx';

    
const GalleryItem = ({item}) => {

    const[ showLBox, showLBoxUpdate ] = useState(false);

    const turnOn = () => {
        showLBoxUpdate(true);
    }

    const turnOff = () => {
        showLBoxUpdate(false);
    }


    return (
        <GalleryItemStyled className='GalleryItem'>
            <div className="category ">{ item.category }</div>
            <img 
                src={ item.image } 
                alt={ item.title }
                onClick={ turnOn }    
            />
            
            <Lightbox show={ showLBox } hideAction={ turnOff }>
            <div className="column column1">
                <img src={ item.image } alt ={ item.title }/>
            </div>    
                
                <div className="description column column2">
                <h2>{ item.title }</h2>
                <h3>Description:</h3>  { item.description }
                <br/><br/><strong>Runtime:</strong> { item.duration } hrs
                </div>
                
                
            </Lightbox>
        </GalleryItemStyled>
    );
}

export default GalleryItem;

const GalleryItemStyled = styled.div`
        
        cursor: pointer;  
        position: relative;
        color: white;
        padding: 20px;
        .light{
            background-color: #271f1aed;
        }
        img { 
             width: 200px;
             height: auto;}

             .category {
                
                background-color: rgba(245,19,19, .5);
                padding: 10px;
                font-size: 12px;
                text-align: right;
     
            }    
             
        .column {
            
            justify-content: center;
        } 
        .column1 {
            @media ${mq.tablet }{
            max-width: 300px;
            width: 25%;
            }
            
            img {
                max-width: 100%;
            }
        }
        .column2 {
            @media ${mq.tablet}{
            width: 75%;
            
        } 
        


        
`;