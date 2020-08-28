import React, { useContext } from 'react';
import styled from 'styled-components';
import { NumRangeContext } from './RangeContext';
import NumberSquare from './NumberSquare';

const GridBox = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
max-width: 90%;
flex-wrap: wrap;
`;

function NumberGrid() {
    const colourCollection = ['#A31621', '#63A088', '#F79256', '#FFE66D', '#6CA6C1'];
    const numAsTextCollection = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 
    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
    'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

    const {numRange} = useContext(NumRangeContext);
    
    function getRandomIndex() {
        let randVal = Math.floor(Math.random()*5);
        return randVal;
    }

    return(
        <GridBox>{
            numRange.map(
                (val, index) => <NumberSquare key={index} num={val} bkg={colourCollection[getRandomIndex()]} asText={numAsTextCollection[index]}/>)
        }
        </GridBox>
    );
}

export default NumberGrid;