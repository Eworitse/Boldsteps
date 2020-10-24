import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { animated, useSpring} from 'react-spring';
import { NumRangeContext } from './RangeContext';

const ControlWrap = styled.div`
position: relative;
width: 60%;
height: 20%;
padding: 4px;
display: flex;
flex-wrap: nowrap;
align-items: center;

@media screen and (max-height: 547px){
    height: 15%;
    padding: 2px;
}
`;

const DecreaseButton = styled(animated.button)`
width: 50px;
height: 50px;
margin: 3px;
color: white;
font-size: 30px;
font-weight: bold;
border-radius: 7px;
border-style: none;
background-color: ${props => props.bgcolor};

@media screen and (max-height: 400px){
    width: 35px;
    height: 70%;
    font-size: 20px;
    border-radius: 5px;
}
`;

const IncreaseButton = styled(animated.button)`
width: 50px;
height: 50px;
margin: 3px;
color: white;
font-size: 30px;
font-weight: bold;
border-radius: 7px;
border-style: none;
background-color: ${props => props.bgcolor};

@media screen and (max-height: 400px){
    width: 35px;
    height: 70%;
    font-size: 20px;
    border-radius: 5px;
}
`;

const Progressbar = styled.div`
position: relative;
flex-grow: 1;
height: 50px;
border-style: solid;
border-width: 1px;
border-color: ${props => props.bgcolor};
border-radius: 7px;
display: flex;

@media screen and (max-height: 400px){
  height: 70%;
  border-radius: 5px;  
}
`;

const ProgressbarLength = styled.div`
position: relative;
width: ${props => props.width}%;
background-color: ${props => props.bgcolor};
border-radius: 6px;
margin: 2px;

@media screen and (max-height: 400px){
    border-radius: 4px;
}
`;

const CurrentProgess = styled.p`
font-size: 1em;
color: black;
position: absolute;
left: 50%;
top: 25%;

@media screen and (max-height: 400px){
    top: 5%;
}
`;

function Control(props) {
    const bodyColour = "#E9CB9F";
    const navColor = "#BA9F78";

    const { numRange, addNum, removeNum} = useContext(NumRangeContext);

    const [insideDecrease, setInsideDecrease] = useState(false);
    const [insideIncrease, setInsideIncrease] = useState(false);

    const bgDecreaseProps = useSpring({from: {backgroundColor: props.bkg, color: 'white'}, 
    to:{backgroundColor: insideDecrease ? navColor : props.bkg, color: insideDecrease ? bodyColour : 'white'}});

    const bgIncreaseProps = useSpring({from: {backgroundColor: props.bkg, color: 'white'}, 
    to:{backgroundColor: insideIncrease ? navColor : props.bkg, color: insideIncrease ? bodyColour : 'white'}})

    const changeColorDButton = () => {
        setInsideDecrease(!insideDecrease);
        removeNum();
    }

    const changeColorInButton = () => {
        setInsideIncrease(!insideIncrease);
        addNum();
    }
        
    return(
        <>
            <ControlWrap>
                <DecreaseButton bgcolor={props.bkg} style={bgDecreaseProps}
                onClick={changeColorDButton} onMouseLeave={() => setInsideDecrease(false)}> - </DecreaseButton>
                
                <Progressbar bgcolor={props.bkg}>
                    <ProgressbarLength bgcolor={props.bkg} width={numRange.length*5}></ProgressbarLength>
                    <CurrentProgess>{ numRange.length}</CurrentProgess>
                </Progressbar>

                <IncreaseButton bgcolor={props.bkg} style={bgIncreaseProps}
                onClick={changeColorInButton} onMouseLeave={() => setInsideIncrease(false)}> + </IncreaseButton>
            </ControlWrap>
        </>
    );
}

export default Control;