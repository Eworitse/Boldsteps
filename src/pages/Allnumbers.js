import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import '../App';
import Navibar from '../comps/Header';
import Footer from '../comps/Footer';
import ContentWrapper from '../comps/ContentWrapper';

const MainContent = styled(Container)`
background-color: #E9CB9F;
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

function Allnumbers() {
    const bodyColour = "#E9CB9F";

    return(
        <>
            <MainWrapper bkg={bodyColour}>
                <Navibar bkg="#BA9F78" />
                <MainContent>
                    <ContentWrapper width="80%" height="80%" bkg=""></ContentWrapper>    
                </MainContent>
                <Footer bkg="#8C7758"/>
            </MainWrapper>
        </>
    );
}

export default Allnumbers;