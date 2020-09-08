import React from 'react';
import '../App.css';
import Navibar from '../comps/Header';
import Footer from '../comps/Footer';
import MainWrapper from '../comps/MainWrapper';
import MainContent from '../comps/MainContent';
import ContentWrapper from '../comps/ContentWrapper';
import ControlQuiz from '../comps/ControlQuiz';
import Prompt from '../comps/QuizPrompt';
import QuizCardCollection from '../comps/QuizCardCollection';
import QuizContextProvider from '../comps/QuizContext';

function Quiz() {
    const bodyColour = "#D7C9FF";
    const navColor = "#9684CA";
    const footerColor = "#6F6390";


    return(
        <>
            <MainWrapper bkg={bodyColour}>
                <Navibar bkg={navColor} />
                <MainContent bkg={bodyColour}>
                    <QuizContextProvider>
                        <ControlQuiz bkg={footerColor} />
                        <Prompt />
                            <ContentWrapper>
                                <QuizCardCollection />
                            </ContentWrapper>
                    </QuizContextProvider>
                </MainContent>
                <Footer bkg={footerColor} />
            </MainWrapper>
        </>
    );
}

export default Quiz;