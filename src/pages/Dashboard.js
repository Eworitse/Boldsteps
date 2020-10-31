import React from 'react';
import styled from 'styled-components';
import '../App';
import Navibar from '../comps/Header';
import Footer from '../comps/Footer';
import gridCardSmall from '../images/gridCardSmall.jpg';
import singleCardSmall from '../images/singleCardSmall.jpg';
import quizCardSmall from '../images/quizCardSmall.jpg';

const MainWrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
height: 100vh;
background-color: ${props => props.bkg || "white"};
width: 100vw;

@media (max-width: 547px){
    height: auto;
}
`;

const MainContent = styled.div`
position: relative;
display: flex;
background-color: #6CCFCF;
flex-grow: 1;
margin-bottom: 60px;
justify-content: center;
align-items: center;
width: 100%;

@media screen and (max-height: 400px){
    margin-bottom: 40px;
}
`; 

const ContentWrapper = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.25);
border-radius: 20px;
width: 95%;
height: 80%;

@media (max-width: 1000px){
width: 98%;
}

@media (max-width: 547px){
    flex-direction: column;
    margin-top: 15px;
    margin-bottom: 15px;
}
`;

const CardLabel = styled.div`
width: 100%;
height: 23%;
position: absolute;
bottom: 0px;
background-color: rgba(255, 255, 255, 0.7);
text-align: center;
`;

const MyCard = styled.div`
position: relative;
box-sizing: border-box;
width: 25%;
max-width: 251px;
display: flex;
border-width: 7px;
border-style: solid;
border-color: white;
border-radius: 15px;
box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.25);
margin: 10px;

@media (max-width: 547px){
    width: 60%;
}
`;

const MyImage = styled.img`
position: relative;
border-radius: 10px;
height: 100%;
`;

const Paragraph = styled.p`
color: black;
`;

function Dashboard() {
    const bodyColour = "#6CCFCF";

    return(
        <>
            <MainWrapper bkg={bodyColour}>
                <Navibar bkg="#5BB2B2" />
                <MainContent>
                    <ContentWrapper>
                        <MyCard>
                            <a href="/allnumbers" className="text-black">
                                <MyImage 
                                    src={gridCardSmall} 
                                    alt="numbers in grid" 
                                    width="100%"
                                />
                                <CardLabel>
                                    <Paragraph>
                                        Practise your numbers <br /> arranged in grid
                                    </Paragraph>
                                </CardLabel>
                            </a>
                        </MyCard>
    
                        <MyCard>
                            <a href="/singlenumber">
                                <MyImage 
                                    src={singleCardSmall} 
                                    alt="single number" 
                                    width="100%"
                                />

                                <CardLabel>
                                    <Paragraph>
                                        Practise your numbers <br /> one after the other
                                    </Paragraph>
                                </CardLabel>
                            </a>
                        </MyCard>

                        <MyCard>
                            <a href="/quiz">
                                <MyImage 
                                    src={quizCardSmall} 
                                    alt="quiz" 
                                    width="100%"
                                />

                                <CardLabel>
                                    <Paragraph>
                                        Prove what you've <br /> learned with a quiz
                                    </Paragraph>
                                </CardLabel>
                            </a>
                        </MyCard>
                    </ContentWrapper>
                </MainContent>
                <Footer bkg="#3D8A8A"/>
            </MainWrapper>
        </>
    );
}

export default Dashboard;