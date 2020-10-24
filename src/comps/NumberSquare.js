import React, { useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { useSpeechSynthesis } from 'react-speech-kit';

const NumberBox = styled(animated.div)`
width: 60px;
height: 60px;
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
`;

const TextVal = styled.p`
font-size: 2em;
font-weight: bold;
position: absolute;
top: 5%;
user-select: none;
`;

function NumberSquare(props) {
    const [clicked, setClicked] = useState(false);
    const clickProps = useSpring({from: {boxShadow: '0.5px 0.5px 24px 5px rgba(0, 0, 0, 0.25)', borderColor: 'white'}, to: {boxShadow: clicked ? '2px 2px 24px 5px rgba(0, 200, 100, 0.25)' : '0.5px 0.5px 24px 5px rgba(0, 0, 0, 0.25)', borderColor: clicked ? 'rgb(0, 200, 100)' : 'white'}});

    const { speak } = useSpeechSynthesis();

    const speakOut = () => {
        speak({text: props.asText});
        setClicked(!clicked);
    }
    
    return(
        <NumberBox style={clickProps} bgcolor={props.bkg} onClick={speakOut} onMouseLeave={() => setClicked(false)}>
            <TextVal>{props.num}</TextVal>
        </NumberBox>
    );
}

export default NumberSquare;