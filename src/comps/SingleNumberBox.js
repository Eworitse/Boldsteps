import React, { useState, useContext, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { NumRangeContext } from './RangeContext';
import back from '../images/back.svg';
import next from '../images/next.svg';

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.25);
border-radius: 20px;
width: 90%;
max-width: 700px;
margin: 1.5% auto 1.5% auto;
@media (max-width: 547px){
    width: 100%;
    margin-left: 2px;
    margin-right: 2px;
    padding-top: 5px;
}
`;

const BackButton = styled.div`
margin: 10px;
padding: 2px;
width: 60px;
height: 160px;
border: solid 1px #D2B166;
border-radius: 15px;
align-self: flex-start;
display: flex;
justify-content: center;
align-items: center;
cursor: ${props => props.enable ? "pointer" : "default"};
opacity: ${props => props.enable ? "1" : "0.3"};
&:hover{
    background-color: ${props => props.enable ? "#FFDA9A" : "none"};
    border-color: ${props => props.enable ? "white" : "#D2B166"};
}
`;

const NextButton = styled.div`
margin: 10px;
padding: 2px;
width: 60px;
height: 160px;
border: solid 1px #D2B166;
border-radius: 15px;
align-self: flex-start;
display: flex;
justify-content: center;
align-items: center;
cursor: ${props => props.enable ? "pointer" : "default"};
opacity: ${props => props.enable ? "1" : "0.3"};
&:hover{
    background-color: ${props => props.enable ? "#FFDA9A" : "none"};
    border-color: ${props => props.enable ? "white" : "#D2B166"};
}
`;

const Image = styled.img`
width: 20px;
height: auto;
margin: 0px;
padding: 0px;
`;

const NumberBox = styled.div`
width: 140px;
height: 140px;
background-color: ${props => props.bgcolor};
color: black;
border: solid 3px white;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`;

const TextVal = styled.p`
font-size: 6em;
font-weight: bold;
user-select: none;
`;

function NumberSquare(props) {
    const [clicked, setClicked] = useState(false);
    
    console.log("from square before speech")

    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(props.asText);

    synth.speak(utterance);

    console.log("from Square after speech");

    const speakOut = () => {
        synth.speak(utterance);
        setClicked(!clicked);
    }
    
    return(
        <NumberBox bgcolor={props.bkg} onClick={speakOut}>
            <TextVal>{props.num}</TextVal>
        </NumberBox>
    );
}

function SingleNumberBox(props) {
    const colourCollection = ['#A31621', '#63A088', '#F79256', '#FFE66D', '#6CA6C1'];
    const numAsTextCollection = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 
    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
    'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

    const {numRange} = useContext(NumRangeContext);
    
    console.log("from single number box");

    const [val, setVal] = useState(1);
    const [backVisibility, setBackVisibility] = useState(false);
    const [nextVisibility, setNextVisibility] = useState(true);

    function getRandomIndex() {
        let randVal = Math.floor(Math.random()*5);
        return randVal;
    }

    function backButtonClicked() {
        if(val>1){
            if(val === 2){
                setBackVisibility(false);
            }else{ setBackVisibility(true);}

            setNextVisibility(true);
            setVal(prevVal => prevVal-1);
        }
    }

    function nextButtonClicked() {
        if(val<numRange.length){
            if(val === numRange.length-1){
                setNextVisibility(false);
            }else {setNextVisibility(true);}

            setBackVisibility(true);
            setVal(prevVal => prevVal+1);
        }
    }

    useLayoutEffect(() => {
        if(val>numRange.length){
            setVal(numRange[numRange.length-1]);
        }
        if (val !== numRange.length) {
            setNextVisibility(true);
        }

        console.log("from useLayoutEffect");
    }, [val, nextVisibility, numRange]);

    return(
        <Wrapper>
            <BackButton onClick={backButtonClicked} enable={backVisibility}>
                <Image src={back} alt="back button image" />
            </BackButton>
            <NumberSquare num={val} bkg={colourCollection[getRandomIndex()]} asText={numAsTextCollection[val-1]}/>
            <NextButton onClick={nextButtonClicked} enable={nextVisibility}>
                <Image src={next} alt="next button image" />
            </NextButton>
        </Wrapper>
    );
}

export default SingleNumberBox;