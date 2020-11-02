import React from 'react';
import styled from 'styled-components';
import '../App.css';
import Navibar from '../comps/Header';
import Footer from '../comps/Footer';
import MainWrapper from '../comps/MainWrapper';
import MainContent from '../comps/MainContent';
import Control from '../comps/Control';
import SingleNumberBox from '../comps/SingleNumberBox';
import NumRangeContextProvider from '../comps/RangeContext';

const ContentWrap = styled.div`
position: relative;
height: 68%;
width: 95%;
margin-left: auto;
margin-right: auto;
margin-top: 10px;
`;

function Allnumbers() {
    const bodyColour = "#FFCA7A";
    const navColor = "#D9A250";
    const footerColor = "#9A6F2E";

    return(
        <>
            <MainWrapper bkg={bodyColour}>
                <Navibar bkg={navColor} />
                <MainContent bkg={bodyColour}>
                    <NumRangeContextProvider>
                        <Control bkg={footerColor} />
                        <ContentWrap>
                            <SingleNumberBox />
                        </ContentWrap>
                    </NumRangeContextProvider>
                </MainContent>
                <Footer bkg={footerColor} />
            </MainWrapper>
        </>
    );
}

export default Allnumbers;