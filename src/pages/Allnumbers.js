import React from 'react';
import '../App.css';
import Navibar from '../comps/Header';
import Footer from '../comps/Footer';
import MainWrapper from '../comps/MainWrapper';
import MainContent from '../comps/MainContent';
import ContentWrapper from '../comps/ContentWrapper';
import Control from '../comps/Control';
import NumRangeContextProvider from '../comps/RangeContext';


function Allnumbers() {
    const bodyColour = "#E9CB9F";
    const darkColor = "#8C7758";

    return(
        <>
            <MainWrapper bkg={bodyColour}>
                <Navibar bkg="#BA9F78" />
                <MainContent bkg={bodyColour}>
                    <NumRangeContextProvider>
                        <Control bkg={darkColor} />
                        <ContentWrapper />
                    </NumRangeContextProvider>
                </MainContent>
                <Footer bkg={darkColor} />
            </MainWrapper>
        </>
    );
}

export default Allnumbers;