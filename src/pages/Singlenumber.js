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
    const bodyColour = "#FFCA7A";
    const navColor = "#C29146";
    const footerColor = "#9A6F2E";

    return(
        <>
            <MainWrapper bkg={bodyColour}>
                <Navibar bkg={navColor} />
                <MainContent bkg={bodyColour}>
                    <NumRangeContextProvider>
                        <Control bkg={footerColor} />
                        <ContentWrapper>
                           <h1>Singleee!!!</h1>
                        </ContentWrapper>
                    </NumRangeContextProvider>
                </MainContent>
                <Footer bkg={footerColor} />
            </MainWrapper>
        </>
    );
}

export default Allnumbers;