import React from 'react';
import styled from 'styled-components';

const Tab = ({tabItem, chosenTabSet, chosenTab}) => {

    const handleClick = () => {
        chosenTabSet(tabItem);
    }

    // Add chosenTab line 4
    const theClassName  = (tabItem.title === chosenTab.title) ? 'Tab active':'Tab';


    return (
        <TabStyled 
            className= { theClassName }    // prior 'Tab'
            onClick={ handleClick }
        >
            <h2>{ tabItem.title } </h2>
        </TabStyled>
    );
}

export default Tab;

const TabStyled = styled.div`
    cursor: pointer;
    color: white;
    display: inline-block;
    border-top-right-radius: 5px;
    width: 100px;
    line-height: 10px;
    
    text-align: center;

    margin-right: 2px;

    background-color: #efc2d5ab;
    &.active{
        background-color: #616a75;
        color: #8080808c;
    }
    
`;