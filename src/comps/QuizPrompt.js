import React, { useContext } from 'react';
import styled from 'styled-components';
import { QuizContext } from './QuizContext';

const PromptBox = styled.div`
position: relative;
width: 47%;
height: 40px;
border-style: solid;
border-width: 1px;
border-color: white;
border-radius: 7px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.5em;
padding-top: 8px;

@media screen and (max-width: 400px){
    width: 80%;
}
`;


function Prompt() {
    const {cardProps} = useContext(QuizContext);
    const correctNum = cardProps[3].correctVal;
    const promptText = `Touch number ${correctNum}`;

    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(promptText); 
    
    synth.speak(utterance);
    
    return(
        <>
            <PromptBox onClick={() => synth.speak(utterance)}>
                <p>{promptText}</p>
            </PromptBox>
        </>
    );
}

export default Prompt;