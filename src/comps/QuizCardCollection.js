import React, { useContext } from 'react';
import styled from 'styled-components';
import { QuizContext } from './QuizContext';
import NumberSquare from './QuizCards';

const GridBox = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
max-width: 90%;
flex-wrap: wrap;

@media screen and (max-width: 400px){
    flex-direction: column;
}
`;


function QuizCardCollection() {
    const colourCollection = ['#A31621', '#63A088', '#F79256', '#FFE66D', '#6CA6C1'];
        
    const {cardProps} = useContext(QuizContext);
    //const cardP = [...cardProps[2].cardPropsArr];

    //const transitions = useTransition(cardP, null, {from: {opacity: 0, height: 6}, enter: {opacity: 1, height: 120}, leave: {opacity: 0, height: 0}})
 
    //console.log(transitions);
    
    function getRandomIndex() {
        let randVal = Math.floor(Math.random()*5);
        return randVal;
    }

    return(
        <GridBox>{cardProps[2].cardPropsArr.map(
                (val, index) => <NumberSquare key={index} propVal={val} bkg={colourCollection[getRandomIndex()]} />)
        }
        </GridBox>
    );
}

export default QuizCardCollection;