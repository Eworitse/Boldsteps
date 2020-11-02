import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useSpeechSynthesis } from 'react-speech-kit';
import '../App.css';
import Navibar from '../comps/Header';
import Footer from '../comps/Footer';
import MainWrapper from '../comps/MainWrapper';
import MainContent from '../comps/MainContent';
import Control from '../comps/Control';
import back from '../images/back.svg';
import next from '../images/next.svg';
import NumRangeContextProvider from '../comps/RangeContext';
import { NumRangeContext } from '../comps/RangeContext';

const ContentWrap = styled.div`
position: relative;
height: 68%;
width: 95%;
margin-left: auto;
margin-right: auto;
margin-top: 10px;
`;

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

const NavButton = styled.div`
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
cursor: pointer;
opacity: 0;

&:hover{
    background-color: #FFDA9A;
    border-color: white;
}
`;

const Image = styled.img`
width: 20px;
height: auto;
margin: 0px;
padding: 0px;
`;

// Number box component
const NumberBox = styled.div`
width: 100px;
height: 100px;
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
font-size: 4em;
font-weight: bold;
user-select: none;
`;

function NumberSquare(props) {
    const [clicked, setClicked] = useState(false);
    
    const { speak } = useSpeechSynthesis();

    const speakOut = () => {
        speak({text: props.asText});
        setClicked(!clicked);
    }
    
    return(
        <NumberBox bgcolor={props.bkg} onClick={speakOut}>
            <TextVal>{props.num}</TextVal>
        </NumberBox>
    );
}

function Allnumbers() {
    const bodyColour = "#FFCA7A";
    const navColor = "#D9A250";
    const footerColor = "#9A6F2E";

    const colourCollection = ['#A31621', '#63A088', '#F79256', '#FFE66D', '#6CA6C1'];
    const numAsTextCollection = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 
    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
    'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

    const {numRange} = useContext(NumRangeContext);
    let maxValue = numRange.length;
    const [val, setVal] = useState(1);
    
    function getRandomIndex() {
        let randVal = Math.floor(Math.random()*5);
        return randVal;
    }

    return(
        <>
            <MainWrapper bkg={bodyColour}>
                <Navibar bkg={navColor} />
                <MainContent bkg={bodyColour}>
                    <NumRangeContextProvider>
                        <Control bkg={footerColor} />
                        <ContentWrap>
                            <Wrapper>
                                <NavButton>
                                    <Image src={back} alt="back button image" />
                                </NavButton>
                                <NumberSquare num={val} bkg={colourCollection[getRandomIndex()]} asText={numAsTextCollection[val-1]}/>
                                <NavButton>
                                    <Image src={next} alt="next button image" />
                                </NavButton>
                            </Wrapper>
                        </ContentWrap>
                    </NumRangeContextProvider>
                </MainContent>
                <Footer bkg={footerColor} />
            </MainWrapper>
        </>
    );
}

export default Allnumbers;