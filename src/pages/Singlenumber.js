import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import '../App.css';
import Navibar from '../comps/Header';
import Footer from '../comps/Footer';

const MainContent = styled(Container)`
background-color: #FFCA7A;
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

function SingleNumber() {
    const bodyColour = "#FFCA7A";

    return(
        <>
            <MainWrapper bkg={bodyColour}>
                <Navibar bkg="#C29146" />
                <MainContent><h1>Singleeee!</h1></MainContent>
                <Footer bkg="#9A6F2E"/>
            </MainWrapper>
        </>
    );
}

export default SingleNumber;