import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { QuizContext } from './QuizContext';

const NumberBox = styled(animated.div)`
width: 120px;
height: 120px;
background-color: ${props => props.bgcolor};
color: black;
border-style: solid;
border-width: 3px;
border-color: white;
border-radius: 10px;
margin: 5px;
position: relative;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 1px 1px 24px 5px rgba(0, 0, 0, 0.25);

@media screen and (max-width: 400px){
    width: 115px;
    height: 115px
}
`;

const TextVal = styled.p`
font-size: 4em;
font-weight: bold;
position: absolute;
top: 5%;
user-select: none;
`;

function NumberSquare(props) {
    const [clicked, setClicked] = useState(false);
    const clickProps = useSpring({from: {boxShadow: '0.5px 0.5px 24px 5px rgba(0, 0, 0, 0.25)', borderColor: 'white'}, to: {boxShadow: clicked ? '2px 2px 24px 5px rgba(0, 200, 100, 0.25)' : '0.5px 0.5px 24px 5px rgba(0, 0, 0, 0.25)', borderColor: clicked ? 'rgb(0, 200, 100)' : 'white'}});

    let count = 0;
    const {moveToNext} = useContext(QuizContext);
    
    const synth = window.speechSynthesis;

    const speakOut = () => {
        synth.cancel();
        if (count < 1) {
            setClicked(!clicked);
            synth.speak(new SpeechSynthesisUtterance(props.propVal.speak));  
        
            if (props.propVal.state) {
                count = 1;
                setTimeout(() => {
                    moveToNext();
                },1000);
            }
        }
        
    }
    
    return(
        <NumberBox style={clickProps} bgcolor={props.bkg} onClick={speakOut} onMouseLeave={() => setClicked(false)}>
            <TextVal>{props.propVal.value}</TextVal>
        </NumberBox>
    );
}

export default NumberSquare;