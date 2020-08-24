import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import '../App.css';
import Navibar from '../comps/Header';
import Footer from '../comps/Footer';

const MainContent = styled(Container)`
background-color: #D7C9FF;
flex-grow: 1;
margin-bottom: 60px;

@media screen and (max-height: 400px){
    margin-bottom: 40px;
}
`;

const MainWrapper = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
background-color: ${props => props.bkg || "white"};
align-items: stretch;
`;

function Quiz() {
    const bodyColour = "#D7C9FF";

    return(
        <>
            <MainWrapper bkg={bodyColour}>
                <Navibar bkg="#9684CA" />
                <MainContent><h1>Quizzzzz!</h1></MainContent>
                <Footer bkg="#6F6390"/>
            </MainWrapper>
        </>
    );
}

export default Quiz;